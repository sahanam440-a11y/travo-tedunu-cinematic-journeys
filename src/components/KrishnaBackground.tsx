import { useState, useEffect } from 'react';
import krishnaBg1 from '@/assets/backgrounds/krishna-bg-1.jpg';
import krishnaBg2 from '@/assets/backgrounds/krishna-bg-2.jpg';
import krishnaBg3 from '@/assets/backgrounds/krishna-bg-3.jpg';

const KrishnaBackground = () => {
  const backgrounds = [krishnaBg1, krishnaBg2, krishnaBg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000); // Change every 10 seconds

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
