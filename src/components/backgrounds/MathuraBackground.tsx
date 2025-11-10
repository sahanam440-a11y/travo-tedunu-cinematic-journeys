import krishnaBg1 from '@/assets/backgrounds/krishna-bg-1.jpg';
import krishnaBg2 from '@/assets/backgrounds/krishna-bg-2.jpg';
import krishnaBg3 from '@/assets/backgrounds/krishna-bg-3.jpg';
import { useEffect, useState } from 'react';

export const MathuraBackground = () => {
  const backgrounds = [krishnaBg1, krishnaBg2, krishnaBg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-2000"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: currentBg === index ? 1 : 0,
          }}
        >
          {/* Divine Krishna-themed gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-amber-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      ))}
      
      {/* Peacock feather pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%)`,
      }} />
    </div>
  );
};
