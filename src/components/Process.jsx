import { useEffect, useRef } from 'react';

const STEPS = [
  { num: '01', icon: '🔍', title: 'Discovery', desc: 'Understand your goals, audience, constraints, and define clear success metrics.' },
  { num: '02', icon: '📐', title: 'Design', desc: 'Plan the architecture, data model, and API contract before writing a single line of code.' },
  { num: '03', icon: '⚡', title: 'Build', desc: 'Develop in structured sprints with regular updates — no black-box surprises.' },
  { num: '04', icon: '🧪', title: 'Test', desc: 'Manual testing, edge cases, and performance checks before anything goes out.' },
  { num: '05', icon: '🚀', title: 'Deliver', desc: 'Deploy to your environment with documentation, handoff notes, and a clean codebase.' },
  { num: '06', icon: '🔁', title: 'Support', desc: 'Post-launch availability for bug fixes, iterations, and questions.' },
];

export default function Process() {
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
    <section id="process" ref={ref}>
      <div className="container">
        <div className="reveal" style={{textAlign:'center', maxWidth:560, margin:'0 auto 0'}}>
          <span className="section-label">How I Work</span>
          <h2 className="section-title">My Development Process</h2>
          <p className="section-subtitle" style={{margin:'0 auto'}}>
            Organized, transparent, and outcome-driven — so you always know where your project stands.
          </p>
        </div>
        <div className="process-steps reveal" style={{transitionDelay:'0.15s'}}>
          {STEPS.map(s => (
            <div className="process-step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
