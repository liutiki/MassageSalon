import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import image from './busket/LavandaOne.jpg';
import './Cart.css';


const Cart = () => { 


const cartItems =useSelector(getCartItems);

const totalPrice = useSelector(getTotalPrice);
return(
    <div>
         <img className="cartIcon" src={image} alt="cart"/> 
        {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
       <h3 className="totalPrice">Общая сумма: {totalPrice} рублей</h3>
    </div>)

}

export default Cart;