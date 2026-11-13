import Reveal from './Reveal';

export default function SectionTitle({ index, eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-title">
      <span className="section-title__eyebrow">
        <span className="section-title__index">{index}</span> {eyebrow}
      </span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
