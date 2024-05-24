import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
  const [pictures, setPictures] = useState([]);
  const url = process.env.REACT_APP_PICTURES_DB_URL;


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setPictures(json || []));
  }, [url]);
  return (
    <Carousel data-bs-theme="dark">
      
      {pictures.map(p =>
      <Carousel.Item>
        <img
          src={p.url}
          alt={p.alt}
        /><br/><br/><br/><br/><br/>
        <Carousel.Caption>
          <h5>{p.header}</h5>
          <p>{p.text.length > 60 ? p.text.substring(0,60) + "...": p.text}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
  );
}

export default CarouselGallery;