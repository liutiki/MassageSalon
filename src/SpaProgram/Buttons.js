import './Spa.css';

function Buttons ({filteredStuff}){
    return(
        <div>
            <button className="btn-top" onClick={() =>filteredStuff('ForOne')}>Для одного</button>
            <button className="btn-top"onClick={() =>filteredStuff('ForTwo')}>Для двоих</button>
            <button className="btn-top"onClick={() =>filteredStuff('Girls')}>SPA девичник</button>
            </div>
    )
}

export default Buttons;