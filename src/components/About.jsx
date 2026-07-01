import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const highlights = [
    { icon: '🚀', title: '1.5 Years of Hands-On Building', desc: 'Self-directed learning through real projects — no tutorials, just shipping.' },
    { icon: '🏗️', title: 'Architecture-First Mindset', desc: 'MVC, clean code, scalable DB design, and RESTful API design by default.' },
    { icon: '📈', title: 'Problem Solver, Not Just a Coder', desc: 'I care about outcomes: performance, maintainability, and business logic.' },
    { icon: '🔁', title: 'Continuous Improvement', desc: 'System design, DSA, and Node.js internals — I level up every week.' },
  ];

  return (
    <section id="about" ref={ref} style={{background:'var(--bg-secondary)'}}>
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div className="about-text reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">I Build With Purpose.</h2>
            <p>
              I'm <strong>Muhammed Swalih</strong>, a backend-focused Full-Stack Developer
              based in Malappuram, Kerala. Over 1.5 years of self-directed, project-based
              learning, I've built production-grade web applications from scratch — handling
              everything from database schema design to API architecture to frontend integration.
            </p>
            <p>
              My approach is simple: understand the problem deeply, design a clean solution,
              and ship code that won't become a maintenance nightmare in three months. I'm
              drawn to the backend because that's where business logic lives — and getting
              it right is the difference between a product that scales and one that breaks.
            </p>
            <p>
              I'm currently deepening my expertise in <strong>Node.js internals, system design
              patterns, and backend architecture</strong> — and actively looking for roles or
              freelance projects where I can add immediate value.
            </p>
            {/* REPLACE: Add your location / availability note if needed */}
            <div className="about-actions">
              {/* REPLACE: Point href to your actual resume PDF — e.g., /resume.pdf in public/ */}
              <a href="/resume.pdf" download className="btn btn-primary">Download Resume ↓</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>

          {/* Right */}
          <div className="about-highlights reveal" style={{transitionDelay:'0.15s'}}>
            {highlights.map((h, i) => (
              <div className="highlight-item" key={i}>
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
