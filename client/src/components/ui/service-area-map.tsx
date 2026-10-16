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
  const radiusInMeters = 15000; // 15km max travel
  const noFeeRadiusInMeters = 10000; // travel fee applies beyond 10km

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
        
        {/* 15km max travel radius */}
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

        {/* 10km no-fee zone */}
        <Circle
          center={centerPosition}
          radius={noFeeRadiusInMeters}
          pathOptions={{
            color: '#1d4ed8',
            fillOpacity: 0,
            weight: 2,
            dashArray: '6 6'
          }}
        />
        
        {/* Center marker */}
        <Marker position={centerPosition}>
          <Popup>
            <div className="text-center">
              <div className="font-semibold text-charcoal mb-1">Canine Confidence</div>
              <div className="text-sm text-medium-grey">Boondall, Brisbane 4034</div>
              <div className="text-sm text-medium-grey mt-1">Up to 15km. Travel fee beyond 10km (dashed line)</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
