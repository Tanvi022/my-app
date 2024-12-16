// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// This is to fix the default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
  { position: [27.1751, 78.0421], name: 'Taj Mahal', description: 'Agra, Uttar Pradesh. A UNESCO World Heritage Site known for its stunning architecture and romantic history.' },
  { position: [15.3350, 76.4604], name: 'Hampi', description: 'Karnataka. Once the capital of the Vijayanagara Empire, known for its ruins and temples.' },
  { position: [24.8324, 79.9179], name: 'Khajuraho', description: 'Madhya Pradesh. Famous for its erotic sculptures and beautiful temples.' },
  { position: [12.3082, 76.6558], name: 'Mysore Palace', description: 'Karnataka. A historical palace of the Wadiyar dynasty known for its grandeur.' },
  { position: [26.9124, 70.3625], name: 'Jaisalmer Fort', description: 'Rajasthan. The "Golden Fort" known for its beautiful sandstone architecture.' },
  { position: [20.5960, 75.6650], name: 'Ajanta Caves', description: 'Maharashtra. Known for its exquisite murals and rock-cut sculptures.' },
  { position: [28.6562, 77.2410], name: 'Red Fort', description: 'Delhi. A symbol of India’s history, a UNESCO World Heritage Site.' },
  { position: [28.5245, 77.1855], name: 'Qutub Minar', description: 'Delhi. The tallest brick minaret in the world, showcasing Indo-Islamic architecture.' },
  { position: [23.6158, 72.6202], name: 'Rani Ki Vav', description: 'Gujarat. An 11th-century stepwell known for its intricate carvings.' },
  { position: [21.9490, 88.6194], name: 'Sundarbans National Park', description: 'West Bengal. The largest mangrove forest in the world, home to the Royal Bengal Tiger.' },
  { position: [19.8891, 86.0989], name: 'Konark Sun Temple', description: 'Odisha. An architectural marvel designed as a giant chariot.' },
];

const MapComponent = () => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position}>
          <Popup>
            <strong>{loc.name}</strong> <br /> {loc.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
