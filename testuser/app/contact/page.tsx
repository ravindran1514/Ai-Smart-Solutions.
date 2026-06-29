import { HeroCube, Icon, PageShell } from "../umgu-pages";

const offices = [
  ["building", "Head Office", "Chennai", "No. 123, Tech Park, 4th Floor, OMR Road, Sholinganallur, Chennai - 600119, Tamil Nadu, India", "+91 44 4567 8901", "hello@umgu.ai", "Mon - Sat: 9:00 AM - 6:00 PM (IST)", ["Strategic location with top tech talent", "Strong ecosystem for innovation", "Well-connected for global collaboration"]],
  ["building", "Branch Office", "Madurai", "No. 45, IT Park, 2nd Floor, Bypass Road, Madurai - 625010, Tamil Nadu, India", "+91 452 456 7890", "madurai@umgu.ai", "Mon - Sat: 9:30 AM - 6:00 PM (IST)", ["Growing tech hub with skilled talent", "Cost-effective delivery center", "Focus on scalable operations"]],
  ["globe", "US Team", "Nashville", "500 Interstate Blvd S, Suite 300, Nashville, TN 37210, United States", "+1 (615) 123-4567", "us@umgu.ai", "Mon - Fri: 9:00 AM - 6:00 PM (CST)", ["Access to global clients and markets", "Diverse talent and innovative culture", "Aligned with US business hours"]],
];

export default function ContactPage() {
  return (
    <PageShell active="Contact">
      <div className="up-crumb">Home <span>&gt;</span> Contact Us</div>
      <section className="up-hero up-contact-hero">
        <div>
          <p className="up-kicker">CONTACT US</p>
          <h1>Let's Build Something Amazing <span>Together</span></h1>
          <p>Have a question or want to work with us? We'd love to hear from you.</p>
        </div>
        <HeroCube labels={["Email", "Phone", "Chat", "Support"]} />
      </section>

      <section className="up-office-grid">
        {offices.map(([icon, type, city, address, phone, email, time, reasons]) => (
          <article key={city as string}>
            <Icon name={icon as any} />
            <h3>{type}<span>{city}</span></h3>
            <p><b>Location</b>{address as string}</p>
            <p><b>Phone</b>{phone as string}</p>
            <p><b>Email</b>{email as string}</p>
            <p><b>Hours</b>{time as string}</p>
            <h4>Why {city}?</h4>
            {(reasons as string[]).map((reason) => <small key={reason}>+ {reason}</small>)}
          </article>
        ))}
      </section>

      <section className="up-contact-grid">
        <form className="up-form">
          <h2>Send Us a Message</h2>
          <label>Your Name<input placeholder="Enter your name" /></label>
          <label>Email Address<input placeholder="Enter your email" /></label>
          <label>Company Name<input placeholder="Enter your company name" /></label>
          <label>Subject<select defaultValue=""><option value="" disabled>Select a subject</option><option>Product demo</option><option>Custom development</option><option>Support</option></select></label>
          <label className="wide">Your Message<textarea placeholder="Type your message here..." /></label>
          <button type="button">Send Message <span>-&gt;</span></button>
        </form>
        <aside className="up-connect">
          <div>
            <h2>Other Ways to Connect</h2>
            {[
              ["crm", "Schedule a Demo", "Book a personalized demo with our experts."],
              ["mail", "Sales Inquiries", "sales@umgu.ai"],
              ["chat", "Support", "support@umgu.ai"],
              ["mail", "General Enquiries", "info@umgu.ai"],
            ].map(([icon, title, copy]) => <p key={title}><Icon name={icon as any} /><span><b>{title}</b>{copy}</span></p>)}
          </div>
          <div>
            <h2>Stay Connected</h2>
            <p>Follow us for the latest updates, insights, and innovations.</p>
            <div className="up-socials"><span>in</span><span>x</span><span>f</span><span>ig</span><span>yt</span></div>
          </div>
        </aside>
      </section>

      <section className="up-final-cta">
        <Icon name="rocket" />
        <div><h2>Let's turn your ideas into smart solutions.</h2><p>We're ready when you are!</p></div>
        <a className="up-primary" href="/contact">Get a Free Consultation <span>-&gt;</span></a>
      </section>
    </PageShell>
  );
}
