
   
import React, { useState, useEffect } from "react";

import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage} from 'mdb-react-ui-kit';
import "./style.css";
import { connect } from "react-redux";
import Navbar1 from "../Components/Navbar";
import { HiChevronDoubleDown } from "react-icons/hi";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import axios from "axios";
import Cookies from 'universal-cookie';
import uv_image from '../Components/UV_Impact.jpg'
import skin_disease_image from '../Components/skin_disease.jpg'
import skin_protection_image from '../Components/sun_protection.jpg'

import About from './About'
import Uv_Impact from "./Uv_Impact";
import Footer from "../Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Main(){
 
    return(
        < >

    
      <div className="Main">
   
   <Navbar1/>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
  
  
  
  
   <div className="row">
     <div className="col-12">
     <h1 style={{color:"white",marginLeft:"20%",fontSize:"60px"}}>Sun Protection</h1>
     </div>
    
     <div className="col-12">
     <p style={{color:"white",marginLeft:"18%",fontSize:"30px"}}>Dont be UV blinded, be safety minded</p>
     </div>

  
   </div>
   <div className="row">
     
     </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
  


      </div>
<br></br>
<div>
<About/>

</div>

<div className="container">
<div className="row ">
<div className="col-4">
<div class="card">
  <img src={skin_protection_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title">UV Impact</h5>
    <p class="card-text">The sun’s ultraviolet (UV) radiation is the main cause of skin cancer.

You can see the sun’s light and feel the sun’s heat but you can’t see or feel UV radiation. This is what makes it so dangerous – and why it is so important to know all about UV so you can enjoy the sun safely.</p>
    <br></br>
    <Link to="/uv"><a href="#" class="btn btn-primary" style={{marginLeft:"39%"}}>Discover</a></Link>
</div>
<div className="col-4">
<div class="card">
  <img src={skin_disease_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title">Skin Disease

</h5>
    <p class="card-text">The sun’s ultraviolet (UV) radiation is the main cause of skin cancer.

Australia has one of the highest rates of skin cancer in the world. Two in three Australians will be diagnosed with skin cancer by the age of 70.</p>
    <br></br>
    <Link to="/skin"><a href="#" class="btn btn-primary" style={{marginLeft:"39%",marginTop:"6%"}}>Discover</a></Link>
</div>
<div className="col-4">
<div class="card">
  <img src={uv_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title" > Protection Guideline</h5>
    <p class="card-text">Ultraviolet (UV) radiation from the sun is the main cause of skin cancer. Fortunately, most skin cancer can be prevented by using good sun protection when the UV is above 3.</p>
    <br></br>
    <Link to="/protection"><a href="#" class="btn btn-primary " style={{marginLeft:"36%",marginTop:"11%"}}>Discover</a></Link>
</div>
 
</div>
</div>
<br></br>
<br></br>
<Footer/>

        </>
    )
}

export default (Main);
