import fs from 'fs';
import path from 'path';

export type Entrepreneur = {
  slug: string;
  name: string;
  tagline: string;
  image: string | null;
  summary: string[];
  profile: string[];
};

const PICKS: string[] = [
'dryasinabubakr',
'vimalshah',
'tabithakaranja',
'norahmagero',
'naushadmerali',
'narendraraval',
'mubarakmuyika',
'manuchandaria',
'mamanginakenyatta',
'lornarutto',
'judithowigar',
'josephmucheru',
'johngachora',
'jimnahmbaru',
'erickinoti',
'eddahgachukia',
'dorcasmuthoni',
'chriskirubi',
'bhimjideparshah',
'alexmativo'
];

const IMAGE_DIRECTORIES = ['public/pictures', 'public/images', 'pictures', 'images'];

const SUPPORTED_IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function getInitials(source: string): string {
  const normalized = source.replace(/\([^)]*\)/g, ' ');

  return normalized
    .split(/[^A-Za-z]+/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toLowerCase() ?? '')
    .slice(0, 3)
    .join('');
}

function findImageByInitials(initials: string): string | null {
  if (!initials) {
    return null;
  }

  for (const directory of IMAGE_DIRECTORIES) {
    const directoryPath = path.join(process.cwd(), directory);

    if (!fs.existsSync(directoryPath) || !fs.statSync(directoryPath).isDirectory()) {
      continue;
    }

    const matches = fs
      .readdirSync(directoryPath)
      .filter((fileName) => {
        const ext = path.extname(fileName).toLowerCase();
        return fileName.toLowerCase().startsWith(initials) && SUPPORTED_IMAGE_EXTENSIONS.has(ext);
      })
      .sort((a, b) => a.localeCompare(b));

    if (matches.length > 0) {
      const relativeDirectory = directory.startsWith('public/') ? directory.replace(/^public\//, '') : directory;
      return `/${relativeDirectory}/${matches[0]}`.replace(/\/+/g, '/');
    }
  }

  return null;
}

function parseText(slug: string): Entrepreneur {
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
  const profile = bodySegments;

  const initials = getInitials(name);
  const image = findImageByInitials(initials);

  return {
    slug,
    name,
    tagline,
    image,
    summary,
    profile
  };
}

export function getEntrepreneurs(): Entrepreneur[] {
  return PICKS.map((slug) => parseText(slug));
}
