import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  glowIntensity: number;
  type: 'diya' | 'flute' | 'feather';
}

export const DiyaAnimation = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const elementArray: FloatingElement[] = [];
    const types: Array<'diya' | 'flute' | 'feather'> = ['diya', 'flute', 'feather'];
    
    for (let i = 0; i < 18; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 10,
        size: 25 + Math.random() * 20,
        delay: Math.random() * 8,
        glowIntensity: 0.6 + Math.random() * 0.4,
        type: types[i % 3], // Distribute types evenly
      });
    }
    setElements(elementArray);
  }, []);

  const renderElement = (element: FloatingElement) => {
    if (element.type === 'flute') {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-lg"
        >
          {/* Krishna's Flute */}
          <rect x="2" y="10" width="20" height="4" rx="2" fill="hsl(var(--primary))" opacity="0.8" />
          <circle cx="5" cy="12" r="1" fill="hsl(var(--background))" opacity="0.6" />
          <circle cx="9" cy="12" r="1" fill="hsl(var(--background))" opacity="0.6" />
          <circle cx="13" cy="12" r="1" fill="hsl(var(--background))" opacity="0.6" />
          <circle cx="17" cy="12" r="1" fill="hsl(var(--background))" opacity="0.6" />
          <circle cx="21" cy="12" r="1" fill="hsl(var(--background))" opacity="0.6" />
          <path d="M1 12 L2 12" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.7" />
          <path d="M22 12 L23 12" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.7" />
        </svg>
      );
    } else if (element.type === 'feather') {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-lg"
        >
          {/* Peacock Feather */}
          <ellipse cx="12" cy="8" rx="6" ry="7" fill="hsl(var(--primary))" opacity="0.7" />
          <ellipse cx="12" cy="8" rx="4" ry="5" fill="hsl(var(--accent))" opacity="0.6" />
          <ellipse cx="12" cy="8" rx="2" ry="2.5" fill="hsl(var(--primary))" opacity="0.8" />
          <circle cx="12" cy="8" r="1" fill="hsl(var(--background))" opacity="0.9" />
          <path 
            d="M12 15 Q11 18 10 22 M12 15 Q12 19 12 22 M12 15 Q13 18 14 22" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="1.5" 
            opacity="0.6"
          />
          <path 
            d="M8 10 L6 12 M16 10 L18 12 M10 6 L8 4 M14 6 L16 4" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            opacity="0.5"
          />
        </svg>
      );
    } else {
      // Diya
      return (
        <>
          <div 
            className="absolute inset-0 rounded-full blur-md animate-pulse"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / ${element.glowIntensity}) 0%, transparent 70%)`,
              transform: 'scale(1.5)',
            }}
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative drop-shadow-lg"
          >
            <path
              d="M12 2C12 2 10.5 4 10.5 6C10.5 7.5 11 8 12 8C13 8 13.5 7.5 13.5 6C13.5 4 12 2 12 2Z"
              fill="hsl(var(--primary))"
              opacity="0.95"
              className="animate-pulse"
            />
            <ellipse cx="12" cy="6" rx="0.8" ry="1.2" fill="hsl(var(--accent))" opacity="0.8" />
            <ellipse cx="12" cy="16" rx="8" ry="3" fill="hsl(var(--primary))" opacity="0.6" />
            <path
              d="M4 16C4 16 4 19 6 20C8 21 16 21 18 20C20 19 20 16 20 16"
              fill="hsl(var(--accent))"
              opacity="0.7"
            />
            <ellipse cx="12" cy="16" rx="6" ry="2" fill="hsl(var(--foreground))" opacity="0.3" />
            <rect x="11.5" y="8" width="1" height="8" fill="hsl(var(--foreground))" opacity="0.5" />
          </svg>
        </>
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-spiritual"
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div className="relative">
            {renderElement(element)}
          </div>
        </div>
      ))}
      
      <style>{`
        @keyframes float-spiritual {
          0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) scale(0.8) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateX(20px) scale(1) rotate(90deg);
          }
          50% {
            transform: translateX(-10px) scale(1.05) rotate(180deg);
          }
          75% {
            transform: translateX(30px) scale(0.95) rotate(270deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-20px) scale(0.8) rotate(360deg);
          }
        }
        .animate-float-spiritual {
          animation: float-spiritual linear infinite;
        }
      `}</style>
    </div>
  );
};
