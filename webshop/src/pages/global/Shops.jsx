import React, { useState, useEffect } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';
import { Spinner } from 'react-bootstrap';

function Shops() {
  const [coordinates, setCoordinates] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [shopNames, setShopNames] = useState([]);
  const [filteredCoordinates, setFilteredCoordinates] = useState([]);
  const url = process.env.REACT_APP_SHOPS_DB_URL;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setCoordinates(json);
        setFilteredCoordinates(json); // Initialize with all shops
        const uniqueShops = [...new Set(json.map(coord => coord.name))];
        setShopNames(uniqueShops);
        setLoading(false);
      });
  }, [url]);

  const filterByShops = (shopName) => {
    const result = coordinates.filter(coord => coord.name === shopName);
    setFilteredCoordinates(result);
  };

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <div className="map">
      <br />
      {shopNames.map(shop => (
        <Button key={shop} variant="contained" onClick={() => filterByShops(shop)}>
          {shop}
        </Button>
      ))}
      <br /><br />
      <Map mapCoordinates={filteredCoordinates} /><br />
    </div>
  );
}

export default Shops;









// import React, { useState } from 'react'
// import Map from '../../components/Map';
// // import Map2 from '../../components/Map2';
// import Button from '@mui/material/Button';
// import { useEffect } from 'react';
// import {Spinner} from "react-bootstrap";

// function Shops() {
//   const [coordinates, setCoordinates] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [dbCoordinates, setDbCoordinates] = useState([]);
//   const url = process.env.REACT_APP_SHOPS_DB_URL;

//   useEffect(() => {
//     fetch(url)
//     .then(res => res.json())
//     .then(json => {
//       setCoordinates(json);
//       setDbCoordinates(json);
//       setLoading(false);
//       const result = [...new Set(json.map(coordinates => coordinates.name))];
//       setDbCoordinates(result);
//     });
//   }, [url]);

//   function filterByShops(coordinatesClicked) {
//     // reset();
//     const result = dbCoordinates.filter((p) => p.coordinates === coordinatesClicked);
//     setCoordinates(result);
//   }

//   if (isLoading) {
//     return <Spinner />
//   }

//   return (<div className="map">
//     <br />
//     {coordinates.map(category => 
//       <Button key={coordinates.name} variant="contained" onClick={() => filterByShops(coordinates.name)}>
//         {coordinates.name}
//         </Button>
//     )}
//     {/* <Button variant="outlined" onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>All shops</Button>{' '}
//     <Button variant="outlined" onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</Button>{' '}
//     <Button variant="outlined" onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</Button>{' '}<br /><br /> */}
//     <Map mapCoordinaates={coordinates}  /><br />
//     {/* <div className='map2'>
//       <Map2 />
//     </div> */}
//   </div>)
// }

// export default Shops