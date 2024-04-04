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
        <div className="gift-position">
                {dataForGiftHome.map((item) => {
                const { image, name, description } = item;
                return (
                    
                   <div>

                        <div class="card">
                        <img className='home-page-card' src={`./${image}.png`} alt="massagephoto" />
                        </div>
                        <p className="title">{name}</p>
                        <p className="description">{description}</p>
                        <button onClick={handleGiftCardClick}>GiftCard</button>
                    </div>
                                    );
                    })}
                    </div>

</div>
    )}
export default GiftCards;