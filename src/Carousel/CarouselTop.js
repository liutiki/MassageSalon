import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselTop.css';
import CarouselOne from './Background/CarouselOne.jpg';
import CarouselFour from './Background/CarouselFour.jpg';
import CarouselTwo from './Background/CarouselTwo.jpg';

function CarouselTop(){
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src={CarouselOne}
          alt="First slide" 
        
        /> 
        <Carousel.Caption>
          <h3 className="magic">Магия массажа</h3>
          <p className="magic">Путешествие от усталости к расслаблению</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src={CarouselFour}
          alt="Second slide" 
        
        /> 
        <Carousel.Caption>
          <h3 className="magic">Массаж – язык без слов</h3>
          <p className="magic">Здоровые тело, разум и душа</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src={CarouselTwo}
          alt="Third slide" 
         /> 
        <Carousel.Caption>
          <h3 className="magic">Исцеляющее прикосновение</h3>
          <p className="magic">
          Говорят, что вы не можете купить счастье, но вы можете купить массаж, а это то же самое
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}
export default CarouselTop;