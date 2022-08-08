
   
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
function About(){
 
    return(
        < >

    
      <div className="About">
        <br></br>
        <br></br>
        <br></br>
<div className="row">
    <div className="col-12">
    <br></br>
    <br></br>
    <br></br>
    <div className="container"  >
    <h1 style={{textAlign:"center"}}>Welcome to TP14 Sun Protection Centre</h1><br></br>
    <br></br>
    <br></br>
        <p style={{textAlign:"center", color:"black"}}>According to the statistics from SunSmart, 2/3 of Australians would be "diagnosed with skin cancer by the age of 70," and "2000 Australians die from skin cancer every year" (SunSmart, 2022). The number is shocking. We can see how severe the sun issue has risen in this country, and it is critical to help people from one of the world's highest skin cancer rate countries and provide them with more sun protection knowledge. The number of international students has increased significantly. They are a group of people who might be vulnerable and unfamiliar with the local environment and potentially be getting sunburn issues. Thus, this project can help Australians and new visitors from other countries to learn more about sun protection knowledge.</p>
        <br></br>
        
    </div>
       
    </div>

</div>
      </div>
<br></br>
<div>
  
</div>
        </>
    )
}

export default (About);
