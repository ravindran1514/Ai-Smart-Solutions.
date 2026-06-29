import { Checklist, HeroCube, Icon, PageShell } from "../umgu-pages";

export default function CaseStudiesPage() {
  return (
    <PageShell active="Case Studies">
      <div className="up-crumb">Home <span>&gt;</span> Case Studies</div>
      <section className="up-hero up-case-hero">
        <div>
          <p className="up-kicker">CASE STUDIES</p>
          <h1>Real Challenges. AI-Powered <span>Results.</span></h1>
          <p>Discover how businesses across industries are using UMGU AI solutions to overcome challenges, optimize operations, and achieve remarkable growth.</p>
          <div className="up-tabs compact"><button className="active">Success Stories</button><button>Challenges and Learnings</button></div>
        </div>
        <HeroCube labels={["Revenue", "Customers", "AI", "Campaigns"]} />
      </section>

      <section className="up-featured-case">
        <div>
          <p className="up-kicker">FEATURED CASE STUDY</p>
          <h2>EcomNova Increased Sales by <span>178%</span> Using AI Marketing</h2>
          <p>EcomNova, an e-commerce brand, struggled with low ROI and ineffective audience targeting. Manual processes and guesswork led to high costs and low conversions.</p>
          <div className="up-case-metrics"><span>178%<small>Increase in Sales</small></span><span>62%<small>Lower Cost Per Lead</small></span><span>3.5x<small>Higher Conversion Rate</small></span></div>
        </div>
        <div>
          <h3>The Solution</h3>
          <p>We implemented UMGU AI Marketing Tool to automate audience segmentation, personalize campaigns, and optimize ad spend in real-time.</p>
          <h3>The Results</h3>
          <Checklist items={["Sales increased by 178% in 90 days", "Cost per lead reduced by 62%", "3.5x improvement in conversion rate", "Real-time insights helped scale profitable campaigns"]} />
        </div>
      </section>

      <section className="up-section up-center"><h2>More Success Stories</h2></section>
      <section className="up-case-grid">
        {[
          ["AI SALES TOOL", "Sales Team Productivity Boosted by 200%", "A B2B SaaS company automated lead scoring and follow-ups using AI Sales Tool.", ["200% increase in productivity", "45% more deals closed", "Faster response and better lead prioritization"]],
          ["AI HR TOOL", "Reduced Hiring Time by 70%", "An IT services company used AI HR Tool to streamline recruitment and onboarding.", ["70% reduction in time-to-hire", "Better candidate matching", "Improved employee retention"]],
          ["CRM", "Customer Retention Improved by 60%", "A growing business used UMGU CRM to centralize customer data and interactions.", ["60% improvement in retention", "Stronger customer relationships", "Data-driven decision making"]],
        ].map(([tag, title, copy, points]) => (
          <article key={title as string}>
            <p className="up-kicker">{tag as string}</p>
            <h3>{title as string}</h3>
            <p>{copy as string}</p>
            <Checklist items={points as string[]} />
            <a href="/contact">View Case Study <span>-&gt;</span></a>
          </article>
        ))}
      </section>

      <section className="up-impact">
        <h2>The Impact of AI - <span>Real Opportunities, Real Responsibility</span></h2>
        <div>
          <article><h3>The Positive Impact</h3><Checklist items={["Automation of repetitive tasks saves time and costs", "Smarter decisions with real-time data and insights", "Personalized customer experiences drive loyalty", "Empowered teams focus on high-value work"]} /></article>
          <article><h3>The Challenges to Consider</h3><Checklist items={["Over-reliance on AI without human oversight", "Data privacy and security risks", "Bias in AI models can lead to unfair outcomes", "Need for continuous monitoring and improvement"]} /></article>
        </div>
      </section>

      <section className="up-final-cta">
        <Icon name="rocket" />
        <div><h2>Ready to Achieve Similar Results?</h2><p>Let UMGU AI solutions help your business grow smarter and faster.</p></div>
        <a className="up-primary" href="/contact">Get a Free Demo <span>-&gt;</span></a>
      </section>
    </PageShell>
  );
}
