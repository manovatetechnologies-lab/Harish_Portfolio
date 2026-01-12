const GeometricPatternBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Abstract triangular tessellation pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="geometric-mesh"
            patternUnits="userSpaceOnUse"
            width="300"
            height="260"
          >
            {/* Abstract angular triangular mesh - irregular tessellation */}
            <path
              d="M0 0 L75 45 L30 90 L0 60 Z
                 M75 45 L150 20 L120 85 L30 90 Z
                 M150 20 L220 0 L200 70 L120 85 Z
                 M220 0 L300 30 L260 90 L200 70 Z
                 M0 60 L30 90 L0 130 Z
                 M30 90 L120 85 L80 150 L20 140 L0 130 Z
                 M120 85 L200 70 L180 140 L80 150 Z
                 M200 70 L260 90 L240 160 L180 140 Z
                 M260 90 L300 30 L300 120 L240 160 Z
                 M0 130 L20 140 L0 200 Z
                 M20 140 L80 150 L60 210 L0 200 Z
                 M80 150 L180 140 L150 220 L60 210 Z
                 M180 140 L240 160 L220 230 L150 220 Z
                 M240 160 L300 120 L300 200 L220 230 Z
                 M0 200 L60 210 L40 260 L0 260 Z
                 M60 210 L150 220 L120 260 L40 260 Z
                 M150 220 L220 230 L200 260 L120 260 Z
                 M220 230 L300 200 L300 260 L200 260 Z"
              fill="none"
              stroke="hsl(43 65% 52%)"
              strokeWidth="1.2"
              opacity="0.2"
            />
            {/* Additional sharp angular lines for more depth */}
            <path
              d="M45 20 L90 60
                 M170 45 L140 100
                 M250 50 L210 110
                 M50 110 L100 130
                 M160 120 L130 180
                 M280 140 L230 190
                 M30 180 L80 200
                 M110 190 L160 240
                 M260 210 L200 250"
              fill="none"
              stroke="hsl(43 65% 52%)"
              strokeWidth="0.8"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-mesh)" />
      </svg>
    </div>
  );
};

export default GeometricPatternBackground;
