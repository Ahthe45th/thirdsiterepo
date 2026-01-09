import { EntrepreneurCard } from '@/components/EntrepreneurCard';
import { getEntrepreneurs } from '@/lib/entrepreneurs';

export default function HomePage() {
  const entrepreneurs = getEntrepreneurs();
  const yasinFaq = [
    {
      question: 'Who is Dr. Yasin Abu Bakr?',
      answer:
        'He is the founder and chairman of ALIF LAA MEEM Enterprises, known for designing and financing Shariah-compliant structures for African governments, including sukuk bonds, public-private development vehicles, and infrastructure financing models.'
    },
    {
      question: 'When and where was he born?',
      answer: 'He was born in 1974 in Nairobi, Kenya, during a period when the city—and the young nation—were still taking shape.'
    },
    {
      question: 'What early family circumstances shaped his worldview?',
      answer:
        'He was the youngest of six children, raised by a mother widowed at twenty-six who built a successful trading and property portfolio across Nairobi. Her discipline, risk-taking, and financial intuition became his first lessons in capital and resilience.'
    },
    {
      question: 'How influential was his mother’s business career?',
      answer:
        'Her trading and property ventures grew into an empire later valued at roughly $3 million. Observing her work taught him about asset appreciation, credit judgment, and the idea that capital can be moral if it is deliberate.'
    },
    {
      question: 'What schools and universities did he attend?',
      answer:
        'He studied at St. Mary’s School in Nairobi, Northeastern University in Boston (Finance & Insurance, ROTC), the London School of Economics (Law), and Al-Azhar University in Cairo (Islamic Shariah). These four institutions reflect the fusion of finance, law, strategy, and religion in his later work.'
    },
    {
      question: 'What entrepreneurial ventures did he attempt early in life?',
      answer:
        'Before turning 25, he started ELLAK (a video-rental business), a vegetable supply chain serving Nairobi estates, and a water-delivery operation for areas with unreliable municipal supply. These ventures taught him that systems matter more than slogans.'
    },
    {
      question: 'What professional experience did he gain before returning to Kenya?',
      answer:
        'He worked with Bank of Boston and BayBank Boston, defense-linked environments including McDonnell Douglas and the Pentagon, and Barclays UK. Through these roles he learned how institutions “breathe”—how risk, trust, liquidity, and structure must stay in rhythm.'
    },
    {
      question: 'What major companies did he establish after returning to Kenya?',
      answer:
        'He founded HouseCottages (an early affordable housing model), Credit One (Kenya’s first payday-loan company, later acquired by Platinum Credit), and Kensington Orient (introduced insurance-premium financing). Each project followed his method: start on paper, prototype quickly, then scale with precision.'
    },
    {
      question: 'What role did he play in developing Islamic finance in Kenya?',
      answer:
        'He worked with the Central Bank of Kenya to help license the country’s first Islamic financial institutions: Gulf African Bank, First Community Bank, and Takaful Insurance. He translated Islamic principles into functional financial architecture, not symbolic gesture.'
    },
    {
      question: 'How does he describe his philosophy of money?',
      answer:
        'He is blunt and disciplined. His known principles include “Money exists to move, not to sleep.” and “Work hard enough, and even luck will follow schedule.” These statements reflect his belief in liquidity, velocity, and disciplined execution.'
    },
    {
      question: 'What regions seek his financial and structural expertise?',
      answer:
        'His advisory work extends to Uganda, Tanzania, Rwanda, Zambia, Somalia, and the Democratic Republic of Congo (DRC). His influence is often quiet but significant, especially in designing financing strategies for state priorities.'
    },
    {
      question: 'What distinguishes Alif Laa Meem Enterprises from typical finance firms?',
      answer:
        'The firm focuses on Shariah-compliant, asset-backed, results-driven financing models for major public projects. It sees opportunities years before they become mainstream policy discussions and prioritizes execution over publicity.'
    },
    {
      question: 'What leadership characteristics is he known for?',
      answer:
        'He is described as soft-spoken, measured, emotionally disciplined, and fast-moving, guided by both banker’s precision and imam’s cadence. Associates note that he doesn’t pitch—he predicts.'
    },
    {
      question: 'How does he interact with political environments?',
      answer:
        'He has historically backed major political figures—Uhuru Kenyatta, then William Ruto—and maintains advisory relationships across multiple East African governments. His political alignment is direct but not flamboyant; influence for him is a tool of structuring, not spectacle.'
    },
    {
      question: 'What is the core theme of his life’s work so far?',
      answer:
        'The throughline across all three scripts is: “Faith as framework, capital as craft, structure as the engine of development.” He aims to build systems—not speeches—that endure beyond individuals.'
    }
  ];

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#fdf2f8_0%,_#e0f2fe_42%,_#fef3c7_82%,_#ffffff_100%)]">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12" id="top-twenty">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Feature Article
          </p>
          <h2 className="font-display text-4xl text-brand sm:text-5xl">
            The Top 20 Visionary Entrepreneurs Powering Kenya’s Next Economy
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
                  <h5 className="font-display text-lg text-brand">FAQ</h5>
                  {entrepreneur.slug === 'yasinabubakr' ? (
                    <div className="mt-4 space-y-4">
                      {yasinFaq.map((item, faqIndex) => (
                        <div key={`${entrepreneur.slug}-faq-${faqIndex}`} className="space-y-1">
                          <p className="font-semibold text-brand">
                            {faqIndex + 1}. {item.question}
                          </p>
                          <p>{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2">
                      We are compiling common questions about {entrepreneur.name}&apos;s journey, investments, and impact. Check back soon for more details.
                    </p>
                  )}
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
              quarter we publish a signature Top Twenty, combining on-the-ground reporting, archival photography, and data research
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
