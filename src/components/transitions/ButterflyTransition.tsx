import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  delay: number;
  duration: number;
}

export const ButterflyTransition = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    // Generate 6 butterflies with random positions and timing
    const newButterflies = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      delay: Math.random() * 0.2,
      duration: 1.5 + Math.random() * 0.5,
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          initial={{
            x: `${butterfly.startX}vw`,
            y: `${butterfly.startY}vh`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [`${butterfly.startX}vw`, `${butterfly.startX + 20}vw`, `${butterfly.startX + 40}vw`],
            y: [`${butterfly.startY}vh`, `${butterfly.startY - 30}vh`, `${butterfly.startY - 60}vh`],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            ease: "easeInOut",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Butterfly SVG */}
            <path
              d="M12 4C12 4 10 6 10 8C10 10 11 11 12 11C13 11 14 10 14 8C14 6 12 4 12 4Z"
              fill="hsl(var(--primary))"
              opacity="0.9"
            />
            <path
              d="M7 8C7 8 5 9 4 11C3 13 4 15 6 15C8 15 9 13 9 11C9 9 7 8 7 8Z"
              fill="hsl(var(--primary))"
              opacity="0.8"
            />
            <path
              d="M17 8C17 8 19 9 20 11C21 13 20 15 18 15C16 15 15 13 15 11C15 9 17 8 17 8Z"
              fill="hsl(var(--primary))"
              opacity="0.8"
            />
            <path
              d="M7 12C7 12 5 13 4 15C3 17 4 19 6 19C8 19 9 17 9 15C9 13 7 12 7 12Z"
              fill="hsl(var(--accent))"
              opacity="0.7"
            />
            <path
              d="M17 12C17 12 19 13 20 15C21 17 20 19 18 19C16 19 15 17 15 15C15 13 17 12 17 12Z"
              fill="hsl(var(--accent))"
              opacity="0.7"
            />
            {/* Body */}
            <circle cx="12" cy="12" r="1.5" fill="hsl(var(--foreground))" opacity="0.6" />
            <path
              d="M12 13.5C12 13.5 11.5 15 11.5 16.5C11.5 18 12 19 12 19C12 19 12.5 18 12.5 16.5C12.5 15 12 13.5 12 13.5Z"
              fill="hsl(var(--foreground))"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
