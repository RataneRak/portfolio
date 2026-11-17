import { useEffect, useState, type RefObject } from "react";

export const LIQUID_GLASS_FILTER_ID = "liquid-glass";

export interface GlassMap {
  url: string;
  width: number;
  height: number;
}


/**
 * La réfraction passe par `backdrop-filter: url(#filtre-svg)`, pris en charge
 * uniquement par les navigateurs Chromium (Chrome, Edge, Opera, Samsung Internet…).
 * Ailleurs (Safari, Firefox), on garde le verre flouté classique.
 */
function supportsSvgBackdrop() {
  const nav = navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } };
  return Boolean(nav.userAgentData?.brands?.some((b) => b.brand === "Chromium"));
}

/**
 * Carte de déplacement d'une pilule (rectangle aux bords entièrement arrondis).
 * Canal rouge = décalage horizontal, vert = vertical (128 = aucun décalage).
 * Dans la bordure (« bezel »), les pixels sont décalés le long de la normale
 * avec une intensité qui suit la pente d'un profil de verre bombé : forte au bord,
 * nulle au centre — c'est ce qui donne l'effet de lentille.
 */
function buildDisplacementMap(width: number, height: number, bezel: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const image = ctx.createImageData(width, height);
  const data = image.data;
  const halfW = width / 2;
  const halfH = height / 2;
  const radius = Math.min(halfW, halfH);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x + 0.5 - halfW;
      const py = y + 0.5 - halfH;
      const qx = Math.abs(px) - (halfW - radius);
      const qy = Math.abs(py) - (halfH - radius);

      // Distance au bord (positive à l'intérieur) et normale sortante
      let dist: number;
      let nx = 0;
      let ny = 0;
      if (qx > 0 && qy > 0) {
        const len = Math.hypot(qx, qy) || 1;
        dist = radius - len;
        nx = (qx / len) * Math.sign(px);
        ny = (qy / len) * Math.sign(py);
      } else if (qx > qy) {
        dist = radius - qx;
        nx = Math.sign(px);
      } else {
        dist = radius - qy;
        ny = Math.sign(py);
      }

      let strength = 0;
      if (dist >= 0 && dist < bezel) {
        const t = dist / bezel; // 0 au bord, 1 à la fin de la bordure
        strength = Math.pow(1 - t, 2.2);
      }

      // On échantillonne vers l'intérieur : le décor « se courbe » contre le bord
      const i = (y * width + x) * 4;
      data[i] = 128 - nx * strength * 127;
      data[i + 1] = 128 - ny * strength * 127;
      data[i + 2] = 128;
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL();
}

/** Génère (et régénère au redimensionnement) la carte de réfraction de l'élément. */
export function useLiquidGlass(ref: RefObject<HTMLElement | null>, maxBezel = 24) {
  const [map, setMap] = useState<GlassMap | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !supportsSvgBackdrop()) return;
    if (window.matchMedia("(prefers-reduced-transparency: reduce)").matches) return;

    let frame = 0;
    let last = "";
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = Math.round(element.offsetWidth);
        const height = Math.round(element.offsetHeight);
        const key = `${width}x${height}`;
        if (!width || !height || key === last) return;
        last = key;
        const bezel = Math.min(maxBezel, height * 0.42);
        setMap({ url: buildDisplacementMap(width, height, bezel), width, height });
      });
    };

    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [ref, maxBezel]);

  return map;
}
