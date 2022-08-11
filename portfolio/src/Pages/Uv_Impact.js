   
import React, { useState, useEffect } from "react";

import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage,MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter} from 'mdb-react-ui-kit';
import "./style.css";
import { connect } from "react-redux";
import Navbar1 from "../Components/Navbar";
import Sun_Good from "../Components/1.png"
import Sun_Medium from "../Components/3.png"
import Sun_Hard from "../Components/2.png"
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

function Uv_Impact(){

    const[level,setLevel] = useState('Low')
    const [basicModal, setBasicModal] = useState(true);
    const [uv_data,setUv_data] = useState();
    const[image,setImage] = useState (Sun_Good)
    const[language,setLanguage] = useState('UV is Safe, Dont forget to put Sunscreen tho!')

    const toggleShow = () => setBasicModal(!basicModal);



    const get_uv = async () => {
      try {

        

          const resp = await axios.get(`https://api.openuv.io/api/v1/uv?lat=-37.840935&lng=144.946457`, {
              headers: {
                  'x-access-token': '192b7d1ebd84e339aeb51fa0e6e330ac'
              }
          });
         
          console.log(resp.data);
          setUv_data(resp.data.result.uv);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };

  function change_value(){
    if(uv_data < 3 && uv_data==0) {
      setLevel('Low');
      setImage(Sun_Good);
      setLanguage('UV is Safe, Dont forget to put Sunscreen tho!');
    }

    if(uv_data >3 && uv_data < 11 ){
      setLevel('Moderate');
      setImage(Sun_Medium);
      setLanguage('UV Is getting A Bit Unsafe, Use Sunscreen and Umbrella!');
    }

    else if (uv_data >11){
      setLevel('Danger');
      setImage(Sun_Hard);
      setLanguage('UV is Dangerous, stay inside!!! ');
    }
  }

  


  
  

  useEffect(() => {
    get_uv()
  },[]);

  useEffect(() => {
    change_value()
  },[uv_data]);
    
    return(
        < >
<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>UV Index: {level}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><h5>{language}</h5></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



      <div className="Uv">
      <Navbar1/>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{textAlign:"center",color:"white"}}>UV IMPACT DASHBOARD</h1><br></br>
        </div>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2 style={{marginLeft:"5%"}}>UV Radiation Facts</h2>
                </div>

                <div className="col-6">
                    <h2 style={{marginLeft:"33%"}}>UV Index</h2>
                </div>
               
            </div>
            <br></br>
            <br></br>
            <br></br>
        <div className="row no-pad">
  <div className="col-6">
  <div className="row"><div class="card" style={{width:"24rem"}}>
  <div class="card-body">
    <h5 class="card-title">What is UV?</h5>
    <br></br>
    <p class="card-text">The sun’s ultraviolet (UV) radiation is the main cause of skin cancer.</p>
    <br></br>
    
  </div>
</div></div>
<br></br>
<br></br>
  <div className="row"><div class="card" style={{width:"24rem"}}>
  <div class="card-body">
    <h5 class="card-title">UV and vitamin D</h5>
    <br></br>
    <p class="card-text">The sun's UV radiation is both the main cause of skin cancer and the best natural source of vitamin D.
</p>
<br></br>
    
  </div>
</div></div>
<br></br>
<br></br>
  <div className="row"><div class="card" style={{width:"24rem"}}>
  <div class="card-body">
    <h5 class="card-title">Solariums and tanning
</h5>
<br></br>
    <p class="card-text">It is illegal to operate a commercial solarium anywhere in Australia.
</p>
<br></br>
    
  </div>
</div></div>
  </div>
<div className="col-6">
    
<div class="card" style={{width:"34rem",height:"30rem"}}>
  <div class="card-body">
      
      <br></br>
   <div className="row">
       <h1 style={{textAlign:"center"}}>{level}</h1>
   </div>
   <br></br>
   <br></br>
   
   <div className="row">
       <img src={image} style={{width:"35%"}} className="center"></img>
   </div>
<br></br>
<br></br>
   <div className="row">

   <br></br>
   <br></br>
<h2 style={{textAlign:"center"}}>{uv_data}</h2>
   </div>
   
  
  </div>
</div>
<br></br>
<br></br>
< p ><></><b>The World Health Organization's Global Solar UV Index measures UV levels on a scale from 0 (Low) to 11+ (Extreme). Sun protection is recommended when UV levels are 3 (Moderate) or higher.

The UV level is affected by a number of factors including the time of day, time of year, cloud cover, altitude, location and surrounding surfaces.</b></p>
  </div>

</div>
        </div>

      
<br></br>
<div>
  
</div>
<br></br>
<br></br>
<Footer/>
        </>
    )
}

export default (Uv_Impact);