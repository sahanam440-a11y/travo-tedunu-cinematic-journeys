import { useEffect, useState } from "react";
import travelerImage from "@/assets/animations/realistic-traveler.png";

export const WalkingTraveler = () => {
  const [position, setPosition] = useState(-15);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 115) return -15;
        return prev + 0.15;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Traveler animation"
      className="relative w-full h-32 md:h-40 overflow-hidden bg-gradient-to-b from-background/50 to-muted/20"
    >
      {/* Ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/40" />

      {/* Walking traveler */}
      <div
        className="absolute bottom-2 transition-all duration-100 ease-linear"
        style={{
          left: `${position}%`,
          transform: `translateY(${Math.sin(position * 0.5) * 3}px)`,
        }}
      >
        <img
          src={travelerImage}
          alt="Traveler walking with luggage"
          className="h-24 md:h-32 w-auto object-contain drop-shadow-lg"
          style={{
            filter: "brightness(0.95) contrast(1.05)",
          }}
        />
      </div>
    </section>
  );
};

export default WalkingTraveler;
