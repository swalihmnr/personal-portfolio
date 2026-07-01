import { useEffect, useRef } from 'react';

export default function Hero() {
  const taglineRef = useRef(null);

  // Typewriter effect for role
  useEffect(() => {
    const roles = ['Full-Stack Developer', 'Backend Engineer', 'System Designer', 'Node.js Expert'];
    let roleIdx = 0, charIdx = 0, deleting = false;
    const el = taglineRef.current;
    if (!el) return;
    const tick = () => {
      const current = roles[roleIdx];
      if (!deleting) {
        el.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) { deleting = true; setTimeout(tick, 1800); return; }
      } else {
        el.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 55 : 90);
    };
    tick();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left */}
          <div>
            <div className="hero-badge anim-fade-up">
              <span className="dot" />
              Open to remote opportunities
            </div>

            <h1 className="hero-name anim-fade-up delay-1">
              Muhammed<br /><span className="accent">Swalih</span>
            </h1>

            {/* Typewriter role display */}
            <p className="hero-role anim-fade-up delay-2">
              <span ref={taglineRef} style={{borderRight:'2px solid var(--accent)',paddingRight:'2px'}}></span>
            </p>

            <p className="hero-tagline anim-fade-up delay-3">
              I build <strong>fast, reliable, production-grade web applications</strong>{' '}
              that solve real business problems — from scalable REST APIs to complete
              full-stack systems with clean architecture.
            </p>

            <div className="hero-cta anim-fade-up delay-4">
              <a href="#projects" className="btn btn-primary">View My Work →</a>
              {/* REPLACE: Update href to your email or calendly link */}
              <a href="mailto:swalihmohd048@gmail.com" className="btn btn-outline">Let's Talk 💬</a>
            </div>

            <div className="hero-stats anim-fade-up delay-4">
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Production Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">1.5y</span>
                <span className="stat-label">Project Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">∞</span>
                <span className="stat-label">Lines of Code</span>
              </div>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="hero-visual">
            <div className="hero-card-container">
              {/*
                REPLACE: Replace the initials avatar below with your actual photo.
                Example:
                  <div className="hero-avatar-ring">
                    <img src="/your-photo.jpg" alt="Muhammed Swalih" style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}} />
                  </div>
              */}
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">MS</div>
              </div>
              <div className="hero-float-badge b1">
                <span className="float-icon">⚡</span> Node.js Expert
              </div>
              <div className="hero-float-badge b2">
                <span className="float-icon">🏗️</span> System Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
