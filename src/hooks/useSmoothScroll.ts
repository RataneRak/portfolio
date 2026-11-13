import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Défilement fluide avec inertie (désactivé si l'utilisateur préfère moins d'animations). */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Les ancres tiennent déjà compte de la hauteur de l'en-tête via `scroll-padding-top` (index.css)
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12, // plus la valeur est haute, plus le scroll est réactif (0.1 = très doux)
      anchors: true,
    });

    return () => lenis.destroy();
  }, []);
}
