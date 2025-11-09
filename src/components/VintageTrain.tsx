const VintageTrain = () => {
  return (
    <div className="vintage-train-container md:hidden">
      <div className="vintage-train">
        {/* Smoke */}
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
        
        {/* Train Body */}
        <svg viewBox="0 0 200 80" className="train-svg">
          {/* Engine Body */}
          <rect x="120" y="30" width="60" height="35" fill="#8B4513" rx="3"/>
          <rect x="125" y="25" width="50" height="8" fill="#654321" rx="2"/>
          
          {/* Cabin */}
          <rect x="140" y="15" width="25" height="15" fill="#4A4A4A" rx="2"/>
          <rect x="143" y="18" width="8" height="8" fill="#87CEEB" opacity="0.7"/>
          <rect x="154" y="18" width="8" height="8" fill="#87CEEB" opacity="0.7"/>
          
          {/* Smokestack */}
          <rect x="155" y="8" width="8" height="17" fill="#654321" rx="1"/>
          <rect x="153" y="5" width="12" height="5" fill="#654321" rx="2"/>
          
          {/* Coal Car */}
          <rect x="60" y="35" width="55" height="30" fill="#654321" rx="2"/>
          <rect x="65" y="40" width="45" height="20" fill="#2C2C2C"/>
          
          {/* Connector */}
          <line x1="115" y1="50" x2="120" y2="50" stroke="#654321" strokeWidth="3"/>
          
          {/* Wheels */}
          <g className="wheel-group">
            <circle cx="75" cy="68" r="8" fill="#2C2C2C" stroke="#654321" strokeWidth="2"/>
            <circle cx="75" cy="68" r="3" fill="#654321"/>
            
            <circle cx="100" cy="68" r="8" fill="#2C2C2C" stroke="#654321" strokeWidth="2"/>
            <circle cx="100" cy="68" r="3" fill="#654321"/>
            
            <circle cx="130" cy="68" r="10" fill="#2C2C2C" stroke="#654321" strokeWidth="2"/>
            <circle cx="130" cy="68" r="4" fill="#654321"/>
            
            <circle cx="155" cy="68" r="10" fill="#2C2C2C" stroke="#654321" strokeWidth="2"/>
            <circle cx="155" cy="68" r="4" fill="#654321"/>
          </g>
          
          {/* Rails underneath */}
          <line x1="0" y1="75" x2="200" y2="75" stroke="#654321" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>
    </div>
  );
};

export default VintageTrain;
