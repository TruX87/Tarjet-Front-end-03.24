import React, { useEffect, useRef, useState } from 'react'
//REACT_APP_SHOPS_DB_URL
//sama mis categories
//võtmine, lisamine, kustutamine

// const newShop = {name: "", lat: "0, long: 0, openTime: ""}
//.push()

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const nameRef= useRef();
  const latRef= useRef();
  const longRef= useRef();
  const openRef= useRef();
  const url = process.env.REACT_APP_SHOPS_DB_URL;


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setShops(json || []));
  }, [url]);

  const add = () => {
    const newShop = {"name": nameRef.current.value, "lat": Number(latRef.current.value), "long": Number(longRef.current.value), "openTime": openRef.current.value};
    shops.push(newShop)
    fetch(url, {"method": "PUT", "body": JSON.stringify(shops)});
    setShops(shops.slice());
    //toast?
    nameRef.current.value = "";
    latRef.current.value = "";
    longRef.current.value = "";
    openRef.current.value = "";
  }

  const remove = (index) => {
    shops.splice(index,1);
    setShops(shops.slice());
    fetch(url, {"method": "PUT", "body": JSON.stringify(shops)});
  }
  return (
    <div>
      <label>Shop name</label><br />
      <input ref={nameRef} type="text" /><br />
      <label>Latitude</label><br />
      <input ref={latRef} type="number" /><br />
      <label>Longitude</label><br />
      <input ref={longRef} type="number" /><br />
      <label>Open time</label><br />
      <input ref={openRef} type="text" /><br />
      <button onClick={add}>Add</button><br />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Shop name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Open time</th>
          </tr>
        </thead>
        <tbody>
      {shops.map((shop, index) =>
         <tr key={shop.name}>
          <td>{shop.name}</td>
          <td>{shop.lat}</td>
          <td>{shop.long}</td>
          <td>{shop.openTime}</td>
          <td><button onClick={() => remove(index)}>x</button></td>
          </tr>
         )}
         </tbody>
      </table>
    </div>
  )
}

export default MaintainShops