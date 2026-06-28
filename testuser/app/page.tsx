const services = [
  {
    icon: "bot",
    label: "AI POWERED",
    title: "AI Marketing Tool with Chatbot",
    copy: "Smart AI tools and chatbots that engage visitors, capture leads, and boost conversions automatically.",
  },
  {
    icon: "web",
    title: "Custom Website Development",
    copy: "We build fast, responsive, and SEO-friendly websites tailored to your brand and business goals.",
  },
  {
    icon: "phone",
    title: "Custom Mobile App Development",
    copy: "iOS & Android apps that are powerful, user-friendly, and built to scale with your business.",
  },
  {
    icon: "gear",
    title: "Software Development",
    copy: "End-to-end software solutions customized for your business processes to improve productivity.",
  },
  {
    icon: "megaphone",
    title: "Digital Marketing Solutions",
    copy: "From strategy to execution, we help you grow your brand, reach the right audience, and get real results.",
  },
];

const partners = ["StartupX", "PentaLab", "CloudNova", "Golden Grid", "visionary", "TechNova"];

const features = [
  "AI Chatbot for 24/7 Customer Engagement",
  "Lead Generation & Qualification",
  "Smart Campaign Automation",
  "Real-time Analytics & Insights",
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
    copy: "We use the latest tools & technologies to deliver high-performance results.",
  },
  {
    title: "Dedicated Support",
    copy: "We are with you at every step to ensure your success.",
  },
];

function Icon({ type }: { type: string }) {
  const iconSrc: Record<string, string> = {
    bot: "/brand-icons/bot.svg",
    web: "/brand-icons/web.svg",
    phone: "/brand-icons/phone.svg",
    gear: "/brand-icons/gear.svg",
    megaphone: "/brand-icons/megaphone.svg",
    people: "/brand-icons/people.svg",
    briefcase: "/brand-icons/briefcase.svg",
    smile: "/brand-icons/smile.svg",
    award: "/brand-icons/award.svg",
    shield: "/brand-icons/shield.svg",
    custom: "/brand-icons/custom.svg",
    rocket: "/brand-icons/rocket.svg",
    support: "/brand-icons/support.svg",
  };

  return (
    <span className={`icon icon-${type}`} aria-hidden="true">
      {iconSrc[type] ? <img src={iconSrc[type]} alt="" /> : <span />}
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
      <div className="chat-bubble intro">Hello! 👋<br />How can I help you<br />grow your business?</div>
      <div className="chat-bubble label">AI Chat Bot</div>
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
        <h3>Good Morning, UMGU! 👋</h3>
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
        <div className="chat-head">AI Chatbot <span>×</span></div>
        <div className="chat-msg">Hi there! 👋<br />How can I help you today?</div>
        <button>Tell me about your services</button>
        <button>Schedule a demo</button>
        <button>I have a question</button>
        <div className="input">Type your message... <b>↗</b></div>
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
          <a href="#product">Products</a>
          <a href="#about-us">About Us</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="quote-btn" href="#contact">Get a Quote <span>→</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="pill">AI-Powered. Future-Ready. Results-Driven.</p>
          <h1><span className="line">Smart</span><span className="line">Solutions.</span><span className="line gradient-text">Stronger</span><span className="line gradient-text">Growth.</span></h1>
          <p className="lead">UMGU builds AI-powered marketing tools, custom websites, and mobile apps that help businesses grow, automate, and scale faster.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#services">Explore Services <span>→</span></a>
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
              <b>★★★★★</b>
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
              <a href={service.icon === "megaphone" ? "/services/digital-marketing" : "#contact"} aria-label={`Learn more about ${service.title}`}>→</a>
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
          <a className="primary-btn" href="#contact">Explore Product <span>→</span></a>
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
          <h2>We Combine <span>AI, Creativity & Technology</span></h2>
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
              <a className="primary-btn" href="#contact">Let's Talk <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
