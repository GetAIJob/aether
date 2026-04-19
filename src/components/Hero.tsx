import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import ErrorBoundary from './ErrorBoundary'

const HeroScene = lazy(() => import('./three/HeroScene'))

export default function Hero() {
  const mouse = useMousePosition()

  return (
    <section id="top" className="relative h-screen w-screen overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <ErrorBoundary fallback={<div className="h-full w-full" style={{ background: 'radial-gradient(circle at 50% 55%, #1F1B17 0%, #0A0908 70%)' }} />}>
          <Suspense fallback={<div className="h-full w-full" style={{ background: '#0A0908' }} />}>
            <HeroScene mouse={mouse} />
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 60%, rgba(212,165,116,0.10) 0%, transparent 55%)',
        }}
      />

      {/* top-left running header (Awwwards-style index) */}
      <div className="absolute top-28 left-8 md:left-14 z-10 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.55)' }}>
        <div>Æther · MMXXVI</div>
        <div className="mt-1">A series in light</div>
      </div>

      {/* right column meta */}
      <div className="absolute top-28 right-8 md:right-14 z-10 text-right font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.45)' }}>
        <div>Vol. I — VI</div>
        <div className="mt-1">Edition I/I</div>
      </div>

      {/* center title block */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
          className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8"
          style={{ color: 'rgba(244,241,232,0.65)' }}
        >
          — Six studies on light & time —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="font-display text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] tracking-[-0.04em] text-center"
          style={{ color: '#F4F1E8', fontWeight: 300 }}
        >
          <span className="text-amber-gradient">Æ</span>ther
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9, ease: 'easeOut' }}
          className="font-display italic text-xl md:text-2xl mt-6 max-w-md text-center"
          style={{ color: 'rgba(244,241,232,0.78)', fontWeight: 400 }}
        >
          A study of the oldest material we have.
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase pointer-events-none"
        style={{ color: 'rgba(244,241,232,0.55)' }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, #D4A574, transparent)' }}
        />
      </motion.div>

      {/* bottom-left credit */}
      <div className="absolute bottom-10 left-8 md:left-14 z-10 font-mono text-[10px] tracking-[0.4em] uppercase max-w-[14rem]" style={{ color: 'rgba(244,241,232,0.45)' }}>
        <div>Composed in</div>
        <div className="mt-1" style={{ color: 'rgba(244,241,232,0.7)' }}>Brussels &amp; Bruges</div>
      </div>

      {/* bottom-right credit */}
      <div className="absolute bottom-10 right-8 md:right-14 z-10 text-right font-mono text-[10px] tracking-[0.4em] uppercase max-w-[16rem]" style={{ color: 'rgba(244,241,232,0.45)' }}>
        <div>Currently exhibiting</div>
        <div className="mt-1" style={{ color: 'rgba(244,241,232,0.7)' }}>Online · Volume I</div>
      </div>
    </section>
  )
}
