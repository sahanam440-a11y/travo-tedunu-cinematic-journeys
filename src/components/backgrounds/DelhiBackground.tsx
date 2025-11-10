import { useEffect, useState } from 'react';

export const DelhiBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Heritage-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" />
      
      {/* Animated architectural patterns */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(217, 119, 6, 0.1) 100px, rgba(217, 119, 6, 0.1) 102px),
            repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(234, 88, 12, 0.1) 100px, rgba(234, 88, 12, 0.1) 102px)
          `,
        }}
      />
      
      {/* Dome silhouettes with parallax */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        <div 
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-t-full opacity-[0.08]"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            background: 'radial-gradient(ellipse at top, rgba(217, 119, 6, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-t-full opacity-[0.06]"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            background: 'radial-gradient(ellipse at top, rgba(234, 88, 12, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-t-full opacity-[0.07]"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            background: 'radial-gradient(ellipse at top, rgba(251, 146, 60, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Golden hour glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/20 via-transparent to-transparent" />
    </div>
  );
};
