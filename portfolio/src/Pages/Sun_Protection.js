
   
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
import Footer from "../Components/Footer";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
  } from 'mdbreact';
  import skin_disease_image from '../Components/skin_disease.jpg'
import skin_protection_image from '../Components/sun_protection.jpg'
import uv_image from '../Components/UV_Impact.jpg'
function Sun_Protection(){
 
    return(
        < >

 
      <div className="protection">
      <Navbar1/>
        <br></br>
        <br></br>
        <h1 style={{textAlign:"center",color:"white"}}>Sun Protection

</h1><br></br>
        <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
<div className="container">
<h1 >Tips For Sun Protection </h1>
<br></br>
        <br></br>
<div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/NXw9tqrW6iM" allowfullscreen></iframe>
          </div>
  <br></br>
  <br></br>
  <br></br>
        <br></br>
        <br></br>
 
        <h1 >More Tips</h1>
        <br></br>
        <br></br>
        <div>
        <div className="row ">
 
   
 <div className="col-4">
<div class="card">
<img src={skin_protection_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title"  style={{textAlign:"center"}}>UV Impact</h5>

 <br></br>
 <a href="#" class="btn btn-primary" style={{marginLeft:"38%"}}>Discover</a>
</div>
<div className="col-4">
<div class="card">
<img src={skin_disease_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title"  style={{textAlign:"center"}}>Skin Disease

</h5>

 <br></br>
 <a href="#" class="btn btn-primary" style={{marginLeft:"38%"}}>Discover</a>
</div>
<div className="col-4">
<div class="card">
<img src={uv_image} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>

</div>
<br></br>
<h5 class="card-title" style={{textAlign:"center"}} > Protection Guideline</h5>

 <br></br>
 <a href="#" class="btn btn-primary " style={{marginLeft:"38%"}}>Discover</a>
</div>

</div>
        </div>
 
</div>

<br></br>
<br></br>
<br></br>
<Footer/>
        </>
    )
}

export default (Sun_Protection);
