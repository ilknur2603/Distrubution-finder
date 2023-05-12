import React from 'react'

import Swiper from '../components/Swiper';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OurPeople() {
  return (
    <div  className="home"
    style={{
      background:
        "radial-gradient(circle, rgba(23,174,202,1) 0%, rgba(148,165,233,1) 100%)",
    }}>
      
      <div className="container mx-auto px-1">
      <Swiper/>
      
    </div>
    </div>
  );
   
}

