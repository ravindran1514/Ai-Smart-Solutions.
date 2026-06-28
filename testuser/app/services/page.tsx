const coreServices = [
  {
    icon: "bot",
    badge: "AI POWERED",
    title: "AI Marketing Tool with Chatbot",
    copy: "Our AI-powered marketing tool with smart chatbot helps you engage visitors, capture leads, and boost conversions automatically.",
    points: ["24/7 AI Chatbot Support", "Lead Generation & Qualification", "Smart Campaign Automation", "Analytics & Insights"],
    href: "/services/ai-marketing-tool-with-chatbot",
  },
  {
    icon: "web",
    title: "Custom Website Development",
    copy: "We design and develop modern, responsive, and SEO-friendly websites tailored to your brand and business goals.",
    points: ["Custom & Responsive Design", "SEO Optimized", "Fast & Secure Performance", "Website Maintenance"],
    href: "/services/custom-website-development",
  },
  {
    icon: "phone",
    title: "Custom Mobile App Development",
    copy: "We build powerful Android & iOS apps that deliver seamless user experiences and drive business growth.",
    points: ["iOS & Android Development", "User-Centric Design", "High Performance", "App Maintenance & Support"],
    href: "/services/custom-mobile-app-development",
  },
  {
    icon: "gear",
    title: "Software Development",
    copy: "We develop robust, scalable, and secure software solutions customized to streamline your business processes.",
    points: ["Custom Software Solutions", "Enterprise Applications", "API Development & Integration", "Testing & QA"],
    href: "/services/software-development",
  },
  {
    icon: "megaphone",
    title: "Digital Marketing Solutions",
    copy: "From strategy to execution, we help you grow your brand, reach the right audience, and drive real results.",
    points: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
    href: "/services/digital-marketing",
  },
  {
    icon: "custom",
    title: "UI/UX Design Services",
    copy: "We create intuitive and engaging UI/UX designs that enhance user experience and drive business success.",
    points: ["User Research", "Wireframing & Prototyping", "UI/UX Design", "Usability Testing"],
    href: "/services/ui-ux-design-services",
  },
];

const process = [
  ["rocket", "01", "Discover", "We understand your business, goals, and challenges."],
  ["award", "02", "Plan", "We create a strategic plan tailored to your needs."],
  ["web", "03", "Build", "We design, develop, and build with precision."],
  ["shield", "04", "Test", "We test thoroughly to ensure quality and performance."],
  ["analytics", "05", "Launch & Grow", "We launch and support your growth continuously."],
];

function Icon({ type }: { type: string }) {
  const src: Record<string, string> = {
    analytics: "/brand-icons/award.svg",
    award: "/brand-icons/award.svg",
    bot: "/brand-icons/bot.svg",
    custom: "/brand-icons/custom.svg",
    gear: "/brand-icons/gear.svg",
    megaphone: "/brand-icons/megaphone.svg",
    phone: "/brand-icons/phone.svg",
    rocket: "/brand-icons/rocket.svg",
    shield: "/brand-icons/shield.svg",
    web: "/brand-icons/web.svg",
  };

  return (
    <span className={`so-icon so-icon-${type}`} aria-hidden="true">
      <img src={src[type]} alt="" />
    </span>
  );
}

function ServicesRobot() {
  return (
    <div className="so-robot-wrap" aria-label="AI service assistant illustration">
      <div className="so-orbit orbit-a" />
      <div className="so-orbit orbit-b" />
      <div className="so-orbit orbit-c" />
      {["bot", "web", "phone", "gear", "megaphone"].map((icon, index) => (
        <span className={`so-floating icon-${index + 1}`} key={icon}>
          <Icon type={icon} />
        </span>
      ))}
      <div className="so-bot">
        <div className="so-antenna" />
        <div className="so-head">
          <div className="so-face">
            <i />
            <i />
            <b />
          </div>
        </div>
        <div className="so-body">
          <span>U</span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOverviewPage() {
  return (
    <main className="services-overview">
      <header className="so-header">
        <a className="so-brand" href="/">UMG<span>U</span></a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a className="active" href="/services">Services</a>
          <a href="/#product">Products</a>
          <a href="/#about-us">About Us</a>
          <a href="/#case-studies">Case Studies</a>
          <a href="/#blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="so-quote" href="/#contact">Get a Quote <span>&rarr;</span></a>
      </header>

      <section className="so-hero">
        <div>
          <div className="so-crumb"><a href="/">Home</a><span>&gt;</span><b>Services</b></div>
          <h1>Services That Drive <span>Growth & Innovation</span></h1>
          <p>We build intelligent digital solutions that help businesses attract, engage, convert, and grow with the power of AI, design, and technology.</p>
          <a className="so-primary" href="/#contact">Let's Build Something Great <span>&rarr;</span></a>
        </div>
        <ServicesRobot />
      </section>

      <section className="so-core">
        <p className="so-eyebrow">WHAT WE DO</p>
        <h2>Our <span>Core Services</span></h2>
        <p className="so-section-copy">End-to-end digital solutions designed to help your business grow, automate, and scale faster.</p>
        <div className="so-grid">
          {coreServices.map((service, index) => (
            <article className="so-card" key={service.title}>
              <div className="so-card-top">
                <Icon type={service.icon} />
                {service.badge && <em>{service.badge}</em>}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={service.href}>Learn More <span>&rarr;</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="so-process">
        <div className="so-process-head">
          <div>
            <p className="so-eyebrow">OUR PROCESS</p>
            <h2>How <span>We Work</span></h2>
          </div>
          <a href="/#contact">View Our Process <span>&rarr;</span></a>
        </div>
        <div className="so-process-row">
          {process.map(([icon, number, title, copy]) => (
            <article key={title}>
              <Icon type={icon} />
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="so-cta">
        <div>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's build something amazing together and take your business to the next level.</p>
        </div>
        <div className="so-trust">
          <div className="so-avatars">
            {["A", "M", "K", "R", "S"].map((letter) => <span key={letter}>{letter}</span>)}
          </div>
          <p>Trusted by <b>500+</b><br />businesses worldwide</p>
        </div>
        <a className="so-primary" href="/#contact">Get a Free Consultation <span>&rarr;</span></a>
      </section>
    </main>
  );
}
