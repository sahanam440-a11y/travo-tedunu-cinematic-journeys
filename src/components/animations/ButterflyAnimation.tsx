import { useEffect, useState } from 'react';

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  color: string;
}

export const ButterflyAnimation = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  const colors = ['#ff6b9d', '#fbbf24', '#a78bfa', '#60a5fa', '#34d399'];

  useEffect(() => {
    const butterflyArray: Butterfly[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      animationDuration: 8 + Math.random() * 8,
      animationDelay: Math.random() * 6,
      size: 25 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setButterflies(butterflyArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute animate-butterfly-float"
          style={{
            left: `${butterfly.startX}%`,
            top: `${butterfly.startY}%`,
            animationDuration: `${butterfly.animationDuration}s`,
            animationDelay: `${butterfly.animationDelay}s`,
          }}
        >
          <svg
            width={butterfly.size}
            height={butterfly.size}
            viewBox="0 0 48 48"
            className="animate-butterfly-wing"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
            }}
          >
            <defs>
              <radialGradient id={`butterfly-gradient-${butterfly.id}`}>
                <stop offset="0%" stopColor={butterfly.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={butterfly.color} stopOpacity="0.5" />
              </radialGradient>
            </defs>
            {/* Left wing */}
            <ellipse
              cx="16"
              cy="20"
              rx="12"
              ry="16"
              fill={`url(#butterfly-gradient-${butterfly.id})`}
              transform="rotate(-20 16 20)"
            />
            <ellipse cx="16" cy="20" rx="6" ry="8" fill="white" opacity="0.4" transform="rotate(-20 16 20)" />
            {/* Right wing */}
            <ellipse
              cx="32"
              cy="20"
              rx="12"
              ry="16"
              fill={`url(#butterfly-gradient-${butterfly.id})`}
              transform="rotate(20 32 20)"
            />
            <ellipse cx="32" cy="20" rx="6" ry="8" fill="white" opacity="0.4" transform="rotate(20 32 20)" />
            {/* Body */}
            <ellipse cx="24" cy="24" rx="2.5" ry="8" fill="#374151" />
            {/* Antennae */}
            <path d="M 24 16 Q 22 12 20 10" stroke="#374151" strokeWidth="1" fill="none" strokeLinecap="round" />
            <path d="M 24 16 Q 26 12 28 10" stroke="#374151" strokeWidth="1" fill="none" strokeLinecap="round" />
            <circle cx="20" cy="10" r="1.5" fill="#374151" />
            <circle cx="28" cy="10" r="1.5" fill="#374151" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes butterfly-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, -80px) rotate(15deg);
          }
          50% {
            transform: translate(50px, -120px) rotate(-10deg);
          }
          75% {
            transform: translate(-50px, -60px) rotate(20deg);
          }
        }
        @keyframes butterfly-wing {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.8);
          }
        }
        .animate-butterfly-float {
          animation: butterfly-float ease-in-out infinite;
        }
        .animate-butterfly-wing {
          animation: butterfly-wing ease-in-out 0.3s infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};
