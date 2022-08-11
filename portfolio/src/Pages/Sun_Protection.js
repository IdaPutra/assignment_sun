
   
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

  import skin_disease_image from '../Components/skin_disease.jpg'
import skin_protection_image from '../Components/sun_protection.jpg'
import uv_image from '../Components/UV_Impact.jpg'
import Articles from "./Articles"
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
function Sun_Protection(){

        const[all_article,setAll_article]=useState()
        

        const get__all_article = async () => {
                try {
          
                        
          
                    const resp = await axios.get(`https://dry-garden-75327.herokuapp.com/api/articles?populate=*`);
                   setAll_article(resp.data.data)
                    console.log(resp.data.data);
                //     setArticle_data(resp.data);
                } catch (err) {
                    // Handle Error Here
                    console.error(err);
                }
            };

            useEffect(() => {
                get__all_article()
              },[]);
 


           
            if(all_article){
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
           
                   
             
                        {all_article.map((article)=> {
                                return(
                                        <div className="col-4">
                                        <div class="card">
                                        <img src={"https://dry-garden-75327.herokuapp.com"+article.attributes.article_image.data.attributes.url} class="card-img-top" alt="Fissure in Sandstone" style={{height:"268px"}}/>
                                        
                                        </div>
                                        <br></br>
                                        <h5 class="card-title"  style={{textAlign:"center"}}>{article.attributes.Title}</h5>
                                        
                                         <br></br>
                                         <Link to={"articles/" + article.id }><a href="#" class="btn btn-primary" style={{marginLeft:"38%"}}>Discover</a></Link>
                                        </div>
                                )
                         
                 })}
             
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

            else{
                return(
                        <>
                        </>
                )
            }
 
}

export default (Sun_Protection);
