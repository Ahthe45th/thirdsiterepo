import { EntrepreneurCard } from '@/components/EntrepreneurCard';
import { getEntrepreneurs } from '@/lib/entrepreneurs';

export default function HomePage() {
  const entrepreneurs = getEntrepreneurs();

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#fdf2f8_0%,_#e0f2fe_42%,_#fef3c7_82%,_#ffffff_100%)]">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12" id="top-ten">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Feature Article
          </p>
          <h2 className="font-display text-4xl text-brand sm:text-5xl">
            The Top 10 Visionary Entrepreneurs Powering Kenya’s Next Economy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            These founders and industrial leaders are building companies that elevate manufacturing, technology, finance, and
            impact-driven innovation. Explore their stories, drawn from our long-form profiles and photo archives.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {entrepreneurs.map((entrepreneur, index) => (
            <EntrepreneurCard key={entrepreneur.slug} entrepreneur={entrepreneur} index={index} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/80" id="profiles">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Profiles</p>
            <h3 className="font-display text-3xl text-brand sm:text-4xl">Read every long-form profile</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Dive into each entrepreneur’s full story, with background, milestones, and context gathered from our reporting archive.
            </p>
          </div>
          <div className="mt-12 grid gap-10">
            {entrepreneurs.map((entrepreneur) => (
              <article
                key={entrepreneur.slug}
                id={`profile-${entrepreneur.slug}`}
                className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-md"
              >
                <header className="border-b border-slate-100 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Full profile</p>
                  <h4 className="font-display text-2xl text-brand">{entrepreneur.name}</h4>
                  {entrepreneur.tagline && <p className="text-sm text-slate-600">{entrepreneur.tagline}</p>}
                </header>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  {entrepreneur.profile.map((paragraph, paragraphIndex) => (
                    <p key={`${entrepreneur.slug}-profile-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-brand/15 bg-brand-glow/10 p-6 text-sm text-slate-700">
                  <h5 className="font-display text-lg text-brand">FAQ (coming soon)</h5>
                  <p className="mt-2">
                    We are compiling common questions about {entrepreneur.name}&apos;s journey, investments, and impact. Check back soon for more details.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-transparent bg-[linear-gradient(135deg,_#1f1b4b,_#4338ca,_#f97316)] text-white"
        id="newsletter"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-glow">Weekly Briefing</p>
            <h3 className="font-display text-3xl text-white">Get the founder intelligence report</h3>
            <p className="text-sm text-amber-50/90">
              Join 25,000+ readers receiving Sunday analysis on African venture, industrial policy, and the people driving new
              growth corridors.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/40 bg-white/90 px-4 py-3 text-sm text-brand shadow-sm placeholder:text-brand/50 focus:border-brand-glow focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-glow px-5 py-3 text-sm font-semibold text-brand shadow transition hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section
        className="border-t border-transparent bg-[linear-gradient(180deg,_rgba(252,211,77,0.16)_0%,_rgba(99,102,241,0.12)_100%)]"
        id="about"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">About Third Site</p>
            <h3 className="font-display text-3xl text-brand">Long-form business journalism for emerging markets</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              We report from Nairobi, Kigali, Lagos, and beyond to understand how capital, policy, and leadership intersect. Each
              quarter we publish a signature Top Ten, combining on-the-ground reporting, archival photography, and data research
              to highlight the builders moving the continent forward.
            </p>
          </div>
          <div className="grid w-full max-w-md gap-4 rounded-3xl border border-transparent bg-white/80 p-6 text-sm text-slate-600 shadow-[0_25px_50px_-12px_rgba(79,70,229,0.25)] backdrop-blur">
            <div>
              <p className="font-display text-4xl text-brand">72</p>
              <p>Long-form profiles published since 2018</p>
            </div>
            <div>
              <p className="font-display text-4xl text-brand">18</p>
              <p>Cities visited by our reporting team</p>
            </div>
            <div>
              <p className="font-display text-4xl text-brand">250K</p>
              <p>Monthly newsletter readership across the diaspora</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
