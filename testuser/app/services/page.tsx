import type { ReactNode } from "react";

const focusPoints = [
  ["analytics", "Data Driven", "Strategies"],
  ["growth", "Higher ROI &", "Conversions"],
  ["audience", "Targeted Audience", "Reach"],
  ["users", "Measurable", "Growth"],
];

const serviceCards = [
  ["seo", "Search Engine", "Optimization (SEO)", "Improve your website rankings and drive organic traffic that converts."],
  ["social", "Social Media", "Marketing (SMM)", "Build your brand, engage audience and grow across all social platforms."],
  ["megaphone", "Pay Per Click", "Advertising (PPC)", "Target the right audience with high-converting ad campaigns."],
  ["content", "Content", "Marketing", "Create valuable content that attracts, engages and converts."],
  ["email", "Email", "Marketing", "Nurture leads and turn subscribers into paying customers."],
  ["report", "Analytics &", "Reporting", "Track performance and optimize campaigns for maximum ROI."],
];

const process = [
  ["discover", "01", "Discover", "We understand your business, audience and goals."],
  ["strategy", "02", "Strategize", "We create a customized strategy that aligns with your objectives."],
  ["execute", "03", "Execute", "Our experts implement campaigns with precision and creativity."],
  ["optimize", "04", "Optimize", "We analyze, test and optimize for better performance."],
  ["grow", "05", "Grow", "We scale what works and drive consistent business growth."],
];

const reasons = [
  "Experienced & Certified Experts",
  "Customized Strategies for Your Business",
  "Transparent Reporting & Communication",
  "Focus on ROI & Business Growth",
  "Advanced Tools & Technologies",
  "Dedicated Account Manager",
];

const results = [
  ["audience", "250%+", "Increase in Organic Traffic"],
  ["funnel", "200%+", "Growth in Leads Generated"],
  ["analytics", "150%+", "Increase in Conversion Rate"],
  ["target", "300%+", "Average ROI Delivered"],
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const icons: Record<string, ReactNode> = {
    analytics: (
      <svg {...common}>
        <path className="dm-svg-soft" d="M13 48h38" />
        <path className="dm-svg-fill" d="M16 39h7v9h-7zM28 30h7v18h-7zM40 21h7v27h-7z" />
        <path className="dm-svg-line" d="M14 34l10-10 9 6 15-17" />
        <path className="dm-svg-line" d="M42 13h7v7" />
      </svg>
    ),
    growth: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M15 43h7v8h-7zM29 34h7v17h-7zM43 23h7v28h-7z" />
        <path className="dm-svg-line" d="M13 32l11-9 9 5 17-18" />
        <path className="dm-svg-line" d="M43 10h8v8" />
      </svg>
    ),
    audience: (
      <svg {...common}>
        <circle className="dm-svg-fill" cx="32" cy="25" r="8" />
        <circle className="dm-svg-soft-fill" cx="17" cy="29" r="6" />
        <circle className="dm-svg-soft-fill" cx="47" cy="29" r="6" />
        <path className="dm-svg-fill" d="M20 49c2-9 22-9 24 0" />
        <path className="dm-svg-soft-fill" d="M7 48c2-7 15-8 20-3M37 45c5-5 18-4 20 3" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <circle className="dm-svg-fill" cx="23" cy="25" r="7" />
        <circle className="dm-svg-soft-fill" cx="43" cy="25" r="7" />
        <path className="dm-svg-fill" d="M10 49c2-10 24-10 27 0" />
        <path className="dm-svg-soft-fill" d="M31 47c3-8 18-8 22 0" />
      </svg>
    ),
    seo: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M15 43h7v8h-7zM29 34h7v17h-7zM43 23h7v28h-7z" />
        <path className="dm-svg-line" d="M14 31l11-10 8 6 16-18" />
        <path className="dm-svg-line" d="M43 9h8v8" />
      </svg>
    ),
    social: (
      <svg {...common}>
        <circle className="dm-social-blue" cx="25" cy="21" r="9" />
        <circle className="dm-social-sky" cx="43" cy="21" r="9" />
        <circle className="dm-social-pink" cx="22" cy="42" r="9" />
        <circle className="dm-social-red" cx="42" cy="42" r="9" />
        <path className="dm-social-mark" d="M26 27v-9c0-3 2-5 5-5h3" />
        <path className="dm-social-mark" d="M39 20c2 0 4-1 5-3 0 5-3 8-8 9" />
        <rect className="dm-social-mark" x="18" y="38" width="8" height="8" rx="2" />
        <circle className="dm-social-mark" cx="42" cy="42" r="4" />
      </svg>
    ),
    megaphone: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M13 33c12-1 22-8 34-17v32C35 39 25 34 13 33z" />
        <path className="dm-svg-soft-fill" d="M10 27h9v13h-9a6 6 0 0 1 0-13z" />
        <path className="dm-svg-fill" d="M23 38l7 13h-9l-5-12z" />
        <path className="dm-svg-line" d="M51 25l6-5M53 33h7M51 41l6 5" />
      </svg>
    ),
    content: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M18 10h23l7 7v34H18z" />
        <path className="dm-svg-soft" d="M40 10v9h8M24 25h17M24 33h14M24 41h10" />
        <path className="dm-svg-line" d="M39 47l12-12 5 5-12 12-7 2z" />
      </svg>
    ),
    email: (
      <svg {...common}>
        <rect className="dm-svg-fill" x="11" y="18" width="42" height="30" rx="4" />
        <path className="dm-svg-soft" d="M13 22l19 15 19-15M13 46l15-13M51 46L36 33" />
      </svg>
    ),
    report: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M15 43h7v8h-7zM29 34h7v17h-7zM43 23h7v28h-7z" />
        <path className="dm-svg-line" d="M14 31l11-10 8 6 16-18" />
        <path className="dm-svg-line" d="M43 9h8v8" />
      </svg>
    ),
    discover: (
      <svg {...common}>
        <circle className="dm-svg-fill" cx="28" cy="28" r="12" />
        <path className="dm-svg-line" d="M37 37l12 12" />
        <path className="dm-svg-soft" d="M23 28l4 4 9-11" />
      </svg>
    ),
    strategy: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M32 10l18 7v13c0 12-8 20-18 24-10-4-18-12-18-24V17z" />
        <path className="dm-svg-soft" d="M23 31l6 6 13-15" />
      </svg>
    ),
    execute: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M37 10c8 4 13 11 16 20l-13 13-17-17z" />
        <path className="dm-svg-soft-fill" d="M17 34l13 13-16 5z" />
        <circle className="dm-svg-soft-fill" cx="39" cy="25" r="4" />
        <path className="dm-svg-line" d="M21 45l-7 7M27 51l-4 5" />
      </svg>
    ),
    optimize: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M28 8h8l2 8 7 3 7-4 4 7-6 6v8l6 6-4 7-7-4-7 3-2 8h-8l-2-8-7-3-7 4-4-7 6-6v-8l-6-6 4-7 7 4 7-3z" />
        <circle className="dm-svg-soft-fill" cx="32" cy="32" r="8" />
      </svg>
    ),
    grow: (
      <svg {...common}>
        <circle className="dm-svg-soft" cx="32" cy="32" r="19" />
        <circle className="dm-svg-fill" cx="32" cy="32" r="7" />
        <path className="dm-svg-line" d="M32 32l17-17M43 15h7v7" />
      </svg>
    ),
    target: (
      <svg {...common}>
        <circle className="dm-svg-soft" cx="32" cy="32" r="19" />
        <circle className="dm-svg-soft" cx="32" cy="32" r="10" />
        <circle className="dm-svg-fill" cx="32" cy="32" r="4" />
        <path className="dm-svg-line" d="M33 31l16-16M43 15h7v7" />
      </svg>
    ),
    funnel: (
      <svg {...common}>
        <path className="dm-svg-fill" d="M12 15h40L38 33v12l-12 6V33z" />
        <path className="dm-svg-soft" d="M18 22h28M25 31h14" />
      </svg>
    ),
  };

  return (
    <span className={`dm-icon dm-icon-${type}`} aria-hidden="true">
      {icons[type] ?? icons.analytics}
    </span>
  );
}

function MetricCard({
  className,
  label,
  value,
  delta,
}: {
  className: string;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className={`dm-metric ${className}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{delta}</small>
      <div className="dm-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function MegaphoneHero() {
  return (
    <div className="dm-visual" aria-label="Digital marketing growth illustration">
      <div className="dm-orbit dm-orbit-one" />
      <div className="dm-orbit dm-orbit-two" />
      <div className="dm-platform" />
      <div className="dm-megaphone">
        <span className="dm-cone" />
        <span className="dm-rim" />
        <span className="dm-mouth" />
        <span className="dm-handle" />
        <span className="dm-sound sound-one" />
        <span className="dm-sound sound-two" />
      </div>
      <MetricCard className="reach" label="Total Reach" value="1.2M" delta="+ 38%" />
      <MetricCard className="conversions" label="Conversions" value="24.6K" delta="+ 52%" />
      <MetricCard className="roi" label="ROI" value="320%" delta="+ 62%" />
      <span className="dm-social dm-facebook">f</span>
      <span className="dm-social dm-target"><ServiceIcon type="target" /></span>
      <span className="dm-social dm-google">G</span>
      <span className="dm-social dm-linkedin">in</span>
    </div>
  );
}

function MarketingDashboard() {
  return (
    <div className="dm-laptop" aria-hidden="true">
      <div className="dm-screen">
        <div className="screen-top"><i /><i /><i /></div>
        <div className="screen-grid">
          <div className="screen-chart">
            <span /><span /><span /><span /><span /><span />
          </div>
          <div className="screen-donut" />
          <div className="screen-bars">
            <i /><i /><i /><i /><i />
          </div>
          <div className="screen-lines">
            <span /><span /><span />
          </div>
        </div>
      </div>
      <div className="dm-base" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="dm-page">
      <header className="dm-header">
        <a className="dm-brand" href="/">UMG<span>U</span></a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a className="active" href="/services">Services</a>
          <a href="/#product">Products</a>
          <a href="/#about-us">About Us</a>
          <a href="/#case-studies">Case Studies</a>
          <a href="/#blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="dm-demo" href="/#contact">Get a Demo <span>&rarr;</span></a>
      </header>

      <section className="dm-hero">
        <div className="dm-copy">
          <div className="dm-crumb"><a href="/">Home</a><span>&gt;</span><a href="/services">Services</a><span>&gt;</span><b>Digital Marketing</b></div>
          <p className="dm-eyebrow">OUR SERVICE</p>
          <h1>Digital Marketing<br />That Drives <span>Real Growth</span></h1>
          <p className="dm-lead">We create data-driven digital marketing strategies that attract the right audience, build your brand, and generate measurable results. From visibility to conversions - we make every click count.</p>
          <div className="dm-focus">
            {focusPoints.map(([icon, a, b]) => (
              <div key={a}>
                <ServiceIcon type={icon} />
                <span>{a}<br />{b}</span>
              </div>
            ))}
          </div>
          <div className="dm-actions">
            <a className="dm-primary" href="/#contact">Get a Free Strategy Call <span>&rarr;</span></a>
            <a className="dm-secondary" href="/#case-studies"><i /> View Case Studies</a>
          </div>
        </div>
        <MegaphoneHero />
      </section>

      <section className="dm-panel dm-what">
        <div className="dm-section-head">
          <h2>What We Do</h2>
          <p>Our full-funnel digital marketing services are designed to build brand awareness, generate leads, and convert prospects into loyal customers.</p>
        </div>
        <div className="dm-service-grid">
          {serviceCards.map(([icon, title, titleTwo, copy]) => (
            <article key={title}>
              <ServiceIcon type={icon} />
              <h3>{title}<br />{titleTwo}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dm-lower-grid">
        <div className="dm-panel dm-process">
          <h2>Our Proven <span>Process</span></h2>
          <p>A result-driven approach that delivers real impact.</p>
          <div className="dm-process-row">
            {process.map(([icon, number, title, copy]) => (
              <article key={title}>
                <ServiceIcon type={icon} />
                <small>{number}</small>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="dm-panel dm-choose">
          <h2>Why Choose <span>UMGU?</span></h2>
          <ul>
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dm-panel dm-results">
        <h2>Real Results. <span>Real Impact.</span></h2>
        <div>
          {results.map(([icon, value, label]) => (
            <article key={label}>
              <ServiceIcon type={icon} />
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dm-cta">
        <div className="dm-cta-copy">
          <h2>Ready to Grow Your Business<br />with <span>Digital Marketing?</span></h2>
          <p>Let's create a winning digital strategy that delivers measurable results.</p>
          <div className="dm-actions">
            <a className="dm-primary" href="/#contact">Talk to an Expert <span>&rarr;</span></a>
            <a className="dm-secondary" href="/#contact"><i /> Get a Free Audit</a>
          </div>
        </div>
        <div className="dm-cta-art">
          <span className="cta-social cta-fb">f</span>
          <span className="cta-social cta-ig">&#9678;</span>
          <span className="cta-social cta-g">G</span>
          <span className="cta-social cta-in">in</span>
          <MarketingDashboard />
          <div className="dm-rocket"><i /><b /><em /></div>
        </div>
      </section>
    </main>
  );
}
