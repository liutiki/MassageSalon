import './HomePage.css';
import { dataForGiftHome } from "./dataForGiftHome";
import { useNavigate } from "react-router-dom";

const GiftCards = () =>{

    const navigate = useNavigate();

    const handleGiftCardClick = () => {
        navigate("/massages");
    };


    return(

    

        <div className="gift-container">
            <div className="name-top">
                <h2 className="Oasis"> Оазис Подарочные карты</h2>
            </div>
        <div className="gift">
                {dataForGiftHome.map((item) => {
                const { image, name, description } = item;
                return (
                    
                   <div className="giftCard">
                        <img className='lavanda' src={`./${image}.png`} alt="massagephoto" />
                        <p className="title">{name}</p>
                        <p className="description">{description}</p>
                        <button onClick={handleGiftCardClick} className="button-gift">Выбрать</button>
                    </div>
                 
                                    );
                    })}
                    </div>

</div>
    )}
export default GiftCards;