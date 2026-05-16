"use client";

import { useState } from "react";

import { AppFrame, PrimaryButton, SectionIntro } from "@/components/marketing/site-shell";

function AdvisoryForm() {
  const [loading, setLoading] = useState(true);

  return (
    <article id="form" className="soft-shadow rounded-[24px] bg-white p-6">
      <p className="text-lg font-semibold text-slate-950">Schedule a Consultation</p>
      <p className="mt-2 text-sm leading-7 text-slate-500">
        Take the first step toward achieving your business goals with confidence.
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
          title="Advisory consultation form"
          src="https://x.loandisk.com/form_api/iframe.php?formSlug=REPjUVylX0YT3FArd7wtioxOfgekCh"
          className="w-full rounded-2xl"
          style={{ minHeight: "500px", padding: "5px" }}
          allowFullScreen
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
    </article>
  );
}

export default function AdvisoryPage() {
  const whyChooseUs = [
    {
      title: "Tailored Solutions for SMEs",
      description:
        "Every SME is unique. Whether you’re a start-up seeking direction or an established business aiming for growth, we deliver solutions designed around your goals.",
    },
    {
      title: "Experienced Advisory Team",
      description:
        "Seasoned professionals across industries, from financial management to strategic planning—helping you make informed decisions with confidence.",
    },
    {
      title: "Results-Oriented Approach",
      description:
        "Practical, actionable advice that drives measurable results. We partner with you to design and implement strategies that achieve your objectives.",
    },
  ];

  const services = [
    {
      number: 1,
      title: "Business Strategy & Planning",
      description:
        "Clear, actionable strategies for growth—assessing your market, competition, and internal capabilities to position your business for success.",
    },
    {
      number: 2,
      title: "Financial Management & Consulting",
      description:
        "Support on accounting software setup, cash flow management, budgeting, forecasting, and securing funding to strengthen sustainability.",
    },
    {
      number: 3,
      title: "Operational Efficiency",
      description:
        "Process optimization, supply chain improvement, and technology implementation to unlock cost savings and productivity gains.",
    },
    {
      number: 4,
      title: "FX Brokerage",
      description:
        "Access foreign exchange at competitive rates—pay suppliers abroad or repatriate FX payments with better outcomes and clarity.",
    },
    {
      number: 5,
      title: "Business Exit & Succession Planning",
      description:
        "Guidance on valuations, exit strategies, and succession planning to support a smooth and profitable ownership transition.",
    },
  ];

  const approach = [
    {
      title: "Collaborative",
      description:
        "We work closely with clients, building partnerships based on trust and transparency with ongoing support.",
    },
    {
      title: "Proactive",
      description:
        "We identify potential challenges early and provide solutions before they become obstacles—keeping you ahead of the curve.",
    },
    {
      title: "Adaptable",
      description:
        "Business needs evolve. We stay flexible and adjust recommendations to match your changing environment and priorities.",
    },
  ];

  const industries = [
    "Manufacturing & Retail",
    "Technology & Startups",
    "Healthcare & Professional Services",
    "Hospitality & Food Services",
  ];

  return (
    <AppFrame active="advisory">
      <section className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Advisory"
            title="Expert Advisory Services for SMEs"
            description="At Eazicred we provide expert advisory services tailored to the needs of small and medium-sized enterprises. Our mission is to empower businesses with the guidance to navigate challenges, seize opportunities, and thrive in today’s competitive landscape."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#form" label="Schedule a Consultation" />
          </div>
        </div>
        <AdvisoryForm />
      </section>

      <section className="space-y-6">
        <SectionIntro
          align="center"
          eyebrow="Why Choose Us"
          title="Expert Business Advisory"
          description="We’re committed to your business success with tailored solutions for SMEs."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="soft-shadow rounded-[24px] bg-white p-6">
              <p className="text-base font-semibold text-slate-950">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          align="center"
          eyebrow="Our Services"
          title="Comprehensive Business Solutions"
          description="A range of specialized services designed to help your business thrive."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="soft-shadow rounded-[24px] bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-sm font-semibold text-white">
                  {service.number}
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-950">{service.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          align="center"
          eyebrow="Our Approach"
          title="How We Work With You"
          description="A simple methodology that ensures your business receives the support it needs to succeed."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="soft-shadow rounded-[24px] bg-white p-6">
              <p className="text-base font-semibold text-slate-950">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          align="center"
          eyebrow="Industries"
          title="Industries We Serve"
          description="Specialized expertise across diverse sectors."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article key={industry} className="soft-shadow rounded-[24px] bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-950">{industry}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-shadow overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(83,174,246,0.35),_transparent_32%),linear-gradient(135deg,_#060b1c,_#142449)] px-6 py-10 text-white sm:px-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Let’s Build Your Future Together
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">
              We are committed to helping SMEs unlock their full potential. Whether you’re
              aiming for growth, navigating challenges, or preparing for the future, we’re
              here to provide the expertise and guidance you need.
            </p>
            <div className="mt-8">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="mt-2 text-sm text-white/70">
              Contact us today to take the first step toward achieving your business goals
              with confidence.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[18px] bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Email</p>
                <p className="mt-2 text-base font-semibold">contact@eazicred.com</p>
              </div>
              <div className="rounded-[18px] bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Phone</p>
                <p className="mt-2 text-base font-semibold">+234 8020740286</p>
                <p className="mt-2 text-xs text-white/60">Mon–Fri · 9am–5pm WAT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppFrame>
  );
}
