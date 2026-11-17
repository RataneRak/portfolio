import type { GlassMap } from "./useLiquidGlass";

interface Props {
  id: string;
  map: GlassMap;
  /** Décalage maximal (px) appliqué par la carte de déplacement. */
  scale: number;
}

/**
 * Filtre SVG de réfraction : le décor est décalé selon la carte de déplacement,
 * ce qui courbe légèrement l'image sur les bords du verre (sans franges colorées).
 */
const LiquidGlassFilter = ({ id, map, scale }: Props) => (
  <svg className="liquid-glass-svg" width="0" height="0" aria-hidden="true" focusable="false">
    <filter
      id={id}
      x="0"
      y="0"
      width={map.width}
      height={map.height}
      filterUnits="userSpaceOnUse"
      primitiveUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feImage
        href={map.url}
        x="0"
        y="0"
        width={map.width}
        height={map.height}
        preserveAspectRatio="none"
        result="map"
      />

      <feDisplacementMap in="SourceGraphic" in2="map" scale={scale} xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

export default LiquidGlassFilter;
