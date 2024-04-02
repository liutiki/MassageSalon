import React from 'react';
import CarouselTop from './Carousel/CarouselTop';
import HomePage from './HomePage/HomePage';
import Massages from './Components/MassageComponents/Massages';
import { Link } from 'react-router-dom/dist';





function Home(){

  return (
       <div>
           <CarouselTop />
           <HomePage />

        
       </div>
  );
}

export default Home;
