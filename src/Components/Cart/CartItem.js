import dataForGiftCard from "../MassageComponents/dataForGiftCard";
import { useDispatch } from "react-redux";
import {removeItemFromCart} from "../../Redux/cartSlice";
import crossmark from './busket/crossmark.png';
import './Cart.css';

const CartItem = ({cartItem }) => { 

    const dispatch =useDispatch();

    

    const dishes = dataForGiftCard.find(item =>item.id === cartItem.cardId)
    return(
        <div>
           <div className="cardNamePosition">
           <p className="cardName">{cartItem.quantity}.</p>
           <p className="cardName">{dishes.name}</p>
           <p className="delete" onClick ={() =>dispatch (removeItemFromCart ({cartItemId : cartItem.id}))}>
           Удалить <img src={crossmark} width="23px" alt="crossmark"/></p>
           </div>
           <div className="cardNamePosition">
           <p className="price"> Цена : {dishes.price * cartItem.quantity} рублей</p>
         
         
          </div>
           
        </div>
    )
    
    }
    
    export default CartItem;