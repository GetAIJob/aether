import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => {
      const d = new Date()
      setTime(`${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')} UTC`)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-md"
            style={{ background: 'linear-gradient(to bottom, rgba(10,9,8,0.75), rgba(10,9,8,0))' }}
          />
        )}
      </AnimatePresence>
      <nav className="relative flex items-center justify-between px-8 md:px-14 py-6">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight" style={{ color: '#F4F1E8' }}>Æ</span>
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.55)' }}>
            ther / Studio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.7)' }}>
          <a href="#manifesto" className="draw-underline">Manifesto</a>
          <a href="#index" className="draw-underline">Index</a>
          <a href="#atelier" className="draw-underline">Atelier</a>
          <a href="#contact" className="draw-underline">Contact</a>
        </div>

        <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.45)' }}>
          <span className="hidden lg:block">{time}</span>
          <span className="hidden lg:block w-px h-3" style={{ background: 'rgba(244,241,232,0.18)' }} />
          <span>MMXXVI</span>
        </div>
      </nav>
    </header>
  )
}
