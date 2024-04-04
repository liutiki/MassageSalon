import dataForGiftCard from "../MassageComponents/dataForGiftCard";
import { useDispatch } from "react-redux";
import {removeItemFromCart} from "../../Redux/cartSlice";

const CartItem = ({cartItem}) => { 

    const dispatch =useDispatch();


    const dishes = dataForGiftCard.find(item =>item.id === cartItem.cardId)
    return(
        <div>
           <p>{cartItem.quantity}</p>
           <p>{dishes.name}</p>
           <p> Цена : {dishes.price * cartItem.quantity}</p>
         
           <span onClick ={() =>dispatch (removeItemFromCart ({cartItemId : cartItem.id}))}>
           <img className="busket"src="https://img.icons8.com/?size=50&id=11201&format=png" alt="busket"/></span>

        </div>
    )
    
    }
    
    export default CartItem;