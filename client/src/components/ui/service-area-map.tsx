import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ServiceAreaMap() {
  // Boondall, Brisbane coordinates
  const centerPosition: [number, number] = [-27.3540, 153.0567];
  const radiusInMeters = 20000; // 20km in meters

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg" data-testid="service-area-map">
      <MapContainer 
        center={centerPosition} 
        zoom={11} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* 20km radius circle */}
        <Circle
          center={centerPosition}
          radius={radiusInMeters}
          pathOptions={{
            color: '#3b82f6',
            fillColor: '#3b82f6',
            fillOpacity: 0.2,
            weight: 2
          }}
        />
        
        {/* Center marker */}
        <Marker position={centerPosition}>
          <Popup>
            <div className="text-center">
              <div className="font-semibold text-charcoal mb-1">Canine Confidence</div>
              <div className="text-sm text-medium-grey">Boondall, Brisbane 4034</div>
              <div className="text-sm text-medium-grey mt-1">20km service radius</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
