import { useEffect, useRef } from 'react';

const TESTIMONIALS = [];

const PLACEHOLDERS = [
  {
    icon: '👨‍🏫',
    title: 'Mentor / Professor',
    hint: 'Ask a mentor who reviewed your work for a short quote about your code quality.',
  },
  {
    icon: '👥',
    title: 'Peer / Collaborator',
    hint: 'A peer who worked alongside you can speak to your reliability and technical depth.',
  },
  {
    icon: '🌐',
    title: 'Open Source / Community',
    hint: 'Ask an open-source maintainer for brief feedback on any contributions.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const hasReal = TESTIMONIALS.length > 0;

  return (
    <section id="testimonials" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Social Proof</span>
          <h2 className="section-title">What Others Say</h2>
          <p className="section-subtitle">
            {hasReal
              ? 'Feedback from people I have worked with and learned from.'
              : 'Testimonials coming soon — fill these in as you collect feedback.'}
          </p>
        </div>

        <div className="testimonials-grid reveal" style={{ transitionDelay: '0.15s' }}>
          {hasReal
            ? TESTIMONIALS.map((t, i) => (
                <div className="card testimonial-card" key={i}>
                  <div className="testi-quote">&ldquo;</div>
                  <p className="testi-text">{t.quote}</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))
            : PLACEHOLDERS.map((p, i) => (
                <div className="testi-placeholder" key={i}>
                  <span>{p.icon}</span>
                  <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                    {p.title}
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {p.hint}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
