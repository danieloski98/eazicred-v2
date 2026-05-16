"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AppFrame, SectionIntro } from "@/components/marketing/site-shell";

const loanTypeLabels: Record<string, string> = {
  "working-capital": "Working Capital Business Loan",
  "invoice-po": "Invoice / Purchase Order Finance",
  "sale-lease-back": "Sale Lease Back",
  "alternative-energy": "Alternative Energy Finance",
};

function LoanApplicationContent() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";

  const loanTypeLabel = useMemo(() => {
    if (!type) return null;
    return loanTypeLabels[type] ?? type;
  }, [type]);

  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Loan Application"
        description={
          loanTypeLabel
            ? `Quick and easy application for: ${loanTypeLabel}.`
            : "Quick and easy loan application."
        }
      />

      <div className="mx-auto max-w-5xl">
        <article className="soft-shadow mx-auto w-full rounded-[24px] bg-white p-6 lg:w-[50%]">
          <div className="mt-2">
            {loading ? (
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                  <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                  <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                  <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                  <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                </div>
              </div>
            ) : null}

            <iframe
              title="Loan application form"
              src="https://x.loandisk.com/form_api/iframe.php?formSlug=L1MjtT58VAmNfHcYpIU7uWa4Dek692"
              className="w-full rounded-2xl"
              style={{ minHeight: "1000px", padding: "5px" }}
              allowFullScreen
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function LoanApplicationFallback() {
  return (
    <section className="space-y-6">
      <SectionIntro
        align="center"
        title="Loan Application"
        description="Quick and easy loan application."
      />

      <div className="mx-auto max-w-5xl">
        <article className="soft-shadow mx-auto w-full rounded-[24px] bg-white p-6 lg:w-[50%]">
          <div className="mt-2 space-y-6">
            <div className="space-y-3">
              <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
            </div>
            <div className="space-y-3">
              <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
            </div>
            <div className="space-y-3">
              <div className="h-8 w-2/3 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-8 w-1/2 animate-pulse rounded-xl bg-slate-100" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function LoanApplicationPage() {
  return (
    <AppFrame active="loans">
      <Suspense fallback={<LoanApplicationFallback />}>
        <LoanApplicationContent />
      </Suspense>
    </AppFrame>
  );
}
