import { useEffect, useState } from 'react';
import { FaBars, FaXmark, FaMoon, FaSun, FaDownload } from 'react-icons/fa6';
import { navLinks, profile } from '../data';
import { useScrollSpy } from '../hooks';

const ids = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" onClick={() => setOpen(false)} aria-label="Manoj Kumaresan — home">
          <span className="nav__logo-mark">MK</span>
          <span className="nav__logo-text">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary nav__cta-mobile" href={profile.resume} target="_blank" rel="noreferrer">
            <FaDownload /> Resume
          </a>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className={`theme-toggle__icon ${theme === 'dark' ? 'is-on' : ''}`}><FaMoon /></span>
            <span className={`theme-toggle__icon ${theme === 'light' ? 'is-on' : ''}`}><FaSun /></span>
          </button>
          <a className="btn btn--ghost nav__cta" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            type="button"
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
