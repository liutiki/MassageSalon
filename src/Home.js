import React, { useState } from 'react';
import CarouselTop from './Carousel/CarouselTop';
import HomePage from './HomePage/HomePage';
import Modal from './ModalWindow/Modal';
import Content from './ModalWindow/Content';
import './ModalWindow/Style.css';








function Home(){

  const [isOpen, setIsOpen] = useState(false);

  return (
       <div>
           <CarouselTop />
           <HomePage />

           <div>
     <button onClick={()=> setIsOpen(true)}>Open Modal</button>
     {isOpen && 
     <Modal setIsOpen  =  {setIsOpen} >
     <Content setIsOpen = {setIsOpen}/>
     </Modal>}
    </div>
       </div>
  );
}

export default Home;
