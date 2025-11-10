import { useEffect, useState } from "react";

interface Diya {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
  glowIntensity: number;
}

export const DiyaAnimation = () => {
  const [diyas, setDiyas] = useState<Diya[]>([]);

  useEffect(() => {
    const diyaArray: Diya[] = [];
    for (let i = 0; i < 12; i++) {
      diyaArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 10,
        size: 25 + Math.random() * 15,
        delay: Math.random() * 8,
        glowIntensity: 0.6 + Math.random() * 0.4,
      });
    }
    setDiyas(diyaArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {diyas.map((diya) => (
        <div
          key={diya.id}
          className="absolute animate-float-diya"
          style={{
            left: `${diya.left}%`,
            width: `${diya.size}px`,
            height: `${diya.size}px`,
            animationDuration: `${diya.animationDuration}s`,
            animationDelay: `${diya.delay}s`,
          }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-md animate-pulse"
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / ${diya.glowIntensity}) 0%, transparent 70%)`,
                transform: 'scale(1.5)',
              }}
            />
            
            {/* Diya lamp SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-lg"
            >
              {/* Flame */}
              <path
                d="M12 2C12 2 10.5 4 10.5 6C10.5 7.5 11 8 12 8C13 8 13.5 7.5 13.5 6C13.5 4 12 2 12 2Z"
                fill="hsl(var(--primary))"
                opacity="0.95"
                className="animate-pulse"
              />
              <ellipse
                cx="12"
                cy="6"
                rx="0.8"
                ry="1.2"
                fill="hsl(var(--accent))"
                opacity="0.8"
              />
              
              {/* Diya bowl */}
              <ellipse
                cx="12"
                cy="16"
                rx="8"
                ry="3"
                fill="hsl(var(--primary))"
                opacity="0.6"
              />
              <path
                d="M4 16C4 16 4 19 6 20C8 21 16 21 18 20C20 19 20 16 20 16"
                fill="hsl(var(--accent))"
                opacity="0.7"
              />
              <ellipse
                cx="12"
                cy="16"
                rx="6"
                ry="2"
                fill="hsl(var(--foreground))"
                opacity="0.3"
              />
              
              {/* Wick */}
              <rect
                x="11.5"
                y="8"
                width="1"
                height="8"
                fill="hsl(var(--foreground))"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      ))}
      
      <style>{`
        @keyframes float-diya {
          0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) scale(0.8);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateX(30px) scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
        }
        .animate-float-diya {
          animation: float-diya linear infinite;
        }
      `}</style>
    </div>
  );
};
