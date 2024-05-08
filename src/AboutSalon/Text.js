import { useState } from "react";
import { dataText } from "./dataText";

function Text(){


    const [showText,setShowText]=useState(false);


    const showTextClick = (item) => {
        item.showMore=!item.showMore
        setShowText(!showText)
      }

    return(<div>
<div className='text'>
{dataText.map((item) => {
      const { id, name,  description, showMore, dIcon } = item;
      return (
        <div className="TextPosition"key={id}>
            <div className="iconPosition">
            <img className="dIcon" src={`./${dIcon}.png`} alt="threeDIcon" />
            <p className="story">{name}</p>
          </div>
            <p className="aboutText">{showMore ? description : description.substring(0, 800) + "..."}<button className="button-pointer"onClick={()=>showTextClick(item)}>{showMore ? "Скрыть" : "Читать далее"}</button></p>
          </div>
                    );
                })}
            </div>


    </div>
   
);
}


export default Text;