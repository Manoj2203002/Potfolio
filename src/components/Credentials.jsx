import { FaCertificate, FaGraduationCap } from 'react-icons/fa6';
import { certifications, education } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Credentials() {
  return (
    <section id="credentials" className="section container">
      <SectionTitle index="05" eyebrow="Credentials" title="Education & certifications." />
      <div className="creds">
        <div>
          <Reveal as="h3" className="creds__heading"><FaGraduationCap /> Education</Reveal>
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 120} className="card cred">
              <span className="cred__year">{e.period}</span>
              <h4>{e.degree}</h4>
              <p>{e.school}</p>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal as="h3" className="creds__heading"><FaCertificate /> Certifications</Reveal>
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 120} className="card cred">
              <span className="cred__year">{c.year}</span>
              <h4>{c.name}</h4>
              <p>{c.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
