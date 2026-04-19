import { motion } from 'framer-motion'

export default function Atelier() {
  return (
    <section id="atelier" className="relative py-44 px-8 md:px-14">
      <div className="max-w-[88rem] mx-auto">
        {/* eyebrow */}
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-20" style={{ color: 'rgba(244,241,232,0.55)' }}>
          <span>§ 04 — Atelier</span>
          <span style={{ color: 'rgba(244,241,232,0.35)' }}>On the studio</span>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* visual column — geometric composition (no photo dependency) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden" style={{ background: 'linear-gradient(160deg, #131110 0%, #1F1B17 100%)' }}>
              {/* Layered geometric composition */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                {/* circle of light */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #E8C9A0 0%, #D4A574 35%, #B8884E 70%, transparent 100%)',
                    filter: 'blur(0.5px)',
                  }}
                />
                {/* horizon line */}
                <div
                  className="absolute left-0 right-0 top-[58%] h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(244,241,232,0.4), transparent)' }}
                />
                {/* vertical hairline */}
                <div
                  className="absolute top-[20%] bottom-[20%] left-[15%] w-px"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(244,241,232,0.25), transparent)' }}
                />
                {/* small mark — top right */}
                <div className="absolute top-6 right-6 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.4)' }}>
                  Plate XII
                </div>
                {/* mark — bottom right */}
                <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.4)' }}>
                  Composition №3
                </div>
                {/* big numeral mark */}
                <div className="absolute top-6 left-6 font-display text-7xl leading-none" style={{ color: 'rgba(244,241,232,0.16)', fontWeight: 300 }}>
                  4
                </div>
                {/* grain inside */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
                  }}
                />
              </motion.div>
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.45)' }}>
              Plate XII — Composition №3 · Mixed media on dark ground · MMXXVI
            </div>
          </div>

          {/* essay column */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-[-0.04em] mb-10"
              style={{ color: '#F4F1E8', fontWeight: 300 }}
            >
              On a quiet
              <br />
              <span className="font-display italic">working room.</span>
            </motion.h2>

            <div className="space-y-7 max-w-[34rem]">
              {[
                'Æther is a small studio practice based between Brussels and Bruges. We make slow work — most of what we publish has been sitting still for some weeks before it leaves us.',
                'There are two of us, a north-facing window, a single lamp, a series of hand-cut prisms in walnut boxes, and a quiet preference for the colour the sky goes around 4pm in late October.',
                'We accept a small number of commissions each year. Work is research-led, made in close conversation, and never rushed. If that sounds like the way you would like a piece made, please say hello.',
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, delay: 0.1 * i + 0.2, ease: 'easeOut' }}
                  className="font-display text-lg md:text-xl leading-relaxed"
                  style={{ color: 'rgba(244,241,232,0.85)', fontWeight: 300 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* signature meta */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14 grid grid-cols-2 gap-8 max-w-[28rem]"
            >
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.45)' }}>Founded</div>
                <div className="font-display text-xl" style={{ color: '#F4F1E8' }}>MMXXIV</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.45)' }}>Practice</div>
                <div className="font-display text-xl" style={{ color: '#F4F1E8' }}>Two hands</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.45)' }}>Located</div>
                <div className="font-display text-xl" style={{ color: '#F4F1E8' }}>BE — Brussels</div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.45)' }}>Available</div>
                <div className="font-display text-xl" style={{ color: '#D4A574' }}>Q3 MMXXVI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
