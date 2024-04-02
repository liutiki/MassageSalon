import { useState } from 'react';
import Cart from '../Cart/Cart';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './GiftCard.css';

const Massage=({card})=>{

const [quantity, setQuantity] = useState(1);

    return(
    <div className="positionGiftCard">
    <div className="image-card">
    <img className="image-gift" src={`./${card.img}.jpg`}/>
    </div>
    <div className="info">
        <h2>{card.name}</h2>
        <p>{card.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button>Добавить в корзину</button>
        
      <Cart />
        </div>
    </div>)
}


export default Massage;