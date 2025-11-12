import { useEffect, useRef, useState } from "react";
import travelerImage from "@/assets/animations/realistic-traveler.png";

export const WalkingTraveler = () => {
  // Horizontal position in %, starting slightly off-screen
  const [x, setX] = useState(-20);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Tunable motion params
  const speedPctPerSec = 8; // how fast the traveler crosses the screen
  const stepFreq = 2.2;     // steps per second feel
  const bobPx = 5;          // vertical bob amount
  const tiltDeg = 3;        // slight body tilt for realism

  useEffect(() => {
    const loop = (t: number) => {
      const last = lastTimeRef.current ?? t;
      const dt = (t - last) / 1000;
      lastTimeRef.current = t;

      setX((prev) => {
        let next = prev + speedPctPerSec * dt;
        if (next > 115) next = -22; // wrap around smoothly
        return next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const time = typeof window !== "undefined" ? performance.now() / 1000 : 0;
  const bob = Math.sin(time * Math.PI * 2 * stepFreq) * bobPx;
  const tilt = Math.sin(time * Math.PI * 2 * stepFreq) * tiltDeg;

  return (
    <section
      aria-label="Walking traveler"
      className="relative w-full h-28 md:h-36 overflow-visible pointer-events-none bg-transparent"
    >
      {/* Traveler */}
      <div
        className="absolute bottom-0 will-change-transform"
        style={{
          left: `${x}%`,
          transform: `translateY(${bob}px) rotate(${tilt}deg)`,
          transition: "transform 40ms linear",
        }}
      >
        <img
          src={travelerImage}
          alt="Realistic traveler walking with luggage"
          className="h-24 md:h-32 w-auto object-contain drop-shadow-lg select-none"
          loading="lazy"
          draggable={false}
          style={{ filter: "brightness(0.98) contrast(1.05) saturate(1.02)" }}
        />
        {/* Ground shadow for better grounding */}
        <div className="mx-auto mt-1 h-1.5 w-24 md:w-32 rounded-full bg-foreground/10 blur-[2px]" />
      </div>
    </section>
  );
};

export default WalkingTraveler;
