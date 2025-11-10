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
  const gradientOverlay = 'linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.55) 100%)';
  const backgroundImage = photoUrl ? `${gradientOverlay}, url(${photoUrl})` : gradientOverlay;

  return (
    <article
      id={entrepreneur.slug}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <div
          aria-hidden="true"
          className="absolute inset-0 origin-top scale-100 bg-slate-200 transition duration-500 group-hover:scale-105"
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <span className="sr-only">Portrait of {entrepreneur.name}</span>
        <span className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 font-display text-xl font-semibold text-brand shadow">
          {rank}
        </span>
        <span className="absolute bottom-5 right-6 inline-flex items-center justify-center rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
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
