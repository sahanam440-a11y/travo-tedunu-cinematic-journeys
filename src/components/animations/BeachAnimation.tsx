import { useEffect, useState } from "react";

interface BeachElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'starfish';
}

export const BeachAnimation = () => {
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
        .animate-float-beach {
          animation: float-beach linear infinite;
        }
      `}</style>
    </div>
  );
};
