import { projects } from '../data';
import { useTilt } from '../hooks';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

function ProjectCard({ project, index }) {
  const tilt = useTilt(7);
  return (
    <Reveal delay={(index % 2) * 120} className="project-wrap">
      <article
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className={`card card--glow project accent-${project.accent}`}
      >
        <div className="project__top">
          <span className="project__num">{String(index + 1).padStart(2, '0')}</span>
          <span className="badge badge--accent">{project.highlight}</span>
        </div>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>
        <ul className="bullets">
          {project.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <ul className="tags">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionTitle
        index="04"
        eyebrow="Projects"
        title="Selected work."
        subtitle="Client, in-house and live production systems built at Tecsack Software. Source code is private to the clients."
      />
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
      </div>
    </section>
  );
}
