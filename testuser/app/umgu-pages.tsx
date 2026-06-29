import type { ReactNode } from "react";

type IconName =
  | "bot"
  | "megaphone"
  | "sales"
  | "people"
  | "crm"
  | "rocket"
  | "shield"
  | "globe"
  | "code"
  | "database"
  | "target"
  | "diamond"
  | "bolt"
  | "mail"
  | "phone"
  | "building"
  | "map"
  | "chart"
  | "chat"
  | "clock";

const iconPaths: Record<IconName, ReactNode> = {
  bot: (
    <>
      <rect x="10" y="18" width="28" height="20" rx="7" />
      <path d="M24 18v-6M20 12h8" />
      <path d="M18 28h.01M30 28h.01M20 33c2.4 2 5.6 2 8 0" />
    </>
  ),
  megaphone: (
    <>
      <path d="M9 27h7l18-11v22L16 29H9z" />
      <path d="m16 29 3 10" />
      <path d="M37 22c2 1.3 3 3 3 5s-1 3.7-3 5" />
    </>
  ),
  sales: (
    <>
      <path d="M11 36h26" />
      <path d="M15 31v-8M24 31V16M33 31V10" />
      <path d="m13 17 8-7 7 5 8-9" />
    </>
  ),
  people: (
    <>
      <circle cx="18" cy="18" r="5" />
      <circle cx="31" cy="19" r="4" />
      <path d="M9 38c1.8-6 5-9 9-9s7.2 3 9 9" />
      <path d="M27 31c3.8.4 6.5 2.7 8 7" />
    </>
  ),
  crm: (
    <>
      <circle cx="24" cy="18" r="7" />
      <path d="M12 39c2.5-7 6.5-10 12-10s9.5 3 12 10" />
      <rect x="8" y="8" width="32" height="32" rx="10" />
    </>
  ),
  rocket: (
    <>
      <path d="M28 9c5.2.7 8.3 3.8 9 9L25 30l-7-7z" />
      <path d="M18 23h-7l5-8h7M25 30v7l8-5v-7" />
      <path d="M15 33l-4 4" />
    </>
  ),
  shield: (
    <>
      <path d="M24 7 38 13v10c0 8.5-5.6 14.4-14 18-8.4-3.6-14-9.5-14-18V13z" />
      <path d="m18 24 4 4 8-9" />
    </>
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24h32M24 8c4 4.2 6 9.5 6 16s-2 11.8-6 16M24 8c-4 4.2-6 9.5-6 16s2 11.8 6 16" />
    </>
  ),
  code: (
    <>
      <path d="m18 16-8 8 8 8M30 16l8 8-8 8" />
      <path d="m27 12-6 24" />
    </>
  ),
  database: (
    <>
      <ellipse cx="24" cy="12" rx="13" ry="5" />
      <path d="M11 12v22c0 2.8 5.8 5 13 5s13-2.2 13-5V12M11 23c0 2.8 5.8 5 13 5s13-2.2 13-5" />
    </>
  ),
  target: (
    <>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 24 38 10" />
    </>
  ),
  diamond: (
    <>
      <path d="M24 40 8 19l7-10h18l7 10z" />
      <path d="M15 9 24 40 33 9M8 19h32" />
    </>
  ),
  bolt: <path d="M27 7 11 27h12l-2 14 16-21H25z" />,
  mail: (
    <>
      <rect x="8" y="13" width="32" height="24" rx="4" />
      <path d="m10 16 14 12 14-12" />
    </>
  ),
  phone: (
    <>
      <path d="M17 10c3 10 9 16 21 21l-4 7c-14-4-22-12-26-26z" />
      <path d="m17 10 5-2 5 8-4 3M38 31l2 5-8 5-3-5" />
    </>
  ),
  building: (
    <>
      <path d="M12 39V11h18v28M30 21h8v18" />
      <path d="M17 17h2M23 17h2M17 24h2M23 24h2M17 31h2M23 31h2" />
    </>
  ),
  map: (
    <>
      <path d="M24 41s12-10 12-21a12 12 0 0 0-24 0c0 11 12 21 12 21z" />
      <circle cx="24" cy="20" r="4" />
    </>
  ),
  chart: (
    <>
      <path d="M9 36h30" />
      <path d="M14 31v-8M23 31V15M32 31V10" />
      <path d="m13 16 7 5 8-9 7 4" />
    </>
  ),
  chat: (
    <>
      <path d="M10 12h28v19H20l-8 7v-7h-2z" />
      <path d="M18 21h.01M24 21h.01M30 21h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 14v11l7 4" />
    </>
  ),
};

export function Header({ active }: { active: string }) {
  const nav = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Products", "/products"],
    ["About Us", "/about"],
    ["Case Studies", "/case-studies"],
    ["Blog", "#blog"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="up-header">
      <a className="up-brand" href="/">UMG<span>U</span></a>
      <nav aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a className={active === label ? "active" : ""} href={href} key={label}>{label}</a>
        ))}
      </nav>
      <a className="up-demo" href="/contact">Get a Demo <span>-&gt;</span></a>
    </header>
  );
}

export function Icon({ name }: { name: IconName }) {
  return (
    <span className="up-icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false">{iconPaths[name]}</svg>
    </span>
  );
}

export function HeroCube({ labels = ["AI Marketing", "AI Sales", "AI HR", "CRM"] }: { labels?: string[] }) {
  const icons: IconName[] = ["megaphone", "sales", "people", "crm"];

  return (
    <div className="up-cube-scene" aria-hidden="true">
      <span className="up-ring ring-a" />
      <span className="up-ring ring-b" />
      <span className="up-ring ring-c" />
      <div className="up-core-cube">U</div>
      {labels.map((label, index) => (
        <div className={`up-floating-card float-${index + 1}`} key={label}>
          <Icon name={icons[index] ?? "bot"} />
          <b>{label}</b>
        </div>
      ))}
    </div>
  );
}

export function MetricGrid({ items }: { items: string[][] }) {
  return (
    <div className="up-metrics">
      {items.map(([label, value, change]) => (
        <div key={label}>
          <small>{label}</small>
          <strong>{value}</strong>
          <span>{change}</span>
        </div>
      ))}
    </div>
  );
}

export function ChartPanel({ title = "Performance Overview" }: { title?: string }) {
  return (
    <div className="up-chart-card">
      <div className="up-card-head"><b>{title}</b><span>This Month</span></div>
      <svg viewBox="0 0 420 180" aria-label={title}>
        <defs>
          <linearGradient id="upArea" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#7c35ff" stopOpacity=".68" />
            <stop offset="1" stopColor="#27d5ff" stopOpacity=".02" />
          </linearGradient>
          <linearGradient id="upLine" x1="0" x2="1">
            <stop stopColor="#9b4dff" />
            <stop offset="1" stopColor="#31d9ff" />
          </linearGradient>
        </defs>
        <path d="M20 150 L82 98 L144 120 L205 64 L268 92 L330 55 L400 22 L400 170 L20 170 Z" fill="url(#upArea)" />
        <path d="M20 150 L82 98 L144 120 L205 64 L268 92 L330 55 L400 22" fill="none" stroke="url(#upLine)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function ProductDashboard() {
  return (
    <div className="up-dashboard">
      <aside>
        <div className="up-dash-logo">UMG<span>U</span></div>
        {["Overview", "Campaigns", "Leads", "Chatbot", "Content", "Analytics", "Automations", "Settings"].map((item, index) => (
          <p className={index === 0 ? "active" : ""} key={item}>{item}</p>
        ))}
      </aside>
      <main>
        <div className="up-profile">John Doe<br /><small>Marketing Manager</small></div>
        <h3>Dashboard</h3>
        <MetricGrid items={[["Total Leads", "12,540", "+18.2%"], ["Conversions", "2,340", "+23.4%"], ["Conversion Rate", "24.5%", "+16.3%"], ["Revenue", "$82,540", "+21.4%"]]} />
        <div className="up-dash-grid">
          <ChartPanel />
          <div className="up-mini-panel">
            <b>Leads by Source</b>
            <span className="up-donut" />
            <p>Website 45%</p>
            <p>Social Media 25%</p>
            <p>Email 20%</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="up-checklist">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function PageShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <main className="up-page">
      <Header active={active} />
      {children}
    </main>
  );
}
