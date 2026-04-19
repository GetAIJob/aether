import { motion } from 'framer-motion'
import { useState } from 'react'
import { studies } from '@/data/studies'

export default function IndexOfStudies() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="index" className="relative py-32 md:py-44 px-8 md:px-14 overflow-hidden">
      {/* watermark numeral */}
      <div
        className="absolute -top-10 right-8 md:right-14 font-display select-none pointer-events-none"
        style={{ fontSize: '36vw', lineHeight: 0.78, color: 'rgba(212,165,116,0.04)', fontWeight: 300 }}
      >
        VI
      </div>

      <div className="max-w-[88rem] mx-auto relative z-10">
        {/* header row */}
        <div className="flex items-end justify-between mb-20 md:mb-28">
          <div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: 'rgba(244,241,232,0.55)' }}>
              § 02 — Index of studies
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.85] tracking-[-0.04em]" style={{ color: '#F4F1E8', fontWeight: 300 }}>
              Six <span className="font-display italic text-amber-gradient">studies</span>,
              <br />
              one subject.
            </h2>
          </div>
          <div className="hidden lg:block max-w-[18rem] text-right font-display text-base leading-relaxed" style={{ color: 'rgba(244,241,232,0.6)' }}>
            Each volume is a discrete piece. They are best read in order, but you may begin with any one of them.
          </div>
        </div>

        {/* asymmetric study grid */}
        <ul className="grid grid-cols-12 gap-x-6 gap-y-12">
          {studies.map((s, i) => {
            const span = i === 0 ? 'col-span-12 md:col-span-7'
              : i === 1 ? 'col-span-12 md:col-span-5'
              : i === 2 ? 'col-span-12 md:col-span-4'
              : i === 3 ? 'col-span-12 md:col-span-8'
              : i === 4 ? 'col-span-12 md:col-span-7'
              : 'col-span-12 md:col-span-5'
            const offset = i === 1 ? 'md:mt-24'
              : i === 3 ? 'md:mt-12'
              : i === 5 ? 'md:mt-16'
              : ''
            return (
              <motion.li
                key={s.numeral}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, delay: 0.04 * i, ease: 'easeOut' }}
                className={`${span} ${offset} group relative`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-cursor="pointer"
              >
                <a href={`#study-${s.numeral.toLowerCase()}`} className="block relative">
                  {/* card */}
                  <div
                    className="relative aspect-[5/4] overflow-hidden transition-all duration-700 ease-out"
                    style={{
                      background: active === i
                        ? 'linear-gradient(135deg, rgba(212,165,116,0.10), rgba(31,27,23,0.6))'
                        : 'linear-gradient(135deg, rgba(31,27,23,0.55), rgba(19,17,16,0.85))',
                      border: `1px solid ${active === i ? 'rgba(212,165,116,0.40)' : 'rgba(244,241,232,0.06)'}`,
                    }}
                  >
                    {/* huge numeral background */}
                    <div
                      className="absolute inset-0 flex items-center justify-center font-display select-none"
                      style={{
                        fontSize: '22rem',
                        lineHeight: 1,
                        color: active === i ? 'rgba(212,165,116,0.18)' : 'rgba(244,241,232,0.04)',
                        fontWeight: 300,
                        transition: 'color 0.7s, transform 0.7s',
                        transform: active === i ? 'scale(1.06)' : 'scale(1)',
                      }}
                    >
                      {s.numeral}
                    </div>

                    {/* radial glow on hover */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        background: 'radial-gradient(circle at 30% 70%, rgba(212,165,116,0.15) 0%, transparent 60%)',
                        opacity: active === i ? 1 : 0,
                      }}
                    />

                    {/* meta — bottom-left */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                      <div className="flex-1">
                        <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.5)' }}>
                          Study · {s.numeral} · {s.year}
                        </div>
                        <div className="font-display text-xl md:text-2xl leading-tight" style={{ color: '#F4F1E8', fontWeight: 400 }}>
                          {s.title}
                        </div>
                      </div>
                      <div
                        className="font-mono text-[10px] tracking-[0.4em] uppercase whitespace-nowrap transition-all duration-500"
                        style={{
                          color: active === i ? '#D4A574' : 'rgba(244,241,232,0.5)',
                          transform: active === i ? 'translateX(-4px)' : 'translateX(0)',
                        }}
                      >
                        View →
                      </div>
                    </div>
                  </div>

                  {/* below-card caption */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <p className="col-span-2 font-display italic text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,241,232,0.7)', fontWeight: 300 }}>
                      {s.caption}
                    </p>
                    <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-right pt-1" style={{ color: 'rgba(244,241,232,0.4)' }}>
                      {s.medium}
                    </span>
                  </div>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
