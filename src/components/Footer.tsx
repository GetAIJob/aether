export default function Footer() {
  return (
    <footer className="relative px-8 md:px-14 pb-10 pt-20">
      <div className="hairline mb-10" />
      <div className="max-w-[88rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(244,241,232,0.5)' }}>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Æther Studio</div>
          <div>Brussels · Bruges</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Colophon</div>
          <div>Set in Fraunces & JetBrains Mono</div>
        </div>
        <div>
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>Build</div>
          <div>Composed & rendered in WebGL</div>
        </div>
        <div className="md:text-right">
          <div className="mb-2" style={{ color: 'rgba(244,241,232,0.85)' }}>© MMXXVI</div>
          <div>All rights, gently, reserved.</div>
        </div>
      </div>
    </footer>
  )
}
