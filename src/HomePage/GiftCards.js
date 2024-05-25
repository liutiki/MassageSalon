import './HomePage.css';
import { dataForGiftHome } from "./dataForGiftHome";
import { useNavigate } from "react-router-dom";
import image from '../decoration/spiral.png';

const GiftCards = () =>{

    const navigate = useNavigate();

    const handleGiftCardClick = () => {
        navigate("/massages");
    };


    return(

    

        <div className="gift-container">
            <div className="name-top">
            <img src={image} width="70px" alt="icon"/>
                <h3 className="Oasis"> Подарочные карты</h3>
             
            </div>
        <div className="gift">
                {dataForGiftHome.map((item) => {
                const { image, name } = item;
                return (
                   
                    
                   <div className="giftCard">
                        <img className='lavanda' src={`./${image}.png`} alt="massagephoto" />
                        <p className="title">{name}</p>
                        <button onClick={handleGiftCardClick} className="button-gift">Выбрать</button>
                    </div>
                 

             
           
                                    );
                    })}
                    </div>

</div>
    )}
export default GiftCards;