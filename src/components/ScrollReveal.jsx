import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ScrollReveal Component
 * Reusable motion wrapper supporting fade-up, fade-down, fade-left, fade-right,
 * scale-up, and line-grow animations with high-fashion cubic bezier easing.
 */
export default function ScrollReveal({
  as: Component = 'div',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  style = {},
  children,
  ...props
}) {
  const [ref, isRevealed] = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce: true,
    delay
  });

  const animClass = `sr-${animation}`;

  return (
    <Component
      ref={ref}
      className={`sr-item ${animClass} ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        ...style,
        '--sr-duration': `${duration}ms`,
        '--sr-delay': `${delay}ms`
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
