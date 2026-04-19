import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import { Crystal, DustField, LightBeam } from './Crystal'
import type { MousePosition } from '@/hooks/useMousePosition'

interface Props {
  mouse: MousePosition
}

export default function HeroScene({ mouse }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
    >
      <color attach="background" args={['#0A0908']} />
      <fog attach="fog" args={['#0A0908', 6, 14]} />

      <ambientLight intensity={0.08} />
      <directionalLight position={[3, 4, 2]} intensity={0.7} color="#F4E1C2" />
      <pointLight position={[-2.5, -2, 2]} intensity={0.4} color="#D4A574" />
      <pointLight position={[0, 0, 2]} intensity={0.6} color="#E8C9A0" />

      <Environment preset="warehouse" environmentIntensity={0.35} />

      <Crystal mouse={mouse} />
      <DustField count={260} />
      <LightBeam />

      <EffectComposer>
        <Bloom
          intensity={0.85}
          luminanceThreshold={0.18}
          luminanceSmoothing={0.85}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.1} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  )
}
