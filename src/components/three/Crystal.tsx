import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
import type { MousePosition } from '@/hooks/useMousePosition'

interface Props {
  mouse: MousePosition
}

export function Crystal({ mouse }: Props) {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()

    // mouse parallax — exponential lerp
    groupRef.current.rotation.y +=
      (mouse.normalizedX * 0.45 + t * 0.06 - groupRef.current.rotation.y) * 0.04
    groupRef.current.rotation.x +=
      (-mouse.normalizedY * 0.25 + Math.sin(t * 0.3) * 0.08 - groupRef.current.rotation.x) * 0.04

    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.18
      innerRef.current.rotation.y = -t * 0.12
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.07
      wireRef.current.rotation.z = t * 0.05
      const mat = wireRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.2 + Math.sin(t * 1.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* outer wireframe halo */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color="#D4A574" wireframe transparent opacity={0.22} />
      </mesh>

      {/* refracting crystal */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.15, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={512}
          transmission={1}
          roughness={0.05}
          thickness={1.4}
          ior={1.5}
          chromaticAberration={0.18}
          anisotropy={0.4}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.15}
          color="#F4E1C2"
          attenuationColor="#D4A574"
          attenuationDistance={2.5}
          background={new THREE.Color('#0A0908')}
        />
      </mesh>

      {/* inner glow core */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#E8C9A0"
          emissive="#D4A574"
          emissiveIntensity={1.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

interface ParticleProps {
  count?: number
}
export function DustField({ count = 280 }: ParticleProps) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 4.5
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      speeds[i] = 0.05 + Math.random() * 0.18
    }
    return { positions, speeds }
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * speeds[i] + i) * 0.0018
      arr[i * 3]     += Math.cos(t * speeds[i] * 0.7 + i) * 0.0012
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = t * 0.012
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#D4A574"
        size={0.018}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function LightBeam() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    const mat = ref.current.material as THREE.MeshBasicMaterial
    mat.opacity = 0.04 + Math.sin(t * 0.6) * 0.02
  })
  return (
    <mesh ref={ref} position={[0, 2.4, -1.5]} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[2.2, 7, 32, 1, true]} />
      <meshBasicMaterial color="#E8C9A0" transparent opacity={0.05} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}
