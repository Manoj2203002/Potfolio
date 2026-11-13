import { useEffect, useState } from 'react';
import { FaArrowUp, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name} · Built with React &amp; Vite</p>
        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
      <a href="#home" className={`to-top ${showTop ? 'is-shown' : ''}`} aria-label="Back to top">
        <FaArrowUp />
      </a>
    </footer>
  );
}
