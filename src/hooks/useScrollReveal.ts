import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const updateMotion = () => {
      observer.disconnect();
      document.documentElement.classList.toggle('js-motion', !motion.matches);
      if (!motion.matches) {
        document.querySelectorAll('.reveal:not(.is-visible)').forEach(element => observer.observe(element));
      }
    };
    updateMotion();
    motion.addEventListener('change', updateMotion);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', updateMotion);
      document.documentElement.classList.remove('js-motion');
    };
  }, []);
}
