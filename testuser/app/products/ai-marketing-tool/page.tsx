import { ChartPanel, Checklist, Icon, PageShell, ProductDashboard } from "../../umgu-pages";

const featureTabs = ["AI Chatbot and Lead Capture", "Smart Campaign Automation", "Content Generation and Scheduling", "Analytics and Performance Tracking"];

export default function ProductDetailPage() {
  return (
    <PageShell active="Products">
      <div className="up-crumb">Home <span>&gt;</span> Products <span>&gt;</span> AI Marketing Tool</div>
      <section className="up-hero up-detail-hero">
        <div>
          <p className="up-kicker">AI MARKETING TOOL</p>
          <h1>AI Marketing Tool That Drives <span>Real Growth</span></h1>
          <p>Automate your marketing, engage your audience, and convert more leads with AI that understands your business.</p>
          <Checklist items={["AI Chatbot and Lead Capture", "Smart Campaign Automation", "Content Generation and Scheduling", "Analytics and Performance Tracking"]} />
          <div className="up-actions">
            <a className="up-primary" href="/contact">Get Started Free <span>-&gt;</span></a>
            <a className="up-secondary" href="#features"><i /> Watch Demo</a>
          </div>
        </div>
        <ProductDashboard />
      </section>

      <section className="up-section up-center">
        <h2>Why Choose <span>UMGU</span> AI Marketing Tool?</h2>
      </section>
      <section className="up-benefits">
        {[
          ["bot", "AI-Powered Automation", "Automate repetitive tasks and run smarter campaigns with AI."],
          ["people", "Better Engagement", "Engage the right audience with personalized messages."],
          ["sales", "Higher Conversions", "Convert more leads with data-driven insights."],
          ["clock", "Save Time and Cost", "Reduce costs with intelligent automation."],
          ["shield", "Secure and Reliable", "Enterprise-grade security to protect your data."],
        ].map(([icon, title, copy]) => (
          <article key={title}>
            <Icon name={icon as any} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="up-section up-center" id="features">
        <h2>Powerful Features to <span>Supercharge Your Marketing</span></h2>
        <div className="up-tabs">{featureTabs.map((tab, index) => <button className={index === 0 ? "active" : ""} key={tab}>{tab}</button>)}</div>
      </section>
      <section className="up-feature-showcase">
        <div>
          <h2>Capture More Leads with AI Chatbot</h2>
          <p>Engage visitors in real-time, answer questions, and capture high-quality leads automatically.</p>
          <Checklist items={["24/7 AI Chat Support", "Lead Qualification and Scoring", "Smart Lead Routing", "Seamless CRM Integration"]} />
          <a href="/contact">Learn More <span>-&gt;</span></a>
        </div>
        <div className="up-chat-demo">
          <Icon name="bot" />
          <p>Hello! How can I help you today?</p>
          <p className="mine">I'm looking for a marketing solution for my business.</p>
          <p>Great! I'd love to help. Can you tell me more about your business?</p>
        </div>
        <div className="up-leads-card">
          <h3>Leads Captured</h3>
          <strong>12,540</strong>
          <span>+18.2% this month</span>
          <ChartPanel title="Recent Leads" />
        </div>
      </section>

      <section className="up-integrations">
        <h2>Seamless Integrations</h2>
        {["Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "Zapier", "Slack", "Pipedrive", "and more..."].map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="up-section up-center">
        <h2>Simple Pricing, <span>Powerful Results</span></h2>
      </section>
      <section className="up-pricing">
        {[
          ["Starter", "$29", "Perfect for small businesses", "Start Free Trial"],
          ["Growth", "$79", "Ideal for growing teams", "Start Free Trial"],
          ["Enterprise", "Custom Pricing", "For large businesses", "Contact Sales"],
        ].map(([name, price, copy, action], index) => (
          <article className={index === 1 ? "popular" : ""} key={name}>
            {index === 1 && <em>Most Popular</em>}
            <h3>{name}</h3>
            <p>{copy}</p>
            <strong>{price}<small>{price.startsWith("$") ? " /month" : ""}</small></strong>
            <Checklist items={["AI Chatbot", "Email Campaigns", "Advanced Analytics", "CRM Integration"]} />
            <a href="/contact">{action}</a>
          </article>
        ))}
        <article className="up-pricing-cta">
          <Icon name="rocket" />
          <h3>Ready to Grow Your Business with AI?</h3>
          <p>Join businesses using UMGU AI Marketing Tool to grow faster.</p>
          <a className="up-primary" href="/contact">Get Started Free <span>-&gt;</span></a>
        </article>
      </section>
    </PageShell>
  );
}
