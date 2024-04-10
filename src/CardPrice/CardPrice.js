import './CardPrice.css';
import React from 'react';
import { dataCardPrice } from './dataCardPrice';
import CarouselTwo from './CarouselTwo';
import Footer from '../Footer/Footer';

function CardPrice(){
    return(
      
      <div>
        <CarouselTwo />
      
      <div className="cardPosition">
{dataCardPrice.map((item=>{
  const{image, name, description, price }=item;
  return(
        <div className="card">
<img src={image} className="image"/>
<p className="title">{name}</p>
<p>{description}</p>
<p>{price}</p>
<button className="action">Подробнее<span aria-hidden="true"> → </span></button>
    </div>
    
  )
  
}))}
          
         
         </div>
         <Footer />
     </div>

    )
}

export default CardPrice;
