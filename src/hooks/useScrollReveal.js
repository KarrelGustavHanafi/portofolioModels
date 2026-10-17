import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal Hook
 * Viewport intersection observer hook with once-per-element reveal,
 * customizable threshold, rootMargin, and instant fallback for prefers-reduced-motion.
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  delay = 0
} = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect user's reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    // Fallback if IntersectionObserver is unsupported. Presence alone is not
    // enough: some privacy modes and partial polyfills expose the name but fail
    // to construct, which would throw and take the whole render down.
    let Observer = null;
    try {
      if (typeof window !== 'undefined' && typeof window.IntersectionObserver === 'function') {
        Observer = new window.IntersectionObserver(() => {});
      }
    } catch {
      Observer = null;
    }
    if (!Observer) {
      setIsRevealed(true);
      return;
    }

    let timeoutId = null;

    // A wrapper with no area (e.g. one holding only absolutely-positioned
    // children) can never reach any intersection threshold, so it would stay
    // hidden forever. Treat zero-area nodes as immediately visible.
    const rect = node.getBoundingClientRect();
    if (rect.height === 0 || rect.width === 0) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutId = setTimeout(() => setIsRevealed(true), delay);
            } else {
              setIsRevealed(true);
            }
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsRevealed(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [ref, isRevealed];
}

/**
 * useParallaxScroll Hook
 * Subtle desktop-only parallax scroll position calculator that safely returns 0 on touch/mobile.
 */
export function useParallaxScroll(factor = 0.08) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Only enable on desktop with fine pointer and width >= 1024px
    if (
      typeof window === 'undefined' ||
      window.innerWidth < 1024 ||
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * factor);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [factor]);

  return offsetY;
}
