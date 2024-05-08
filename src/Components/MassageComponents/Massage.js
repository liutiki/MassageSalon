import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './GiftCard.css';
import { addItemToCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import TestModal from '../../TestModal';
import Swal from 'sweetalert2';
    


const Massage=({card})=>{

const [quantity, setQuantity] = useState(1);

const dispatch = useDispatch()



const showNotification = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Карта добавлена в корзину",
        showConfirmButton: false,
        timer: 1500
      });
};

const addToCart = () => {
    dispatch(addItemToCart({ card, quantity }));
    showNotification();
};

    return(
    <div className="positionGiftCard">
    <div className="image-card">
    <img className="image-gift" src={`./${card.img}.jpg`} alt="gift"/>
    </div>
    <div className="info">
        <h2 className="name">{card.name}</h2>
        <div className="gorizontal-line"></div>
        <div className="price-position">
        <p className="price">{card.price}</p>
        <p className="price">{card.curency}</p>
        </div>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="busket" onClick={addToCart}>Добавить в корзину</button>



    <div>
    <TestModal quantity={quantity} setQuantity={setQuantity} />
    </div>
 
            </div>
        
        </div>
    
    )
}


export default Massage;