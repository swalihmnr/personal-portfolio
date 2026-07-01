import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { icon: '📧', label: 'Email', value: 'swalihmohd048@gmail.com', href: 'mailto:swalihmohd048@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/mohd-swalih', href: 'https://www.linkedin.com/in/mohd-swalih/' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/swalihmnr', href: 'https://github.com/swalihmnr' },
  // REPLACE: Uncomment and add WhatsApp / Calendly link below
  // { icon: '📱', label: 'WhatsApp', value: '+91 XXXXXXXXXX', href: 'https://wa.me/91XXXXXXXXXX' },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
      REPLACE: Wire this to a real form backend.
      Options: Formspree (free), EmailJS, or a custom /api/contact endpoint.
      Example with Formspree:
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
    */
    setSent(true);
    setForm({ name:'', email:'', subject:'', message:'' });
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            Whether you're hiring, have a freelance project, or just want to talk tech — my inbox is always open.
          </p>
        </div>

        <div className="contact-wrapper" style={{marginTop:'48px'}}>
          {/* Left */}
          <div className="contact-info reveal">
            <h3>Ready to collaborate?</h3>
            <p>
              I'm actively looking for full-time remote roles and freelance backend/full-stack projects.
              I respond within 24 hours.
            </p>
            <div className="contact-links">
              {LINKS.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <span className="contact-link-icon">{l.icon}</span>
                  <span className="contact-link-text">
                    <span className="contact-link-label">{l.label}</span>
                    <span className="contact-link-value">{l.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal" style={{transitionDelay:'0.15s'}}>
            {sent ? (
              <div className="form-success">
                ✅ Message sent! I'll get back to you within 24 hours.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name" type="text" placeholder="Your name" required
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email" type="email" placeholder="your@email.com" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject" type="text" placeholder="Project inquiry / Job opportunity / ..."
                    value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" rows="5" placeholder="Tell me about your project or opportunity..." required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{alignSelf:'flex-start'}}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
