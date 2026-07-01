import { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update active section
      const sections = ['home','about','skills','projects','process','contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">MS<span>.</span></a>
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            {/* REPLACE: swap href with your real resume PDF URL */}
            <a href="#contact" className="btn btn-primary" style={{padding:'9px 20px',fontSize:'0.85rem'}}>Hire Me</a>
          </div>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{marginTop:'8px'}}>Hire Me</a>
      </div>
    </>
  );
}
