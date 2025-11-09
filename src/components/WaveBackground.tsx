const WaveBackground = () => {
  return (
    <div className="wave-background">
      <svg
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient1)"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(260 85% 70%)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(240 90% 68%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(200 85% 65%)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient2)"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(340 75% 72%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(25 85% 70%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(40 90% 72%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient3)"
          fillOpacity="1"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180 75% 60%)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="hsl(170 80% 58%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(160 75% 55%)" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient4)"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220 80% 70%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(240 75% 65%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(260 80% 68%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveBackground;
