import { useEffect } from 'react';

export function useScrollReveal(dependency = null) {
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is in viewport or already scrolled past, make visible immediately
        if (rect.top <= window.innerHeight * 1.15) {
          el.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '150px 0px 150px 0px', // Trigger slightly before scrolling into view
      threshold: 0.05
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const initObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        // Instant check
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 1.15) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run initial reveal checks immediately and after a short render delay
    initObserver();
    const timer1 = setTimeout(initObserver, 100);
    const timer2 = setTimeout(revealElements, 400);

    window.addEventListener('scroll', revealElements, { passive: true });
    window.addEventListener('resize', revealElements, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.unobserve(el));
    };
  }, [dependency]);
}
