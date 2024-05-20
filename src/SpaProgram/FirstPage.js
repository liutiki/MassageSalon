import { useState } from "react";
import { dataSpaProgram } from "./dataSpaProgram";
import Slides from "./Slides";
import './Spa.css';
import Buttons from "./Buttons";
import CarouselTwo from "../CardPrice/CarouselTwo";
import ButtonAll from "./ButtonAll";
import Footer from "../Footer/Footer";


const FirstPage = () => {

    const [staff,setStuff]=useState(dataSpaProgram);
 

    const backAll = () => {
        setStuff(dataSpaProgram);
    }
 
    const chosenProject =(searchTerm) =>{
        const newProject=dataSpaProgram.filter(element=>element.searchTerm===searchTerm)
        setStuff(newProject);
    }
return(<div className="background">

<div className="carouselTwo">
    <CarouselTwo />
</div>

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
<ul className="line">
<li>{description}</li>
<li>{descriptiontwo}</li>
<li>{descriptionthree}</li>
<li>{descriptionfour}</li>
</ul>
<p className="SpaPrice">{price}</p>

</div>
</div>

  
}))}

</div>

<Footer />

</div>
)}


export default FirstPage;