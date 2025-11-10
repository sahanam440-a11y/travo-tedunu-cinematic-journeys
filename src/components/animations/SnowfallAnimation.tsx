import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

export const SnowfallAnimation = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const snowflakeArray: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 15,
      animationDelay: Math.random() * 10,
      size: 8 + Math.random() * 16,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setSnowflakes(snowflakeArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            top: '-20px',
            opacity: flake.opacity,
          }}
        >
          <svg
            width={flake.size}
            height={flake.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Snowflake design */}
            <path
              d="M12 2v20M2 12h20M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2" fill="white" opacity="0.8" />
            <circle cx="12" cy="6" r="1.5" fill="white" opacity="0.6" />
            <circle cx="12" cy="18" r="1.5" fill="white" opacity="0.6" />
            <circle cx="6" cy="12" r="1.5" fill="white" opacity="0.6" />
            <circle cx="18" cy="12" r="1.5" fill="white" opacity="0.6" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(100px) rotate(180deg);
          }
          100% {
            transform: translateY(calc(100vh + 20px)) translateX(-100px) rotate(360deg);
          }
        }
        .animate-snowfall {
          animation: snowfall linear infinite;
        }
      `}</style>
    </div>
  );
};
