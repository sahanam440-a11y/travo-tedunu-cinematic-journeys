import Lottie from "lottie-react";
import trainAnimation from "@/assets/train-animation.json";

const VintageTrain = () => {
  return (
    <div className="vintage-train-container">
      <div className="lottie-train-wrapper">
        <Lottie
          animationData={trainAnimation}
          loop={true}
          autoplay={true}
          className="train-lottie"
        />
      </div>
    </div>
  );
};

export default VintageTrain;
