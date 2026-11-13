import { marquee, skillGroups } from '../data';
import { useTilt } from '../hooks';
import { groupIcons, techIcons } from './Icons';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

function SkillCard({ group, delay }) {
  const tilt = useTilt(6);
  const Icon = groupIcons[group.icon];
  return (
    <Reveal delay={delay} className="skill-wrap">
      <article
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className="card card--glow skill-card"
      >
        <header>
          <span className="skill-card__icon"><Icon /></span>
          <h3>{group.title}</h3>
          <span className="skill-card__count">{group.items.length}</span>
        </header>
        <ul>
          {group.items.map((item, i) => (
            <li key={item} style={{ '--i': i }}>{item}</li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Skills() {
  const row = marquee.map((k) => techIcons[k]);
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle index="02" eyebrow="Skills" title="The stack I ship with." subtitle="Strongest in C#/.NET and Angular, with Python FastAPI, SQL and AWS alongside." />
      </div>

      <div className="marquee" aria-label="Technologies">
        <div className="marquee__track">
          {[...row, ...row].map(({ Icon, label }, i) => (
            <span className="marquee__item" key={i} aria-hidden={i >= row.length}>
              <Icon /> {label}
            </span>
          ))}
        </div>
      </div>

      <div className="container skills-grid">
        {skillGroups.map((g, i) => <SkillCard key={g.id} group={g} delay={(i % 3) * 100} />)}
      </div>
    </section>
  );
}
