import {
  AppFrame,
  CallToAction,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { Checklist } from "@/components/marketing/cards";
import { GrowthChart } from "@/components/marketing/mock-visuals";

type InvestmentPackage = {
  title: string;
  overview: string;
  details: string[];
};

function InvestmentPackageCard({ pack }: { pack: InvestmentPackage }) {
  return (
    <article className="soft-shadow rounded-[24px] bg-white p-6">
      <p className="text-lg font-semibold text-slate-950">{pack.title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-500">{pack.overview}</p>
      <div className="mt-6">
        <Checklist items={pack.details} />
      </div>
    </article>
  );
}

function PackagesSection() {
  const packages: InvestmentPackage[] = [
    {
      title: "Fixed Investment Note",
      overview:
        "A simple and flexible fixed-term investment where principal and accrued interest are paid in a lump sum at maturity.",
      details: [
        "Suitable for passive investors seeking to invest one-off in return for a bulk payment at maturity",
        "Minimum investment: ₦1,000,000 (can be topped-up at any time without restriction)",
        "Tenor: 1 month minimum, up to 1 year (renewable)",
        "Fixed interest rate; accumulated amount can be rolled over at maturity",
        "Liquidation before maturity allowed, subject to pre-liquidation fee charged on interest only",
      ],
    },
    {
      title: "Steady Income Plan",
      overview:
        "Earn guaranteed periodic income throughout the investment period, with flexible payout intervals and an option to reinvest income for interest capitalization.",
      details: [
        "Suitable for investors who desire regular or periodic income on their investments",
        "Minimum investment: ₦1,000,000 (no maximum limit)",
        "Tenor: 6 months minimum, up to 1 year (renewable)",
        "Fixed interest rate; investment amount can be rolled over upon maturity",
        "Liquidation before maturity allowed, subject to pre-liquidation fee charged on interest only",
      ],
    },
    {
      title: "Upfront Interest Plan",
      overview:
        "Receive upfront interest immediately while your principal is paid at maturity (or rolled over).",
      details: [
        "Suitable for investors seeking instant (one-off) returns to meet immediate needs",
        "Minimum investment: ₦500,000 (no maximum limit)",
        "Tenor: 6 months minimum, up to 1 year (renewable)",
        "Principal can be paid at maturity or rolled over for another term",
        "Liquidation before maturity allowed, subject to pre-liquidation fee charged on principal",
      ],
    },
    {
      title: "Eazicred Vault Plan",
      overview:
        "A discipline-focused plan that locks your investment until a maturity date you choose, helping you avoid early withdrawals.",
      details: [
        "Suitable for investors with mid-term goals who want to avoid the temptation of early withdrawal",
        "Principal and accrued interest are only available for withdrawal at the specified maturity date",
        "Minimum investment: ₦50,000 (no maximum limit)",
        "Tenor: 3 months minimum with rollover option at maturity",
        "Liquidation before maturity is discouraged; in exceptional cases, full accrued interest is forfeited",
      ],
    },
  ];

  return (
    <section id="packages" className="space-y-6">
      <SectionIntro
        align="center"
        title="Investment Packages"
        description="Choose a package that matches your goal: lump-sum growth, steady income, upfront returns, or disciplined goal-based investing."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {packages.map((pack) => (
          <InvestmentPackageCard key={pack.title} pack={pack} />
        ))}
      </div>
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
      question: "Are there any fees associated with investing?",
      answer:
        "We pride ourselves on transparency. There are no hidden fees for our standard investment plans. Any applicable fees, such as early withdrawal fees, will be clearly communicated before you invest.",
    },
  ];

  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Frequently Asked Questions"
        description="Quick answers to common questions about investing with Eazicred."
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

export default function InvestmentsPage() {
  return (
    <AppFrame active="investments">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <SectionIntro
            title="Invest with Clarity. Earn with Confidence."
            description="Choose from fixed-term growth, steady income, upfront returns, or disciplined goal-based investing—built for flexibility and transparency."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/investments/apply" label="Invest Now" />
            <SecondaryButton href="#packages" label="View Packages" />
          </div>
        </div>
        <div className="relative">
          <GrowthChart />
          <div className="card-shadow absolute -bottom-4 left-4 rounded-[18px] bg-white px-4 py-3 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              12M Avg
            </p>
            <p className="mt-1 font-semibold text-emerald-500">+12.4%</p>
          </div>
        </div>
      </section>
      <PackagesSection />
      <FaqSection />
      <CallToAction
        title="Start Building Your Future Today"
        description="Set up your investment account, access vetted opportunities, and track performance from one clean dashboard."
        primaryHref="/investments/apply"
        primaryLabel="Invest Now"
        secondaryHref="/advisory"
        secondaryLabel="Speak to an Advisor"
      />
    </AppFrame>
  );
}
