import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Avaleht() {
  const[postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
  }, []);

  return (
    <div>
       <div>Avaleht, siin olev info on nähtav localhost:3000 aadressil</div> 
       <img className="Header-logo" src="https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg" alt="" />
       {postitused.map(element => 
        <div>
          <div><i>{element.userId}</i></div>
          <div><u>{element.id}</u></div>
          <div><b>{element.title}</b></div>
          <div>{element.body}</div>
          <Link to={"kasutaja-postitus/" + element.userId}>
            <button>Kõik kasutaja postitused</button>
          </Link>
          <Link to={"vaata-postitus/" + element.id}>
            <button>Vaata postitust</button>
          </Link>
        </div>
        )}
    </div>
  );
}

export default Avaleht