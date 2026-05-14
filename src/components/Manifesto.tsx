import { motion, useInView } from 'framer-motion'
import { Fragment, useRef } from 'react'

const sentence = `Forget standard, boring templates. Æther is built for brands that refuse to blend in — soft volumetric lighting, deep atmospheric space, and smooth parallax scrolling create a cinematic, memorable experience from the very first second. Beneath the craft, a clean and intuitive layout that is effortless to navigate.`

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
          <span>§ 01 — The concept</span>
          <span className="hidden md:inline" style={{ color: 'rgba(244,241,232,0.35)' }}>For brands that stand out</span>
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
              F
            </motion.div>
            <div className="absolute top-2 left-32 md:left-44 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.4)' }}>
              The first word
            </div>
          </div>

          {/* body text — word stagger */}
          <div ref={ref} className="col-span-12 md:col-span-8 md:col-start-5 mt-8 md:mt-6">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.35]" style={{ color: 'rgba(244,241,232,0.92)', fontWeight: 300 }}>
              {words.map((w, i) => (
                <Fragment key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.04 * i, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                  {i < words.length - 1 ? '\u00A0' : ''}
                </Fragment>
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
                — The Æther concept, MMXXVI
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
