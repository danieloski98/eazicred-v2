import {
  AppFrame,
  CallToAction,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { Checklist, InfoCard } from "@/components/marketing/cards";
import {
  DataBarsCard,
  GrowthChart,
  MinimalChartCard,
} from "@/components/marketing/mock-visuals";

function Opportunities() {
  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Investment Opportunities"
        description="Diversified options designed to balance stability, upside, and institutional-grade oversight."
      />
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <DataBarsCard />
          <article className="card-shadow overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#0d1424,_#1c2840)] p-5 text-white">
            <p className="text-sm font-semibold">Commercial REIT</p>
            <p className="mt-2 text-sm text-white/70">
              Income-producing exposure with carefully managed downside controls.
            </p>
          </article>
        </div>
        <div className="grid gap-4">
          <MinimalChartCard
            title="Stable Growth Fund"
            subtitle="Conservative allocation with measured upside."
          />
          <article className="card-shadow overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#11182a,_#1c2c53)] p-5 text-white">
            <p className="text-sm font-semibold">Renewable Energy Fund</p>
            <p className="mt-2 text-sm text-white/70">
              Long-horizon infrastructure exposure with transparent risk review.
            </p>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Tenor</p>
                <p className="mt-2 text-lg font-semibold">4.2 Years</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Target</p>
                <p className="mt-2 text-lg font-semibold">36 Months</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SecurityProtocols() {
  const miniCards = [
    "Risk Modelling",
    "AML Screening",
    "Portfolio Insights",
    "Transparent Reporting",
  ];

  return (
    <section className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div className="grid gap-4 sm:grid-cols-2">
        {miniCards.map((title, index) => (
          <InfoCard
            key={title}
            icon={<span className="text-sm">{index % 2 === 0 ? "◌" : "◍"}</span>}
            title={title}
            description="Robust controls and review loops that keep each opportunity auditable."
          />
        ))}
      </div>
      <article className="soft-shadow rounded-[26px] bg-slate-50 p-6">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Institutional Security Protocols
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          We pair advanced controls with real-time visibility so investors can
          move confidently through diligence, deployment, and monitoring.
        </p>
        <div className="mt-6">
          <Checklist
            items={[
              "Quarterly reviewed underwriting frameworks",
              "Granular access controls and approval flows",
              "End-to-end risk monitoring systems",
            ]}
          />
        </div>
      </article>
    </section>
  );
}

export default function InvestmentsPage() {
  return (
    <AppFrame active="investments">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <SectionIntro
            title="Institutional-Grade Investments for Everyone."
            description="Grow capital with precision. Eazicred offers structured investment opportunities with transparent risk profiles and curated access."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#" label="Explore Opportunities" />
            <SecondaryButton href="/how-it-works" label="View Performance" />
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
      <Opportunities />
      <SecurityProtocols />
      <CallToAction
        title="Start Building Your Future Today"
        description="Set up your investment account, access vetted opportunities, and track performance from one clean dashboard."
        primaryLabel="Start Investing"
        secondaryLabel="Schedule a Call"
      />
    </AppFrame>
  );
}
