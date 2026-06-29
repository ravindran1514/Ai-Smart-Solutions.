import { ChartPanel, Checklist, HeroCube, Icon, MetricGrid, PageShell } from "../umgu-pages";

const products = [
  {
    icon: "megaphone" as const,
    tag: "AI MARKETING TOOL",
    title: "AI Marketing Tool",
    copy: "Automate your marketing, engage your audience, and convert leads with AI that understands your business.",
    points: ["AI Chatbot and Lead Capture", "Smart Campaign Automation", "Content Generation and Scheduling", "Analytics and Performance Tracking"],
  },
  {
    icon: "sales" as const,
    tag: "AI SALES TOOL",
    title: "AI Sales Tool",
    copy: "Empower your sales team with AI insights, lead scoring, and automated follow-ups to close more deals.",
    points: ["AI Lead Scoring and Qualification", "Sales Automation and Workflows", "Smart Follow-ups and Reminders", "Deal Tracking and Analytics"],
  },
  {
    icon: "people" as const,
    tag: "AI HR TOOL",
    title: "AI HR Tool",
    copy: "Simplify HR processes with AI, from recruitment to employee engagement and performance management.",
    points: ["AI Resume Screening", "Employee Onboarding Automation", "Performance and Attendance Tracking", "AI-powered Insights and Reports"],
  },
  {
    icon: "crm" as const,
    tag: "CRM",
    title: "CRM",
    copy: "Build stronger relationships, track every interaction, and manage your customers with ease.",
    points: ["Contact and Lead Management", "Customer Segmentation", "Interaction History Tracking", "Reports and Analytics Dashboard"],
  },
];

export default function ProductsPage() {
  return (
    <PageShell active="Products">
      <section className="up-hero">
        <div>
          <h1>AI-Powered Products Built for <span>Smarter Business</span></h1>
          <p>Our AI-powered products help businesses automate, engage, and grow with smart tools designed for today's challenges and tomorrow's success.</p>
          <div className="up-actions">
            <a className="up-primary" href="#products">Explore All Products <span>-&gt;</span></a>
            <a className="up-secondary" href="/products/ai-marketing-tool"><i /> Watch Overview</a>
          </div>
        </div>
        <HeroCube />
      </section>

      <section className="up-section up-center" id="products">
        <p className="up-kicker">OUR PRODUCTS</p>
        <h2>Powerful AI Tools for <span>Every Business Need</span></h2>
        <p>From marketing to sales, HR to customer relationships, our AI products are built to automate, optimize, and accelerate growth.</p>
      </section>

      <section className="up-product-grid">
        {products.map((product, index) => (
          <article className="up-product-card" key={product.title}>
            <div className="up-product-copy">
              <Icon name={product.icon} />
              <small>{product.tag}</small>
              <h3>{product.title}</h3>
              <p>{product.copy}</p>
              <Checklist items={product.points} />
              <a href={index === 0 ? "/products/ai-marketing-tool" : "#compare"}>Explore Product <span>-&gt;</span></a>
            </div>
            <div className="up-product-preview">
              <MetricGrid items={index % 2 === 0 ? [["Total Leads", "12,540", "+18.2%"], ["Conversions", "2,340", "+23.5%"], ["ROI", "24.5%", "+16.3%"]] : [["Total Deals", "320", "+15.8%"], ["Won Deals", "158", "+10.8%"], ["Revenue", "$82,540", "+21.4%"]]} />
              <ChartPanel title={index % 2 === 0 ? "Campaign Overview" : "Sales Dashboard"} />
            </div>
          </article>
        ))}
      </section>

      <section className="up-compare" id="compare">
        <h2>Compare <span>Our Products</span></h2>
        <p>Find the perfect AI solution that fits your business needs.</p>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>AI Marketing Tool</th>
              <th>AI Sales Tool</th>
              <th>AI HR Tool</th>
              <th>CRM</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AI Chatbot / Engagement", "yes", "-", "-", "-"],
              ["Lead Management", "yes", "yes", "-", "yes"],
              ["Campaign / Workflow Automation", "yes", "yes", "yes", "-"],
              ["AI Insights and Analytics", "yes", "yes", "yes", "yes"],
              ["Employee Management", "-", "-", "yes", "-"],
              ["Customer Relationship Management", "-", "-", "-", "yes"],
              ["Integrations", "yes", "yes", "yes", "yes"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell === "yes" ? "Yes" : cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </PageShell>
  );
}
