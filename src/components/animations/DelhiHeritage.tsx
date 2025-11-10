import { useEffect, useState } from "react";

interface Heritage {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  type: 'particle' | 'dome';
}

export const DelhiHeritage = () => {
  const [elements, setElements] = useState<Heritage[]>([]);

  useEffect(() => {
    const elementArray: Heritage[] = [];
    
    // More particles, fewer domes for subtle effect
    for (let i = 0; i < 25; i++) {
      elementArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 15 + Math.random() * 10,
        size: i < 20 ? 8 + Math.random() * 8 : 20 + Math.random() * 15, // Smaller particles, occasional larger dome
        delay: Math.random() * 15,
        type: i < 20 ? 'particle' : 'dome',
      });
    }
    setElements(elementArray);
  }, []);

  const renderElement = (element: Heritage) => {
    if (element.type === 'dome') {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Architectural dome silhouette */}
          <path
            d="M12 4C8 4 4 6 4 10C4 12 5 14 7 15L7 20L17 20L17 15C19 14 20 12 20 10C20 6 16 4 12 4Z"
            fill="hsl(var(--primary))"
            opacity="0.15"
          />
          <ellipse
            cx="12"
            cy="10"
            rx="7"
            ry="5"
            fill="hsl(var(--accent))"
            opacity="0.1"
          />
          <path
            d="M11 4L11 2M13 4L13 2M12 1L12 3"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      );
    } else {
      // Golden particle
      return (
        <div
          className="rounded-full blur-[1px]"
          style={{
            background: `radial-gradient(circle, rgba(255, 215, 120, 0.6) 0%, rgba(255, 200, 100, 0.3) 50%, transparent 100%)`,
            width: '100%',
            height: '100%',
          }}
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-heritage-float"
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {renderElement(element)}
        </div>
      ))}
      
      <style>{`
        @keyframes heritage-float {
          0% {
            top: 110%;
            opacity: 0;
            transform: translateX(0) scale(0.8);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateX(10px) scale(1);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            top: -10%;
            opacity: 0;
            transform: translateX(-10px) scale(0.9);
          }
        }
        .animate-heritage-float {
          animation: heritage-float linear infinite;
        }
      `}</style>
    </div>
  );
};
