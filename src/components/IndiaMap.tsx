import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { destinations } from '@/data/destinations';

// Relative positions on the India map (percentage-based)
const destinationPositions: Record<string, { top: string; left: string }> = {
  delhi: { top: '28%', left: '52%' },
  mathura: { top: '32%', left: '53%' },
  dehradun: { top: '22%', left: '51%' },
  goa: { top: '72%', left: '45%' },
};

const IndiaMap = () => {
  const navigate = useNavigate();
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  return (
    <Card className="w-full h-[600px] overflow-hidden shadow-xl relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
      {/* India Map SVG */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <svg
          viewBox="0 0 400 600"
          className="w-full h-full opacity-20 dark:opacity-10"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
        >
          {/* Simplified India outline */}
          <path
            d="M 200 50 
               L 220 70 L 240 85 L 250 100 L 260 120 L 270 140 
               L 275 160 L 278 180 L 280 200 L 282 220 L 283 240 
               L 285 280 L 287 320 L 288 360 L 285 400 L 280 440 
               L 270 470 L 250 490 L 230 500 L 210 505 L 190 508
               L 170 505 L 150 500 L 130 490 L 115 475 L 105 455
               L 100 435 L 98 415 L 95 395 L 93 375 L 92 355
               L 90 335 L 88 315 L 85 295 L 83 275 L 80 255
               L 78 235 L 75 215 L 73 195 L 72 175 L 75 155
               L 80 135 L 90 115 L 105 95 L 125 78 L 145 65
               L 165 55 L 180 50 Z"
            fill="hsl(var(--primary))"
            opacity="0.3"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Destination Markers */}
      {destinations.map((destination) => {
        const position = destinationPositions[destination.slug];
        if (!position) return null;

        const isHovered = hoveredDestination === destination.slug;

        return (
          <div
            key={destination.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              top: position.top,
              left: position.left,
              zIndex: isHovered ? 50 : 10,
            }}
            onMouseEnter={() => setHoveredDestination(destination.slug)}
            onMouseLeave={() => setHoveredDestination(null)}
            onClick={() => navigate(`/destination/${destination.slug}`)}
          >
            {/* Pulsing Ring Animation */}
            <div className="absolute inset-0 -m-4">
              <div className="w-full h-full rounded-full bg-primary/20 animate-ping" />
            </div>

            {/* Marker Pin */}
            <div className="relative">
              <MapPin
                className={`w-10 h-10 text-primary transition-all duration-300 drop-shadow-lg ${
                  isHovered ? 'scale-125' : 'scale-100'
                }`}
                fill="hsl(var(--primary))"
                strokeWidth={2}
              />
              
              {/* Info Card on Hover */}
              {isHovered && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Card className="p-4 shadow-2xl border-2 border-primary bg-card/95 backdrop-blur-sm">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-foreground">
                        {destination.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {destination.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-sm font-semibold text-primary">
                          From ₹{destination.priceFrom.toLocaleString()}
                        </span>
                        <Navigation className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {destination.duration}
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>

            {/* Destination Label */}
            <div
              className={`absolute top-full mt-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-1'
              }`}
            >
              <div className="bg-card border border-primary/50 px-3 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-foreground">
                  {destination.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-xl">
        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Available Destinations
        </h4>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {destinations.map((dest) => (
            <li
              key={dest.id}
              className="hover:text-primary cursor-pointer transition-colors flex items-center gap-2"
              onClick={() => navigate(`/destination/${dest.slug}`)}
              onMouseEnter={() => setHoveredDestination(dest.slug)}
              onMouseLeave={() => setHoveredDestination(null)}
            >
              <span
                className={`w-2 h-2 rounded-full bg-primary transition-all ${
                  hoveredDestination === dest.slug ? 'scale-150' : 'scale-100'
                }`}
              />
              {dest.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-primary/10 border border-primary/30 rounded-lg p-3 shadow-lg max-w-xs">
        <p className="text-xs text-muted-foreground text-center">
          <span className="font-semibold text-primary">Click</span> on any marker to explore the destination
        </p>
      </div>
    </Card>
  );
};

export default IndiaMap;
