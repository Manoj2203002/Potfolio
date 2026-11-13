import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import photo from '../assets/Manoj.jpg';
import { profile } from '../data';
import { useMagnetic, useTypewriter } from '../hooks';
import { techIcons } from './Icons';

const orbit = ['dotnet', 'angular', 'python', 'aws', 'typescript', 'claude'];

function MagneticLink({ className, children, ...rest }) {
  const m = useMagnetic(0.25);
  return (
    <a ref={m.ref} onPointerMove={m.onPointerMove} onPointerLeave={m.onPointerLeave} className={className} {...rest}>
      {children}
    </a>
  );
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const words = profile.name.split(' ');

  return (
    <section id="home" className="hero container">
      <div className="hero__copy">
        <p className="hero__status anim-in" style={{ '--d': '0ms' }}>
          <span className="pulse-dot" /> Open to Full Stack · .NET · Angular roles
        </p>

        <h1 className="hero__title">
          <span className="hero__hello anim-in" style={{ '--d': '100ms' }}>Hi, I’m</span>
          {words.map((w, i) => (
            <span className="hero__word" key={w}>
              <span className="anim-rise gradient-text" style={{ '--d': `${200 + i * 140}ms` }}>{w}</span>
            </span>
          ))}
        </h1>

        <p className="hero__role anim-in" style={{ '--d': '520ms' }}>
          <span className="hero__role-text">{role}</span>
          <span className="caret" aria-hidden="true" />
        </p>

        <p className="hero__summary anim-in" style={{ '--d': '640ms' }}>{profile.summary}</p>

        <div className="hero__cta anim-in" style={{ '--d': '760ms' }}>
          <MagneticLink className="btn btn--primary" href="#projects">
            View my work <FaArrowRight className="btn__arrow" />
          </MagneticLink>
          <MagneticLink className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
            <FaDownload /> Download resume
          </MagneticLink>
        </div>

        <div className="hero__meta anim-in" style={{ '--d': '880ms' }}>
          <span><FaLocationDot /> {profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="hero__visual anim-scale" style={{ '--d': '300ms' }}>
        <div className="avatar">
          <div className="avatar__ring" />
          <div className="avatar__img">
            <img src={photo} alt="Manoj Kumaresan" width="366" height="302" />
          </div>
          <div className="avatar__orbit">
            {orbit.map((key, i) => {
              const { Icon, label } = techIcons[key];
              return (
                <span key={key} className="orbit-chip" style={{ '--a': `${(360 / orbit.length) * i}deg` }} title={label}>
                  <span className="orbit-chip__inner"><Icon /></span>
                </span>
              );
            })}
          </div>
          <div className="float-card float-card--a">
            <strong>4</strong> production projects
          </div>
          <div className="float-card float-card--b">
            <span className="pulse-dot" /> Building at Tecsack
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span className="scroll-cue__mouse"><span /></span>
      </a>
    </section>
  );
}
