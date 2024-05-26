import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import '../css/Map.css';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map({ mapCoordinates }) {
  const defaultPosition = [58.7771, 24.9038]; // Default center position

  return (
    <div>
      <MapContainer className='map' center={defaultPosition} zoom={8} scrollWheelZoom={true}>
        <ChangeView center={defaultPosition} zoom={8} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapCoordinates.map(coord => (
          <Marker key={coord.name} position={[coord.long, coord.lat]}>
            <Popup>
              {coord.name}. <br /> Avatud {coord.openTime}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;




// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import ChangeView from './ChangeView';
// import '../css/Map.css';

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
//   iconSize: [25,41], 
//   iconAnchor: [12,41],
//   popupAnchor: [2, -40],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// function Map(props) { 

//   return (
//   <div>

//     <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={true}>
//       <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[59.4231, 24.7991]}>
//         <Popup>
//           Ülemiste keskus. <br /> Avatud 9-20
//         </Popup>
//       </Marker>
//       <Marker position={[59.4277, 24.7193]}>
//         <Popup>
//           Kristiine keskus. <br /> Avatud 10-21
//         </Popup>
//       </Marker>
//       <Marker position={[58.3778, 26.7298]}>
//         <Popup>
//           Tasku keskus. <br /> Avatud 10-21
//         </Popup>
//       </Marker>

//       {/*  */}
//     </MapContainer>
//   </div>)
// }

// export default Map; 