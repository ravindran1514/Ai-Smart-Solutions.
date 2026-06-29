import { Checklist, HeroCube, Icon, PageShell } from "../umgu-pages";

export default function AboutPage() {
  return (
    <PageShell active="About Us">
      <div className="up-crumb">Home <span>&gt;</span> About Us</div>
      <section className="up-hero">
        <div>
          <p className="up-kicker">ABOUT UMGU</p>
          <h1>We Build Smart Solutions for a <span>Smarter Future</span></h1>
          <p>UMGU is a product and service based software company focused on building AI-powered tools and custom digital solutions that help businesses automate, engage, and grow.</p>
          <div className="up-pill-row">
            {["AI-Powered Innovation", "Scalable Solutions", "Secure and Reliable", "Customer Focused"].map((item, index) => <span key={item}><Icon name={(["bot", "rocket", "shield", "crm"] as const)[index]} />{item}</span>)}
          </div>
          <div className="up-actions">
            <a className="up-primary" href="#story">Our Story <span>-&gt;</span></a>
            <a className="up-secondary" href="/products"><i /> Explore Products</a>
          </div>
        </div>
        <HeroCube labels={["Smart Automation", "AI Solutions", "Business Growth", "Data Driven"]} />
      </section>

      <section className="up-story-card" id="story">
        <div>
          <p className="up-kicker">OUR STORY</p>
          <h2>The Beginning of <span>UMGU</span></h2>
          <p>UMGU was founded in 2026 with a simple belief: technology should solve real problems and create real impact.</p>
          <p>We saw businesses struggling with manual processes, disconnected tools, and limited data insights. So, we came together to build intelligent products and custom solutions that make operations smarter, faster, and more efficient.</p>
          <p>Today, UMGU empowers businesses across the globe with AI-driven marketing, sales, HR, CRM tools, and custom digital solutions that drive measurable growth.</p>
        </div>
        <div className="up-stat-cards">
          {[
            ["rocket", "2026", "Founded", "A new journey began"],
            ["people", "50+", "Clients", "Businesses trust our solutions"],
            ["globe", "20+", "Countries", "Serving clients worldwide"],
            ["chart", "100+", "Projects", "Successfully delivered"],
          ].map(([icon, value, label, copy]) => <article key={label}><Icon name={icon as any} /><strong>{value}</strong><b>{label}</b><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="up-split-cards">
        <article><Icon name="target" /><p className="up-kicker">OUR MISSION</p><h2>Empowering Businesses with <span>Intelligent Solutions</span></h2><p>Our mission is to empower businesses with AI-driven products and custom solutions that automate processes, enhance engagement, and accelerate growth.</p></article>
        <article><Icon name="globe" /><p className="up-kicker">OUR VISION</p><h2>Building a <span>Smarter and Better Tomorrow</span></h2><p>Our vision is to become a global leader in AI-powered software solutions, helping businesses unlock their full potential through innovation and technology.</p></article>
      </section>

      <section className="up-values">
        <p className="up-kicker">OUR VALUES</p>
        <h2>The Principles That Guide Us</h2>
        <div>
          {[
            ["diamond", "Innovation First", "We embrace creativity and technology to build innovative solutions."],
            ["crm", "Customer Success", "Our customers are at the heart of everything we do."],
            ["shield", "Integrity and Trust", "We build long-term relationships based on transparency."],
            ["bolt", "Excellence", "We deliver high-quality solutions and exceed expectations."],
            ["people", "Teamwork", "We collaborate and grow together to create greater impact."],
          ].map(([icon, title, copy]) => <article key={title}><Icon name={icon as any} /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="up-process-line">
        <p className="up-kicker">WHY CHOOSE UMGU?</p>
        <h2>We Combine <span>Technology, Creativity and Strategy</span></h2>
        <Checklist items={["AI-powered products built for real challenges", "End-to-end custom development", "Scalable solutions that grow with your business", "Reliable support and long-term partnership", "Data-driven insights for smarter decisions"]} />
      </section>

      <section className="up-final-cta">
        <div><small>LET'S WORK TOGETHER</small><h2>Let's Build the Future Together</h2><p>Have a project in mind or want to learn more about UMGU? We'd love to hear from you.</p></div>
        <a className="up-primary" href="/contact">Get in Touch <span>-&gt;</span></a>
      </section>
    </PageShell>
  );
}
