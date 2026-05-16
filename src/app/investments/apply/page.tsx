"use client";

import { useState } from "react";

import { AppFrame, SectionIntro } from "@/components/marketing/site-shell";

export default function InvestmentApplicationPage() {
  const [loading, setLoading] = useState(true);

  return (
    <AppFrame active="investments">
      <section className="space-y-6">
        <SectionIntro
          align="center"
          title="Invest now"
          description="We’re here to help. Send us a message and we’ll respond as soon as possible."
        />

        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2">
          <article className="soft-shadow rounded-[24px] bg-white p-6">
            <p className="text-lg font-semibold text-slate-950">
              Open an investment account
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-500">
              Fill out the form below to send us a message.
            </p>

            <div className="mt-6">
              {loading ? (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="h-11 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                    <div className="h-11 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-11 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                    <div className="h-11 w-1/2 animate-pulse rounded-xl bg-slate-100" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-11 w-2/3 animate-pulse rounded-xl bg-slate-100" />
                    <div className="h-32 w-full animate-pulse rounded-xl bg-slate-100" />
                  </div>
                </div>
              ) : null}

              <iframe
                title="Investment application form"
                src="https://x.loandisk.com/form_api/iframe.php?formSlug=H9VFhGUP3pzK4MBi6A7XnLRtIbwYWo"
                className="w-full rounded-2xl"
                style={{ minHeight: "500px", padding: "5px" }}
                allowFullScreen
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
              />
            </div>
          </article>

          <article className="soft-shadow rounded-[24px] bg-slate-50 p-6">
            <p className="text-lg font-semibold text-slate-950">
              Other Ways to Reach Us
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-500">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-sky-500"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.16a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-slate-950">Phone</p>
                  <p>+234 802 074 0286</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-sky-500"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-slate-950">Email</p>
                  <p>contact@eazicred.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-sky-500"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-slate-950">Address</p>
                  <p>
                    Standard Alliance Building Plot 1, Block 94 Providence street,
                    Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </AppFrame>
  );
}

