import { useEffect, useRef } from 'react';

const SKILLS = [
  {
    group: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML5', icon: '🟧' },
      { name: 'CSS3', icon: '🟦' },
    ],
  },
  {
    group: 'Frameworks & Libraries',
    icon: '⚡',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '⚙️' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'EJS', icon: '📄' },
    ],
  },
  {
    group: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Mongoose', icon: '🔗' },
      { name: 'SQL (basics)', icon: '📊' },
    ],
  },
  {
    group: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📮' },
      { name: 'Cloudinary', icon: '☁️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Render', icon: '🚀' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
  {
    group: 'Concepts',
    icon: '🧠',
    skills: [
      { name: 'REST API Design', icon: '🔌' },
      { name: 'MVC Architecture', icon: '🏛️' },
      { name: 'System Design', icon: '📐' },
      { name: 'Auth & JWT', icon: '🔐' },
      { name: 'Aggregation Pipelines', icon: '📈' },
      { name: 'DSA', icon: '🔢' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center', maxWidth:540, margin:'0 auto 0'}}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle" style={{margin:'0 auto'}}>
            A focused, production-tested tech stack — not a laundry list.
          </p>
        </div>

        <div className="skills-grid reveal" style={{transitionDelay:'0.15s'}}>
          {SKILLS.map((group) => (
            <div className="skill-group card" key={group.group}>
              <div className="skill-group-title">
                {group.icon} {group.group}
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span className="skill-chip" key={s.name}>
                    <span className="chip-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
