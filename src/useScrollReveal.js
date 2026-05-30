import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to all elements
 * matching `selector` inside the returned `ref` container and adds
 * the class `visibleClass` when they enter the viewport.
 *
 * @param {string}  selector    CSS selector for animated children
 * @param {number}  threshold   0–1, portion visible before triggering
 * @param {string}  visibleClass class added on reveal (default 'visible')
 */
export function useScrollReveal(selector = '.reveal', threshold = 0.15, visibleClass = 'visible') {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll(selector));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target); // only trigger once
          }
        });
      },
      { threshold }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, visibleClass]);

  return ref;
}
