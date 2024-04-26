import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Contacts from './Contacts/Contacts';
import MyNav from "./Navbar/MyNav";
import AboutSalon from './AboutSalon/AboutSalon';
import Service from './Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './Testimonial/Teatimonial';
import CardPrice from './CardPrice/CardPrice';
import Massages from './Components/MassageComponents/Massages';
import { Link } from "react-router-dom";
import Cart from './Components/Cart/Cart';







function App(){
  

  return <Router>
    <MyNav />
   
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/aboutSalon" element={<AboutSalon />} />
    <Route path="/service" element={<Service />}/>
    <Route path="/CardPrice" element={<CardPrice />}/>
    <Route path="/contacts" element={<Contacts />}/>
    <Route path="/testimonial" element={<Testimonial />}/>
    <Route path="/massages" element={<Massages />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
  
    </Router>


    }




export default App;
