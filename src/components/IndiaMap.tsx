import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { destinations } from '@/data/destinations';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { MapPin } from 'lucide-react';

// Coordinates for each destination
const destinationCoordinates: Record<string, [number, number]> = {
  delhi: [77.2090, 28.6139],
  mathura: [77.6737, 27.4924],
  dehradun: [78.0322, 30.3165],
  goa: [74.1240, 15.2993],
};

const IndiaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const initializeMap = async () => {
      try {
        // Fetch Mapbox token
        const { data, error: fetchError } = await supabase.functions.invoke('get-mapbox-token');
        
        if (fetchError) throw fetchError;
        if (!data?.token) throw new Error('No Mapbox token received');

        mapboxgl.accessToken = data.token;

        if (!mapContainer.current || map.current) return;

        // Initialize map centered on India
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [78.9629, 22.5937], // Center of India
          zoom: 4.5,
          pitch: 45,
        });

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );

        map.current.on('load', () => {
          if (!mounted || !map.current) return;

          // Add markers for each destination
          destinations.forEach((destination) => {
            const coords = destinationCoordinates[destination.slug];
            if (!coords) return;

            // Create custom marker element
            const markerEl = document.createElement('div');
            markerEl.className = 'destination-marker';
            markerEl.innerHTML = `
              <div class="marker-content">
                <div class="marker-pin">
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
                    <path d="M20 0C8.954 0 0 8.954 0 20c0 14 20 30 20 30s20-16 20-30c0-11.046-8.954-20-20-20z" fill="hsl(var(--primary))" />
                    <circle cx="20" cy="20" r="8" fill="white" />
                  </svg>
                </div>
                <div class="marker-label">
                  <span class="marker-name">${destination.name}</span>
                  <span class="marker-price">From ₹${destination.priceFrom.toLocaleString()}</span>
                </div>
              </div>
            `;

            // Add styles to marker
            const style = document.createElement('style');
            style.textContent = `
              .destination-marker {
                cursor: pointer;
                transition: transform 0.3s ease;
              }
              .destination-marker:hover {
                transform: scale(1.1);
                z-index: 1000;
              }
              .marker-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
              }
              .marker-pin {
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
                animation: bounce 2s ease-in-out infinite;
              }
              .marker-label {
                background: hsl(var(--card));
                border: 2px solid hsl(var(--primary));
                padding: 6px 12px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                display: flex;
                flex-direction: column;
                align-items: center;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              .destination-marker:hover .marker-label {
                opacity: 1;
              }
              .marker-name {
                font-weight: 600;
                font-size: 14px;
                color: hsl(var(--foreground));
              }
              .marker-price {
                font-size: 12px;
                color: hsl(var(--primary));
                font-weight: 500;
              }
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `;
            document.head.appendChild(style);

            // Create and add marker
            const marker = new mapboxgl.Marker({
              element: markerEl,
              anchor: 'bottom',
            })
              .setLngLat(coords)
              .addTo(map.current!);

            // Add click handler
            markerEl.addEventListener('click', () => {
              navigate(`/destination/${destination.slug}`);
            });

            markersRef.current.push(marker);
          });

          if (mounted) setLoading(false);
        });

        map.current.on('error', (e) => {
          console.error('Map error:', e);
          if (mounted) {
            setError('Failed to load map');
            setLoading(false);
          }
        });

      } catch (err) {
        console.error('Error initializing map:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load map');
          setLoading(false);
        }
      }
    };

    initializeMap();

    return () => {
      mounted = false;
      // Clean up markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      // Clean up map
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [navigate]);

  return (
    <Card className="w-full h-[600px] overflow-hidden shadow-xl">
      {loading && (
        <div className="w-full h-full flex items-center justify-center bg-muted/50">
          <div className="text-center space-y-2">
            <MapPin className="w-8 h-8 animate-pulse mx-auto text-primary" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="w-full h-full flex items-center justify-center bg-destructive/10">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
      {!loading && !error && (
        <div ref={mapContainer} className="w-full h-full" />
      )}
    </Card>
  );
};

export default IndiaMap;
