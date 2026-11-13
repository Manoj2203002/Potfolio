import { useState } from 'react';
import { FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { profile } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: FaLinkedinIn, label: 'LinkedIn', value: 'manoj-kumaresan', href: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'Manoj2203002', href: profile.github },
  ];

  return (
    <section id="contact" className="section container">
      <SectionTitle index="06" eyebrow="Contact" title="Let’s build something." />
      <Reveal className="contact card">
        <div className="contact__lead">
          <p>
            I’m open to <strong>Full Stack (.NET / Angular)</strong>, <strong>.NET Backend</strong> and
            <strong> Angular Front-end</strong> roles — on-site in Tamil Nadu or Bangalore, or remote.
          </p>
          <p className="contact__loc"><FaLocationDot /> {profile.location}</p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <FaEnvelope /> Say hello
            </a>
            <button type="button" className="btn btn--ghost" onClick={copy} aria-live="polite">
              {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy email</>}
            </button>
          </div>
        </div>
        <ul className="contact__links">
          {links.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal as="li" key={label} delay={i * 90} variant="left">
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact__icon"><Icon /></span>
                <span>
                  <small>{label}</small>
                  {value}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
