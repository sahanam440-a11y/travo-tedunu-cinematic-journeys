import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from './ui/card';
import { supabase } from '@/integrations/supabase/client';

interface RouteMapProps {
  origin: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
}

const RouteMap: React.FC<RouteMapProps> = ({ origin, destination }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    // Clean up existing map if any
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    try {
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

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setError('Map loading error. Please refresh the page.');
      });
    } catch (err) {
      console.error('Error creating map:', err);
      setError('Failed to initialize map. Please refresh the page.');
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchTokenAndInitMap = async () => {
      if (!mounted) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const { data, error: fetchError } = await supabase.functions.invoke('get-mapbox-token');
        
        if (!mounted) return;
        
        if (fetchError) {
          console.error('Error fetching Mapbox token:', fetchError);
          setError('Failed to load map. Please try refreshing the page.');
          setLoading(false);
          return;
        }
        
        if (data?.token) {
          initializeMap(data.token);
          setLoading(false);
        } else {
          setError('Map configuration error. Please contact support.');
          setLoading(false);
        }
      } catch (err) {
        if (!mounted) return;
        console.error('Error initializing map:', err);
        setError('Failed to load map. Please try refreshing the page.');
        setLoading(false);
      }
    };

    fetchTokenAndInitMap();

    return () => {
      mounted = false;
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [origin.lat, origin.lng, destination.lat, destination.lng]);

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
        
        {loading && (
          <div className="flex items-center justify-center h-[400px] bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        )}
        
        {error && (
          <div className="flex items-center justify-center h-[400px] bg-destructive/10 rounded-lg">
            <p className="text-destructive">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div 
            ref={mapContainer} 
            className="w-full h-[400px] rounded-lg overflow-hidden border border-border"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default RouteMap;