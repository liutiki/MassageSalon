import React, { useState } from 'react';
import styled from 'styled-components';
import next from './IMGProgram/next.png';



const Image =styled.img`
width:400px;
height:36vh;
border-radius:20px;


@media (max-width: 500px) {
    width:270px;
    height:20vh;
  }`;



function Slides ({image}){

const[program, setProgram]=useState(0);





const nextProgram=()=>{
    setProgram((program=>{
        program++;
        if (program> image.length-1){
            program=0;
        }
        
        return program;
    }))
}
return(
    <div>
        <Image src={image[program]} width="200px" alt="SpaProgram" />

        <div className="btn-next-position">
           <button className="btn-next"onClick={nextProgram}><img className="next" src={next} alt="next button"/></button>
        </div>
    </div>
)

}

export default Slides;