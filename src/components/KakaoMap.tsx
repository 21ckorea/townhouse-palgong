'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  address: string;
}

export default function KakaoMap({ latitude, longitude, address }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapRef.current) return;

      try {
        // Wait for kakao maps to be loaded
        let retries = 0;
        while (!window.kakao?.maps && retries < 20) {
          await new Promise(resolve => setTimeout(resolve, 500));
          retries++;
        }

        if (!window.kakao?.maps) {
          throw new Error('Kakao Maps SDK failed to load');
        }

        const position = new window.kakao.maps.LatLng(latitude, longitude);
        const options = {
          center: position,
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);
        const marker = new window.kakao.maps.Marker({
          position: position,
        });

        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${address}</div>`,
        });

        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.open(map, marker);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close();
        });

        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error initializing map:', err);
        setError('지도를 불러오는데 실패했습니다.');
        setIsLoading(false);
      }
    };

    initializeMap();
  }, [latitude, longitude, address]);

  if (isLoading) {
    return (
      <div className="w-full h-[400px] rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">지도를 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
    />
  );
} 