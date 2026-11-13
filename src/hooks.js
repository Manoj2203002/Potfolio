import { useCallback, useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True once the element has scrolled into view (fires once). */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

/** Types and deletes each word in turn. */
export function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '');
  const state = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer;
    const tick = () => {
      const s = state.current;
      const word = words[s.word];
      if (!s.deleting) {
        s.char += 1;
        setText(word.slice(0, s.char));
        if (s.char === word.length) {
          s.deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, type);
      } else {
        s.char -= 1;
        setText(word.slice(0, s.char));
        if (s.char === 0) {
          s.deleting = false;
          s.word = (s.word + 1) % words.length;
        }
        timer = setTimeout(tick, erase);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);

  return text;
}

/** Counts from 0 to target with an ease-out curve once `start` is true. */
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

/** Id of the section currently in the middle of the viewport. */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

/** 0–1 scroll progress of the page. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return progress;
}

const THEME_KEY = 'mk-theme';

/** Light/dark theme stored on <html data-theme>, remembered per visitor. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return [theme, toggle];
}

/** 3D tilt + spotlight position for a card, driven by the pointer. */
export function useTilt(max = 8) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || e.pointerType === 'touch' || prefersReducedMotion()) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${(0.5 - y) * max}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * max}deg`);
      el.style.setProperty('--mx', `${x * 100}%`);
      el.style.setProperty('--my', `${y * 100}%`);
    },
    [max],
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

/** Element drifts slightly towards the pointer. */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || e.pointerType === 'touch' || prefersReducedMotion()) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength],
  );

  const onPointerLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
