export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: '💼', href: 'https://www.linkedin.com/in/mohd-swalih/', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com/swalihmnr', label: 'GitHub' },
    { icon: '📧', href: 'mailto:swalihmohd048@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">MS<span>.</span></div>
            <div className="footer-tagline">Building scalable web apps from Kerala 🌿</div>
          </div>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-copy">
            © {year} Muhammed Swalih. Crafted with React & ☕
          </div>
        </div>
      </div>
    </footer>
  );
}
