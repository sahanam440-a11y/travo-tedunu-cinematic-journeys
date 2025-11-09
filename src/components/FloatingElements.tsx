const FloatingElements = () => {
  // Generate 15 butterflies with random properties
  const butterflies = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 25 + 20, // 20-45px
    left: Math.random() * 100, // 0-100%
    duration: Math.random() * 15 + 25, // 25-40s
    delay: Math.random() * 10, // 0-10s
    color: i % 3 === 0 ? 'orange' : i % 3 === 1 ? 'purple' : 'blue',
  }));

  return (
    <div className="floating-elements-container">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className={`butterfly ${butterfly.color}`}
          style={{
            width: `${butterfly.size}px`,
            height: `${butterfly.size}px`,
            left: `${butterfly.left}%`,
            animationDuration: `${butterfly.duration}s`,
            animationDelay: `${butterfly.delay}s`,
          }}
        >
          <div className="butterfly-wing left-wing"></div>
          <div className="butterfly-wing right-wing"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
