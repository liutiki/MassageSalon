import { useState } from 'react';
import Cart from '../Cart/Cart';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './GiftCard.css';
import { addItemToCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';


const Massage=({card})=>{

const [quantity, setQuantity] = useState(1);

const dispatch = useDispatch()
    return(
    <div className="positionGiftCard">
    <div className="image-card">
    <img className="image-gift" src={`./${card.img}.jpg`} alt="gift"/>
    </div>
    <div className="info">
        <h2>{card.name}</h2>
        <p>{card.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick ={() =>{dispatch(addItemToCart({card,quantity}));
        }}>Добавить в корзину</button>
        
      <Cart />
        </div>
    </div>)
}


export default Massage;