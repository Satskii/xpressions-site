import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'blur-up';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'blur-up',
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.08,
  distance = 32,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  const getHiddenStyles = (): React.CSSProperties => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        filter: 'blur(0px)',
      };
    }

    switch (direction) {
      case 'blur-up':
        return {
          opacity: 0,
          transform: `translate3d(0, ${distance}px, 0) scale(0.97)`,
          filter: 'blur(10px)',
        };
      case 'up':
        return {
          opacity: 0,
          transform: `translate3d(0, ${distance}px, 0)`,
          filter: 'blur(4px)',
        };
      case 'down':
        return {
          opacity: 0,
          transform: `translate3d(0, -${distance}px, 0)`,
          filter: 'blur(4px)',
        };
      case 'left':
        return {
          opacity: 0,
          transform: `translate3d(${distance}px, 0, 0)`,
          filter: 'blur(4px)',
        };
      case 'right':
        return {
          opacity: 0,
          transform: `translate3d(-${distance}px, 0, 0)`,
          filter: 'blur(4px)',
        };
      case 'zoom':
        return {
          opacity: 0,
          transform: 'scale(0.92)',
          filter: 'blur(8px)',
        };
      case 'fade':
      default:
        return {
          opacity: 0,
          filter: 'blur(6px)',
        };
    }
  };

  return (
    <div
      ref={ref}
      style={{
        ...getHiddenStyles(),
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </div>
  );
};
