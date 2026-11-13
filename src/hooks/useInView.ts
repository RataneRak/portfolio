import { useEffect, useRef, useState } from "react";

/**
 * Renvoie `true` dès que l'élément entre dans la fenêtre (une seule fois).
 * Utilisé pour déclencher les animations d'apparition des sections.
 */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return { ref, inView };
}
