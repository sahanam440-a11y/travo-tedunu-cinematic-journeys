const VintageTrain = () => {
  return (
    <div className="vintage-train-container md:hidden">
      <div className="hogwarts-train">
        {/* Steam Clouds */}
        <div className="steam-cloud cloud-1"></div>
        <div className="steam-cloud cloud-2"></div>
        <div className="steam-cloud cloud-3"></div>
        <div className="steam-cloud cloud-4"></div>
        <div className="steam-cloud cloud-5"></div>
        
        {/* Hogwarts Express SVG */}
        <svg viewBox="0 0 340 120" className="train-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="redBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CC0000" />
              <stop offset="50%" stopColor="#990000" />
              <stop offset="100%" stopColor="#660000" />
            </linearGradient>
            <linearGradient id="brass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F4C430" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="blackMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3A3A3A" />
              <stop offset="50%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </linearGradient>
            <radialGradient id="window" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4682B4" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          
          {/* Railway Track */}
          <rect x="0" y="104" width="340" height="2" fill="#4A4A4A" opacity="0.6"/>
          <rect x="0" y="108" width="340" height="2" fill="#4A4A4A" opacity="0.6"/>
          
          {/* === LOCOMOTIVE === */}
          
          {/* Main Boiler - cylindrical body */}
          <ellipse cx="240" cy="65" rx="42" ry="30" fill="url(#redBody)" stroke="#660000" strokeWidth="1.5"/>
          <rect x="198" y="40" width="84" height="50" fill="url(#redBody)" stroke="#660000" strokeWidth="1.5"/>
          
          {/* Firebox */}
          <rect x="272" y="48" width="28" height="34" fill="url(#redBody)" rx="3" stroke="#660000" strokeWidth="1.5"/>
          
          {/* Cabin/Cab */}
          <rect x="275" y="35" width="25" height="25" fill="#8B0000" rx="2" stroke="#660000" strokeWidth="1"/>
          
          {/* Cabin Windows */}
          <rect x="278" y="38" width="8" height="10" fill="url(#window)" rx="1" stroke="#2C3E50" strokeWidth="0.5"/>
          <rect x="289" y="38" width="8" height="10" fill="url(#window)" rx="1" stroke="#2C3E50" strokeWidth="0.5"/>
          <rect x="283" y="50" width="12" height="8" fill="url(#window)" rx="1" stroke="#2C3E50" strokeWidth="0.5"/>
          
          {/* Smokestack - Victorian style */}
          <ellipse cx="255" cy="30" rx="6" ry="3" fill="url(#blackMetal)"/>
          <rect x="249" y="12" width="12" height="18" fill="url(#blackMetal)" rx="1"/>
          <ellipse cx="255" cy="12" rx="8" ry="4" fill="#4A4A4A"/>
          <rect x="247" y="8" width="16" height="6" fill="url(#brass)" rx="2"/>
          
          {/* Steam Dome */}
          <ellipse cx="230" cy="38" rx="10" ry="6" fill="url(#brass)"/>
          <rect x="220" y="32" width="20" height="6" fill="url(#brass)" rx="2"/>
          
          {/* Brass Bands */}
          <rect x="210" y="40" width="4" height="50" fill="url(#brass)" opacity="0.8"/>
          <rect x="260" y="40" width="4" height="50" fill="url(#brass)" opacity="0.8"/>
          
          {/* Front Lamp */}
          <circle cx="195" cy="55" r="6" fill="url(#brass)" stroke="#8B4513" strokeWidth="1"/>
          <circle cx="195" cy="55" r="4" fill="#FFD700" opacity="0.8"/>
          
          {/* Cowcatcher */}
          <polygon points="185,80 195,70 195,85" fill="#2C2C2C" stroke="#1A1A1A" strokeWidth="1"/>
          
          {/* === TENDER (Coal Car) === */}
          <rect x="110" y="50" width="80" height="38" fill="#2C1810" rx="3" stroke="#1A1A1A" strokeWidth="1.5"/>
          <rect x="115" y="54" width="70" height="30" fill="#0A0A0A"/>
          
          {/* Coal pile */}
          <ellipse cx="150" cy="58" rx="25" ry="8" fill="#1A1A1A"/>
          <ellipse cx="145" cy="62" rx="20" ry="6" fill="#2C2C2C"/>
          <ellipse cx="155" cy="64" rx="18" ry="5" fill="#1A1A1A"/>
          
          {/* Connector */}
          <rect x="190" y="67" width="8" height="6" fill="#4A4A4A" rx="2"/>
          <circle cx="193" cy="70" r="3" fill="#2C2C2C" stroke="url(#brass)" strokeWidth="1.5"/>
          
          {/* === WHEELS === */}
          
          {/* Large Driving Wheels (Locomotive) */}
          <g className="drive-wheel" style={{transformOrigin: "220px 98px"}}>
            <circle cx="220" cy="98" r="20" fill="url(#blackMetal)" stroke="url(#brass)" strokeWidth="3"/>
            <circle cx="220" cy="98" r="14" fill="#1A1A1A"/>
            <circle cx="220" cy="98" r="6" fill="url(#brass)"/>
            <line x1="220" y1="84" x2="220" y2="112" stroke="url(#brass)" strokeWidth="2.5"/>
            <line x1="206" y1="98" x2="234" y2="98" stroke="url(#brass)" strokeWidth="2.5"/>
            <line x1="210" y1="88" x2="230" y2="108" stroke="url(#brass)" strokeWidth="2"/>
            <line x1="210" y1="108" x2="230" y2="88" stroke="url(#brass)" strokeWidth="2"/>
          </g>
          
          <g className="drive-wheel" style={{transformOrigin: "265px 98px"}}>
            <circle cx="265" cy="98" r="20" fill="url(#blackMetal)" stroke="url(#brass)" strokeWidth="3"/>
            <circle cx="265" cy="98" r="14" fill="#1A1A1A"/>
            <circle cx="265" cy="98" r="6" fill="url(#brass)"/>
            <line x1="265" y1="84" x2="265" y2="112" stroke="url(#brass)" strokeWidth="2.5"/>
            <line x1="251" y1="98" x2="279" y2="98" stroke="url(#brass)" strokeWidth="2.5"/>
            <line x1="255" y1="88" x2="275" y2="108" stroke="url(#brass)" strokeWidth="2"/>
            <line x1="255" y1="108" x2="275" y2="88" stroke="url(#brass)" strokeWidth="2"/>
          </g>
          
          {/* Front Wheels (smaller) */}
          <g className="front-wheel" style={{transformOrigin: "195px 100px"}}>
            <circle cx="195" cy="100" r="14" fill="url(#blackMetal)" stroke="url(#brass)" strokeWidth="2"/>
            <circle cx="195" cy="100" r="9" fill="#1A1A1A"/>
            <circle cx="195" cy="100" r="4" fill="url(#brass)"/>
          </g>
          
          {/* Tender Wheels */}
          <g className="tender-wheel" style={{transformOrigin: "130px 100px"}}>
            <circle cx="130" cy="100" r="12" fill="#1A1A1A" stroke="#4A4A4A" strokeWidth="2"/>
            <circle cx="130" cy="100" r="4" fill="#666"/>
          </g>
          
          <g className="tender-wheel" style={{transformOrigin: "170px 100px"}}>
            <circle cx="170" cy="100" r="12" fill="#1A1A1A" stroke="#4A4A4A" strokeWidth="2"/>
            <circle cx="170" cy="100" r="4" fill="#666"/>
          </g>
          
          {/* Connecting Rod */}
          <rect x="210" y="96" width="65" height="4" fill="#2C2C2C" className="connecting-rod" rx="2"/>
          <circle cx="215" cy="98" r="3" fill="url(#brass)"/>
          <circle cx="270" cy="98" r="3" fill="url(#brass)"/>
          
          {/* Side Rods */}
          <rect x="195" y="98" width="80" height="3" fill="#4A4A4A" opacity="0.7" rx="1"/>
        </svg>
      </div>
    </div>
  );
};

export default VintageTrain;
