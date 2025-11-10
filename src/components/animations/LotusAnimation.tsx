import { useEffect, useState } from "react";

interface LotusPetal {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  rotation: number;
}

export const LotusAnimation = () => {
  const [petals, setPetals] = useState<LotusPetal[]>([]);

  useEffect(() => {
    const petalArray: LotusPetal[] = [];
    for (let i = 0; i < 20; i++) {
      petalArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 8,
        size: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
      });
    }
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall opacity-70"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
          >
            {/* Lotus petal shape */}
            <path
              d="M12 2C12 2 8 6 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 6 12 2 12 2Z"
              fill="hsl(var(--primary))"
              opacity="0.8"
            />
            <path
              d="M12 15C12 15 10 16 10 18C10 20 11 22 12 22C13 22 14 20 14 18C14 16 12 15 12 15Z"
              fill="hsl(var(--accent))"
              opacity="0.7"
            />
            <ellipse
              cx="12"
              cy="11"
              rx="2"
              ry="3"
              fill="hsl(var(--primary))"
              opacity="0.9"
            />
          </svg>
        </div>
      ))}
      
      <style>{`
        @keyframes fall {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
          }
          50% {
            transform: translateX(20px) rotate(180deg);
          }
          100% {
            top: 110%;
            transform: translateX(-20px) rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};
