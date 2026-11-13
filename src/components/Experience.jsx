import { FaBriefcase } from 'react-icons/fa6';
import { experience } from '../data';
import { useInView } from '../hooks';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Experience() {
  const [lineRef, lineIn] = useInView({ threshold: 0.1 });
  return (
    <section id="experience" className="section container">
      <SectionTitle index="03" eyebrow="Experience" title="Where I’ve been building." />
      <ol ref={lineRef} className={`timeline ${lineIn ? 'is-drawn' : ''}`}>
        {experience.map((job, i) => (
          <Reveal as="li" key={job.period} delay={i * 150} variant="left" className="timeline__item">
            <span className="timeline__dot"><FaBriefcase /></span>
            <div className="card timeline__card">
              <div className="timeline__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline__company">{job.company} · {job.location}</p>
                </div>
                <div className="timeline__when">
                  <span className="badge">{job.type}</span>
                  <span>{job.period}</span>
                </div>
              </div>
              <ul className="bullets">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
