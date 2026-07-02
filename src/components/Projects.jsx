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
    liveUrl: 'https://case-cart-swalihmnrs-projects.vercel.app/',
    githubUrl: 'https://github.com/swalihmnr/case-cart',
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
    githubUrl: 'https://github.com/swalihmnr/milk',
  },
  {
    id: 'compiler',
    featured: false,
    status: 'completed',
    statusLabel: '✔ Completed',
    emoji: '⚙️',
    bannerBg: 'linear-gradient(135deg,#f59e0b22,#ef444422)',
    title: 'Zero-G Compiler',
    tagline: 'Multi-language IDE and secure sandboxed code execution engine',
    stack: ['Node.js', 'Electron', 'Monaco Editor', 'vm2', 'Go', 'Rust', 'Express.js'],
    bullets: [
      'Developed a multi-language desktop IDE and execution engine providing secure JS sandboxing and local compilation for Python, Java, C/C++, Go, and Rust.',
      'Implemented native toolchain compilation (GCC, G++, Java, Go, Rust) with automated execution tasks.',
      'Built intelligent coding task parsing, auto-run execution, direct file system access, and packaged desktop application support using Electron Builder.',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/swalihmnr/IDE-compailer',
  },
  {
    id: 'batchtracker',
    featured: false,
    status: 'completed',
    statusLabel: '✔ Completed',
    emoji: '📈',
    bannerBg: 'linear-gradient(135deg,#3b82f622,#1d4ed822)',
    title: 'Batch Progress Tracker (Nova AI)',
    tagline: 'Open-Source Contribution — Built the English Mastery Roadmap & Nova AI',
    stack: ['React', 'Firebase', 'Firebase Functions', 'OpenAI', 'Node.js', 'Tailwind CSS'],
    bullets: [
      'Built the English Mastery Roadmap and Nova AI features — implemented dynamic roadmap UI components and 5-stage placement exam flows (text + real-time voice/video).',
      'Integrated OpenAI backend via secure Firebase Cloud Functions with a custom API-key rotation mechanism to prevent usage limits.',
      'Eliminated security risks by removing hardcoded credentials and migrating to production-ready secure environment variable storage.',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/swalihmnr/batch-progress-tracker',
  },
  {
    id: 'zomato',
    featured: false,
    status: 'completed',
    statusLabel: '✔ Completed',
    emoji: '🍕',
    bannerBg: 'linear-gradient(135deg,#ef444422,#b91c1c22)',
    title: 'Zomato UI Clone',
    tagline: 'Pixel-perfect, highly responsive frontend clone of Zomato',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'GitHub Pages'],
    bullets: [
      'Developed a pixel-perfect frontend clone of the Zomato home page and restaurant search interface.',
      'Implemented advanced CSS Grid and Flexbox layouts for seamless responsiveness across mobile, tablet, and desktop breakpoints.',
      'Optimized asset delivery and deployed static files cleanly to GitHub Pages for instant viewing.'
    ],
    liveUrl: 'https://swalihmnr.github.io/zomato/',
    githubUrl: 'https://github.com/swalihmnr/zomato'
  },
  {
    id: 'henna',
    featured: false,
    status: 'completed',
    statusLabel: '✔ Completed',
    emoji: '🌿',
    bannerBg: 'linear-gradient(135deg,#10b98122,#04785722)',
    title: 'Henna Organic Website',
    tagline: 'Elegant and lightweight static brand landing page',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
    bullets: [
      'Designed and coded an elegant, lightweight static product landing page for an organic henna brand.',
      'Focused heavily on clean visual hierarchy, customized botanical illustrations, and fast load times with optimized assets.',
      'Fully responsive implementation deployed to GitHub Pages.'
    ],
    liveUrl: 'https://swalihmnr.github.io/henna-organic/',
    githubUrl: 'https://github.com/swalihmnr/henna-organic'
  }
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
