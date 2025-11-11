import { useEffect, useState } from "react";

interface Seagull {
  id: number;
  startY: number;
  animationDuration: number;
  delay: number;
  size: number;
  direction: 'left' | 'right';
}

interface BeachElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'shell' | 'starfish' | 'coconut';
}

export const BeachAnimation = () => {
  const [seagulls, setSeagulls] = useState<Seagull[]>([]);
  const [beachElements, setBeachElements] = useState<BeachElement[]>([]);
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
    // Create seagulls
    const seagullArray: Seagull[] = [];
    const seagullCount = isMobile ? 2 : 4;
    
    for (let i = 0; i < seagullCount; i++) {
      seagullArray.push({
        id: i,
        startY: 10 + Math.random() * 40,
        animationDuration: 15 + Math.random() * 10,
        delay: Math.random() * 8,
        size: isMobile ? 25 : 35,
        direction: Math.random() > 0.5 ? 'left' : 'right',
      });
    }
    setSeagulls(seagullArray);

    // Create floating beach elements
    const elementArray: BeachElement[] = [];
    const elementCount = isMobile ? 3 : 5;
    const types: ('shell' | 'starfish' | 'coconut')[] = ['shell', 'starfish', 'coconut'];
    
    for (let i = 0; i < elementCount; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8,
        size: isMobile ? 20 : 30,
        delay: Math.random() * 10,
        type: types[i % types.length],
      });
    }
    setBeachElements(elementArray);
  }, [isMobile]);

  const renderBeachElement = (element: BeachElement) => {
    const baseColor = element.type === 'shell' ? '#f8b4d9' : element.type === 'starfish' ? '#fbbf24' : '#8b4513';
    
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
        {element.type === 'coconut' && (
          <>
            <ellipse cx="24" cy="24" rx="10" ry="12" fill={baseColor} opacity="0.9" />
            <ellipse cx="24" cy="22" rx="8" ry="9" fill="#654321" opacity="0.7" />
            <ellipse cx="24" cy="20" rx="6" ry="7" fill="#8b6f47" opacity="0.5" />
            <circle cx="22" cy="18" r="1.5" fill="black" opacity="0.6" />
            <circle cx="26" cy="18" r="1.5" fill="black" opacity="0.6" />
            <circle cx="24" cy="22" r="1" fill="black" opacity="0.6" />
          </>
        )}
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Seagulls */}
      {seagulls.map((seagull) => (
        <div
          key={`seagull-${seagull.id}`}
          className={seagull.direction === 'left' ? 'animate-seagull-left' : 'animate-seagull-right'}
          style={{
            position: 'absolute',
            top: `${seagull.startY}%`,
            [seagull.direction === 'left' ? 'right' : 'left']: '-10%',
            width: `${seagull.size}px`,
            height: `${seagull.size}px`,
            animationDuration: `${seagull.animationDuration}s`,
            animationDelay: `${seagull.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-seagull-flap"
            style={{
              transform: seagull.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          >
            {/* Body */}
            <ellipse cx="24" cy="24" rx="8" ry="5" fill="white" opacity="0.95" />
            <ellipse cx="24" cy="24" rx="6" ry="3.5" fill="#f0f0f0" opacity="0.8" />
            
            {/* Wings */}
            <path
              d="M16 24 Q8 20 4 22 L12 26 Z"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M32 24 Q40 20 44 22 L36 26 Z"
              fill="white"
              opacity="0.9"
            />
            
            {/* Head */}
            <circle cx="26" cy="22" r="3" fill="white" opacity="0.95" />
            <circle cx="27" cy="21.5" r="0.8" fill="black" />
            
            {/* Beak */}
            <path
              d="M28 22 L32 23 L28 23.5 Z"
              fill="#fbbf24"
            />
            
            {/* Tail */}
            <path
              d="M16 26 L14 28 L18 27 Z"
              fill="white"
              opacity="0.85"
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
        @keyframes seagull-left {
          0% {
            right: -10%;
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-20px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          75% {
            transform: translateY(-25px) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            right: 110%;
            transform: translateY(-15px) scale(0.8);
            opacity: 0;
          }
        }
        @keyframes seagull-right {
          0% {
            left: -10%;
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-20px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          75% {
            transform: translateY(-25px) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 110%;
            transform: translateY(-15px) scale(0.8);
            opacity: 0;
          }
        }
        @keyframes seagull-flap {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.85);
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
        .animate-seagull-left {
          animation: seagull-left linear infinite;
        }
        .animate-seagull-right {
          animation: seagull-right linear infinite;
        }
        .animate-seagull-flap {
          animation: seagull-flap ease-in-out 0.5s infinite;
          transform-origin: center;
        }
        .animate-float-beach {
          animation: float-beach linear infinite;
        }
      `}</style>
    </div>
  );
};
