import React from "react";
import traveler1 from "@/assets/animations/traveler-1.png";
import traveler2 from "@/assets/animations/traveler-2.png";
import traveler3 from "@/assets/animations/traveler-3.png";

const layers = [
  { src: traveler1, size: 84, bottom: 8, duration: 40, opacity: 0.85 },
  { src: traveler2, size: 96, bottom: 14, duration: 55, opacity: 0.9 },
  { src: traveler3, size: 72, bottom: 4, duration: 35, opacity: 0.8 },
];

const TravelersParallax: React.FC = () => {
  return (
    <section
      aria-label="Travelers walking"
      className="relative w-full h-28 md:h-36 border-t border-border/50 bg-gradient-to-b from-transparent to-muted/20 overflow-hidden"
    >
      {/* Subtle ground line */}
      <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-border/70" />

      {/* Moving silhouettes */}
      {layers.map((l, i) => (
        <img
          key={i}
          src={l.src}
          alt="Traveler silhouette with luggage"
          width={l.size}
          height={l.size}
          className="absolute select-none pointer-events-none"
          style={{
            bottom: `${l.bottom}px`,
            opacity: l.opacity,
            animation: `${i % 2 === 0 ? "walk-parallax" : "walk-parallax-slow"} ${l.duration}s linear infinite`,
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.25))",
          }}
        />
      ))}

      <style>{`
        @keyframes walk-parallax {
          0% { transform: translateX(-15%); }
          100% { transform: translateX(115%); }
        }
        @keyframes walk-parallax-slow {
          0% { transform: translateX(115%); }
          100% { transform: translateX(-15%); }
        }
      `}</style>
    </section>
  );
};

export default TravelersParallax;
