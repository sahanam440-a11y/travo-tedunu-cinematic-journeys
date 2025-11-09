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
          <svg viewBox="0 0 560 160" className="train-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated scarlet steam train">
            <defs>
              {/* Scarlet body with depth */}
              <linearGradient id="scarlet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d51e24" />
                <stop offset="60%" stopColor="#a11116" />
                <stop offset="100%" stopColor="#790d10" />
              </linearGradient>
              {/* Brass trim */}
              <linearGradient id="brass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f6cf56" />
                <stop offset="60%" stopColor="#d2a73a" />
                <stop offset="100%" stopColor="#a77f21" />
              </linearGradient>
              {/* Dark metal */}
              <linearGradient id="metal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3a3a3a" />
                <stop offset="60%" stopColor="#1f1f1f" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <radialGradient id="windowBlue" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#b3e5ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#6aa3c2" stopOpacity="0.8" />
              </radialGradient>
              <linearGradient id="coachRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cf1a1f" />
                <stop offset="100%" stopColor="#8f1115" />
              </linearGradient>
              <linearGradient id="roofGrey" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b9bcc2" />
                <stop offset="100%" stopColor="#8b9098" />
              </linearGradient>
            </defs>

            {/* Track */}
            <rect x="-10" y="130" width="600" height="3" fill="#4A4A4A" opacity="0.6"/>
            <rect x="-10" y="136" width="600" height="3" fill="#4A4A4A" opacity="0.6"/>

            {/* ===== LOCOMOTIVE ===== */}
            {/* Boiler */}
            <ellipse cx="430" cy="78" rx="50" ry="34" fill="url(#scarlet)" stroke="#6e0c0f" strokeWidth="1.6"/>
            <rect x="380" y="48" width="100" height="60" fill="url(#scarlet)" stroke="#6e0c0f" strokeWidth="1.6"/>

            {/* Firebox + Cab */}
            <rect x="470" y="56" width="36" height="40" rx="3" fill="url(#scarlet)" stroke="#6e0c0f" strokeWidth="1.4"/>
            <rect x="482" y="40" width="40" height="32" rx="2" fill="#8b0000" stroke="#6e0c0f" strokeWidth="1"/>
            <rect x="487" y="44" width="12" height="14" rx="1" fill="url(#windowBlue)" stroke="#2c3e50" strokeWidth="0.6"/>
            <rect x="502" y="44" width="12" height="14" rx="1" fill="url(#windowBlue)" stroke="#2c3e50" strokeWidth="0.6"/>

            {/* Smokestack */}
            <ellipse cx="455" cy="28" rx="8" ry="4" fill="url(#metal)"/>
            <rect x="447" y="12" width="16" height="18" rx="1" fill="url(#metal)"/>
            <ellipse cx="455" cy="12" rx="11" ry="5" fill="#4A4A4A"/>
            <rect x="444" y="6" width="22" height="7" rx="2" fill="url(#brass)"/>

            {/* Brass bands on boiler */}
            <rect x="402" y="48" width="5" height="60" fill="url(#brass)" opacity="0.9"/>
            <rect x="432" y="48" width="5" height="60" fill="url(#brass)" opacity="0.9"/>
            <rect x="462" y="48" width="5" height="60" fill="url(#brass)" opacity="0.9"/>

            {/* Headlamp */}
            <circle cx="385" cy="64" r="8" fill="url(#brass)" stroke="#8b4513" strokeWidth="1.2"/>
            <circle cx="385" cy="64" r="5.5" fill="#ffd75a" opacity="0.85"/>

            {/* Pilot / cowcatcher */}
            <polygon points="372,100 385,86 385,108" fill="#2c2c2c" stroke="#1a1a1a" strokeWidth="1"/>

            {/* Tender */}
            <rect x="300" y="62" width="90" height="40" rx="3" fill="#2c1810" stroke="#1a1a1a" strokeWidth="1.4"/>
            <rect x="305" y="66" width="80" height="32" fill="#0a0a0a"/>
            <ellipse cx="345" cy="66" rx="28" ry="9" fill="#1a1a1a"/>
            <ellipse cx="338" cy="70" rx="22" ry="7" fill="#2c2c2c"/>
            <ellipse cx="352" cy="72" rx="20" ry="6" fill="#1a1a1a"/>

            {/* ===== CARRIAGES ===== */}
            {/* Coach 1 */}
            <g>
              <rect x="150" y="68" width="120" height="42" rx="3" fill="url(#coachRed)" stroke="#590c0f" strokeWidth="1.2"/>
              <rect x="150" y="60" width="120" height="12" rx="2" fill="url(#roofGrey)"/>
              {Array.from({ length: 7 }).map((_, i) => (
                <rect key={`w1-${i}`} x={160 + i * 14} y={78} width="10" height="14" rx="1" fill="url(#windowBlue)" stroke="#2c3e50" strokeWidth="0.4" />
              ))}
            </g>
            {/* Coach 2 */}
            <g>
              <rect x="15" y="68" width="120" height="42" rx="3" fill="url(#coachRed)" stroke="#590c0f" strokeWidth="1.2"/>
              <rect x="15" y="60" width="120" height="12" rx="2" fill="url(#roofGrey)"/>
              {Array.from({ length: 7 }).map((_, i) => (
                <rect key={`w2-${i}`} x={25 + i * 14} y={78} width="10" height="14" rx="1" fill="url(#windowBlue)" stroke="#2c3e50" strokeWidth="0.4" />
              ))}
            </g>

            {/* ===== WHEELS ===== */}
            {/* Loco driving wheels */}
            <g className="drive-wheel" style={{ transformOrigin: "410px 118px" }}>
              <circle cx="410" cy="118" r="22" fill="url(#metal)" stroke="url(#brass)" strokeWidth="3"/>
              <circle cx="410" cy="118" r="15" fill="#1a1a1a"/>
              <circle cx="410" cy="118" r="6" fill="url(#brass)"/>
            </g>
            <g className="drive-wheel" style={{ transformOrigin: "445px 118px" }}>
              <circle cx="445" cy="118" r="22" fill="url(#metal)" stroke="url(#brass)" strokeWidth="3"/>
              <circle cx="445" cy="118" r="15" fill="#1a1a1a"/>
              <circle cx="445" cy="118" r="6" fill="url(#brass)"/>
            </g>
            {/* Front bogie */}
            <g className="front-wheel" style={{ transformOrigin: "388px 120px" }}>
              <circle cx="388" cy="120" r="14" fill="url(#metal)" stroke="url(#brass)" strokeWidth="2"/>
              <circle cx="388" cy="120" r="9" fill="#1a1a1a"/>
            </g>
            {/* Tender wheels */}
            <g className="tender-wheel" style={{ transformOrigin: "320px 120px" }}>
              <circle cx="320" cy="120" r="12" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2"/>
            </g>
            <g className="tender-wheel" style={{ transformOrigin: "360px 120px" }}>
              <circle cx="360" cy="120" r="12" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2"/>
            </g>
            {/* Coach wheels */}
            {[55, 95, 190, 230].map((x, i) => (
              <g key={`cw-${i}`} className="coach-wheel" style={{ transformOrigin: `${x}px 122px` }}>
                <circle cx={x} cy={122} r={11} fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2"/>
              </g>
            ))}

            {/* Connecting rod between driving wheels */}
            <rect x="403" y="116" width="50" height="4" rx="2" fill="#2c2c2c" className="connecting-rod"/>
            <circle cx="408" cy="118" r="3" fill="url(#brass)"/>
            <circle cx="448" cy="118" r="3" fill="url(#brass)"/>

            {/* Side rod */}
            <rect x="388" y="118" width="75" height="3" rx="1" fill="#4a4a4a" opacity="0.7"/>
          </svg>
      </div>
    </div>
  );
};

export default VintageTrain;
