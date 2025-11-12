import React from "react";
import traveler1 from "@/assets/animations/traveler-1.png";
import traveler2 from "@/assets/animations/traveler-2.png";
import traveler3 from "@/assets/animations/traveler-3.png";

const layers = [
  // Front layer - larger, slower travelers
  { src: traveler1, size: 110, bottom: 8, duration: 45, opacity: 0.95, delay: 0 },
  { src: traveler2, size: 120, bottom: 12, duration: 50, opacity: 1, delay: 15 },
  { src: traveler3, size: 105, bottom: 6, duration: 42, opacity: 0.95, delay: 30 },
  
  // Middle layer - medium size and speed
  { src: traveler1, size: 85, bottom: 18, duration: 35, opacity: 0.85, delay: 10 },
  { src: traveler2, size: 90, bottom: 20, duration: 38, opacity: 0.88, delay: 25 },
  { src: traveler3, size: 80, bottom: 16, duration: 33, opacity: 0.82, delay: 40 },
  
  // Back layer - smaller, faster travelers
  { src: traveler1, size: 65, bottom: 28, duration: 28, opacity: 0.7, delay: 5 },
  { src: traveler2, size: 70, bottom: 30, duration: 30, opacity: 0.75, delay: 20 },
  { src: traveler3, size: 60, bottom: 26, duration: 26, opacity: 0.68, delay: 35 },
];

const TravelersParallax: React.FC = () => {
  return (
    <section
      aria-label="Travelers walking"
      className="relative w-full h-32 md:h-40 border-t border-border/50 bg-gradient-to-b from-transparent via-muted/10 to-muted/30 overflow-hidden"
    >
      {/* Subtle ground line */}
      <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />

      {/* Moving silhouettes */}
      {layers.map((l, i) => (
        <img
          key={i}
          src={l.src}
          alt="Traveler silhouette with luggage"
          width={l.size}
          height={l.size}
          className="absolute select-none pointer-events-none transition-opacity duration-500"
          style={{
            bottom: `${l.bottom}px`,
            opacity: l.opacity,
            animation: `${i % 3 === 0 ? "walk-parallax-right" : i % 3 === 1 ? "walk-parallax-left" : "walk-parallax-right"} ${l.duration}s linear infinite`,
            animationDelay: `${l.delay}s`,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            transform: i % 3 === 1 ? "scaleX(-1)" : "none",
          }}
        />
      ))}

      <style>{`
        @keyframes walk-parallax-right {
          0% { 
            transform: translateX(-20%) scale(1);
          }
          50% {
            transform: translateX(50%) scale(1.02);
          }
          100% { 
            transform: translateX(120%) scale(1);
          }
        }
        @keyframes walk-parallax-left {
          0% { 
            transform: translateX(120%) scaleX(-1);
          }
          50% {
            transform: translateX(50%) scaleX(-1.02);
          }
          100% { 
            transform: translateX(-20%) scaleX(-1);
          }
        }
      `}</style>
    </section>
  );
};

export default TravelersParallax;
