import { useEffect, useRef, useState } from "react";
import travelerSprite from "@/assets/animations/traveler-walk-sprite.png";

export const WalkingTraveler = () => {
  // Horizontal position in %, starting slightly off-screen
  const [x, setX] = useState(-22);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Tunable motion params
  const speedPctPerSec = 6; // slow, natural pace
  const bobPx = 6;          // subtle vertical gait motion
  const FRAME_COUNT = 8;     // sprite frames
  const STEP_DURATION = 0.9; // seconds per cycle

  useEffect(() => {
    const loop = (t: number) => {
      const last = lastTimeRef.current ?? t;
      const dt = (t - last) / 1000;
      lastTimeRef.current = t;

      setX((prev) => {
        let next = prev + speedPctPerSec * dt;
        if (next > 115) next = -24; // wrap around smoothly
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
  const bob = Math.sin(time * Math.PI * 2 * (1 / STEP_DURATION)) * bobPx * 0.6 +
              Math.sin(time * Math.PI * 4 * (1 / STEP_DURATION)) * bobPx * 0.4;

  return (
    <section
      aria-label="Walking traveler"
      className="relative w-full h-28 md:h-36 overflow-visible pointer-events-none bg-transparent"
    >
      {/* Keyframes for sprite steps */}
      <style>{`
        @keyframes walk-frames { from { background-position: 0% 0; } to { background-position: 100% 0; } }
      `}</style>

      {/* Traveler sprite */}
      <div
        className="absolute bottom-0 will-change-transform"
        style={{
          left: `${x}%`,
          transform: `translateY(${bob}px)`,
          transition: "transform 40ms linear",
        }}
      >
        <div
          aria-hidden
          style={{
            width: "7rem",            // ~112px frame width on screen
            height: "5.5rem",         // ~88px frame height on screen
            backgroundImage: `url(${travelerSprite})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${FRAME_COUNT * 100}% 100%`,
            animation: `walk-frames ${STEP_DURATION}s steps(${FRAME_COUNT}) infinite`,
            imageRendering: "-webkit-optimize-contrast",
            filter: "brightness(1) contrast(1.05) saturate(1.02)",
          }}
        />
        {/* Ground shadow for grounding */}
        <div className="mx-auto mt-1 h-1.5 w-24 md:w-28 rounded-full bg-foreground/10 blur-[2px]" />
      </div>
    </section>
  );
};

export default WalkingTraveler;
