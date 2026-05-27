import { ReactNode } from "react";

export function InfoCard({
  icon,
  showIcon = true,
  title,
  description,
  accent = "light",
  footer,
}: {
  icon?: ReactNode;
  showIcon?: boolean;
  title: string;
  description: string;
  accent?: "light" | "dark" | "mint";
  footer?: string;
}) {
  const tone =
    accent === "dark"
      ? "bg-slate-900 text-white"
      : accent === "mint"
        ? "bg-emerald-400 text-white"
        : "bg-slate-50 text-slate-950";

  const muted = accent === "light" ? "text-slate-500" : "text-white/70";
  const resolvedIcon = icon ?? (
    // <img
    //   src="/logo.png"
    //   alt=""
    //   className="h-7 w-7 object-contain"
    //   loading="lazy"
    // />
    <></>
  );

  return (
    <article className={`soft-shadow rounded-[22px] p-6 ${tone}`}>
      {/* {showIcon ? (
        <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-slate-700 shadow-sm">
          {resolvedIcon}
        </div>
      ) : null} */}
      <h3 className="text-lg font-semibold tracking-[-0.03em]">{title}</h3>
      <p className={`mt-2 text-sm leading-6 ${muted}`}>{description}</p>
      {footer ? <p className={`mt-6 text-xs font-medium ${muted}`}>{footer}</p> : null}
    </article>
  );
}

export function MetricStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <section className="grid gap-px overflow-hidden rounded-[24px] bg-slate-800 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-[radial-gradient(circle_at_top,_rgba(83,174,246,0.26),_transparent_40%),#0b1325] px-6 py-7 text-center"
        >
          <p className="text-3xl font-semibold tracking-[-0.04em] text-sky-400">
            {item.value}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}

export function Checklist({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] text-emerald-500">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
