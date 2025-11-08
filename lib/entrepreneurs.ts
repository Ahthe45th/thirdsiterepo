import fs from 'fs';
import path from 'path';

export type Entrepreneur = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  summary: string[];
};

const PICKS: Array<{ slug: string; image: string }> = [
  { slug: 'manuchandaria', image: 'mc1.jpeg' },
  { slug: 'chriskirubi', image: 'ck1.jpeg' },
  { slug: 'tabithakaranja', image: 'tk1.jpeg' },
  { slug: 'vimalshah', image: 'vs1.jpeg' },
  { slug: 'narendraraval', image: 'nr1.jpeg' },
  { slug: 'naushadmerali', image: 'nm1.jpeg' },
  { slug: 'lornarutto', image: 'lr1.jpeg' },
  { slug: 'dorcasmuthoni', image: 'dm1.jpeg' },
  { slug: 'eddahgachukia', image: 'eg1.jpeg' },
  { slug: 'alexmativo', image: 'am1.jpeg' }
];

function parseText(slug: string, image: string): Entrepreneur {
  const filePath = path.join(process.cwd(), 'text', `${slug}.txt`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const segments = raw
    .split(/\r?\n\s*\r?\n/)
    .map((segment) => segment.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const [nameSegment, taglineSegment, ...bodySegments] = segments;

  const name = nameSegment ?? slug;
  const tagline = taglineSegment ?? '';
  const summary = bodySegments.slice(0, 3);

  return {
    slug,
    name,
    tagline,
    image,
    summary
  };
}

export function getEntrepreneurs(): Entrepreneur[] {
  return PICKS.map(({ slug, image }) => parseText(slug, image));
}
