import {
  AppFrame,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { MetricStrip } from "@/components/marketing/cards";
import { PortraitCard } from "@/components/marketing/mock-visuals";

type LoanProduct = {
  slug: string;
  title: string;
  suitability: string;
  details: string[];
};

function LoanProductCard({ product }: { product: LoanProduct }) {
  return (
    <article className="soft-shadow rounded-[24px] bg-white p-6">
      <p className="text-lg font-semibold text-slate-950">{product.title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-500">{product.suitability}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-500">
        {product.details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-[11px] text-sky-600">
              ✓
            </span>
            <span className="leading-6">{detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <PrimaryButton href={`/loans/apply?type=${product.slug}`} label="Apply Now" />
      </div>
    </article>
  );
}

function LoanSolutions() {
  const products: LoanProduct[] = [
    {
      slug: "working-capital",
      title: "Working Capital Business Loan",
      suitability:
        "Suitable for SMEs to fund inventories, working capital, and business running costs.",
      details: [
        "Loan amount: ₦50,000 to ₦10,000,000",
        "Loan tenor: 1 month to 8 months",
        "Interest can be paid upfront, weekly, or monthly while principal is paid at maturity",
        "2% management fee deductible at disbursement",
        "Loan can be liquidated before maturity",
      ],
    },
    {
      slug: "invoice-po",
      title: "Invoice / Purchase Order Finance",
      suitability:
        "Suitable for growing companies that want to unlock the value of future invoices and receivables today, or fund purchase orders from reputable companies.",
      details: [
        "Invoice / P.O value: ₦1,000,000 to ₦20,000,000",
        "Loan tenor: 90 to 180 days",
        "Principal and interest lump-sum payment at the end of the agreed tenor",
      ],
    },
    {
      slug: "sale-lease-back",
      title: "Sale Lease Back",
      suitability:
        "Suitable for individuals, businesses, and corporate institutions with assets they can sell to us while retaining possession to meet immediate cash requirements.",
      details: [
        "Asset cost: ₦1,000,000 to ₦20,000,000",
        "Lease tenor / repayment period: 1 year",
        "Lease rental paid in equal instalments (monthly, bi-weekly, or weekly)",
        "Collateral may be mandatory but advanced rental is not required",
        "Asset title is transferred back to the lessee upon payment of the final instalment",
      ],
    },
    {
      slug: "alternative-energy",
      title: "Alternative Energy Finance",
      suitability:
        "Suitable for individual homes, business premises, and residential estates.",
      details: [
        "Qualified assets: solar panels, inverters, gas generators, and diesel/petrol to gas generator conversion",
        "Asset cost: ₦2,000,000 to ₦30,000,000",
        "Lease tenor / repayment period: up to 2 years",
        "Lease rental paid in equal instalments (monthly, bi-weekly, or weekly)",
        "Collateral may be required but advanced rental is mandatory",
        "Asset title is transferred to the lessee upon payment of the final instalment",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Loan Products"
        description="Choose from working capital, invoice and purchase order finance, sale lease back, and alternative energy financing."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <LoanProductCard key={product.title} product={product} />
        ))}
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
              ₦500,000
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Interest Rate", "5% APR"],
              ["Loan Term", "6 months"],
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
            <PrimaryButton href="/loans/apply" label="Apply Now" />
            <SecondaryButton href="/how-it-works" label="Compare Options" />
          </div>
        </div>
        <PortraitCard />
      </section>
      <LoanSolutions />
      <PathToCapital />
      <MetricStrip
        items={[
          { value: "₦200M+", label: "Disbursed" },
          { value: "98%", label: "Client Retention" },
          { value: "A+", label: "Risk Rating" },
          { value: "24/7", label: "Expert Access" },
        ]}
      />
    </AppFrame>
  );
}
