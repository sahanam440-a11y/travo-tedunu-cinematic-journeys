import { useEffect, useState } from "react";

interface BeachElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'shell' | 'starfish';
}

interface TropicalFish {
  id: number;
  startY: number;
  size: number;
  animationDuration: number;
  delay: number;
  direction: 'left' | 'right';
  color: string;
  pattern: 'striped' | 'spotted' | 'solid';
}

export const BeachAnimation = () => {
  const [beachElements, setBeachElements] = useState<BeachElement[]>([]);
  const [fish, setFish] = useState<TropicalFish[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Create floating beach elements
    const elementArray: BeachElement[] = [];
    const elementCount = isMobile ? 4 : 6;
    const types: ('shell' | 'starfish')[] = ['shell', 'starfish'];
    
    for (let i = 0; i < elementCount; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8,
        size: isMobile ? 25 : 35,
        delay: Math.random() * 10,
        type: types[i % types.length],
      });
    }
    setBeachElements(elementArray);

    // Create tropical fish
    const fishArray: TropicalFish[] = [];
    const fishCount = isMobile ? 4 : 7;
    const colors = ['#ff6b9d', '#fbbf24', '#60a5fa', '#34d399', '#a78bfa', '#f97316'];
    const patterns: ('striped' | 'spotted' | 'solid')[] = ['striped', 'spotted', 'solid'];
    
    for (let i = 0; i < fishCount; i++) {
      fishArray.push({
        id: i,
        startY: 15 + Math.random() * 60,
        size: isMobile ? 30 : 45,
        animationDuration: 8 + Math.random() * 8,
        delay: Math.random() * 6,
        direction: Math.random() > 0.5 ? 'left' : 'right',
        color: colors[Math.floor(Math.random() * colors.length)],
        pattern: patterns[Math.floor(Math.random() * patterns.length)],
      });
    }
    setFish(fishArray);
  }, [isMobile]);

  const renderBeachElement = (element: BeachElement) => {
    const baseColor = element.type === 'shell' ? '#f8b4d9' : '#fbbf24';
    
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {element.type === 'shell' && (
          <>
            <path
              d="M24 8C20 8 16 10 16 14C16 18 18 22 20 26L24 36L28 26C30 22 32 18 32 14C32 10 28 8 24 8Z"
              fill={baseColor}
              opacity="0.9"
            />
            <path
              d="M24 10C21 10 18 11.5 18 14.5C18 17.5 20 20 22 23L24 30L26 23C28 20 30 17.5 30 14.5C30 11.5 27 10 24 10Z"
              fill="white"
              opacity="0.3"
            />
            <circle cx="24" cy="15" r="2" fill="white" opacity="0.5" />
          </>
        )}
        {element.type === 'starfish' && (
          <>
            {[0, 1, 2, 3, 4].map((i) => {
              const angle = (i * 72 - 90) * (Math.PI / 180);
              const x = 24 + Math.cos(angle) * 12;
              const y = 24 + Math.sin(angle) * 12;
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx="4"
                  ry="8"
                  fill={baseColor}
                  opacity="0.85"
                  transform={`rotate(${i * 72} ${x} ${y})`}
                />
              );
            })}
            <circle cx="24" cy="24" r="6" fill={baseColor} opacity="0.9" />
            <circle cx="24" cy="24" r="3" fill="white" opacity="0.4" />
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Tropical Fish */}
      {fish.map((f) => (
        <div
          key={`fish-${f.id}`}
          className={f.direction === 'left' ? 'animate-fish-left' : 'animate-fish-right'}
          style={{
            position: 'absolute',
            top: `${f.startY}%`,
            [f.direction === 'left' ? 'right' : 'left']: '-10%',
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.animationDuration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-fish-swim"
            style={{
              transform: f.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))',
            }}
          >
            <defs>
              <linearGradient id={`fish-gradient-${f.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={f.color} stopOpacity="1" />
                <stop offset="100%" stopColor={f.color} stopOpacity="0.7" />
              </linearGradient>
            </defs>
            
            {/* Fish body */}
            <ellipse 
              cx="32" 
              cy="24" 
              rx="20" 
              ry="12" 
              fill={`url(#fish-gradient-${f.id})`}
            />
            
            {/* Pattern overlay */}
            {f.pattern === 'striped' && (
              <>
                <line x1="20" y1="16" x2="20" y2="32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <line x1="26" y1="14" x2="26" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <line x1="32" y1="13" x2="32" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <line x1="38" y1="14" x2="38" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              </>
            )}
            {f.pattern === 'spotted' && (
              <>
                <circle cx="24" cy="20" r="2" fill="rgba(255,255,255,0.4)" />
                <circle cx="32" cy="18" r="2.5" fill="rgba(255,255,255,0.4)" />
                <circle cx="28" cy="26" r="2" fill="rgba(255,255,255,0.4)" />
                <circle cx="38" cy="24" r="2" fill="rgba(255,255,255,0.4)" />
              </>
            )}
            
            {/* Tail fin */}
            <path
              d="M12 24 L2 16 L4 24 L2 32 Z"
              fill={f.color}
              opacity="0.8"
            />
            
            {/* Dorsal fin */}
            <path
              d="M32 12 L30 4 L36 12 Z"
              fill={f.color}
              opacity="0.7"
            />
            
            {/* Ventral fin */}
            <path
              d="M28 36 L26 42 L32 36 Z"
              fill={f.color}
              opacity="0.7"
            />
            
            {/* Eye */}
            <circle cx="44" cy="22" r="3" fill="white" />
            <circle cx="45" cy="22" r="1.5" fill="black" />
            
            {/* Mouth */}
            <path
              d="M52 24 Q50 26 48 24"
              stroke={f.color}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}

      {/* Beach Elements */}
      {beachElements.map((element) => (
        <div
          key={`beach-${element.id}`}
          className="absolute animate-float-beach"
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div 
            className="relative"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))',
            }}
          >
            {renderBeachElement(element)}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes fish-left {
          0% {
            right: -15%;
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-15px);
          }
          50% {
            transform: translateY(10px);
          }
          75% {
            transform: translateY(-8px);
          }
          90% {
            opacity: 1;
          }
          100% {
            right: 115%;
            transform: translateY(5px);
            opacity: 0;
          }
        }
        @keyframes fish-right {
          0% {
            left: -15%;
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-15px);
          }
          50% {
            transform: translateY(10px);
          }
          75% {
            transform: translateY(-8px);
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 115%;
            transform: translateY(5px);
            opacity: 0;
          }
        }
        @keyframes fish-swim {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          50% {
            transform: scaleX(0.95) scaleY(1.05);
          }
        }
        @keyframes float-beach {
          0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) rotate(0deg) scale(0.7);
          }
          10% {
            opacity: 0.8;
          }
          25% {
            transform: translateX(20px) rotate(45deg) scale(1);
          }
          50% {
            transform: translateX(-15px) rotate(90deg) scale(1.1);
          }
          75% {
            transform: translateX(25px) rotate(180deg) scale(1);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-20px) rotate(360deg) scale(0.7);
          }
        }
        .animate-fish-left {
          animation: fish-left linear infinite;
        }
        .animate-fish-right {
          animation: fish-right linear infinite;
        }
        .animate-fish-swim {
          animation: fish-swim ease-in-out 1s infinite;
          transform-origin: center;
        }
        .animate-float-beach {
          animation: float-beach linear infinite;
        }
      `}</style>
    </div>
  );
};
