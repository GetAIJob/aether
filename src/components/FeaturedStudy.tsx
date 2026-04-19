import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const paragraphs = [
  'Glass is not transparent. Glass is generous. It gives the same beam back, multiplied — split into a chord of warm umbers and pale yellows that no painter can mix and no camera can fully record.',
  'Study II is a long observation of this generosity. A single low-angle beam meets a hand-cut prism, and we watch what happens, slowly, for the duration of an afternoon.',
  'Nothing in the piece is invented. Everything is exact. The geometry is the geometry of the prism. The colour is the colour of the room. The viewer is what completes the work.',
]

export default function FeaturedStudy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const numeralY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={ref} id="study-ii" className="relative min-h-[140vh] py-44 px-8 md:px-14 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0908 0%, #131110 50%, #0A0908 100%)' }}>
      {/* moving warm glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* watermark numeral */}
      <motion.div
        style={{ y: numeralY }}
        className="absolute top-0 left-0 right-0 flex justify-center font-display select-none pointer-events-none"
      >
        <span
          style={{
            fontSize: '60vw',
            lineHeight: 0.78,
            color: 'rgba(212,165,116,0.05)',
            fontWeight: 300,
            letterSpacing: '-0.06em',
          }}
        >
          II
        </span>
      </motion.div>

      <div className="max-w-[80rem] mx-auto relative z-10">
        {/* eyebrow */}
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-16" style={{ color: 'rgba(244,241,232,0.55)' }}>
          <span>§ 03 — Featured study</span>
          <span style={{ color: 'rgba(244,241,232,0.35)' }}>10:34 / Long-form</span>
        </div>

        {/* title */}
        <motion.div style={{ y, opacity }} className="grid grid-cols-12 gap-6 mb-32">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(212,165,116,0.7)' }}>
              Study · II
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.85] tracking-[-0.04em]" style={{ color: '#F4F1E8', fontWeight: 300 }}>
              Folded
              <br />
              <span className="font-display italic">geometries.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: 'easeOut' }}
                className="font-display text-xl md:text-2xl leading-[1.5] mb-8 last:mb-0"
                style={{ color: 'rgba(244,241,232,0.85)', fontWeight: 300 }}
              >
                {i === 0 && <span className="font-display text-7xl md:text-8xl float-left mr-3 mt-1 leading-[0.85]" style={{ color: '#D4A574', fontWeight: 300 }}>G</span>}
                {i === 0 ? p.slice(1) : p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* meta footer of study */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: '1px solid rgba(244,241,232,0.08)' }}
        >
          {[
            ['Subject', 'Refraction'],
            ['Medium', 'Hand-cut prism'],
            ['Recorded', 'October MMXXIV'],
            ['Duration', '4:14:09'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(244,241,232,0.45)' }}>{k}</div>
              <div className="font-display text-xl" style={{ color: '#F4F1E8', fontWeight: 400 }}>{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
