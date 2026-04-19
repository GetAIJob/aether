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
    title: 'On the silence of mornings',
    caption: 'A meditation on first light and the hush before sound.',
    year: '2023',
    medium: 'Generative · WebGL',
    excerpt: 'The slowest light of the day is the most honest. It does not announce itself.',
  },
  {
    numeral: 'II',
    title: 'Folded geometries',
    caption: 'How a single beam becomes a thousand when met by a surface.',
    year: '2024',
    medium: 'Refraction study',
    excerpt: 'Glass is not transparent. Glass is generous — it gives the same beam back, multiplied.',
  },
  {
    numeral: 'III',
    title: 'Of dust and gravity',
    caption: 'The visible architecture of an empty room.',
    year: '2024',
    medium: 'Particulate field',
    excerpt: 'Dust is the only material that lets you see what you cannot otherwise see — air.',
  },
  {
    numeral: 'IV',
    title: 'A long exposure',
    caption: 'Ten thousand seconds of moonlight on a windowsill.',
    year: '2025',
    medium: 'Long-form capture',
    excerpt: 'Time is the photographer. The shutter is only its hand.',
  },
  {
    numeral: 'V',
    title: 'Thresholds',
    caption: 'On the architecture of doorways and the geometry of leaving.',
    year: '2025',
    medium: 'Spatial composition',
    excerpt: 'Every room is a sentence. The doorway is its punctuation.',
  },
  {
    numeral: 'VI',
    title: 'The colour of patience',
    caption: 'A field of warm umber that took six weeks to sit still.',
    year: '2026',
    medium: 'Pigment · field study',
    excerpt: 'No colour is found. A colour is only ever waited for.',
  },
]
