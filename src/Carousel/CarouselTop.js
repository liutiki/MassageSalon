import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselTop.css';




function CarouselTop(){
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src="https://img.freepik.com/free-photo/top-view-various-spa-products-grey-background_23-2147956363.jpg?t=st=1711613709~exp=1711617309~hmac=1b5e926bf9913837c663094f38d23e75dd77b40626a29954c6a95e583b14ab2d&w=1380"
          alt="First slide" 
        
        /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src="https://img.freepik.com/free-photo/high-angle-view-various-spa-products-white-backdrop_23-2147956357.jpg?t=st=1711612609~exp=1711616209~hmac=882d5913b75325eb2f4ec9bb1fd58c1388a0753a63354089d554a2efd48a5cc6&w=1380"
          alt="Second slide" 
        
        /> 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img 
          className="carousel-image" 
          src="https://img.freepik.com/free-photo/high-angle-view-spa-stones-towel-salt-soap-leaves-candles-grey-background_23-2147956367.jpg?t=st=1711612625~exp=1711616225~hmac=3665da94fcff66d984c880311998e054196738097cef9a7dace0f0629d688941&w=1380"
          alt="Third slide" 
         /> 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}
export default CarouselTop;