
   
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

function Skin_disease(){
 
    return(
        < >

 
      <div className="disease">
      <Navbar1/>
        <br></br>
        <br></br>
        <h1 style={{textAlign:"center",color:"white"}}>Skin Disease

</h1><br></br>
        <br></br>
        </div>
        <div className="container">
<div className="row">
    <div className="col-12">
    <br></br>
    <br></br>
    <br></br>
    <div className="container"  >
    <h1 >What is UV?</h1><br></br>
    <br></br>
        <p style={{ color:"black",fontSize:"20px"}}>
        Ultraviolet (UV) radiation is a type of energy produced by the sun and some artificial sources, such as arc welders and solariums. <br></br><br></br>
        The sun’s UV is the main cause of skin cancer. Too much UV exposure also causes sunburn, tanning, premature ageing and eye damage.<br></br><br></br>
        You can see the sun’s light. You can feel the sun’s heat. But you can’t see or feel the sun’s UV radiation. UV can reach you directly from the sun. It can also be reflected off different surfaces and scattered by particles in the air.
        <br></br><br></br>
        Your senses cannot detect UV radiation, so you won’t notice it is all around you and you won’t notice any skin damage until it has been done.


        </p>
        <br></br>
        <br></br>
        <h1 >The UV Index</h1><br></br>
    <br></br>
        <p style={{ color:"black",fontSize:"20px"}}>
        The World Health Organization's Global Solar UV Index measures UV levels on a scale from 0 (Low) to 11+ (Extreme). Sun protection is recommended when UV levels are 3 (Moderate) or higher.<br></br><br></br>
        The UV level is affected by a number of factors including the time of day, time of year, cloud cover, altitude, location and surrounding surfaces.<br></br><br></br>
        </p>
        <br></br>
        <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/VQJ6E3/66/65/30/6665301d6b1e4fd0a102f7cd0f9e476e/images/um_impact_second/u33.png?pageId=a3d42284-5c67-4f31-b927-662ba1518dcd"></img>
        <br></br>
        <br></br>
        <h1 >Why is the UV So High In Australia?</h1><br></br>

        <p style={{ color:"black",fontSize:"20px"}}>
        Australia experiences some of the highest levels of UV in the world. <br></br><br></br>
        Different factors affect our UV levels including:<br></br><br></br>
        location: UV levels are highest along the equator. Australia is near the equator so we experience high UV levels
        <br></br><br></br>
        time of year: our elliptical orbit around the sun and our axial tilt combine to ensure that we are closer to the sun in our summer than the northern hemisphere e.g. in summer the UK has UV Index 6–8, while Australia has UV Index 10–14

<br></br><br></br>
we have clear skies and less air pollution.


        </p>
        <br></br>
        <br></br>
        <h1 >How does UV add up?

</h1><br></br>

<p style={{ color:"black",fontSize:"20px"}}>
UV damage is accumulative. Your skin remembers and records all the UV exposure over the years which contributes to your long-term risk of skin cancer. The more UV you’re exposed to, the greater your risk. That’s why it's important for outdoor workers to protect their skin all year round. Even low UV levels can be harmful when exposed for long periods.


</p>
<br></br>
<br></br>
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

export default (Skin_disease);
