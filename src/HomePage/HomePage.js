import { dataForHomePage } from "./dataForHomePage";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

const HomePage = () =>{
  

    const navigate = useNavigate();

    const handleGiftCardClick = () => {
        navigate("/massages");
    };
    
    return(
        <div >
            <div className="text-position">
            <h1>Добро пожаловать в салон массажа "Оазис"</h1>
            <p>Добро пожаловать в массажный салон Oasis. Если вы хотите позаботиться о своем теле, расслабить мышцы и 
                 побаловать себя, мы - идеальное место для проведения массажа в Хьюстоне. С момента нашего основания 
                 в 2008 году мы практикуем несколько видов массажа, подкрепленных нашими обширными знаниями в области 
                 науки и искусства традиционного массажа.

                 Мы предлагаем различные виды массажных процедур, которые доступны в виде сеансов с переменным временем 
                 проведения. В массажном салоне Oasis мы проявляем гибкость и всегда заботимся о наилучших интересах наших
                 клиентов. Следовательно, вы можете настроить </p>
                 </div>
                 <div className="sevice-position">
                {dataForHomePage.map((item) => {
                const { image, name, description } = item;
                return (
                    
                        <div className="service-card">
                        <img className='home-page-image' src={`./${image}.jpg`} />
                        <p className="title">{name}</p>
                        <p className="description">{description}</p>
                        <button className="action">Узнать подробнее</button>
                        </div>
                  
                );
            })}


        </div>
        <button onClick={handleGiftCardClick}>GiftCard</button>
        </div>
       
    );
};
export default HomePage;