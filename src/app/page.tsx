import {
  AppFrame,
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
          title="Intelligent lending for the modern economy"
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
      <article className="soft-shadow rounded-[24px] bg-white p-6">
        <p className="text-sm font-semibold text-slate-950">
          Steady Growth, <span className="text-sky-400">Clear Support.</span>
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          “We got the clarity we needed on pricing and timelines. The process
          stayed transparent from application to disbursement.”
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,_#d7e7ff,_#4b6cb7)]" />
          <div>
            <p className="text-sm font-semibold text-slate-950">Tunde Adebayo</p>
            <p className="text-xs text-slate-400">Operations Lead, MetroCart</p>
          </div>
        </div>
      </article>
      <article className="soft-shadow rounded-[24px] bg-white p-6">
        <p className="text-sm font-semibold text-slate-950">
          Faster Decisions, <span className="text-sky-400">Better Outcomes.</span>
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-500">
          “The team helped us align funding to our cash cycle. We scaled inventory
          without stressing operations, and still paid down early.”
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,_#c9f3e2,_#1f7a5a)]" />
          <div>
            <p className="text-sm font-semibold text-slate-950">Amaka Okafor</p>
            <p className="text-xs text-slate-400">Founder, GreenCrate</p>
          </div>
        </div>
      </article>
      {/* <div className="card-shadow relative min-h-[260px] overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,_#070b16,_#1d2e47)]">
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
      </div> */}
      {/* <div className="grid gap-4">
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
      </div> */}
    </section>
  );
}

function WhyChooseSection() {
  const cards = [
    {
      title: "Why choose Eazicred",
      description:
        "Institutional-grade financing and investment tools designed for speed, clarity, and confidence.",
      footer: "Built for SMEs, operators, and investors",
      accent: "light" as const,
    },
    {
      title: "Transparent terms",
      description:
        "Clear pricing, repayment structures, and product details so you can make decisions without guesswork.",
      footer: "No surprises",
      accent: "dark" as const,
    },
    {
      title: "Fast, guided execution",
      description:
        "Streamlined verification and structured review workflows that keep you moving from application to funding.",
      footer: "Designed for momentum",
      accent: "light" as const,
    },
  ];

  return (
    <section className="space-y-6">
      <SectionIntro
        title="Why choose Eazicred"
        description="A modern capital network built to help you borrow and invest with confidence."
      />
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

function HowItWorksSection() {
  const steps = [
    {
      title: "Choose a product",
      body: "Select a loan or investment package that matches your goals and timeline.",
    },
    {
      title: "Apply in minutes",
      body: "Complete your application with guided onboarding and verification checks.",
    },
    {
      title: "Get funded or invested",
      body: "Receive your offer, finalize documentation, and move capital with confidence.",
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <SectionIntro
          title="How it works"
          description="A simple process built to keep underwriting clear while preserving institutional rigor."
        />
        <div className="mt-6 space-y-5">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-600">
                  {index + 1}
                </span>
                {index !== steps.length - 1 ? (
                  <span className="mt-2 h-full w-px bg-sky-100" />
                ) : null}
              </div>
              <div className="pb-3">
                <p className="text-base font-semibold text-slate-950">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-500">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <SecondaryButton href="/how-it-works" label="Learn More" />
        </div>
      </div>
      <article className="card-shadow overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,_#060b1c,_#142449)] p-6 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Get started</p>
        <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
          Move from intent to execution.
        </p>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Compare options, submit your application, and get a clear path forward with
          structured offers.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/loans/apply"
            className="rounded-md bg-sky-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-500"
          >
            Apply for a Loan
          </a>
          <a
            href="/investments/apply"
            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Invest Now
          </a>
        </div>
      </article>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Is my investment guaranteed?",
      answer:
        "While we strive to provide stable returns, all investments carry some risk. We recommend reviewing our terms and conditions and consulting with a financial advisor.",
    },
    {
      question: "Can I withdraw my investment early?",
      answer:
        "Early withdrawals are possible but may be subject to fees. The specific terms depend on your chosen investment plan. Please contact our customer service for more details.",
    },
    {
      question: "How are returns paid out?",
      answer:
        "Returns can be paid out monthly or at the end of the investment term, depending on your chosen plan. You also have the option to reinvest your returns for compound growth.",
    },
    {
      question: "How do I apply for a loan?",
      answer:
        "Choose a loan product and submit your application. You’ll receive a review update and next steps as part of the process.",
    },
  ];

  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="FAQ"
        description="Quick answers to common questions about borrowing and investing."
      />
      <div className="mx-auto grid max-w-3xl gap-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group soft-shadow rounded-[22px] bg-white p-5"
          >
            <summary className="[&::-webkit-details-marker]:hidden flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-950">
                {item.question}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-slate-400 transition group-open:rotate-180"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-500">{item.answer}</p>
          </details>
        ))}
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
      <div className="space-y-14 pt-4">
        <WhyChooseSection />
        <HowItWorksSection />
        <FaqSection />
      </div>
    </AppFrame>
  );
}
