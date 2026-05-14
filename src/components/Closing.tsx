import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Closing() {
  const [copied, setCopied] = useState(false)
  const email = 'sergiu.manole2@gmail.com'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* no-op */ }
  }

  return (
    <section id="contact" className="relative py-44 md:py-56 px-8 md:px-14 overflow-hidden">
      {/* soft amber wash */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(212,165,116,0.07) 0%, transparent 60%)' }} />

      <div className="max-w-[80rem] mx-auto relative z-10">
        {/* eyebrow */}
        <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.4em] uppercase mb-24" style={{ color: 'rgba(244,241,232,0.55)' }}>
          <span>§ 05 — Begin</span>
          <span style={{ color: 'rgba(244,241,232,0.35)' }}>Your homepage, elevated</span>
        </div>

        {/* central quiet line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="font-display text-2xl md:text-3xl leading-relaxed mb-10" style={{ color: 'rgba(244,241,232,0.7)', fontWeight: 300 }}>
            For commissions, questions,
            <br />
            or to put your brand in front of this kind of experience —
          </p>

          <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-[-0.04em]" style={{ color: '#F4F1E8', fontWeight: 300 }}>
            <span className="font-display italic">let's</span> talk.
          </h2>
        </motion.div>

        {/* email block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <button
            onClick={copy}
            data-cursor="pointer"
            className="group relative flex items-center gap-4 px-8 py-5"
            style={{
              background: 'rgba(212,165,116,0.05)',
              border: '1px solid rgba(212,165,116,0.30)',
            }}
          >
            <span className="font-display text-2xl md:text-3xl" style={{ color: '#F4F1E8', fontWeight: 400 }}>
              {email}
            </span>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase transition-colors duration-300" style={{ color: copied ? '#D4A574' : 'rgba(244,241,232,0.55)' }}>
              {copied ? 'Copied' : 'Click to copy'}
            </span>
          </button>

          <div className="mt-6 flex items-center gap-6 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.45)' }}>
            <a href="https://wa.me/32471725086" className="draw-underline">WhatsApp</a>
            <span style={{ color: 'rgba(244,241,232,0.2)' }}>·</span>
            <a href="https://t.me/GrowthSite_Lab" className="draw-underline">Telegram</a>
            <span style={{ color: 'rgba(244,241,232,0.2)' }}>·</span>
            <a href="https://risesitelab.com" className="draw-underline">GrowthSite Lab</a>
          </div>
        </motion.div>

        {/* end mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-32 flex flex-col items-center gap-4"
        >
          <div className="hairline w-32" />
          <div className="font-display text-amber-gradient text-3xl" style={{ fontWeight: 300 }}>Æ</div>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.4)' }}>
            Premium homepage concept · MMXXVI
          </div>
        </motion.div>
      </div>
    </section>
  )
}
