import { useState, useEffect } from 'react';
import './index.css';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  // Panels data (matches 5 strips in screenshot)
  const panels = [
    {
      id: 1,
      num: '01',
      title: 'CaseCart',
      desc: 'E-commerce Platform',
      colorClass: 'panel-blue',
      mockup: 'phone',
      content: {
        title: 'CaseCart – Full-Stack E-commerce Platform',
        subtitle: 'Product catalog, wishlist, user auth, checkout & orders',
        stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Tailwind CSS', 'Razorpay', 'Cloudinary'],
        bullets: [
          'Developed a full-featured e-commerce platform for mobile phone cases using Node.js, Express.js, MongoDB, EJS, and Tailwind CSS.',
          'Implemented core features including user authentication, product catalog management, cart, wishlist, checkout, order management, and secure session handling.',
          'Built an admin dashboard to manage products, categories, customers, offers, coupons, and orders with advanced filtering and pagination.',
          'Integrated Google OAuth, OTP-based verification, Cloudinary image management, and a flexible offer and coupon system.',
          'Designed the application following the MVC architecture pattern and optimized database queries using MongoDB aggregation pipelines.'
        ],
        liveUrl: 'https://case-cart-swalihmnrs-projects.vercel.app/',
        githubUrl: 'https://github.com/swalihmnr/case-cart'
      }
    },
    {
      id: 2,
      num: '02',
      title: 'DairyOS',
      desc: 'B2B2C SaaS Platform',
      colorClass: 'panel-beige',
      mockup: 'dashboard',
      content: {
        title: 'DairyOS (MilkFlow) – B2B2C SaaS Platform',
        subtitle: 'Streamlining farm operations, subscriptions, billing & delivery',
        stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Tailwind CSS', 'SaaS Architecture'],
        bullets: [
          'Building a B2B2C SaaS platform for the dairy industry that streamlines farm operations, customer management, subscriptions, billing, and last-mile delivery.',
          'Designing and developing modules for herd management, milk production tracking, CRM, route-based delivery management, and customer subscriptions.',
          'Developing the platform using Node.js, Express.js, MongoDB, and modern web technologies with a strong focus on scalability, clean architecture, and real-world business workflows.'
        ],
        liveUrl: null,
        githubUrl: 'https://github.com/swalihmnr/milk'
      }
    },
    {
      id: 3,
      num: '03',
      title: 'Zero-G Compiler',
      desc: 'Multi-Language IDE & Sandbox',
      colorClass: 'panel-green',
      mockup: 'editor',
      content: {
        title: 'Zero-G Compiler – Multi-Language IDE',
        subtitle: 'Secure sandboxed code execution engine and native toolchain compiler',
        stack: ['Node.js', 'Electron', 'Monaco Editor', 'vm2', 'Go', 'Rust', 'Express.js'],
        bullets: [
          'Developed a multi-language desktop IDE and execution engine providing secure JS sandboxing and local compilation for Python, Java, C/C++, Go, and Rust.',
          'Implemented native toolchain compilation (GCC, G++, Java, Go, Rust) with automated execution tasks.',
          'Built intelligent coding task parsing, auto-run execution, direct file system access, and packaged desktop application support using Electron Builder.'
        ],
        liveUrl: null,
        githubUrl: 'https://github.com/swalihmnr/IDE-compailer'
      }
    },
    {
      id: 4,
      num: '04',
      title: 'Batch Progress',
      desc: 'AI Assessment Platform',
      colorClass: 'panel-red',
      mockup: 'flow',
      content: {
        title: 'Batch Progress Tracker – Nova AI Platform',
        subtitle: 'AI-enabled English proficiency and assessment dashboard',
        stack: ['React', 'Firebase', 'Firebase Functions', 'OpenAI', 'Node.js', 'Tailwind CSS'],
        bullets: [
          'Built the English Mastery Roadmap and Nova AI features — implemented dynamic roadmap UI components and 5-stage placement exam flows (text + real-time voice/video).',
          'Integrated OpenAI backend via secure Firebase Cloud Functions with a custom API-key rotation mechanism to prevent usage limits.',
          'Eliminated security risks by removing hardcoded credentials and migrating to production-ready secure environment variable storage.'
        ],
        liveUrl: null,
        githubUrl: 'https://github.com/swalihmnr/batch-progress-tracker'
      }
    },
    {
      id: 5,
      num: '05',
      title: 'Zomato Clone',
      desc: 'Frontend UI Clone',
      colorClass: 'panel-yellow',
      mockup: 'phone',
      content: {
        title: 'Zomato UI Clone – Frontend Replication',
        subtitle: 'Pixel-perfect, highly responsive frontend clone of Zomato',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'GitHub Pages'],
        bullets: [
          'Developed a pixel-perfect frontend clone of the Zomato home page and restaurant search interface.',
          'Implemented advanced CSS Grid and Flexbox layouts for seamless responsiveness across mobile, tablet, and desktop breakpoints.',
          'Optimized asset delivery and deployed static files cleanly to GitHub Pages for instant viewing.'
        ],
        liveUrl: 'https://swalihmnr.github.io/zomato/',
        githubUrl: 'https://github.com/swalihmnr/zomato'
      }
    },
    {
      id: 6,
      num: '06',
      title: 'Henna Organic',
      desc: 'Static Landing Page',
      colorClass: 'panel-orange',
      mockup: 'dashboard',
      content: {
        title: 'Henna Organic – Static Brand Landing Page',
        subtitle: 'Elegant and lightweight static brand landing page',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
        bullets: [
          'Designed and coded an elegant, lightweight static product landing page for an organic henna brand.',
          'Focused heavily on clean visual hierarchy, customized botanical illustrations, and fast load times with optimized assets.',
          'Fully responsive implementation deployed to GitHub Pages.'
        ],
        liveUrl: 'https://swalihmnr.github.io/henna-organic/',
        githubUrl: 'https://github.com/swalihmnr/henna-organic'
      }
    },
    {
      id: 7,
      num: '07',
      title: 'Let\'s Talk',
      desc: 'Get in Touch',
      colorClass: 'panel-purple',
      mockup: 'mail',
      content: {
        title: 'Send a Message',
        subtitle: 'Always open to remote roles, contract inquiries, or tech chat.',
        isContact: true
      }
    }
  ];

  // Contact form submission state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate API request (Formspree or personal API endpoint)
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
      setActivePanel(null);
    }, 2500);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">SWALIH.DEV</a>
          <div className="nav-right">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="mailto:swalihmohd048@gmail.com" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
              Email Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-header-wrap">
            {/* Background Graphic Typography */}
            <div className="hero-portfolio-title">
              <span className="letter letter-P">P</span>
              <span className="letter letter-O">O</span>
              <span className="letter letter-R">R</span>
              <span className="letter letter-T"></span>
              <span className="letter letter-f">f</span>
              <span className="letter letter-o1">o</span>
              <span className="letter letter-l">l</span>
              <span className="letter letter-i">i</span>
              <span className="letter letter-o2">o</span>
              <span className="hero-year">'25</span>
            </div>

            {/* Overlapping Avatar */}
            <div className="hero-avatar-container">
              <img src="/avatar.png" alt="Muhammed Swalih Avatar" className="hero-avatar" />
            </div>
          </div>

          <h2 className="hero-name">MUHAMMED SWALIH</h2>
        </div>
      </section>

      {/* Info / About Section */}
      <section className="info-section">
        <div className="container info-grid">
          {/* Left Column: ID Badge Mockup */}
          <div className="id-badge-col">
            <div className="lanyard-strap"></div>
            <div className="lanyard-clip"></div>
            <div className="id-badge">
              <div className="id-badge-header">developer card</div>
              <div className="id-photo-box">
                <img src="/avatar.png" alt="Muhammed Swalih Photo" className="id-photo" />
              </div>
              <div className="id-name">M. Swalih</div>
              <div className="id-role">Full-Stack / Backend</div>
              <div className="id-barcode">
                <div className="barcode-line" style={{ width: '4px' }}></div>
                <div className="barcode-line" style={{ width: '1px' }}></div>
                <div className="barcode-line" style={{ width: '2px' }}></div>
                <div className="barcode-line" style={{ width: '8px' }}></div>
                <div className="barcode-line" style={{ width: '1px' }}></div>
                <div className="barcode-line" style={{ width: '3px' }}></div>
                <div className="barcode-line" style={{ width: '1px' }}></div>
                <div className="barcode-line" style={{ width: '6px' }}></div>
                <div className="barcode-line" style={{ width: '2px' }}></div>
                <div className="barcode-line" style={{ width: '4px' }}></div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div>
            <h3 className="bio-title">Hi, I'm Muhammed Swalih</h3>
            <p className="bio-story">
              I'm a backend-focused developer passionate about building scalable and maintainable web applications. 
              I enjoy solving real-world problems through clean, efficient code and continuously improving my software 
              engineering skills. Currently, I'm deepening my expertise in Node.js, system design, and backend architecture. 
              With 1.5 years of self-driven project-based experience, I focus on shipping concrete value.
            </p>

            <div className="bio-columns">
              {/* Experience Highlights */}
              <div>
                <h4 className="bio-col-title">Project Experience</h4>
                <ul className="bio-list">
                  <li className="bio-list-item">
                    <h4>Full-Stack & Backend Systems</h4>
                    <p>Building high-performance APIs and scalable database models using MongoDB and Node.js.</p>
                  </li>
                  <li className="bio-list-item">
                    <h4>B2B2C SaaS & E-commerce</h4>
                    <p>Designed and launched end-to-end user checkout, dashboards, subscriptions, and payment gateways.</p>
                  </li>
                  <li className="bio-list-item">
                    <h4>Language Parsers & Interpreters</h4>
                    <p>Hands-on compiler architecture, lexical tokenization, and syntax tree execution in JavaScript.</p>
                  </li>
                </ul>
              </div>

              {/* Technologies & Platforms */}
              <div>
                <h4 className="bio-col-title">Core Stack</h4>
                <div className="tech-chips" style={{ marginBottom: '24px' }}>
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">Node.js</span>
                  <span className="tech-chip">Express.js</span>
                  <span className="tech-chip">MongoDB</span>
                  <span className="tech-chip">Tailwind CSS</span>
                  <span className="tech-chip">TypeScript</span>
                  <span className="tech-chip">EJS</span>
                  <span className="tech-chip">Git / GitHub</span>
                  <span className="tech-chip">REST API</span>
                  <span className="tech-chip">System Design</span>
                </div>

                <h4 className="bio-col-title">Contact Info</h4>
                <ul className="bio-list" style={{ gap: '10px' }}>
                  <li style={{ fontSize: '0.9rem' }}>
                    <strong>Email:</strong> <a href="mailto:swalihmohd048@gmail.com">swalihmohd048@gmail.com</a>
                  </li>
                  <li style={{ fontSize: '0.9rem' }}>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohd-swalih/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mohd-swalih</a>
                  </li>
                  <li style={{ fontSize: '0.9rem' }}>
                    <strong>GitHub:</strong> <a href="https://github.com/swalihmnr" target="_blank" rel="noopener noreferrer">github.com/swalihmnr</a>
                  </li>
                  <li style={{ fontSize: '0.9rem' }}>
                    <strong>Location:</strong> Malappuram, Kerala / Remote Open
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section (Project strips) */}
      <section className="content-section">
        <div className="content-bg-text">CONTENT</div>
        <div className="container">
          <div className="content-grid">
            {panels.map(panel => (
              <div 
                className={`content-panel ${panel.colorClass}`} 
                key={panel.id}
                onClick={() => setActivePanel(panel)}
              >
                <div className="panel-num">{panel.num}</div>
                
                <div className="panel-mockup">
                  {panel.mockup === 'phone' && (
                    <div className="mock-phone">
                      <div className="phone-notch"></div>
                      <div className="phone-content">
                        <div className="phone-item" style={{ height: '24px' }}></div>
                        <div className="phone-item"></div>
                        <div className="phone-item" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  )}
                  {panel.mockup === 'dashboard' && (
                    <div className="mock-dashboard">
                      <div className="dash-header">
                        <div className="dash-dot"></div>
                        <div className="dash-dot"></div>
                        <div className="dash-dot"></div>
                      </div>
                      <div className="dash-body">
                        <div className="dash-sidebar"></div>
                        <div className="dash-main">
                          <div className="dash-card"></div>
                          <div className="dash-card" style={{ height: '32px' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {panel.mockup === 'editor' && (
                    <div className="mock-editor">
                      <div className="editor-line">
                        <span className="editor-num">1</span>
                        <div className="editor-code c1"></div>
                      </div>
                      <div className="editor-line">
                        <span className="editor-num">2</span>
                        <div className="editor-code c2"></div>
                      </div>
                      <div className="editor-line">
                        <span className="editor-num">3</span>
                        <div className="editor-code c3"></div>
                      </div>
                    </div>
                  )}
                  {panel.mockup === 'flow' && (
                    <div className="mock-flow">
                      <div className="flow-node">Start</div>
                      <div className="flow-arrow"></div>
                      <div className="flow-node">Build</div>
                    </div>
                  )}
                  {panel.mockup === 'mail' && (
                    <div className="mock-mail">
                      <div className="mail-flap"></div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="panel-title">{panel.title}</h4>
                  <p className="panel-desc">{panel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Drawer Modal Overlay */}
      {activePanel && (
        <div className="modal-overlay" onClick={() => setActivePanel(null)}>
          <div className="modal-drawer" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActivePanel(null)}>X</button>
            
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{activePanel.content.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              {activePanel.content.subtitle}
            </p>

            {activePanel.content.stack && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Technologies Used
                </h4>
                <div className="tech-chips">
                  {activePanel.content.stack.map(s => <span className="tech-chip" key={s}>{s}</span>)}
                </div>
              </div>
            )}

            {activePanel.content.bullets && (
              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Key Features & Implementation
                </h4>
                <ul className="bio-list" style={{ gap: '12px' }}>
                  {activePanel.content.bullets.map((bullet, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links or Form depending on panel type */}
            {activePanel.content.isContact ? (
              sent ? (
                <div style={{ padding: '16px', background: 'var(--pastel-green)', border: '2px solid var(--border)', borderRadius: '4px', textAlign: 'center', color: '#142E1F', fontWeight: 'bold' }}>
                  Message Sent! I'll get back to you soon.
                </div>
              ) : (
                <form className="bio-list" style={{ gap: '16px' }} onSubmit={handleContactSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Name</label>
                    <input 
                      type="text" required placeholder="Your Name" 
                      style={{ padding: '12px', border: '2px solid var(--border)', background: 'var(--bg-card)', borderRadius: '4px', outline: 'none' }}
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Email</label>
                    <input 
                      type="email" required placeholder="your@email.com" 
                      style={{ padding: '12px', border: '2px solid var(--border)', background: 'var(--bg-card)', borderRadius: '4px', outline: 'none' }}
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Message</label>
                    <textarea 
                      required rows="4" placeholder="Tell me about your project or opportunity..." 
                      style={{ padding: '12px', border: '2px solid var(--border)', background: 'var(--bg-card)', borderRadius: '4px', outline: 'none', resize: 'vertical' }}
                      value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </button>
                </form>
              )
            ) : (
              (activePanel.content.liveUrl || activePanel.content.githubUrl) && (
                <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', paddingTop: '20px' }}>
                  {activePanel.content.liveUrl && (
                    <a href={activePanel.content.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Live Demo 🚀
                    </a>
                  )}
                  {activePanel.content.githubUrl && (
                    <a href={activePanel.content.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Source Code 🐙
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">SWALIH.DEV</div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Muhammed Swalih. Built with React & coffee.
          </div>
        </div>
      </footer>
    </>
  );
}
