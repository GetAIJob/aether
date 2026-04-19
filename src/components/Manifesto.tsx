import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const sentence = `Light is the oldest material we have. Before pigment, before ink, before the first hand learned to draw — there was only the sun and the shadow it cast against a wall. We work in that lineage. Each piece below is an attempt to listen to it again.`

const words = sentence.split(' ')

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="manifesto" className="relative py-44 md:py-56 px-8 md:px-14">
      {/* hairline divider above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20" style={{ background: 'linear-gradient(to bottom, transparent, rgba(244,241,232,0.18))' }} />

      <div className="max-w-[80rem] mx-auto">
        {/* eyebrow row */}
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-20" style={{ color: 'rgba(244,241,232,0.55)' }}>
          <span>§ 01 — Manifesto</span>
          <span className="hidden md:inline" style={{ color: 'rgba(244,241,232,0.35)' }}>For the eyes only</span>
        </div>

        {/* asymmetric grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* large opening character */}
          <div className="col-span-12 md:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-display text-[18rem] md:text-[22rem] leading-[0.78] tracking-[-0.06em]"
              style={{ color: '#D4A574', fontWeight: 300 }}
            >
              L
            </motion.div>
            <div className="absolute top-2 left-32 md:left-44 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.4)' }}>
              The first letter
            </div>
          </div>

          {/* body text — word stagger */}
          <div ref={ref} className="col-span-12 md:col-span-8 md:col-start-5 mt-8 md:mt-6">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.35]" style={{ color: 'rgba(244,241,232,0.92)', fontWeight: 300 }}>
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.04 * i, ease: 'easeOut' }}
                  className="inline-block mr-[0.32em]"
                >
                  {w}
                </motion.span>
              ))}
            </p>

            {/* signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.04 * words.length + 0.4 }}
              className="mt-14 flex items-center gap-6"
            >
              <div className="hairline flex-1" />
              <span className="font-display italic text-base" style={{ color: 'rgba(244,241,232,0.6)' }}>
                — Æther, A.D. MMXXVI
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
