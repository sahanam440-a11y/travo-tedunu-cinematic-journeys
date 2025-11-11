import { useEffect, useState } from "react";

interface BeachElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'starfish';
}

interface Jellyfish {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
  delay: number;
  color: string;
  glowIntensity: number;
}

export const BeachAnimation = () => {
  const [beachElements, setBeachElements] = useState<BeachElement[]>([]);
  const [jellyfish, setJellyfish] = useState<Jellyfish[]>([]);
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
    
    for (let i = 0; i < elementCount; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8,
        size: isMobile ? 25 : 35,
        delay: Math.random() * 10,
        type: 'starfish',
      });
    }
    setBeachElements(elementArray);

    // Create jellyfish
    const jellyfishArray: Jellyfish[] = [];
    const jellyfishCount = isMobile ? 3 : 5;
    const colors = ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'];
    
    for (let i = 0; i < jellyfishCount; i++) {
      jellyfishArray.push({
        id: i,
        left: Math.random() * 100,
        size: isMobile ? 40 : 60,
        animationDuration: 15 + Math.random() * 10,
        delay: Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        glowIntensity: 0.4 + Math.random() * 0.3,
      });
    }
    setJellyfish(jellyfishArray);
  }, [isMobile]);

  const renderBeachElement = (element: BeachElement) => {
    const baseColor = '#fbbf24';
    
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Jellyfish */}
      {jellyfish.map((j) => (
        <div
          key={`jellyfish-${j.id}`}
          className="absolute animate-jellyfish-float"
          style={{
            left: `${j.left}%`,
            width: `${j.size}px`,
            height: `${j.size * 1.5}px`,
            animationDuration: `${j.animationDuration}s`,
            animationDelay: `${j.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 64 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-jellyfish-pulse"
          >
            <defs>
              <radialGradient id={`jelly-glow-${j.id}`} cx="50%" cy="50%">
                <stop offset="0%" stopColor={j.color} stopOpacity={j.glowIntensity} />
                <stop offset="100%" stopColor={j.color} stopOpacity="0.1" />
              </radialGradient>
              <filter id={`glow-${j.id}`}>
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Jellyfish bell/dome */}
            <ellipse
              cx="32"
              cy="28"
              rx="22"
              ry="20"
              fill={`url(#jelly-glow-${j.id})`}
              filter={`url(#glow-${j.id})`}
            />
            <ellipse
              cx="32"
              cy="28"
              rx="18"
              ry="16"
              fill={j.color}
              opacity="0.6"
            />
            
            {/* Inner dome detail */}
            <ellipse
              cx="32"
              cy="26"
              rx="12"
              ry="10"
              fill="white"
              opacity="0.2"
            />
            
            {/* Tentacles */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const startX = 20 + i * 5;
              const waveOffset = i * 8;
              return (
                <g key={i}>
                  <path
                    d={`M${startX} 45 Q${startX - 2} 60 ${startX} 75 T${startX} 92`}
                    stroke={j.color}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.7"
                    filter={`url(#glow-${j.id})`}
                    className="animate-tentacle-wave"
                    style={{ animationDelay: `${waveOffset * 0.1}s` }}
                  />
                  {/* Glow effect on tentacles */}
                  <path
                    d={`M${startX} 45 Q${startX - 2} 60 ${startX} 75 T${startX} 92`}
                    stroke={j.color}
                    strokeWidth="4"
                    fill="none"
                    opacity="0.2"
                    filter={`url(#glow-${j.id})`}
                    className="animate-tentacle-wave"
                    style={{ animationDelay: `${waveOffset * 0.1}s` }}
                  />
                </g>
              );
            })}
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
        @keyframes jellyfish-float {
          0% {
            bottom: -20%;
            opacity: 0;
            transform: translateX(0) translateY(0);
          }
          10% {
            opacity: 0.8;
          }
          25% {
            transform: translateX(-15px) translateY(-10px);
          }
          50% {
            transform: translateX(20px) translateY(-5px);
          }
          75% {
            transform: translateX(-10px) translateY(-15px);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(15px) translateY(-20px);
          }
        }
        @keyframes jellyfish-pulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.95);
          }
        }
        @keyframes tentacle-wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
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
        .animate-jellyfish-float {
          animation: jellyfish-float linear infinite;
        }
        .animate-jellyfish-pulse {
          animation: jellyfish-pulse ease-in-out 3s infinite;
          transform-origin: center;
        }
        .animate-tentacle-wave {
          animation: tentacle-wave ease-in-out 2s infinite;
          transform-origin: top;
        }
        .animate-float-beach {
          animation: float-beach linear infinite;
        }
      `}</style>
    </div>
  );
};
