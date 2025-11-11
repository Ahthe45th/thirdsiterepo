import type { Entrepreneur } from '@/lib/entrepreneurs';

export function EntrepreneurCard({
  entrepreneur,
  index
}: {
  entrepreneur: Entrepreneur;
  index: number;
}) {
  const rank = index + 1;
  const photoUrl = entrepreneur.image;
  const initials = entrepreneur.name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 3);
  const gradientOverlay = 'linear-gradient(180deg, rgba(31, 27, 75, 0.15) 0%, rgba(31, 27, 75, 0.68) 100%)';
  const backgroundImage = photoUrl ? `${gradientOverlay}, url(${photoUrl})` : gradientOverlay;

  return (
    <article
      id={entrepreneur.slug}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br from-white/95 via-white/90 to-brand-glow/25 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-64 w-full overflow-hidden bg-brand-dusk/25">
        <div
          aria-hidden="true"
          className="absolute inset-0 origin-top scale-100 bg-brand-dusk/30 transition duration-500 group-hover:scale-105"
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <span className="sr-only">Portrait of {entrepreneur.name}</span>
        <span className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-glow text-brand font-display text-xl font-semibold shadow">
          {rank}
        </span>
        <span className="absolute bottom-5 right-6 inline-flex items-center justify-center rounded-full bg-brand-dusk/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow">
          {initials}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-8">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Spotlight
          </p>
          <h2 className="font-display text-2xl text-brand">{entrepreneur.name}</h2>
          {entrepreneur.tagline && (
            <p className="text-sm text-slate-600">{entrepreneur.tagline}</p>
          )}
        </header>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          {entrepreneur.summary.map((paragraph, paragraphIndex) => (
            <p key={`${entrepreneur.slug}-${paragraphIndex}`}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-auto pt-4 text-sm font-semibold text-brand">
          Read the full profile &rarr;
        </div>
      </div>
    </article>
  );
}
