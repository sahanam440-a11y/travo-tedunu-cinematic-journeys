import himalayaBg1 from '@/assets/backgrounds/himalaya-bg-1.jpg';
import himalayaBg2 from '@/assets/backgrounds/himalaya-bg-2.jpg';
import winterBg1 from '@/assets/backgrounds/winter-bg-1.jpg';
import winterBg2 from '@/assets/backgrounds/winter-bg-2.jpg';
import natureBg from '@/assets/backgrounds/nature-bg-1.jpg';
import { useEffect, useState } from 'react';

export const DehradunBackground = () => {
  const backgrounds = [himalayaBg1, himalayaBg2, winterBg1, winterBg2, natureBg];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-3000"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: currentBg === index ? 1 : 0,
          }}
        >
          {/* Mountain mist effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-blue-800/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/30 to-transparent" />
        </div>
      ))}
      
      {/* Atmospheric clouds */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-0 w-2/3 h-24 bg-gradient-to-l from-transparent via-slate-200/30 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
      
      {/* Mountain peaks silhouette enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-cyan-900/10" />
    </div>
  );
};
