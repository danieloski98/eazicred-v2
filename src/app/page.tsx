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
          eyebrow="AI-Powered Loan Platform"
          title="Intelligent Capital for Modern Ambitions."
          description="Eazicred helps teams with proven traction access flexible institutional-grade investment products and financing tools."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/loans" label="Apply for a Loan" />
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
      icon: "◌",
      title: "Precision Loans",
      description:
        "Adaptive financing tailored to runway, revenue cycles, and institutional diligence requirements.",
      footer: "Risk-Adjusted Designs",
      accent: "light" as const,
    },
    {
      icon: "◔",
      title: "Smart Invest",
      description:
        "Access diversified opportunities with transparent allocation tools and performance visibility.",
      footer: "Built for Managers",
      accent: "light" as const,
    },
    {
      icon: "◍",
      title: "Enterprise Security",
      description:
        "Institutional controls, verification workflows, and hardened infrastructure protect every move.",
      footer: "Trusted by Founders",
      accent: "dark" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          title="Financial Ecosystem Built for Performance"
          description="A unified platform for borrowing, investing, and managing strategic capital with confidence."
        />
        <a href="#stories" className="text-sm font-medium text-sky-500">
          View All Services →
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            icon={<span className="text-sm">{card.icon}</span>}
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
        <div className="mt-4 flex gap-1 text-emerald-400">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          “The team expedited our raise and working-capital plan in a way that
          felt clear, fast, and deeply aligned with our growth targets.”
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,_#f6d1bb,_#8f5a4e)]" />
          <div>
            <p className="text-sm font-semibold text-slate-950">Sarah James</p>
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
        <StatsPanel label="Returns" value="$1.2B+" accent="green" />
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
