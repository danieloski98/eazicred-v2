import {
  AppFrame,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { MetricStrip } from "@/components/marketing/cards";
import { PortraitCard } from "@/components/marketing/mock-visuals";

function LoanSolutions() {
  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Tailored Loan Solutions"
        description="Structured lending solutions designed to support expansion, liquidity, and asset-backed opportunities."
      />
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4">
          <article className="soft-shadow rounded-[24px] bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">Personal Capital</p>
                <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500">
                  Flexible lending for founders and professionals looking to unlock
                  liquidity without slowing long-term goals.
                </p>
              </div>
              <div className="rounded-[18px] bg-sky-50 px-5 py-4 text-right">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Up to</p>
                <p className="mt-2 text-2xl font-semibold text-sky-500">$1,200/mo</p>
                <p className="mt-2 text-xs text-slate-400">Estimated flexibility</p>
              </div>
            </div>
          </article>
          <article className="soft-shadow rounded-[24px] bg-white p-6">
            <p className="text-lg font-semibold text-slate-950">Commercial Growth</p>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Financing aligned with operational cycles, supplier schedules, and
              institutional underwriting expectations.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {[
                ["$2M", "Facility"],
                ["12Y", "Term"],
                ["48h", "Approval"],
                ["0.5%", "Fees"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xl font-semibold text-slate-950">{value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className="grid gap-4">
          <article className="card-shadow rounded-[24px] bg-[linear-gradient(135deg,_#2f7bb5,_#356f97)] p-6 text-white">
            <p className="text-sm font-semibold">Asset Backed</p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Structured financing that helps convert existing assets into durable
              operating capacity.
            </p>
            <div className="mt-10 rounded-[18px] bg-white/10 px-4 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Rate</p>
              <p className="mt-2 text-3xl font-semibold">4.25%</p>
            </div>
          </article>
          <article className="card-shadow overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,_#0c1221,_#1c2943)] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Need a custom plan?
            </p>
            <div className="mt-8 rounded-[18px] border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
              <p className="text-sm font-semibold">Speak with our experts</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function PathToCapital() {
  const steps = [
    {
      title: "Digital Verification",
      body: "Complete identity, business, and eligibility checks with streamlined onboarding.",
    },
    {
      title: "Review Offers",
      body: "Compare transparent lending structures with clear pricing and timelines.",
    },
    {
      title: "Instant Funding",
      body: "Move from signed agreements to capital deployment in as little as 48 hours.",
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <SectionIntro
          title="The Path to Capital"
          description="A guided process built to keep underwriting simple while preserving institutional rigor."
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
      </div>
      <article className="soft-shadow rounded-[28px] bg-sky-50 p-4 sm:p-6">
        <div className="rounded-[24px] bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Estimate Approval</p>
              <p className="mt-2 text-sm font-medium text-slate-500">Pre-qualified</p>
            </div>
            <p className="text-sm font-medium text-emerald-500">Fast Review</p>
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Potential Offer</p>
            <p className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-slate-950">
              $85,000
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Interest Rate", "5.3% APR"],
              ["Loan Term", "12 months"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">
            Finalize Application
          </button>
        </div>
      </article>
    </section>
  );
}

export default function LoansPage() {
  return (
    <AppFrame active="loans">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <SectionIntro
            eyebrow="Finance First"
            title="Institutional-Grade Lending for Every Ambition."
            description="Whether you are growing a company or preserving liquidity, Eazicred delivers structured borrowing products with speed and precision."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#" label="Apply Now" />
            <SecondaryButton href="/how-it-works" label="Compare Options" />
          </div>
        </div>
        <PortraitCard />
      </section>
      <LoanSolutions />
      <PathToCapital />
      <MetricStrip
        items={[
          { value: "$4.2B", label: "Disbursed" },
          { value: "98%", label: "Client Retention" },
          { value: "A+", label: "Risk Rating" },
          { value: "24/7", label: "Expert Access" },
        ]}
      />
    </AppFrame>
  );
}
