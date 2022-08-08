import React, { useState, useEffect } from "react";
import sun from './final.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../Pages/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Navbar1(){

  
    return(
   

        <>

<nav class="navbar navbar-expand-lg ">

  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={sun}
          height="100"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to="/"><a class="nav-link" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
         <Link to="/uv"><a class="nav-link" href="#">UV Impact</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/skin"><a class="nav-link" href="#">Skin Disease</a></Link>  
        </li>
        <li class="nav-item">
         <Link to="/protection"><a class="nav-link" href="#">Sun Protection</a></Link> 
        </li>
      </ul>
    
    </div>
 


    <div class="d-flex align-items-center">
   
     
    <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-white"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Search
        </button>
      </form>
  
 
   
    
    </div>

  </div>

</nav>


  <br />

        </>
    
    )
}

export default (Navbar1);