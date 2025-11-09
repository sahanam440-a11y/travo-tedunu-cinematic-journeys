const FloatingBubbles = () => {
  // Generate 20 bubbles with random properties
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20, // 20-100px
    left: Math.random() * 100, // 0-100%
    duration: Math.random() * 10 + 15, // 15-25s
    delay: Math.random() * 5, // 0-5s
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
  }));

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
