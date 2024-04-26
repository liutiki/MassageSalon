import { useState } from 'react';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './GiftCard.css';
import { addItemToCart } from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';

import '../../ModalWindow/Style.css';
import Modal from '../../ModalWindow/Modal';
import Content from '../../ModalWindow/Content';








const Massage=({card})=>{

const [quantity, setQuantity] = useState(1);

const dispatch = useDispatch()

const [isOpen, setIsOpen] = useState(false);




    return(
    <div className="positionGiftCard">
    <div className="image-card">
    <img className="image-gift" src={`./${card.img}.jpg`} alt="gift"/>
    </div>
    <div className="info">
        <h2>{card.name}</h2>
        <p>{card.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick= { () =>{dispatch(addItemToCart({card, quantity}));
        }}>Добавить в корзину</button>

<div>
     <button onClick={()=> setIsOpen(true)}>Open Modal</button>
     {isOpen && 
     <Modal setIsOpen  =  {setIsOpen} >
     <Content setIsOpen = {setIsOpen}/>
     </Modal>}
    </div>
        <Cart />
            </div>
        
        </div>
    
    )
}


export default Massage;