const VintageTrain = () => {
  return (
    <div className="vintage-train-container md:hidden">
      <div className="vintage-train">
        {/* Steam Smoke */}
        <div className="steam-puff puff-1"></div>
        <div className="steam-puff puff-2"></div>
        <div className="steam-puff puff-3"></div>
        <div className="steam-puff puff-4"></div>
        
        {/* Beautiful Train SVG */}
        <svg viewBox="0 0 280 100" className="train-svg">
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D2691E" />
              <stop offset="50%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          
          {/* Rail Track */}
          <line x1="0" y1="88" x2="280" y2="88" stroke="#4A4A4A" strokeWidth="2"/>
          <line x1="0" y1="92" x2="280" y2="92" stroke="#4A4A4A" strokeWidth="2"/>
          
          {/* Main Engine Body */}
          <ellipse cx="220" cy="55" rx="35" ry="28" fill="url(#bodyGradient)"/>
          <rect x="185" y="35" width="70" height="40" fill="url(#bodyGradient)" rx="4"/>
          
          {/* Boiler */}
          <ellipse cx="160" cy="55" rx="25" ry="22" fill="url(#metalGradient)"/>
          <rect x="135" y="40" width="50" height="30" fill="url(#metalGradient)"/>
          
          {/* Cabin Details */}
          <rect x="200" y="25" width="35" height="20" fill="#2C3E50" rx="3"/>
          <rect x="205" y="28" width="12" height="14" fill="#87CEEB" opacity="0.8" rx="1"/>
          <rect x="220" y="28" width="12" height="14" fill="#87CEEB" opacity="0.8" rx="1"/>
          
          {/* Smokestack */}
          <rect x="218" y="8" width="12" height="22" fill="#2C3E50" rx="2"/>
          <ellipse cx="224" cy="8" rx="8" ry="3" fill="#34495E"/>
          <ellipse cx="224" cy="30" rx="7" ry="2" fill="#1A252F"/>
          
          {/* Gold Trim */}
          <rect x="185" y="32" width="70" height="3" fill="url(#metalGradient)"/>
          <circle cx="235" cy="55" r="8" fill="url(#metalGradient)" stroke="#8B4513" strokeWidth="2"/>
          
          {/* Coal Tender */}
          <rect x="90" y="38" width="75" height="32" fill="#3E2723" rx="3"/>
          <rect x="95" y="42" width="65" height="24" fill="#1C1C1C"/>
          <polygon points="165,45 175,45 175,65 165,70" fill="#5D4037"/>
          
          {/* Connector */}
          <rect x="175" y="53" width="10" height="4" fill="#4A4A4A"/>
          <circle cx="177" cy="55" r="3" fill="#2C2C2C" stroke="#DAA520" strokeWidth="1"/>
          
          {/* Large Driving Wheels */}
          <g className="big-wheel" style={{ transformOrigin: "205px 82px" }}>
            <circle cx="205" cy="82" r="16" fill="#2C2C2C" stroke="#B8860B" strokeWidth="3"/>
            <circle cx="205" cy="82" r="10" fill="#3E3E3E"/>
            <circle cx="205" cy="82" r="4" fill="#DAA520"/>
            <line x1="205" y1="72" x2="205" y2="92" stroke="#B8860B" strokeWidth="2"/>
            <line x1="195" y1="82" x2="215" y2="82" stroke="#B8860B" strokeWidth="2"/>
          </g>
          
          <g className="big-wheel" style={{ transformOrigin: "240px 82px" }}>
            <circle cx="240" cy="82" r="16" fill="#2C2C2C" stroke="#B8860B" strokeWidth="3"/>
            <circle cx="240" cy="82" r="10" fill="#3E3E3E"/>
            <circle cx="240" cy="82" r="4" fill="#DAA520"/>
            <line x1="240" y1="72" x2="240" y2="92" stroke="#B8860B" strokeWidth="2"/>
            <line x1="230" y1="82" x2="250" y2="82" stroke="#B8860B" strokeWidth="2"/>
          </g>
          
          {/* Medium Wheels */}
          <g className="medium-wheel" style={{ transformOrigin: "170px 82px" }}>
            <circle cx="170" cy="82" r="12" fill="#2C2C2C" stroke="#B8860B" strokeWidth="2"/>
            <circle cx="170" cy="82" r="6" fill="#3E3E3E"/>
            <circle cx="170" cy="82" r="3" fill="#DAA520"/>
          </g>
          
          {/* Small Wheels on Coal Tender */}
          <g className="small-wheel" style={{ transformOrigin: "110px 84px" }}>
            <circle cx="110" cy="84" r="10" fill="#2C2C2C" stroke="#666" strokeWidth="2"/>
            <circle cx="110" cy="84" r="3" fill="#888"/>
          </g>
          
          <g className="small-wheel" style={{ transformOrigin: "145px 84px" }}>
            <circle cx="145" cy="84" r="10" fill="#2C2C2C" stroke="#666" strokeWidth="2"/>
            <circle cx="145" cy="84" r="3" fill="#888"/>
          </g>
          
          {/* Coupling Rod */}
          <rect x="195" y="80" width="55" height="4" fill="#4A4A4A" className="coupling-rod"/>
        </svg>
      </div>
    </div>
  );
};

export default VintageTrain;
