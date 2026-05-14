export interface Study {
  numeral: string
  title: string
  caption: string
  year: string
  medium: string
  excerpt: string
}

export const studies: Study[] = [
  {
    numeral: 'I',
    title: 'High-end aesthetics',
    caption: 'A sophisticated dark UI with gold and indigo accents for an instantly premium feel.',
    year: 'MMXXVI',
    medium: 'Visual system',
    excerpt: 'The first impression is a design decision. Æther is built so yours is unforgettable.',
  },
  {
    numeral: 'II',
    title: 'Cinematic motion',
    caption: 'Smooth transitions and considered easing that keep visitors scrolling and engaged.',
    year: 'MMXXVI',
    medium: 'Motion design',
    excerpt: 'Motion is narrative. Every transition tells the visitor where to look and what to feel next.',
  },
  {
    numeral: 'III',
    title: 'Reactive micro-interactions',
    caption: 'Subtle feedback on every hover, click and scroll — the interface feels alive.',
    year: 'MMXXVI',
    medium: 'Interaction',
    excerpt: 'Details are not decoration. They are the difference between a page and an experience.',
  },
  {
    numeral: 'IV',
    title: 'Atmospheric depth',
    caption: 'Soft volumetric lighting and parallax scrolling build a sense of cinematic space.',
    year: 'MMXXVI',
    medium: 'WebGL · parallax',
    excerpt: 'Depth is what separates a premium brand from a template. Space you can feel.',
  },
  {
    numeral: 'V',
    title: 'Flawless usability',
    caption: 'Beneath the creative, Awwwards-level visuals — a clean, intuitive layout.',
    year: 'MMXXVI',
    medium: 'UX architecture',
    excerpt: 'Beauty that is easy to use. Visitors feel guided, never lost.',
  },
  {
    numeral: 'VI',
    title: 'Built to convert',
    caption: 'Considered hierarchy, confident calls to action, and a layout tuned for business outcomes.',
    year: 'MMXXVI',
    medium: 'Conversion design',
    excerpt: 'A homepage that stands out from your competitors — and earns the click.',
  },
]
