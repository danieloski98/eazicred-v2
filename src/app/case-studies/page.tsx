import { AppFrame, SectionIntro } from "@/components/marketing/site-shell";

type CaseStudy = {
  title: string;
  loan: string;
  use: string;
  result: string;
};

export default function CaseStudiesPage() {
  const studies: CaseStudy[] = [
    {
      title: "Fashion Retailer – Working Capital",
      loan: "Loan: ₦3.5M for 6 months",
      use: "Use: Stock up before December sales peak",
      result:
        "Result: Revenue grew 62% YoY, loan repaid in 5 months. Allowed business to open a 2nd kiosk in Ikeja.",
    },
    {
      title: "Catering Business – Equipment Finance",
      loan: "Loan: ₦7.2M for 12 months",
      use: "Use: Purchase industrial ovens and delivery van",
      result:
        "Result: Doubled event capacity, landed 3 corporate contracts. Created 8 new jobs.",
    },
    {
      title: "Auto Spare Parts Dealer – Inventory Restock",
      loan: "Loan: ₦2M for 4 months",
      use: "Use: Import parts from Dubai",
      result:
        "Result: Stock turnover increased 40%, avoided stockouts during Q1 demand spike. Repaid early.",
    },
    {
      title: "Poultry Farm – Expansion",
      loan: "Loan: ₦5M for 9 months",
      use: "Use: Build 2 new poultry houses and buy day-old chicks",
      result:
        "Result: Monthly output rose from 2,000 to 5,000 birds. Secured supply contract with 2 supermarkets.",
    },
    {
      title: "Logistics SME – Asset Finance",
      loan: "Loan: ₦12M for 12 months",
      use: "Use: Purchase used trucks for inter-state haulage",
      result:
        "Result: Monthly revenue up 85%, onboarded 4 new FMCG clients. Loan performing, considering 2nd facility.",
    },
    {
      title: "POS Agency Network – Liquidity Support",
      loan: "Loan: ₦1.8M for 3 months",
      use: "Use: Float for 15 agents during cash scarcity period",
      result:
        "Result: Maintained 99% uptime, agent commissions grew 30%. Repaid in 10 weeks.",
    },
    {
      title: "Restaurant Chain – Renovation",
      loan: "Loan: ₦4.5M for 12 months",
      use: "Use: Renovate 2 branches",
      result:
        "Result: Average ticket size up 25%, customer reviews improved. Branch 2 broke even in 4 months.",
    },
    {
      title: "Agro Processor – Raw Material Purchase",
      loan: "Loan: ₦6M for 6 months",
      use: "Use: Buy maize and soybeans during harvest season at lower price",
      result:
        "Result: Reduced COGS by 18%, margin improved. Exported first batch to Ghana.",
    },
    {
      title: "Laptop and Phone Tech Repair Shop – Staff & Tools",
      loan: "Loan: ₦1.2M for 8 months",
      use: "Use: Hire 2 technicians and buy diagnostic equipment",
      result:
        "Result: Service turnaround cut from 5 days to 2 days. 40% increase in monthly jobs.",
    },
    {
      title: "Cold Room Operator – Energy Solution",
      loan: "Loan: ₦8M for 12 months",
      use: "Use: Install solar + inverter system to cut diesel costs",
      result:
        "Result: Monthly diesel spend down 70%. Saved ₦450k/month, loan services itself from savings.",
    },
  ];

  return (
    <AppFrame active="case-studies">
      <section className="space-y-6">
        <SectionIntro
          eyebrow="Impact"
          title="Case Studies"
          description="Real businesses using Eazicred financing to grow revenue, expand operations, and improve resilience."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {studies.map((study) => (
            <article key={study.title} className="soft-shadow rounded-[24px] bg-white p-6">
              <p className="text-base font-semibold text-slate-950">{study.title}</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-500">
                <p>{study.loan}</p>
                <p>{study.use}</p>
                <p>{study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppFrame>
  );
}

