import React, { useState } from 'react'
import Map from '../../components/Map';
import Map2 from '../../components/Map2';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div className="map">
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <Map mapCoordinaates={coordinaates}  />
    <div className='map2'>
      <Map2 />
    </div>
  </div>)
}

export default Shops