import { profile, stats } from '../data';
import { useCountUp, useInView } from '../hooks';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

function Stat({ value, suffix, decimals, label, delay }) {
  const [ref, inView] = useInView();
  const n = useCountUp(value, inView);
  return (
    <Reveal className="stat card" delay={delay}>
      <span ref={ref} className="stat__value gradient-text">
        {n.toFixed(decimals)}{suffix}
      </span>
      <span className="stat__label">{label}</span>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle index="01" eyebrow="About" title="From database to pixel." />
      <div className="about">
        <div className="about__text">
          {profile.about.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 120}>{p}</Reveal>
          ))}
          <Reveal as="p" delay={260} className="about__edu-line">
            MCA from <strong>Bishop Heber College, Trichy</strong> · BCA from <strong>Loyola College, Mettala</strong>.
          </Reveal>
        </div>
        <div className="about__stats">
          {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
