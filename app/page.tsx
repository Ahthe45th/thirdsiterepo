import { EntrepreneurCard } from '@/components/EntrepreneurCard';
import { getEntrepreneurs } from '@/lib/entrepreneurs';

export default function HomePage() {
  const entrepreneurs = getEntrepreneurs();

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#eff6ff,_#ffffff_60%)]">
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

      <section className="border-t border-slate-200 bg-white" id="newsletter">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">Weekly Briefing</p>
            <h3 className="font-display text-3xl text-brand">Get the founder intelligence report</h3>
            <p className="text-sm text-slate-600">
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
              className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50" id="about">
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
          <div className="grid w-full max-w-md gap-4 rounded-3xl border border-dashed border-brand/20 bg-white p-6 text-sm text-slate-600">
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
