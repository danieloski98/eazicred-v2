import Link from "next/link";
import { ReactNode } from "react";

type NavKey = "home" | "loans" | "investments" | "how-it-works";

type NavItem = {
  href: string;
  label: string;
  key: NavKey;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/loans", label: "Loans", key: "loans" },
  { href: "/investments", label: "Investments", key: "investments" },
  { href: "/how-it-works", label: "How It Works", key: "how-it-works" },
];

const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Our Story", "Careers", "Contact Support"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Pricing", "Privacy Policy", "Risk Guide"],
  },
  {
    title: "Contact",
    links: ["support@eazicred.co", "+1 (202) 555-0184", "Mon–Fri · 8am–6pm"],
  },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-2 font-semibold text-slate-950">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
        E
      </span>
      <span className="text-sm tracking-tight">Eazicred</span>
    </div>
  );
}

export function AppFrame({
  active,
  children,
}: {
  active: NavKey;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#ffffff] px-3 py-4 sm:px-5">
      <div className="mx-auto max-w-6xl rounded-[26px] border-[0px] border-slate-200/70 bg-white p-3 sm:p-5">
        <header className="mb-8 flex flex-col gap-4 rounded-[18px] border border-slate-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark />
          <nav className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
            {navItems.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive
                      ? "bg-sky-50 text-sky-600"
                      : "hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 text-[13px]">
            <Link href="#" className="text-slate-500 transition hover:text-slate-900">
              Login
            </Link>
            <Link
              href="#"
              className="rounded-full bg-sky-400 px-4 py-2 font-medium text-white transition hover:bg-sky-500"
            >
              Get Started
            </Link>
          </div>
        </header>
        <main className="space-y-10">{children}</main>
        <footer className="mt-10 grid gap-8 border-t border-slate-100 pt-8 text-sm text-slate-500 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <BrandMark />
            <p className="max-w-xs text-[13px] leading-6 text-slate-400">
              Intelligent capital products built to help founders and investors
              move with more confidence.
            </p>
            <div className="flex gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs">
                in
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-xs">
                x
              </span>
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">{column.title}</h3>
              <ul className="space-y-2 text-[13px]">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-md bg-sky-400 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
    >
      {label}
    </Link>
  );
}

export function SecondaryButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
    >
      {label}
    </Link>
  );
}

export function CallToAction({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <section className="card-shadow overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(83,174,246,0.35),_transparent_32%),linear-gradient(135deg,_#060b1c,_#142449)] px-6 py-10 text-white sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="rounded-md bg-sky-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-500"
          >
            {primaryLabel}
          </Link>
          <Link
            href="#"
            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
