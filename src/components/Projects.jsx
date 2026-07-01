import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 'casecart',
    featured: true,
    status: 'live',
    statusLabel: '✅ Live',
    emoji: '🛒',
    bannerBg: 'linear-gradient(135deg,#6c63ff22,#a78bfa22)',
    title: 'CaseCart',
    tagline: 'Full-featured e-commerce platform for mobile phone cases',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Tailwind CSS', 'Cloudinary', 'Razorpay'],
    bullets: [
      'Built complete e-commerce flows: user auth, product catalog, cart, wishlist, checkout, and order management from scratch.',
      'Designed an admin dashboard with advanced filtering, pagination, and full control over products, categories, customers, offers, and coupons.',
      'Integrated Google OAuth, OTP-based email verification, Cloudinary image uploads, and Razorpay payment gateway.',
      'Optimized data-heavy pages using MongoDB aggregation pipelines; implemented MVC architecture for maintainability at scale.',
    ],
    // REPLACE: Set real live and GitHub URLs below
    liveUrl: 'https://casecart.example.com',
    githubUrl: 'https://github.com/swalihmnr/casecart',
  },
  {
    id: 'dairyo',
    featured: false,
    status: 'wip',
    statusLabel: '🔄 In Progress',
    emoji: '🥛',
    bannerBg: 'linear-gradient(135deg,#06b6d422,#22c55e22)',
    title: 'DairyOS (MilkFlow)',
    tagline: 'B2B2C SaaS platform for dairy farm operations & delivery',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'REST API'],
    bullets: [
      'Designing multi-module SaaS architecture: herd management, milk production, CRM, route-based delivery, and billing.',
      'Developing customer subscription engine and last-mile delivery management with route optimization.',
      'Building with scalability-first mindset — clean domain separation, event-driven patterns, and schema versioning.',
    ],
    liveUrl: null,
    // REPLACE: Set real GitHub URL below
    githubUrl: 'https://github.com/swalihmnr/dairyo',
  },
  {
    id: 'compiler',
    featured: false,
    status: 'completed',
    statusLabel: '✔ Completed',
    emoji: '⚙️',
    bannerBg: 'linear-gradient(135deg,#f59e0b22,#ef444422)',
    title: 'Custom Compiler / Interpreter',
    tagline: 'Built a working compiler pipeline for a custom programming language',
    stack: ['JavaScript', 'AST', 'Lexer', 'Parser', 'Interpreter'],
    bullets: [
      'Implemented a full compiler pipeline: lexical analysis (tokenizer), syntax analysis (recursive descent parser), and tree-walk interpreter.',
      'Designed and parsed abstract syntax trees (AST) to represent expressions, statements, and control flow.',
      'Built custom error handling with line-level diagnostics — a hands-on deep dive into how languages work under the hood.',
    ],
    liveUrl: null,
    // REPLACE: Set real GitHub URL below
    githubUrl: 'https://github.com/swalihmnr/custom-compiler',
  },
];

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <div className={`project-card${isFeatured ? ' featured' : ''}`}>
      <div
        className={`project-banner${isFeatured ? ' featured-banner' : ''}`}
        style={{background: project.bannerBg}}
      >
        <span style={{fontSize: isFeatured ? '5rem' : '3.5rem'}}>{project.emoji}</span>
      </div>
      <div className="project-body">
        <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <ul className="project-bullets">
          {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="project-stack">
          {project.stack.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              🚀 Live Demo
            </a>
          )}
          {/* REPLACE: Update GitHub URLs in the PROJECTS array above */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🐙 GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{background:'var(--bg-secondary)'}}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Real projects, real problems, real code. Each one built end-to-end with production quality in mind.
          </p>
        </div>
        <div className="projects-grid reveal" style={{transitionDelay:'0.15s'}}>
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
