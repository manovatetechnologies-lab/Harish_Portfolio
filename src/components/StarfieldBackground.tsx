import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  layer: 1 | 2 | 3;
}

const StarfieldBackground = () => {
  const stars = useMemo(() => {
    const generateStars = (count: number, layer: 1 | 2 | 3): Star[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: layer * 100 + i,
        x: Math.random() * 120, // Extra width for seamless loop
        y: Math.random() * 120,
        size: layer === 1 ? 1 + Math.random() * 1.5 : layer === 2 ? 0.8 + Math.random() : 0.5 + Math.random() * 0.5,
        opacity: layer === 1 ? 0.4 + Math.random() * 0.3 : layer === 2 ? 0.25 + Math.random() * 0.2 : 0.15 + Math.random() * 0.15,
        layer,
      }));
    };

    return [
      ...generateStars(30, 1), // Foreground - larger, brighter
      ...generateStars(50, 2), // Midground
      ...generateStars(70, 3), // Background - smaller, dimmer
    ];
  }, []);

  const getAnimationClass = (layer: 1 | 2 | 3) => {
    switch (layer) {
      case 1:
        return "animate-drift";
      case 2:
        return "animate-drift-slow";
      case 3:
        return "animate-drift-slower";
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 70%)",
        }}
      />
      
      {/* Star layers */}
      {[1, 2, 3].map((layer) => (
        <div
          key={layer}
          className={`absolute inset-0 ${getAnimationClass(layer as 1 | 2 | 3)}`}
          style={{ willChange: "transform" }}
        >
          {stars
            .filter((star) => star.layer === layer)
            .map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: `hsl(45 70% 60% / ${star.opacity})`,
                  boxShadow: `0 0 ${star.size * 3}px ${star.size}px hsl(45 70% 55% / ${star.opacity * 0.5})`,
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default StarfieldBackground;
