import type { ReactNode } from "react";

const services = [
  {
    icon: "bot",
    label: "AI POWERED",
    title: "AI Marketing Tool with Chatbot",
    copy: "Smart AI tools and chatbots that engage visitors, capture leads, and boost conversions automatically.",
    href: "/services/ai-marketing-tool-with-chatbot",
  },
  {
    icon: "web",
    title: "Custom Website Development",
    copy: "We build fast, responsive, and SEO-friendly websites tailored to your brand and business goals.",
    href: "/services/custom-website-development",
  },
  {
    icon: "phone",
    title: "Custom Mobile App Development",
    copy: "iOS and Android apps that are powerful, user-friendly, and built to scale with your business.",
    href: "/services/custom-mobile-app-development",
  },
  {
    icon: "gear",
    title: "Software Development",
    copy: "End-to-end software solutions customized for your business processes to improve productivity.",
    href: "/services/software-development",
  },
  {
    icon: "megaphone",
    title: "Digital Marketing Solutions",
    copy: "From strategy to execution, we help you grow your brand, reach the right audience, and get real results.",
    href: "/services/digital-marketing",
  },
];

const partners = ["StartupX", "PentaLab", "CloudNova", "Golden Grid", "Visionary", "TechNova"];

const features = [
  "AI Chatbot for 24/7 Customer Engagement",
  "Lead Generation and Qualification",
  "Smart Campaign Automation",
  "Real-time Analytics and Insights",
];

const why = [
  {
    title: "AI-First Approach",
    copy: "We leverage AI to automate, optimize, and accelerate your business growth.",
  },
  {
    title: "Custom Solutions",
    copy: "Every business is unique. We build solutions tailored to your needs.",
  },
  {
    title: "Modern Technology",
    copy: "We use the latest tools and technologies to deliver high-performance results.",
  },
  {
    title: "Dedicated Support",
    copy: "We are with you at every step to ensure your success.",
  },
];

const iconPaths: Record<string, ReactNode> = {
  bot: (
    <>
      <path d="M12 21v-3.5a5.5 5.5 0 0 1 5.5-5.5h13a5.5 5.5 0 0 1 5.5 5.5V21" />
      <path d="M24 12V7" />
      <path d="M20 7h8" />
      <rect x="10" y="21" width="28" height="18" rx="7" />
      <path d="M18 30h.01M30 30h.01" />
      <path d="M20 35c2.4 2 5.6 2 8 0" />
    </>
  ),
  web: (
    <>
      <rect x="8" y="11" width="32" height="26" rx="4" />
      <path d="M8 18h32" />
      <path d="M17 28h14" />
      <path d="M17 33h8" />
    </>
  ),
  phone: (
    <>
      <rect x="15" y="7" width="18" height="34" rx="5" />
      <path d="M21 12h6" />
      <path d="M23.5 35h1" />
    </>
  ),
  gear: (
    <>
      <path d="M24 15v-5M24 38v-5M15 24h-5M38 24h-5" />
      <path d="m17.6 17.6-3.5-3.5M33.9 33.9l-3.5-3.5M30.4 17.6l3.5-3.5M14.1 33.9l3.5-3.5" />
      <circle cx="24" cy="24" r="7" />
    </>
  ),
  megaphone: (
    <>
      <path d="M9 26h6l18-10v22L15 28H9z" />
      <path d="M15 28l3 10" />
      <path d="M36 21c2 1.2 3 3 3 5s-1 3.8-3 5" />
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
  briefcase: (
    <>
      <path d="M18 15v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <rect x="8" y="15" width="32" height="24" rx="4" />
      <path d="M8 24h32" />
      <path d="M21 24h6" />
    </>
  ),
  smile: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M18 21h.01M30 21h.01" />
      <path d="M17 29c3.5 4 10.5 4 14 0" />
    </>
  ),
  award: (
    <>
      <circle cx="24" cy="19" r="10" />
      <path d="m18 28-3 12 9-5 9 5-3-12" />
      <path d="m20.5 19 2.3 2.3 5-5" />
    </>
  ),
  shield: (
    <>
      <path d="M24 7 38 13v10c0 8.5-5.6 14.4-14 18-8.4-3.6-14-9.5-14-18V13z" />
      <path d="m18 24 4 4 8-9" />
    </>
  ),
  custom: (
    <>
      <path d="M13 35 35 13" />
      <path d="m29 11 8 8" />
      <path d="M12 21l5-5 15 15-5 5H12z" />
    </>
  ),
  rocket: (
    <>
      <path d="M28 9c5.2.7 8.3 3.8 9 9L25 30l-7-7z" />
      <path d="M18 23h-7l5-8h7" />
      <path d="M25 30v7l8-5v-7" />
      <path d="M15 33l-4 4" />
    </>
  ),
  support: (
    <>
      <circle cx="24" cy="24" r="15" />
      <path d="M14 25h5v-7h-5zM29 25h5v-7h-5z" />
      <path d="M34 25c0 5-3 8-8 8h-3" />
    </>
  ),
};

function Icon({ type }: { type: string }) {
  return (
    <span className={`icon icon-${type}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false">
        {iconPaths[type] ?? iconPaths.custom}
      </svg>
    </span>
  );
}

function MiniChart() {
  return (
    <svg className="mini-chart" viewBox="0 0 168 88" role="img" aria-label="Growth chart">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8b5cff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#21c8ff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="chartLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#8b3dff" />
          <stop offset="100%" stopColor="#35d8ff" />
        </linearGradient>
      </defs>
      <path className="chart-area" d="M6 78 L27 58 L48 65 L69 37 L91 48 L113 27 L137 34 L162 13 L162 86 L6 86 Z" fill="url(#chartFill)" />
      <path className="chart-line" d="M6 78 L27 58 L48 65 L69 37 L91 48 L113 27 L137 34 L162 13" fill="none" stroke="url(#chartLine)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {[6, 27, 48, 69, 91, 113, 137, 162].map((x, i) => (
        <circle className="chart-dot" key={x} cx={x} cy={[78, 58, 65, 37, 48, 27, 34, 13][i]} r="3" fill="#d9c7ff" />
      ))}
    </svg>
  );
}

function RobotHero() {
  return (
    <div className="hero-visual" aria-label="AI chatbot robot illustration">
      <div className="spark spark-one" />
      <div className="spark spark-two" />
      <div className="spark spark-three" />
      <div className="spark spark-four" />
      <div className="data-stream stream-one" />
      <div className="data-stream stream-two" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="planet planet-left" />
      <div className="planet planet-right" />
      <div className="chat-bubble intro">Hello!<br />How can I help you<br />grow your business?</div>
      <div className="chat-bubble label">AI Chatbot</div>
      <div className="metric-card growth">
        <small>Growth Increase</small>
        <strong>+245%</strong>
        <MiniChart />
      </div>
      <div className="metric-card leads">
        <small>Leads Generated</small>
        <strong>8,432</strong>
        <span>+18.2% this week</span>
        <div className="bars"><i /><i /><i /><i /><i /></div>
      </div>
      <div className="robot">
        <div className="antenna" />
        <div className="head">
          <div className="face">
            <i className="eye left" />
            <i className="eye right" />
            <i className="smile" />
          </div>
          <div className="ear ear-left" />
          <div className="ear ear-right" />
        </div>
        <div className="body">
          <div className="badge">U</div>
          <div className="arm arm-left" />
          <div className="arm arm-right" />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="dashboard">
      <aside>
        <div className="dash-logo"><Icon type="bot" /></div>
        {["Dashboard", "Leads", "Campaigns", "Chats", "Analytics", "Settings"].map((item, index) => (
          <div className={index === 0 ? "active nav-row" : "nav-row"} key={item}>
            <span />
            {item}
          </div>
        ))}
      </aside>
      <main>
        <h3>Good Morning, UMGU!</h3>
        <div className="dash-cards">
          {[
            ["Total Leads", "12,540", "+18.2%"],
            ["Active Campaigns", "230", "+9.1%"],
            ["Conversion Rate", "24.5%", "+12.7%"],
          ].map(([a, b, c]) => (
            <div key={a}>
              <small>{a}</small>
              <strong>{b}</strong>
              <span>{c}</span>
            </div>
          ))}
        </div>
        <div className="overview">
          <div className="overview-head"><b>Leads Overview</b><span>This Week</span></div>
          <MiniChart />
        </div>
      </main>
      <section className="chat-panel">
        <div className="chat-head">AI Chatbot <span>x</span></div>
        <div className="chat-msg">Hi there!<br />How can I help you today?</div>
        <button>Tell me about your services</button>
        <button>Schedule a demo</button>
        <button>I have a question</button>
        <div className="input">Type your message... <b>Send</b></div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="UMGU home">UMG<span>U</span></a>
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/case-studies">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="quote-btn" href="/contact">Get a Quote <span>-&gt;</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="pill">AI-Powered. Future-Ready. Results-Driven.</p>
          <h1><span className="line">Smart</span><span className="line">Solutions.</span><span className="line gradient-text">Stronger</span><span className="line gradient-text">Growth.</span></h1>
          <p className="lead">UMGU builds AI-powered marketing tools, custom websites, and mobile apps that help businesses grow, automate, and scale faster.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#services">Explore Services <span>-&gt;</span></a>
            <a className="video-btn" href="#product"><i /> Watch Video</a>
          </div>
          <div className="trust">
            <div className="avatars">
              {["#ffd1c7", "#f3b7ff", "#8cd9ff", "#c5ffd8", "#ffdaa3"].map((color, index) => (
                <span key={color} style={{ background: color }}>{["A", "M", "K", "R", "S"][index]}</span>
              ))}
            </div>
            <div>
              <p>Trusted by 500+ businesses worldwide</p>
              <b>5.0 client rating</b>
            </div>
          </div>
        </div>
        <RobotHero />
      </section>

      <section className="partner-strip" aria-label="Partner brands">
        <p>We empower brands</p>
        {partners.map((partner) => <span key={partner}>{partner}</span>)}
      </section>

      <section className="services" id="services">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>Services That Drive <span>Digital Success</span></h2>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <Icon type={service.icon} />
              {service.label && <em>{service.label}</em>}
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href={service.href} aria-label={`Learn more about ${service.title}`}>-&gt;</a>
            </article>
          ))}
        </div>
      </section>

      <section className="product" id="product">
        <div className="product-copy">
          <p className="eyebrow">OUR PRODUCT</p>
          <h2>AI Marketing Tool - Your Growth Co-Pilot</h2>
          <ul>
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <a className="primary-btn" href="/products">Explore Product <span>-&gt;</span></a>
        </div>
        <DashboardMockup />
      </section>

      <section className="stats" aria-label="Company stats">
        {[
          ["500+", "Happy Clients", "people"],
          ["1200+", "Projects Completed", "briefcase"],
          ["98%", "Client Satisfaction", "smile"],
          ["5+", "Years of Experience", "award"],
        ].map(([value, label, icon]) => (
          <div key={label}>
            <Icon type={icon} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="why" id="about-us">
        <div className="why-head">
          <p className="eyebrow">WHY CHOOSE UMGU</p>
          <h2>We Combine <span>AI, Creativity and Technology</span></h2>
          <p>To deliver smart solutions that help your business grow faster and go further.</p>
        </div>
        <div className="why-content">
          <div className="why-list">
            {why.map((item, index) => (
              <article key={item.title}>
                <Icon type={["shield", "custom", "rocket", "support"][index]} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="cta-orb">
            <div>
              <h2>Ready to Grow<br />Your Business?</h2>
              <a className="primary-btn" href="/contact">Let's Talk <span>-&gt;</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
