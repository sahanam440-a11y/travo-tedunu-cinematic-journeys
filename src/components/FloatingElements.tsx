const FloatingElements = () => {
  // Generate 25 mixed floating elements
  const elements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    type: i % 5 === 0 ? 'feather' : i % 4 === 0 ? 'firefly' : i % 3 === 0 ? 'petal' : 'snowflake',
    size: Math.random() * 30 + 15, // 15-45px
    left: Math.random() * 100, // 0-100%
    duration: Math.random() * 15 + 20, // 20-35s
    delay: Math.random() * 8, // 0-8s
    opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
  }));

  return (
    <div className="floating-elements-container">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-element ${element.type}`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
            opacity: element.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
