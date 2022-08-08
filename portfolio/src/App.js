import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar1 from "./Components/Navbar"
import Main from "./Pages/Main"
import Uv_Impact from "./Pages/Uv_Impact.js";
import Sun_Protection from "./Pages/Sun_Protection.js";
import Skin_disease from "./Pages/Skin_disease.js";
import './index.css'



function App() {



  
  return (
    
   
      <div className="App" >
        <Routes>
         <Route path="/" element={ <Main/>} exact />
         <Route path="/uv" element={ <Uv_Impact/>} exact />
         <Route path="/protection" element={ <Sun_Protection/>} exact />
         <Route path="/skin" element={ <Skin_disease/>} exact />
       
        </Routes>
      </div>

 
  );
}

export default App;
