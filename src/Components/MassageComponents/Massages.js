import Massage from "./Massage";
import dataForGiftCard from "./dataForGiftCard";

const Massages = () =>{
    return(<div>
        {dataForGiftCard.map(card => <Massage card={card}/>)}
        
    </div>)
}

export default Massages;