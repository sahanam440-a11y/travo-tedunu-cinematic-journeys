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
    const diyaArray: Diya[] = [];
    const baseSize = isMobile ? 20 : 35;
    const sizeRange = isMobile ? 8 : 15;
    const count = isMobile ? 4 : 6;
    
    for (let i = 0; i < count; i++) {
      diyaArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 14 + Math.random() * 10,
        size: baseSize + Math.random() * sizeRange,
        delay: Math.random() * 12,
        glowIntensity: 0.7 + Math.random() * 0.3,
      });
    }
    setDiyas(diyaArray);
  }, [isMobile]);

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
            {/* Enhanced golden glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl animate-pulse"
              style={{
                background: `radial-gradient(circle, rgba(255, 200, 80, ${diya.glowIntensity}) 0%, rgba(255, 150, 50, ${diya.glowIntensity * 0.6}) 40%, transparent 70%)`,
                transform: 'scale(2)',
              }}
            />
            <div 
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: `radial-gradient(circle, rgba(255, 220, 100, ${diya.glowIntensity * 0.8}) 0%, transparent 60%)`,
                transform: 'scale(1.8)',
                animation: 'flicker 3s ease-in-out infinite',
              }}
            />
            
            {/* Diya lamp SVG with golden colors */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-2xl"
            >
              {/* Bright flame */}
              <path
                d="M12 2C12 2 10.5 4 10.5 6C10.5 7.5 11 8 12 8C13 8 13.5 7.5 13.5 6C13.5 4 12 2 12 2Z"
                fill="rgb(255, 220, 100)"
                opacity="0.95"
                className="animate-pulse"
              />
              <ellipse
                cx="12"
                cy="5.5"
                rx="1"
                ry="1.5"
                fill="rgb(255, 180, 60)"
                opacity="0.9"
              />
              <ellipse
                cx="12"
                cy="5.5"
                rx="0.5"
                ry="0.8"
                fill="rgb(255, 255, 200)"
              />
              
              {/* Golden diya bowl */}
              <ellipse
                cx="12"
                cy="16"
                rx="8"
                ry="3"
                fill="rgb(200, 150, 60)"
                opacity="0.8"
              />
              <path
                d="M4 16C4 16 4 19 6 20C8 21 16 21 18 20C20 19 20 16 20 16"
                fill="rgb(180, 130, 50)"
                opacity="0.85"
              />
              <ellipse
                cx="12"
                cy="16"
                rx="6"
                ry="2"
                fill="rgb(220, 170, 70)"
                opacity="0.6"
              />
              
              {/* Wick */}
              <rect
                x="11.5"
                y="8"
                width="1"
                height="8"
                fill="rgb(100, 70, 40)"
                opacity="0.7"
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
            transform: translateX(0) scale(0.7) rotate(-5deg);
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateX(15px) scale(1) rotate(5deg);
          }
          50% {
            transform: translateX(-10px) scale(1.1) rotate(-3deg);
          }
          75% {
            transform: translateX(20px) scale(1) rotate(3deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-15px) scale(0.7) rotate(-5deg);
          }
        }
        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }
        .animate-float-diya {
          animation: float-diya linear infinite;
        }
      `}</style>
    </div>
  );
};
