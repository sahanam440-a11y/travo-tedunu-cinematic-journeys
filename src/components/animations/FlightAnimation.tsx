import { useEffect, useState } from 'react';

interface Plane {
  id: number;
  startY: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  direction: 'left' | 'right';
}

export const FlightAnimation = () => {
  const [planes, setPlanes] = useState<Plane[]>([]);

  useEffect(() => {
    const planeArray: Plane[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      startY: 10 + Math.random() * 60,
      animationDuration: 20 + Math.random() * 15,
      animationDelay: Math.random() * 10,
      size: 40 + Math.random() * 30,
      direction: Math.random() > 0.5 ? 'left' : 'right',
    }));
    setPlanes(planeArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {planes.map((plane) => (
        <div
          key={plane.id}
          className={plane.direction === 'left' ? 'animate-fly-left' : 'animate-fly-right'}
          style={{
            position: 'absolute',
            top: `${plane.startY}%`,
            left: plane.direction === 'left' ? '100%' : '-100px',
            animationDuration: `${plane.animationDuration}s`,
            animationDelay: `${plane.animationDelay}s`,
          }}
        >
          <svg
            width={plane.size}
            height={plane.size}
            viewBox="0 0 64 64"
            style={{
              transform: plane.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
            }}
          >
            <defs>
              <linearGradient id={`plane-gradient-${plane.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {/* Plane body */}
            <ellipse cx="32" cy="32" rx="22" ry="6" fill={`url(#plane-gradient-${plane.id})`} />
            {/* Cockpit */}
            <ellipse cx="48" cy="32" rx="8" ry="5" fill="#1e40af" />
            <ellipse cx="48" cy="32" rx="4" ry="3" fill="#93c5fd" opacity="0.6" />
            {/* Wings */}
            <ellipse cx="28" cy="32" rx="16" ry="20" fill="#3b82f6" opacity="0.8" />
            {/* Tail */}
            <path d="M 10 32 L 14 24 L 18 32 L 14 32 Z" fill="#3b82f6" />
            {/* Engine highlights */}
            <circle cx="20" cy="32" r="3" fill="#1e3a8a" opacity="0.7" />
            <circle cx="28" cy="32" r="3" fill="#1e3a8a" opacity="0.7" />
            {/* Contrail */}
            <path
              d="M 10 32 Q 0 32 -10 32"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fly-left {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(-100vw - 200px));
            opacity: 0;
          }
        }
        @keyframes fly-right {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 200px));
            opacity: 0;
          }
        }
        .animate-fly-left {
          animation: fly-left linear infinite;
        }
        .animate-fly-right {
          animation: fly-right linear infinite;
        }
      `}</style>
    </div>
  );
};
