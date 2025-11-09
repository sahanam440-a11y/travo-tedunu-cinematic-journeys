import vintageTrain from '@/assets/vintage-train.png';

const VintageTrain = () => {
  return (
    <div className="vintage-train-container md:hidden">
      <img 
        src={vintageTrain} 
        alt="Vintage train" 
        className="vintage-train"
      />
    </div>
  );
};

export default VintageTrain;
