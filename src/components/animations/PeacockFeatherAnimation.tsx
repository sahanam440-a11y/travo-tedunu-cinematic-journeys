import { useEffect, useState } from 'react';

interface Feather {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  rotation: number;
}

export const PeacockFeatherAnimation = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    const featherArray: Feather[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 6,
      animationDelay: Math.random() * 5,
      size: 30 + Math.random() * 30,
      rotation: Math.random() * 360,
    }));
    setFeathers(featherArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {feathers.map((feather) => (
        <div
          key={feather.id}
          className="absolute animate-fall"
          style={{
            left: `${feather.left}%`,
            animationDuration: `${feather.animationDuration}s`,
            animationDelay: `${feather.animationDelay}s`,
            top: '-100px',
          }}
        >
          <svg
            width={feather.size}
            height={feather.size * 1.5}
            viewBox="0 0 24 36"
            className="opacity-70"
            style={{
              transform: `rotate(${feather.rotation}deg)`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          >
            {/* Peacock feather with vibrant colors */}
            <defs>
              <radialGradient id={`feather-gradient-${feather.id}`}>
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            {/* Main feather shape */}
            <ellipse cx="12" cy="8" rx="8" ry="8" fill={`url(#feather-gradient-${feather.id})`} />
            <ellipse cx="12" cy="8" rx="4" ry="4" fill="#1e40af" opacity="0.8" />
            <ellipse cx="12" cy="8" rx="2" ry="2" fill="#fbbf24" />
            {/* Feather stem */}
            <line x1="12" y1="16" x2="12" y2="36" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
            {/* Feather barbs */}
            <path d="M 12 18 Q 8 22 6 24" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M 12 18 Q 16 22 18 24" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M 12 24 Q 7 28 5 30" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M 12 24 Q 17 28 19 30" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.6" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};
