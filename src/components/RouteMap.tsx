import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface RouteMapProps {
  origin: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
}

const RouteMap: React.FC<RouteMapProps> = ({ origin, destination }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSet, setTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [
        (origin.lng + destination.lng) / 2,
        (origin.lat + destination.lat) / 2
      ],
      zoom: 5,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Add origin marker
      new mapboxgl.Marker({ color: '#22c55e' })
        .setLngLat([origin.lng, origin.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>Start:</strong> ${origin.name}`))
        .addTo(map.current);

      // Add destination marker
      new mapboxgl.Marker({ color: '#ef4444' })
        .setLngLat([destination.lng, destination.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>Destination:</strong> ${destination.name}`))
        .addTo(map.current);

      // Add route line
      map.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [origin.lng, origin.lat],
              [destination.lng, destination.lat]
            ]
          }
        }
      });

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3b82f6',
          'line-width': 4,
          'line-dasharray': [2, 2]
        }
      });

      // Fit map to show both points
      const bounds = new mapboxgl.LngLatBounds()
        .extend([origin.lng, origin.lat])
        .extend([destination.lng, destination.lat]);
      
      map.current.fitBounds(bounds, {
        padding: 80,
        maxZoom: 8
      });
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSet(true);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!tokenSet) {
    return (
      <Card className="border-border/50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Travel Route Map</h3>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mapbox-token">
                Enter Mapbox Public Token
              </Label>
              <Input
                id="mapbox-token"
                type="text"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Get your free token at{' '}
                <a
                  href="https://www.mapbox.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md transition-colors"
            >
              Show Route Map
            </button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Travel Route Map</h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted-foreground">Start: {origin.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-muted-foreground">Destination: {destination.name}</span>
          </div>
        </div>
        <div 
          ref={mapContainer} 
          className="w-full h-[400px] rounded-lg overflow-hidden"
        />
      </CardContent>
    </Card>
  );
};

export default RouteMap;