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





function App(){
  

  return <Router>
    <MyNav />
   
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/aboutSalon" element={<AboutSalon />} />
    <Route path="/service" element={<Service />}/>
    <Route path="/contacts" element={<Contacts />}/>
    <Route path="/testimonial" element={<Testimonial />}/>
    </Routes>
  
    </Router>


    }




export default App;
