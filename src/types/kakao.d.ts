interface KakaoMapOptions {
  center: any;
  level: number;
}

interface KakaoMarkerOptions {
  position: any;
}

interface KakaoInfoWindowOptions {
  content: string;
}

declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => any;
        Map: new (container: HTMLElement, options: KakaoMapOptions) => any;
        Marker: new (options: KakaoMarkerOptions) => any;
        InfoWindow: new (options: KakaoInfoWindowOptions) => any;
        event: {
          addListener: (target: any, type: string, handler: () => void) => void;
        };
      };
    };
  }
}

export {}; 