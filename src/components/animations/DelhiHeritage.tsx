import { useEffect, useState } from "react";

interface LightElement {
  id: number;
  left: number;
  top?: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'ray' | 'sparkle';
  intensity: number;
}

export const DelhiHeritage = () => {
  const [elements, setElements] = useState<LightElement[]>([]);

  useEffect(() => {
    const elementArray: LightElement[] = [];
    
    // Create light rays from top
    for (let i = 0; i < 8; i++) {
      elementArray.push({
        id: i,
        left: (i * 12) + Math.random() * 10,
        animationDuration: 8 + Math.random() * 6,
        size: 80 + Math.random() * 120,
        delay: Math.random() * 8,
        type: 'ray',
        intensity: 0.05 + Math.random() * 0.1,
      });
    }
    
    // Create floating sparkles
    for (let i = 8; i < 35; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: 4 + Math.random() * 6,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 10,
        type: 'sparkle',
        intensity: 0.3 + Math.random() * 0.7,
      });
    }
    
    setElements(elementArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Warm golden gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-transparent" />
      
      {elements.map((element) => {
        if (element.type === 'ray') {
          return (
            <div
              key={element.id}
              className="absolute top-0 animate-light-ray"
              style={{
                left: `${element.left}%`,
                width: `${element.size}px`,
                height: '100%',
                background: `linear-gradient(180deg, 
                  rgba(255, 215, 120, ${element.intensity}) 0%, 
                  rgba(255, 200, 100, ${element.intensity * 0.6}) 30%,
                  transparent 70%)`,
                transformOrigin: 'top center',
                animationDuration: `${element.animationDuration}s`,
                animationDelay: `${element.delay}s`,
              }}
            />
          );
        } else {
          return (
            <div
              key={element.id}
              className="absolute animate-sparkle-float"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                animationDuration: `${element.animationDuration}s`,
                animationDelay: `${element.delay}s`,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255, 220, 130, ${element.intensity}) 0%, transparent 70%)`,
                  boxShadow: `0 0 ${element.size * 2}px rgba(255, 215, 120, ${element.intensity * 0.5})`,
                }}
              />
            </div>
          );
        }
      })}
      
      <style>{`
        @keyframes light-ray {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(1) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: scaleY(1.1) rotate(1deg);
          }
        }
        
        @keyframes sparkle-float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          10% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-50vh) scale(1.2);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) scale(0.8);
          }
        }
        
        .animate-light-ray {
          animation: light-ray ease-in-out infinite;
        }
        
        .animate-sparkle-float {
          animation: sparkle-float linear infinite;
        }
      `}</style>
    </div>
  );
};
