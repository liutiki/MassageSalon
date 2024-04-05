import { dataForHomePage } from "./dataForHomePage";
import './HomePage.css';
import GiftCards from "./GiftCards";
import Footer from "../Footer/Footer";

const HomePage = () =>{
   
    
    return(
        <div >
            <div className="welcomePosition">
            <h2 className="Welcome">Добро пожаловать в салон массажа </h2>
            <h1 className="Welcome">"Оазис"</h1>
            </div>
            <div className="text-position">
            <p>  Если вы хотите позаботиться о своем теле, расслабить мышцы и 
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
                        <img className='home-page-image' src={`./${image}.jpg`} alt="giftcards" />
                        <p className="title">{name}</p>
                        <p className="description">{description}</p>
                        <button className="action">Узнать подробнее</button>
                        <button className="callToAction">Записаться</button>
                        </div>
                  
                );
            })}
 </div>

        
       
        <div className="horizontal-line"></div>
<GiftCards />

<Footer />
       
        
                  
    </div> 
               
        
        
       
    );
};
export default HomePage;