import {
  AppFrame,
  CallToAction,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { InfoCard } from "@/components/marketing/cards";
import {
  MarketDashboard,
  StatsPanel,
} from "@/components/marketing/mock-visuals";

function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="max-w-xl">
        <SectionIntro
          eyebrow=""
          title="Intelligent Capital for Modern Ambitions."
          description="Eazicred helps teams with proven traction access flexible institutional-grade investment products and financing tools."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/loans/apply" label="Apply for a Loan" />
          <SecondaryButton href="/investments" label="Start Investing" />
        </div>
      </div>
      <MarketDashboard />
    </section>
  );
}

function EcosystemSection() {
  const cards = [
    {
      title: "Working Capital Business Loan",
      description:
        "Suitable for SMEs to fund inventories, working capital, and business running costs.",
      footer: "₦50,000 – ₦10,000,000 · 1–8 months · Interest upfront/weekly/monthly",
      accent: "light" as const,
    },
    {
      title: "Invoice / Purchase Order Finance",
      description:
        "Unlock the value of future invoices and receivables today, or fund purchase orders from reputable companies.",
      footer: "₦1,000,000 – ₦20,000,000 · 90–180 days · Lump-sum repayment",
      accent: "light" as const,
    },
    {
      title: "Sale Lease Back",
      description:
        "Sell an asset to us and retain possession while we meet your immediate cash requirement.",
      footer: "Asset ₦1,000,000 – ₦20,000,000 · 1 year · Rentals monthly/bi-weekly/weekly",
      accent: "dark" as const,
    },
    {
      title: "Alternative Energy Finance",
      description:
        "Financing for homes, business premises, and residential estates to acquire qualified energy assets.",
      footer: "Asset ₦2,000,000 – ₦30,000,000 · Up to 2 years · Advanced rental mandatory",
      accent: "light" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          title="Loan Products Built for Performance"
          description="Flexible financing designed for SMEs, growing companies, asset-backed needs, and alternative energy projects."
        />
        <a href="/loans" className="text-sm font-medium text-sky-500">
          View All Loan Products →
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            showIcon={false}
            title={card.title}
            description={card.description}
            footer={card.footer}
            accent={card.accent}
          />
        ))}
      </div>
    </section>
  );
}

function InvestmentsSection() {
  const cards = [
    {
      title: "Fixed Investment Note",
      description:
        "Commit a one-off amount for a chosen period and receive principal plus accrued interest in a lump sum at maturity.",
      footer: "Min ₦1,000,000 · 1–12 months (renewable) · Top-up anytime",
      accent: "light" as const,
    },
    {
      title: "Steady Income Plan",
      description:
        "Earn guaranteed periodic income paid weekly, monthly, quarterly, annually, or as desired—with reinvestment options.",
      footer: "Min ₦1,000,000 · 6–12 months (renewable) · Periodic payouts",
      accent: "light" as const,
    },
    {
      title: "Upfront Interest Plan",
      description:
        "Get upfront interest immediately while your principal is paid at maturity or rolled over for another term.",
      footer: "Min ₦500,000 · 6–12 months (renewable) · Upfront returns",
      accent: "dark" as const,
    },
    {
      title: "Eazicred Vault Plan",
      description:
        "A disciplined plan that locks your investment until your chosen maturity date to help you stay on track.",
      footer: "Min ₦50,000 · 3+ months · Early withdrawal forfeits interest",
      accent: "light" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          title="Investment Packages"
          description="Choose a package that matches your goal: lump-sum growth, steady income, upfront returns, or goal-based discipline."
        />
        <a href="/investments" className="text-sm font-medium text-sky-500">
          View All Investment Packages →
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
            footer={card.footer}
            accent={card.accent}
          />
        ))}
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const cards = [
    {
      title: "Fashion Retailer – Working Capital",
      description: "₦3.5M for 6 months · Stock up before December peak.",
      footer: "Revenue grew 62% YoY · Repaid in 5 months · Opened a 2nd kiosk in Ikeja",
      accent: "light" as const,
    },
    {
      title: "Catering Business – Equipment Finance",
      description: "₦7.2M for 12 months · Industrial ovens + delivery van.",
      footer: "Doubled capacity · Won 3 corporate contracts · Created 8 new jobs",
      accent: "dark" as const,
    },
    {
      title: "Cold Room Operator – Energy Solution",
      description: "₦8M for 12 months · Solar + inverter to cut diesel costs.",
      footer: "Diesel spend down 70% · Saved ₦450k/month · Loan serviced from savings",
      accent: "light" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          title="Case Studies"
          description="See how businesses use Eazicred financing to grow revenue, expand operations, and improve resilience."
        />
        <a href="/case-studies" className="text-sm font-medium text-sky-500">
          View All Case Studies →
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            description={card.description}
            footer={card.footer}
            accent={card.accent}
          />
        ))}
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section
      id="stories"
      className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr_0.85fr]"
    >
      <article className="soft-shadow rounded-[24px] bg-white p-6">
        <p className="text-sm font-semibold text-slate-950">
          Real Progress, <span className="text-sky-400">Real Stories.</span>
        </p>
        <div className="mt-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src="/logo.png"
              alt=""
              className="h-4 w-4 object-contain"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          “The team expedited our raise and working-capital plan in a way that
          felt clear, fast, and deeply aligned with our growth targets.”
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,_#f6d1bb,_#8f5a4e)]" />
          <div>
            <p className="text-sm font-semibold text-slate-950">Sarah Njoku</p>
            <p className="text-xs text-slate-400">Founder, NorthPeak Labs</p>
          </div>
        </div>
      </article>
      <div className="card-shadow relative min-h-[260px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,_#070b16,_#1d2e47)]">
        <div className="absolute inset-0 marketing-grid opacity-20" />
        <svg viewBox="0 0 300 280" className="absolute inset-0 h-full w-full">
          <path
            d="M20 212C43 212 44 148 71 148C95 148 97 205 123 205C145 205 149 110 177 108C203 105 205 169 228 169C248 169 253 77 280 74"
            fill="none"
            stroke="#53aef6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute bottom-4 left-4 rounded-2xl bg-white/8 px-3 py-2 text-xs text-white/70">
          Market Intelligence
        </div>
      </div>
      <div className="grid gap-4">
        <StatsPanel label="Returns" value="₦200M+" accent="green" />
        <div className="card-shadow relative min-h-[170px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,_#283448,_#0d1523)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_35%)]" />
          <div className="absolute inset-x-4 bottom-5 rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              Collaboration
            </p>
            <p className="mt-3 text-sm text-white/80">
              Connected underwriting and portfolio reviews for every decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <AppFrame active="home">
      <HeroSection />
      <EcosystemSection />
      <InvestmentsSection />
      <CaseStudiesSection />
      <StoriesSection />
      <CallToAction
        title="Ready to define your financial future?"
        description="Join a modern capital network designed for borrowers, operators, and investors who need clarity and speed."
        primaryLabel="Open Your Account"
        secondaryLabel="Speak to an Advisor"
      />
    </AppFrame>
  );
}
