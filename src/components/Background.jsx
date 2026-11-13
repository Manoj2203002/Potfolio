import { useEffect, useRef } from 'react';
import { prefersReducedMotion, useScrollProgress } from '../hooks';

/** Fixed decorative layers: gradient blobs, grid, cursor glow, scroll progress bar. */
export default function Background() {
  const glow = useRef(null);
  const progress = useScrollProgress();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (glow.current) {
          glow.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          glow.current.style.opacity = '1';
        }
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="bg" aria-hidden="true">
        <div className="bg__grid" />
        <div className="bg__blob bg__blob--1" />
        <div className="bg__blob bg__blob--2" />
        <div className="bg__blob bg__blob--3" />
        <div className="bg__noise" />
      </div>
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
    </>
  );
}
