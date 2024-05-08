import Footer from "../../Footer/Footer";
import Massage from "./Massage";
import dataForGiftCard from "./dataForGiftCard";

const Massages = () =>{
    return( <div>
    <div>
        {dataForGiftCard.map(card => <Massage card={card}/>)}
        
    </div>



 <div className="footer">
 <Footer/>
 </div>
 </div> 
)
}

export default Massages;