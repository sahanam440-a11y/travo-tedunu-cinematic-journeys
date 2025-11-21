import natureBg1 from '@/assets/backgrounds/nature-bg-1.jpg';

const KrishnaBackground = () => {
  // Single static background for optimal performance
  return (
    <div className="krishna-background-container">
      <div
        className="krishna-background active"
        style={{ backgroundImage: `url(${natureBg1})` }}
      />
    </div>
  );
};

export default KrishnaBackground;
