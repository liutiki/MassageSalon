import { useState } from "react";
import CarouselTwo from "../CardPrice/CarouselTwo";
import Footer from "../Footer/Footer";
import { dataAboutSalon } from "./dataAboutSalon";
import './AboutSalon.css';
import Text from './Text.js';
import nextIcon from './Icons/next.png';
import backIcon from './Icons/back.png';

function AboutSalon(){

    const [picture, setPicture]=useState(0);

    const { image } = dataAboutSalon[picture];




    const previousPicture=() =>{
        setPicture(picture=>{
            picture--;
            if(picture < 0){
                return dataAboutSalon.length-1;
            }
            return picture;
        })
    }
    
    const nextPicture=() =>{
       setPicture(picture=>{
        picture++;
        if (picture > dataAboutSalon.length -1){
            picture=0;
        }
        return picture;
       })
    }

    return(<div className='space'>
        <CarouselTwo />
  
     
        <div className="pictureText">
                <div className='picture-position'>         
                    <img className="salonPics" src={`./${image}.jpg`} alt="giftcards" />
                    <div className='text'>
                        <Text />
                    </div>
                    <div className="buttons">
                        <button className="OneButton" onClick={previousPicture}><img src={backIcon} width="50px" alt="back"/></button>
                        <button className="TwoButton" onClick={nextPicture}><img src={nextIcon} width="50px" alt="next"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSalon;