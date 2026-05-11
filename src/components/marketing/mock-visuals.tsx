export function MarketDashboard() {
  return (
    <div className="card-shadow relative min-h-[280px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#050a12,_#121c2b)] p-5 text-white sm:min-h-[320px]">
      <div className="absolute inset-0 marketing-grid opacity-20" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Sales and Finance</span>
          <span>Overview</span>
        </div>
        <div className="mt-4 rounded-[18px] bg-white/6 p-4 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <span>Market Flow</span>
            <span>Live</span>
          </div>
          <div className="relative h-36 rounded-[14px] bg-[linear-gradient(180deg,_rgba(83,174,246,0.1),_transparent)]">
            <div className="absolute inset-0 marketing-grid opacity-40" />
            <svg viewBox="0 0 300 140" className="absolute inset-0 h-full w-full">
              <path
                d="M0 92C18 94 20 50 40 52C62 54 61 98 84 97C108 96 106 38 132 38C155 38 155 85 180 84C203 84 205 45 227 44C249 42 252 76 276 75C288 75 292 64 300 63"
                fill="none"
                stroke="#53aef6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M0 96C18 98 20 66 40 68C62 71 61 115 84 112C108 108 106 55 132 56C155 57 155 103 180 102C203 102 205 66 227 66C249 65 252 91 276 90C288 90 292 81 300 80"
                fill="none"
                stroke="#55bf8e"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-white/8 px-3 py-2 text-xs text-slate-300">
            <span>Portfolio Balance</span>
            <span className="font-semibold text-emerald-300">+4.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthChart() {
  return (
    <div className="card-shadow relative min-h-[220px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#08101d,_#12253e)] p-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(83,174,246,0.3),_transparent_45%)]" />
      <div className="absolute inset-0 marketing-grid opacity-20" />
      <div className="relative h-full">
        <div className="flex items-start justify-between text-[11px] text-slate-400">
          <span>Growth Index</span>
          <span>Last 12 Months</span>
        </div>
        <svg viewBox="0 0 320 170" className="mt-8 h-40 w-full">
          <defs>
            <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#53aef6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#53aef6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M10 130C40 129 52 99 75 96C104 93 107 124 136 118C170 110 183 38 214 35C251 33 251 74 283 70C298 69 304 50 310 46V170H10Z"
            fill="url(#growth-fill)"
          />
          <path
            d="M10 130C40 129 52 99 75 96C104 93 107 124 136 118C170 110 183 38 214 35C251 33 251 74 283 70C298 69 304 50 310 46"
            fill="none"
            stroke="#7ad7ff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function PortraitCard() {
  return (
    <div className="card-shadow relative min-h-[280px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#0d1117,_#2f3f57)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_42%)]" />
      <div className="absolute left-1/2 top-10 h-48 w-36 -translate-x-1/2 rounded-[28px] bg-[linear-gradient(180deg,_#e5edf8,_#91a3bc)] shadow-[0_20px_40px_rgba(0,0,0,0.3)]" />
      <div className="absolute left-1/2 top-16 h-20 w-20 -translate-x-1/2 rounded-full bg-[#f4d1bb]" />
      <div className="absolute left-1/2 top-[5.7rem] h-7 w-16 -translate-x-1/2 rounded-full bg-[#2d3139]" />
      <div className="absolute left-1/2 top-[8rem] h-9 w-9 -translate-x-1/2 rounded-full border border-slate-400/30 bg-[#f4d1bb]" />
      <div className="absolute left-1/2 top-[10rem] h-28 w-24 -translate-x-1/2 rounded-t-[26px] bg-[#204772]" />
      <div className="absolute left-1/2 top-[14rem] h-20 w-28 -translate-x-1/2 rounded-b-[24px] bg-[#17375b]" />
      <div className="absolute left-[57%] top-[9.5rem] h-12 w-4 -rotate-12 rounded-full bg-[#f4d1bb]" />
      <div className="absolute left-[58%] top-[8rem] h-10 w-10 rounded-full border-4 border-white/70 bg-[#e8f1ff]" />
    </div>
  );
}

export function LaptopCard() {
  return (
    <div className="card-shadow relative min-h-[280px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,_#11191f,_#7a8c82)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,210,0.45),_transparent_38%)]" />
      <div className="absolute left-1/2 top-10 h-36 w-28 -translate-x-1/2 rounded-[18px] border border-white/20 bg-[linear-gradient(180deg,_#161f28,_#313f47)] shadow-[0_18px_30px_rgba(0,0,0,0.35)]" />
      <div className="absolute left-1/2 top-14 h-24 w-16 -translate-x-1/2 rounded-[10px] border border-white/12 bg-[linear-gradient(180deg,_#0f1620,_#18273a)]" />
      <div className="absolute bottom-12 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full bg-[#2e3845]" />
      <div className="absolute bottom-9 left-1/2 h-3 w-52 -translate-x-1/2 rounded-full bg-[#8f9d94]" />
    </div>
  );
}

export function StatsPanel({
  label,
  value,
  accent = "blue",
}: {
  label: string;
  value: string;
  accent?: "blue" | "green";
}) {
  return (
    <div
      className={`rounded-[18px] p-5 ${
        accent === "green"
          ? "bg-emerald-400 text-white"
          : "bg-sky-400 text-white"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-white/75">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{value}</p>
    </div>
  );
}

export function DataBarsCard() {
  return (
    <div className="soft-shadow rounded-[22px] bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Eazicred Prime Yield</p>
          <p className="mt-1 text-xs text-slate-400">Diversified access to structured opportunities.</p>
        </div>
        <p className="text-sm font-semibold text-sky-500">14.57% p.a</p>
      </div>
      <div className="mt-6 flex h-36 items-end gap-2">
        {[34, 48, 72, 98].map((height, index) => (
          <div key={height} className="flex-1">
            <div
              className={`rounded-t-[8px] ${
                index === 3 ? "bg-sky-500" : "bg-slate-200"
              }`}
              style={{ height }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MinimalChartCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[22px] bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
        <span className="text-xs font-semibold text-slate-400">Live</span>
      </div>
      <div className="mt-5 space-y-3">
        <div className="h-2 rounded-full bg-slate-200">
          <div className="h-2 w-2/3 rounded-full bg-emerald-400" />
        </div>
        <div className="h-2 rounded-full bg-slate-200">
          <div className="h-2 w-1/2 rounded-full bg-sky-400" />
        </div>
      </div>
    </div>
  );
}
