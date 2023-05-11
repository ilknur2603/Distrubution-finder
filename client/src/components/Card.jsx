import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';


const titleCard = props => {
    let {imgSrc, title, text}= props.data;
  return (
    
   <titleCard className="p-0 overflow-hidden h-100 shadow">
    <div className="overflow-hidden rounded p-0 bg-light">
       <titleCard.img variant="top" src={imgSrc} /> 
    </div>
    <titleCard.body className= "text-center">
        <titleCard.Title className="display-6">{text}</titleCard.Title>
        <titleCard.Title className="display-6">{title}</titleCard.Title>
        
    </titleCard.body>
  
   </titleCard>
  );
};

export default titleCard
