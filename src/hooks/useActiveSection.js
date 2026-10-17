import { useEffect, useState } from 'react';

/**
 * useActiveSection Hook
 * Tracks which anchored section is currently under the navbar using one
 * IntersectionObserver. Recomputes from the node list (not just the fired
 * entries) so a fast scroll can never leave the highlight on a stale section.
 * `null` while the user is still above the first section.
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);

  const key = ids.join('|');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const navHeight =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 79;

    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) {
      setActiveId(null);
      return;
    }

    // Band = viewport minus the navbar minus the lower 60% of the screen,
    // so only the section the reader is actually looking at counts.
    const update = () => {
      const passed = nodes
        .map((node) => ({ id: node.id, top: node.getBoundingClientRect().top }))
        .filter((s) => s.top <= navHeight);
      const next = passed.length ? passed[passed.length - 1].id : null;
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: `-${navHeight}px 0px -60% 0px`,
      threshold: 0
    });

    nodes.forEach((node) => observer.observe(node));
    update();

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return activeId;
}