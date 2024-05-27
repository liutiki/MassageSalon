import { useEffect, useState } from "react";
import { dataSpaProgram } from "./dataSpaProgram";
import Slides from "./Slides";
import './Spa.css';
import Buttons from "./Buttons";
import CarouselTwo from "../CardPrice/CarouselTwo";
import ButtonAll from "./ButtonAll";
import Footer from "../Footer/Footer";
import gsap from 'gsap';
import CountdownTimer from "../Countdown/CountdownTimer";




const FirstPage = () => {

    const [staff,setStuff]=useState(dataSpaProgram);
 

    const backAll = () => {
        setStuff(dataSpaProgram);
    }
 
    const chosenProject =(searchTerm) =>{
        const newProject=dataSpaProgram.filter(element=>element.searchTerm===searchTerm)
        setStuff(newProject);
    }

    useEffect(() => {
        gsap.to('.products,.Spa-container', {
          duration: 3,
         opacity:1,
          delay: 0.5,
          y:30,
          stagger:{
           amount: 0.6,
          },
         
        });
      }, []);


      
  useEffect(() => {
    setTimeout(() => {
      gsap.to('.timer', {
        duration: 1,
        opacity: 1,
        delay: 0.6,
      });
    }, 3000); 
  }, []);


return(<div className="background">

<div className="carouselTwo">
    <CarouselTwo />
</div>


<CountdownTimer  targetDate="2024-12-31T23:59:59" />



<div className="spa-btn">
  <ButtonAll backToAll={backAll}/>
  <Buttons filteredStuff={chosenProject} />
</div>


<div className="products">

{staff.map((item=>{
const{id,name, description,  descriptiontwo,  descriptionthree,  descriptionfour, image, price }=item;

return <div className="Spa-container" key={id}>
<Slides image={image}/> 
<div className="product-info">
<p className="SpaName">{name}</p>
<div className="line">
<p>{description}</p>
<p>{descriptiontwo}</p>
<p>{descriptionthree}</p>
<p>{descriptionfour}</p>
</div>
<div>
<p className="SpaPrice">{price}</p>
</div>
</div>
</div>

  
}))}

</div>

<Footer />

</div>
)}


export default FirstPage;