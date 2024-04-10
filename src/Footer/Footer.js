import './Footer.css';
import image from '../decoration/spiral.png';
import instagram from '../decoration/instagram.png';

const Footer =() => {
    return(
        <div className="footer">
            <div className="footer-row">
            <ul className="relax-massage">
            <li><img src={image} width="70px" alt="icon"/></li>
                <li className="service">Услуги:</li>
                <li className="footer-rest">Расслабляющий Массаж</li>
                <li className="footer-rest">Антицеллюлитный Массаж</li>
                <li className="footer-rest">Спортивный Массаж</li>
                <li className="footer-rest">Массаж головы</li>
                <li className="footer-rest">Массаж ступней</li>
            </ul>

                 <ul className="relax-massage">
                 <li><img src={image} width="70px" alt="icon"/></li>
                 <li className="service">Адрес:</li>
                <li className="footer-rest">Калининград, ул. Суздальская 20</li>
                <li className="footer-rest">E-mail: liutiki@list.ru </li>
                <li className="footer-rest"></li>
                <li className="footer-rest">Tel: +79062396876</li>
            </ul>

            <ul className="relax-massage">
                <li><img src={image} width="70px" alt="icon"/></li>
                <li className="footer-rest">Мы есть в инстаграм</li>
                <img src={instagram} width="40px" alt="icon"/>
            </ul>
                          </div> 
                          <div className="copyright">
                          <p>Copyright 2024 Oasis massage</p>
                          </div>
        </div>
    )
}


export default Footer;