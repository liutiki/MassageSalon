import { dataForHomePage } from "./dataForHomePage";
import './HomePage.css';
import GiftCards from "./GiftCards";
import Footer from "../Footer/Footer";
import React, { useEffect, useRef, useState } from 'react';
import image from '../decoration/stone.png';
import { gsap } from 'gsap';
import Modal from 'react-modal';
import styled from 'styled-components';

const CustomModal = styled(Modal)`
width: 500px;
height:40vh;
display: flex;
justify-content: center;
align-items: center;
margin-top:25%;
margin-left:35%;
background-color:rgba(234, 198, 150, 0.285);
outline: none;


  @media (max-width: 500px) {
    width: 290px;
    height:30vh;
    margin-top:80%;
    margin-left:10%;
  }`;

const Sale = styled.div`
font-size:21px;
color:green;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-left:18px;
font-family: "Philosopher", sans-serif;

@media (max-width: 500px) {
    font-size:17px;
  }`;


const ButtonSale=styled.button`
background-color:#7FC8A9;
color:#FFFFFF;
font-size:14px;
border:none;
padding:10px;
width:180px;
height:40px;
`;


    const HomePage = () => {

        useEffect(() => {
            const timer = setTimeout(() => {
              setShowDiscountModal(true);
            }, 4000);
            gsap.to('.custom-modal', { y: -20, duration: 3, opacity: 1 });
            setTimeout(() => {
              animateButton();
            }, 1000);
           
            return () => {
              clearTimeout(timer);
            };
          }, []);

        const [showDiscountModal, setShowDiscountModal] = useState(false);

            
     
        const modalRef = useRef(null);

        
        const   animateButton = () => {
            gsap.to('.welcomePosition', { y:0, duration: 3, opacity: 1 });
         
        }

       
    return(
        <div >

            <div className="welcomePosition">
     
            <h2 className="Welcome">Добро пожаловать в салон массажа </h2>
            <img className="WelcomeIcon"src={image} width="70px" alt="icon"/>
            <h1 className="WelcomeTwo">Оазис</h1>   
           
            </div>
            
            <CustomModal isOpen={showDiscountModal} onRequestClose={() => setShowDiscountModal(false)}
             className="custom-modal"
             ref={modalRef}
             >
                <Sale>
                <h3>Получите скидку 10% на первый сеанс массажа!</h3>
                <p>Оставайтесь с нами и побалуйте себя уникальным опытом массажа.</p>
                <ButtonSale onClick={() => setShowDiscountModal(false)}>Закрыть</ButtonSale>
                </Sale>
            </CustomModal>
      

            <div className="text-position">
            <p>  Если вы хотите позаботиться о своем теле, расслабить мышцы и 
                 побаловать себя, мы - идеальное место для проведения массажа в Калининграде. С момента нашего основания 
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