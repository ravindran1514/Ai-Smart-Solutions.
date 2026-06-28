import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type ServiceDetail = {
  slug: string;
  number: string;
  crumb: string;
  title: string;
  accent: string;
  lead: string;
  cta: string;
  secondary: string;
  visual: "chatbot" | "website" | "mobile" | "software" | "design";
  highlights: [IconName, string, string][];
  whatYouGet: string[];
  metrics: [string, string, string][];
  chartTitle: string;
  process: [IconName, string, string, string][];
};

type IconName =
  | "analytics"
  | "automation"
  | "bot"
  | "briefcase"
  | "code"
  | "design"
  | "device"
  | "growth"
  | "integration"
  | "maintenance"
  | "mobile"
  | "performance"
  | "prototype"
  | "rocket"
  | "search"
  | "security"
  | "support"
  | "target"
  | "testing"
  | "ux"
  | "web";

const services: ServiceDetail[] = [
  {
    slug: "ai-marketing-tool-with-chatbot",
    number: "01",
    crumb: "AI Marketing Tool with Chatbot",
    title: "AI Marketing Tool",
    accent: "with Chatbot",
    lead: "Smart AI tools and chatbots that engage visitors, capture leads, and boost conversions automatically.",
    cta: "Get Started",
    secondary: "Book a Demo",
    visual: "chatbot",
    highlights: [
      ["bot", "24/7 AI Chatbot", "Support"],
      ["target", "Lead Generation", "& Qualification"],
      ["automation", "Smart Campaign", "Automation"],
      ["analytics", "Real-time Analytics", "& Insights"],
    ],
    whatYouGet: [
      "AI Chatbot for Website & Social Media",
      "Lead Capture & Qualification",
      "Automated Follow-ups & Nurturing",
      "Smart Campaign Builder",
      "Real-time Analytics Dashboard",
      "Integration with CRM & Email Tools",
    ],
    metrics: [["Total Leads", "12,540", "+18.2%"], ["Active Campaigns", "230", "+9.1%"], ["Conversion Rate", "24.5%", "+12.7%"]],
    chartTitle: "Performance Overview",
    process: [
      ["target", "01", "Connect", "Integrate your website and channels"],
      ["automation", "02", "Automate", "Set up AI chatbot and campaigns"],
      ["bot", "03", "Engage", "Engage visitors and capture quality leads"],
      ["support", "04", "Nurture", "Nurture leads and follow up automatically"],
      ["growth", "05", "Convert", "Boost conversions and grow your business"],
    ],
  },
  {
    slug: "custom-website-development",
    number: "02",
    crumb: "Custom Website Development",
    title: "Custom Website",
    accent: "Development",
    lead: "We design and develop modern, responsive, and SEO-friendly websites tailored to your brand and business goals.",
    cta: "Get Started",
    secondary: "View Portfolio",
    visual: "website",
    highlights: [
      ["web", "Custom & Responsive", "Design"],
      ["search", "SEO Friendly", "Structure"],
      ["performance", "Fast & Secure", "Performance"],
      ["rocket", "Scalable & Future", "Ready"],
    ],
    whatYouGet: [
      "Custom Website Design & Development",
      "Responsive for All Devices",
      "SEO Friendly & Optimized",
      "Fast Loading & Secure Website",
      "CMS Integration",
      "Ongoing Support & Maintenance",
    ],
    metrics: [["Page Speed", "98/100", "+14%"], ["SEO Score", "95/100", "+21%"], ["Uptime", "99.9%", "Stable"]],
    chartTitle: "Performance Overview",
    process: [
      ["search", "01", "Discover", "Understand your business and goals"],
      ["prototype", "02", "Plan", "Strategy, sitemap and wireframe"],
      ["design", "03", "Design", "UI/UX design for your brand"],
      ["code", "04", "Develop", "Clean, responsive and optimized code"],
      ["rocket", "05", "Launch", "Tested, optimized and ready to go live"],
    ],
  },
  {
    slug: "custom-mobile-app-development",
    number: "03",
    crumb: "Custom Mobile App Development",
    title: "Custom Mobile App",
    accent: "Development",
    lead: "We build powerful Android & iOS apps that deliver seamless user experiences and drive business growth.",
    cta: "Get Started",
    secondary: "View Portfolio",
    visual: "mobile",
    highlights: [
      ["mobile", "iOS & Android", "Development"],
      ["ux", "User-Centric", "Design"],
      ["performance", "High Performance", "& Scalable"],
      ["security", "Secure & Reliable", "Applications"],
    ],
    whatYouGet: [
      "Custom Android & iOS App Development",
      "User-Friendly & Modern UI/UX",
      "High Performance & Scalable Apps",
      "API Integration & Third-party Services",
      "App Testing & Quality Assurance",
      "App Deployment & Support",
    ],
    metrics: [["Total Downloads", "125K+", "+24%"], ["Active Users", "78K+", "+18%"], ["User Rating", "4.8", "Top rated"]],
    chartTitle: "App Performance",
    process: [
      ["search", "01", "Research", "Market and competitor analysis"],
      ["prototype", "02", "Design", "UI/UX design and prototyping"],
      ["code", "03", "Develop", "Powerful and clean code development"],
      ["testing", "04", "Test", "Thorough testing for best performance"],
      ["rocket", "05", "Launch & Support", "Launch on stores and ready to grow"],
    ],
  },
  {
    slug: "software-development",
    number: "04",
    crumb: "Software Development",
    title: "Software",
    accent: "Development",
    lead: "End-to-end software solutions customized for your business processes to improve productivity and drive growth.",
    cta: "Get Started",
    secondary: "View Solutions",
    visual: "software",
    highlights: [
      ["code", "Custom Software", "Solutions"],
      ["briefcase", "Enterprise", "Applications"],
      ["integration", "Seamless Integration", "& APIs"],
      ["security", "Secure & Scalable", "Architecture"],
    ],
    whatYouGet: [
      "Custom Software Development",
      "ERP & CRM Solutions",
      "Web & Desktop Applications",
      "API Development & Integration",
      "Legacy System Modernization",
      "Maintenance & Support",
    ],
    metrics: [["Performance", "98%", "+16%"], ["Security", "100%", "Audited"], ["Uptime", "99.9%", "Reliable"]],
    chartTitle: "System Overview",
    process: [
      ["search", "01", "Analyze", "Understand your business needs"],
      ["prototype", "02", "Design", "Plan architecture and system design"],
      ["code", "03", "Develop", "Build scalable and reliable software"],
      ["testing", "04", "Test", "Test for quality and performance"],
      ["support", "05", "Deploy & Support", "Deployment and ongoing technical support"],
    ],
  },
  {
    slug: "ui-ux-design-services",
    number: "06",
    crumb: "UI/UX Design Services",
    title: "UI / UX Design",
    accent: "Services",
    lead: "We create intuitive and engaging UI/UX designs that enhance user experience and drive business success.",
    cta: "Get Started",
    secondary: "View Our Work",
    visual: "design",
    highlights: [
      ["search", "User Research", "& Analysis"],
      ["prototype", "Wireframing &", "Prototyping"],
      ["ux", "UI/UX Design", "Excellence"],
      ["testing", "Usability Testing", "& Optimization"],
    ],
    whatYouGet: [
      "User Research & Personas",
      "Wireframes & Prototypes",
      "Modern & Engaging UI Design",
      "Interactive & Responsive Design",
      "Usability Testing",
      "Design System & Style Guide",
    ],
    metrics: [["User Satisfaction", "98%", "+12%"], ["Engagement", "87%", "+24%"], ["Conversion Boost", "35%", "+18%"]],
    chartTitle: "Design Impact",
    process: [
      ["search", "01", "Discover", "Understand users and business goals"],
      ["target", "02", "Define", "Research and create user personas"],
      ["prototype", "03", "Design", "Wireframe and visual design"],
      ["testing", "04", "Test", "Usability testing and feedback"],
      ["rocket", "05", "Deliver", "Final and pixel-perfect designs"],
    ],
  },
];

const serviceMap = new Map(services.map((service) => [service.slug, service]));

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

function ServiceIcon({ type }: { type: IconName }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const icons: Record<IconName, ReactNode> = {
    analytics: (
      <svg {...common}><path className="sd-fill" d="M13 48h7V34h-7zM28 48h7V24h-7zM43 48h7V16h-7z" /><path className="sd-line" d="M12 52h42M13 29l12-9 10 6 16-16M45 10h8v8" /></svg>
    ),
    automation: (
      <svg {...common}><path className="sd-fill" d="M29 8h6l2 8 6 3 7-4 4 6-6 6v8l6 6-4 6-7-4-6 3-2 8h-6l-2-8-6-3-7 4-4-6 6-6v-8l-6-6 4-6 7 4 6-3z" /><circle className="sd-soft-fill" cx="32" cy="32" r="8" /></svg>
    ),
    bot: (
      <svg {...common}><rect className="sd-fill" x="14" y="20" width="36" height="28" rx="10" /><path className="sd-line" d="M32 20V10M25 34h.1M39 34h.1" /><path className="sd-line" d="M25 40c4 4 10 4 14 0" /><circle className="sd-soft-fill" cx="32" cy="9" r="4" /></svg>
    ),
    briefcase: (
      <svg {...common}><rect className="sd-fill" x="11" y="22" width="42" height="28" rx="5" /><path className="sd-line" d="M24 22v-7h16v7M11 32h42M29 33h6" /></svg>
    ),
    code: (
      <svg {...common}><path className="sd-line" d="M24 20L12 32l12 12M40 20l12 12-12 12M35 14l-6 36" /></svg>
    ),
    design: (
      <svg {...common}><path className="sd-fill" d="M18 10h28v44H18z" /><path className="sd-line" d="M24 18h16M24 27h16M24 36h9M40 43l8-8 4 4-8 8-6 2z" /></svg>
    ),
    device: (
      <svg {...common}><rect className="sd-fill" x="16" y="10" width="32" height="44" rx="6" /><path className="sd-line" d="M27 16h10M28 47h8" /></svg>
    ),
    growth: (
      <svg {...common}><path className="sd-fill" d="M14 45h8v7h-8zM28 35h8v17h-8zM42 24h8v28h-8z" /><path className="sd-line" d="M13 32l12-10 9 6 17-18M44 10h8v8" /></svg>
    ),
    integration: (
      <svg {...common}><rect className="sd-fill" x="9" y="13" width="18" height="18" rx="5" /><rect className="sd-fill" x="37" y="33" width="18" height="18" rx="5" /><path className="sd-line" d="M27 22h8c6 0 10 4 10 10v1M37 42h-8c-6 0-10-4-10-10v-1" /></svg>
    ),
    maintenance: (
      <svg {...common}><path className="sd-fill" d="M26 11c5-2 11-1 15 3L30 25l9 9 11-11c4 9-3 20-14 20-2 0-4 0-6-1L18 54l-8-8 12-12c-3-8-1-18 4-23z" /></svg>
    ),
    mobile: (
      <svg {...common}><rect className="sd-fill" x="20" y="8" width="24" height="48" rx="6" /><path className="sd-line" d="M28 15h8M29 49h6M25 39l5-6 5 4 5-9" /></svg>
    ),
    performance: (
      <svg {...common}><path className="sd-soft" d="M13 42a20 20 0 1 1 38 0" /><path className="sd-line" d="M32 42l12-17" /><circle className="sd-fill" cx="32" cy="42" r="5" /></svg>
    ),
    prototype: (
      <svg {...common}><rect className="sd-fill" x="12" y="12" width="40" height="40" rx="6" /><path className="sd-line" d="M20 22h24M20 32h12M20 42h18M42 36h4v10h-4z" /></svg>
    ),
    rocket: (
      <svg {...common}><path className="sd-fill" d="M39 9c7 3 12 9 15 17L39 41 23 25z" /><path className="sd-soft-fill" d="M19 36l9 9-14 5z" /><circle className="sd-soft-fill" cx="40" cy="24" r="4" /><path className="sd-line" d="M20 45l-7 7M27 51l-4 5" /></svg>
    ),
    search: (
      <svg {...common}><circle className="sd-fill" cx="28" cy="28" r="13" /><path className="sd-line" d="M38 38l13 13M23 28l4 4 9-11" /></svg>
    ),
    security: (
      <svg {...common}><path className="sd-fill" d="M32 9l19 8v13c0 12-8 20-19 25-11-5-19-13-19-25V17z" /><path className="sd-line" d="M23 32l6 6 13-15" /></svg>
    ),
    support: (
      <svg {...common}><path className="sd-fill" d="M15 34a17 17 0 0 1 34 0v10a7 7 0 0 1-7 7h-7" /><path className="sd-line" d="M15 35h8v13h-8zM41 35h8v13h-8zM29 51h6" /></svg>
    ),
    target: (
      <svg {...common}><circle className="sd-soft" cx="32" cy="32" r="20" /><circle className="sd-soft" cx="32" cy="32" r="11" /><circle className="sd-fill" cx="32" cy="32" r="4" /><path className="sd-line" d="M33 31l17-17M44 14h7v7" /></svg>
    ),
    testing: (
      <svg {...common}><path className="sd-fill" d="M18 10h28v44H18z" /><path className="sd-line" d="M24 25l5 5 11-13M24 42h16" /></svg>
    ),
    ux: (
      <svg {...common}><rect className="sd-fill" x="10" y="14" width="44" height="36" rx="8" /><path className="sd-line" d="M20 26v9c0 5 8 5 8 0v-9M36 26l10 18M46 26L36 44" /></svg>
    ),
    web: (
      <svg {...common}><rect className="sd-fill" x="9" y="14" width="46" height="34" rx="5" /><path className="sd-line" d="M9 24h46M24 55h16M32 48v7M17 19h.1M24 19h.1" /></svg>
    ),
  };

  return <span className={`sd-icon sd-icon-${type}`} aria-hidden="true">{icons[type]}</span>;
}

function HeroVisual({ type }: { type: ServiceDetail["visual"] }) {
  return (
    <div className={`sd-visual sd-visual-${type}`} aria-hidden="true">
      <div className="sd-orbit orbit-one" />
      <div className="sd-orbit orbit-two" />
      <span className="sd-float one"><ServiceIcon type={type === "mobile" ? "mobile" : type === "design" ? "ux" : type === "software" ? "code" : type === "website" ? "web" : "bot"} /></span>
      <span className="sd-float two"><ServiceIcon type={type === "chatbot" ? "analytics" : type === "software" ? "integration" : "performance"} /></span>
      <span className="sd-float three"><ServiceIcon type={type === "design" ? "prototype" : "security"} /></span>
      {type === "chatbot" && <ChatbotArt />}
      {type === "website" && <WebsiteArt />}
      {type === "mobile" && <MobileArt />}
      {type === "software" && <SoftwareArt />}
      {type === "design" && <DesignArt />}
    </div>
  );
}

function ChatbotArt() {
  return (
    <div className="sd-robot">
      <i className="antenna" />
      <div className="head"><span className="eye left" /><span className="eye right" /><span className="mouth" /></div>
      <div className="body"><b>U</b></div>
    </div>
  );
}

function WebsiteArt() {
  return (
    <div className="sd-laptop-art">
      <div className="screen">
        <i /><i /><i />
        <div className="screen-grid"><span /><span /><span /><span /></div>
      </div>
      <div className="base" />
    </div>
  );
}

function MobileArt() {
  return (
    <div className="sd-phone-stack">
      <div className="phone phone-left"><span /><b /><i /><i /><i /></div>
      <div className="phone phone-right"><span /><b /><i /><i /><i /></div>
    </div>
  );
}

function SoftwareArt() {
  return (
    <div className="sd-cubes">
      {Array.from({ length: 7 }).map((_, index) => <span key={index}><ServiceIcon type={index % 2 ? "integration" : "code"} /></span>)}
    </div>
  );
}

function DesignArt() {
  return (
    <div className="sd-design-stack">
      <div className="design-phone"><b>UX</b><span /><span /><span /></div>
      <div className="design-phone second"><b>UI</b><span /><span /><span /></div>
    </div>
  );
}

function MiniChart({ bars = false }: { bars?: boolean }) {
  return (
    <div className={bars ? "sd-chart bars" : "sd-chart"}>
      <svg viewBox="0 0 360 110" aria-hidden="true">
        <path d="M8 84 C54 74 64 58 104 66 S166 93 204 66 258 80 294 58 326 52 352 40" />
        <path className="fill" d="M8 84 C54 74 64 58 104 66 S166 93 204 66 258 80 294 58 326 52 352 40 L352 106 L8 106 Z" />
      </svg>
      {bars && <div className="sd-chart-bars">{[22, 46, 34, 62, 50, 76, 58, 88].map((height) => <i key={height} style={{ height }} />)}</div>}
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap.get(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="sd-page">
      <header className="sd-header">
        <a className="sd-brand" href="/">UMG<span>U</span></a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a className="active" href="/services">Services</a>
          <a href="/#product">Products</a>
          <a href="/#about-us">About Us</a>
          <a href="/#case-studies">Case Studies</a>
          <a href="/#blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="sd-demo" href="/#contact">Get a Quote <span>&rarr;</span></a>
      </header>

      <section className="sd-hero">
        <div className="sd-copy">
          <div className="sd-crumb"><a href="/">Home</a><span>&gt;</span><a href="/services">Services</a><span>&gt;</span><b>{service.crumb}</b></div>
          <h1>{service.title}<br /><span>{service.accent}</span></h1>
          <p>{service.lead}</p>
          <div className="sd-actions">
            <a className="sd-primary" href="/#contact">{service.cta} <span>&rarr;</span></a>
            <a className="sd-secondary" href="/#contact"><i /> {service.secondary}</a>
          </div>
        </div>
        <HeroVisual type={service.visual} />
      </section>

      <section className="sd-highlights">
        {service.highlights.map(([icon, a, b]) => (
          <article key={a}>
            <ServiceIcon type={icon} />
            <span>{a}<br />{b}</span>
          </article>
        ))}
      </section>

      <section className="sd-dashboard">
        <article className="sd-panel sd-list">
          <h2>What You Get</h2>
          <ul>
            {service.whatYouGet.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="sd-panel sd-performance">
          <h2>{service.chartTitle}</h2>
          <div className="sd-metrics">
            {service.metrics.map(([label, value, delta]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{delta}</small>
              </div>
            ))}
          </div>
          <MiniChart bars={service.visual === "mobile"} />
        </article>
      </section>

      <section className="sd-panel sd-process">
        <h2>Our {service.visual === "design" ? "Design" : "Development"} Process</h2>
        <div>
          {service.process.map(([icon, number, title, copy]) => (
            <article key={title}>
              <ServiceIcon type={icon} />
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="sd-footer-title">{service.number} {service.crumb.toUpperCase()}</p>
    </main>
  );
}
