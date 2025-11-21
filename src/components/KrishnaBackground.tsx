import { useState, useEffect } from 'react';
import krishnaBg1 from '@/assets/backgrounds/krishna-bg-1.jpg';
import krishnaBg2 from '@/assets/backgrounds/krishna-bg-2.jpg';
import krishnaBg3 from '@/assets/backgrounds/krishna-bg-3.jpg';
import winterBg1 from '@/assets/backgrounds/winter-bg-1.jpg';
import winterBg2 from '@/assets/backgrounds/winter-bg-2.jpg';
import himalayaBg1 from '@/assets/backgrounds/himalaya-bg-1.jpg';
import himalayaBg2 from '@/assets/backgrounds/himalaya-bg-2.jpg';
import natureBg1 from '@/assets/backgrounds/nature-bg-1.jpg';
import beachBg1 from '@/assets/backgrounds/beach-bg-1.jpg';

const KrishnaBackground = () => {
  // Reduced to 4 backgrounds for better performance
  const backgrounds = [
    krishnaBg1, 
    himalayaBg1,
    natureBg1,
    beachBg1
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 20000); // Change every 20 seconds for smoother performance

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="krishna-background-container">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`krishna-background ${index === currentBg ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
    </div>
  );
};

export default KrishnaBackground;
