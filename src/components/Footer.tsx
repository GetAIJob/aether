export default function Footer() {
  return (
    <footer className="relative px-8 md:px-14 pb-10 pt-20">
      <div className="hairline mb-10" />
      <div className="max-w-[88rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.5)' }}>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Æther · by GrowthSite Lab</div>
          <div>Premium web design</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Colophon</div>
          <div>Set in Fraunces & JetBrains Mono</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Build</div>
          <div>React · WebGL · cinematic motion</div>
        </div>
        <div className="md:text-right">
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>© MMXXVI</div>
          <div>All rights reserved.</div>
        </div>
      </div>
      <p className="text-center mt-4 text-[0.75rem] opacity-[0.45]" style={{ color: 'inherit' }}>
        Built by{' '}
        <a href="https://risesitelab.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'inherit' }}>
          GrowthSite Lab
        </a>
      </p>
    </footer>
  )
}
