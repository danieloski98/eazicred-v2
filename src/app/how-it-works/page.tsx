import {
  AppFrame,
  CallToAction,
  PrimaryButton,
  SecondaryButton,
  SectionIntro,
} from "@/components/marketing/site-shell";
import { InfoCard } from "@/components/marketing/cards";
import { LaptopCard } from "@/components/marketing/mock-visuals";

function JourneySteps() {
  const steps = [
    {
      title: "Quick Application",
      description:
        "Complete your initial onboarding in minutes with a guided digital flow.",
      cardTitle: "Application",
      tone: "bg-[linear-gradient(135deg,_#0d1a2a,_#213b56)]",
      align: "right",
    },
    {
      title: "Smart Assessment",
      description:
        "Our systems review your profile against tailored lending and investment pathways.",
      cardTitle: "Safe for work",
      tone: "bg-[linear-gradient(135deg,_#06080f,_#172033)]",
      align: "left",
    },
    {
      title: "Instant Funding",
      description:
        "Once approved, your capital strategy is activated with fast documentation and deployment.",
      cardTitle: "Funding",
      tone: "bg-[linear-gradient(135deg,_#4f7f7e,_#93bcb8)]",
      align: "right",
    },
  ] as const;

  return (
    <section className="space-y-6">
      <SectionIntro align="center" title="Choose your journey" />
      <div className="flex justify-center gap-3">
        <span className="rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-white">
          For Borrowers
        </span>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500">
          For Investors
        </span>
      </div>
      <div className="mx-auto max-w-4xl space-y-5">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center ${
              step.align === "left" ? "" : ""
            }`}
          >
            <div className={step.align === "left" ? "order-1" : "order-1 lg:order-1"}>
              {step.align === "left" ? (
                <div className={`card-shadow min-h-[140px] rounded-[22px] ${step.tone} p-6 text-white`}>
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    {step.cardTitle}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 lg:pr-8">
                  <p className="text-base font-semibold text-slate-950">{step.title}</p>
                  <p className="text-sm leading-7 text-slate-500">{step.description}</p>
                </div>
              )}
            </div>
            <div className="order-2 flex justify-center">
              <div className="flex flex-col items-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                {index !== steps.length - 1 ? (
                  <span className="h-12 w-px bg-sky-100 lg:h-20" />
                ) : null}
              </div>
            </div>
            <div className="order-3">
              {step.align === "right" ? (
                <div className={`card-shadow min-h-[140px] rounded-[22px] ${step.tone} p-6 text-white`}>
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    {step.cardTitle}
                  </p>
                </div>
              ) : (
                <div className="space-y-2 lg:pl-8">
                  <p className="text-base font-semibold text-slate-950">{step.title}</p>
                  <p className="text-sm leading-7 text-slate-500">{step.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="-mx-3 rounded-[28px] bg-slate-50 px-3 py-12 sm:-mx-5 sm:px-5">
      <SectionIntro
        align="center"
        eyebrow="Our Impact"
        title="Driven by Precision and Trust"
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.5fr]">
        <InfoCard
          title="Born from a vision to democratize institutional-grade finance."
          description="Eazicred combines underwriting technology, thoughtful product design, and real support to make sophisticated financial tools easier to access."
        />
        <div className="grid gap-4">
          <InfoCard
            title="Security First"
            description="Robust compliance controls and encrypted workflows keep every interaction protected."
            accent="dark"
          />
          <InfoCard
            title="₦150M+ Managed"
            description="Clear governance and high-touch advisory support across each capital pathway."
            accent="mint"
          />
        </div>
       
      </div>
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <AppFrame active="how-it-works">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <SectionIntro
            eyebrow="Discover Our Solution"
            title="Financial empowerment, simplified."
            description="Whether you are looking to grow business capacity or deploy your capital wisely, Eazicred helps you navigate with less friction."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#" label="Get Started" />
            <SecondaryButton href="/loans" label="Learn More" />
          </div>
        </div>
        <LaptopCard />
      </section>
      <JourneySteps />
      <TrustSection />
      <CallToAction
        title="Ready to start your journey?"
        description="Review your options, and connect with the right Eazicred pathway today."
        secondaryLabel="Talk to an Advisor"
      />
    </AppFrame>
  );
}
