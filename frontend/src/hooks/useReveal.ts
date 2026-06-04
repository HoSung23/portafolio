import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function useReveal(options?: { delay?: number; translateY?: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [options?.translateY ?? 40, 0],
            duration: 800,
            delay: options?.delay ?? 0,
            ease: "outExpo",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    el.style.opacity = "0";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref as React.RefObject<any>;
}
