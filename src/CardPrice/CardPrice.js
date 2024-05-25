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
  const{image, name, price, pricetwo }=item;
  return(
        <div className="card">
<img src={image} className="image" alt="giftCard"/>
<p className="title">{name}</p>
<p className="price-back">{price}</p>
<p className="price-two">{pricetwo}</p>
<button className="action">Записаться<span aria-hidden="true"> → </span></button>
    </div>
    
  )
  
}))}
          
         
         </div>
         <Footer />
     </div>

    )
}

export default CardPrice;
