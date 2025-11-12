import { useEffect, useState } from "react";

interface Traveler {
  id: number;
  direction: "left" | "right";
  startX: number;
  duration: number;
  delay: number;
}

export const WalkingTravelerAnimation = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);

  useEffect(() => {
    const newTravelers: Traveler[] = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      direction: i % 2 === 0 ? "right" : "left",
      startX: i % 2 === 0 ? -10 : 110,
      duration: 25 + Math.random() * 10,
      delay: i * 8,
    }));
    setTravelers(newTravelers);
  }, []);

  const renderTraveler = (direction: "left" | "right") => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
    >
      {/* Head */}
      <circle cx="30" cy="15" r="6" fill="#F59E0B" />
      
      {/* Body */}
      <ellipse cx="30" cy="28" rx="7" ry="10" fill="#8B5CF6" />
      
      {/* Backpack */}
      <rect x="32" y="20" width="8" height="12" rx="2" fill="#10B981" />
      <rect x="33" y="22" width="6" height="3" rx="1" fill="#FFFFFF" opacity="0.3" />
      
      {/* Suitcase */}
      <g className="animate-suitcase-bounce">
        <rect x="18" y="38" width="8" height="10" rx="1" fill="#EF4444" />
        <rect x="19" y="39" width="6" height="3" rx="0.5" fill="#FFFFFF" opacity="0.3" />
        <line x1="22" y1="38" x2="22" y2="35" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Left Leg - Walking animation */}
      <line 
        x1="27" 
        y1="38" 
        x2="25" 
        y2="50" 
        stroke="#8B5CF6" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="animate-walk-left-leg"
      />
      
      {/* Right Leg - Walking animation */}
      <line 
        x1="33" 
        y1="38" 
        x2="35" 
        y2="50" 
        stroke="#8B5CF6" 
        strokeWidth="3" 
        strokeLinecap="round"
        className="animate-walk-right-leg"
      />
      
      {/* Left Arm */}
      <line 
        x1="24" 
        y1="23" 
        x2="20" 
        y2="35" 
        stroke="#8B5CF6" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        className="animate-walk-left-arm"
      />
      
      {/* Right Arm (holding suitcase handle) */}
      <line 
        x1="36" 
        y1="23" 
        x2="22" 
        y2="35" 
        stroke="#8B5CF6" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {travelers.map((traveler) => (
        <div
          key={traveler.id}
          className={`absolute bottom-0 ${
            traveler.direction === "right" ? "animate-walk-right" : "animate-walk-left"
          }`}
          style={{
            left: `${traveler.startX}%`,
            animationDuration: `${traveler.duration}s`,
            animationDelay: `${traveler.delay}s`,
          }}
        >
          {renderTraveler(traveler.direction)}
        </div>
      ))}

      <style>{`
        @keyframes walk-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(120vw);
          }
        }

        @keyframes walk-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-120vw);
          }
        }

        @keyframes walk-left-leg {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: top center;
          }
          25% {
            transform: rotate(-20deg);
            transform-origin: top center;
          }
          75% {
            transform: rotate(20deg);
            transform-origin: top center;
          }
        }

        @keyframes walk-right-leg {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: top center;
          }
          25% {
            transform: rotate(20deg);
            transform-origin: top center;
          }
          75% {
            transform: rotate(-20deg);
            transform-origin: top center;
          }
        }

        @keyframes walk-left-arm {
          0%, 100% {
            transform: rotate(0deg);
            transform-origin: top center;
          }
          50% {
            transform: rotate(-15deg);
            transform-origin: top center;
          }
        }

        @keyframes suitcase-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .animate-walk-right {
          animation: walk-right linear infinite;
        }

        .animate-walk-left {
          animation: walk-left linear infinite;
        }

        .animate-walk-left-leg {
          animation: walk-left-leg 1s ease-in-out infinite;
        }

        .animate-walk-right-leg {
          animation: walk-right-leg 1s ease-in-out infinite;
        }

        .animate-walk-left-arm {
          animation: walk-left-arm 1s ease-in-out infinite;
        }

        .animate-suitcase-bounce {
          animation: suitcase-bounce 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
