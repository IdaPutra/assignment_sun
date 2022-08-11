
   
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
import { Link, useParams } from 'react-router-dom';

function Articles(){
 
    const [article_data,setArticle_data] = useState() 



    const { id } = useParams();
    const get_article = async () => {
        try {
  
          
  
            const resp = await axios.get(`https://dry-garden-75327.herokuapp.com/api/articles/${id}?populate=*`);
           
            console.log(resp.data);
            setArticle_data(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };


    useEffect(() => {
        get_article()
      },[]);
if(article_data){

    console.log(article_data.data.attributes.Body,"yo")
    console.log(article_data.data.attributes.article_image.data.attributes.url)
    return(
        < >


      <div className="Articles">
      <Navbar1/>
        <br></br>
        <br></br>
        <h1 style={{textAlign:"center",color:"white"}}>Articles</h1>
        <br></br>
        </div>
        <div className="container">
        <div className="row">
    <div className="col-12">
    <br></br>
    <br></br>
    <br></br>
    <div className="container"  >
    <h1 >{article_data.data.attributes.Title}</h1><br></br>

    <br></br>
    <img src={"https://dry-garden-75327.herokuapp.com"+article_data.data.attributes.article_image.data.attributes.url}></img>
    <br></br>
    <br></br>
    <p style={{whiteSpace:"pre-line "}}>{article_data.data.attributes.Body}</p>
        <br></br>
        <br></br>
    
<br></br>
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

else {
    return(
        <>
        </>
    )
}
  
}

export default (Articles);
