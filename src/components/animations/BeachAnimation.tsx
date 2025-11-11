import { useEffect, useState } from "react";

interface BeachElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'shell' | 'starfish';
}

interface Bubble {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
  delay: number;
  opacity: number;
}

export const BeachAnimation = () => {
  const [beachElements, setBeachElements] = useState<BeachElement[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
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

    // Create bubbles
    const bubbleArray: Bubble[] = [];
    const bubbleCount = isMobile ? 15 : 25;
    
    for (let i = 0; i < bubbleCount; i++) {
      bubbleArray.push({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 12,
        animationDuration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
    setBubbles(bubbleArray);
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
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={`bubble-${bubble.id}`}
          className="absolute animate-bubble-rise"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        >
          <div
            className="w-full h-full rounded-full animate-bubble-wobble"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${bubble.opacity}), rgba(173, 216, 230, ${bubble.opacity * 0.6}))`,
              boxShadow: `inset -2px -2px 4px rgba(255, 255, 255, 0.5), 0 0 ${bubble.size / 2}px rgba(173, 216, 230, 0.3)`,
            }}
          />
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
        @keyframes bubble-rise {
          0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) scale(0.5);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateX(20px) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-10px) scale(0.8);
          }
        }
        @keyframes bubble-wobble {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px);
          }
          75% {
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
        .animate-bubble-rise {
          animation: bubble-rise linear infinite;
        }
        .animate-bubble-wobble {
          animation: bubble-wobble ease-in-out 2s infinite;
        }
        .animate-float-beach {
          animation: float-beach linear infinite;
        }
      `}</style>
    </div>
  );
};
