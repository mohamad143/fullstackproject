import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import {MenuForRegularAccountData,MenuForGuestData,MenuForBusinessAccountData,MenuForAdminAccountData}  from "../../data/MenuData";
import { Link } from "react-router-dom";
import logo from "../R.jpg"
import "./Navbar.css"
import axios from "axios";
import { useState } from "react";


const localUser = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: "";
const localUseremail = localStorage.getItem("useremail")
? JSON.parse(localStorage.getItem("useremail"))
: "";
const Navbar = () => {

const { openCart, cartQuantity,UserData,state } = useWepContext();
const [userrank,setuserRank]=useState("")
const user=()=>{
  setuserRank(Array.isArray(UserData)?(localUseremail)&&(UserData.find((x)=>( x.user_Email===localUseremail))?.user_Rank):"")
}
useEffect(()=>{
  
  localStorage.setItem("user",JSON.stringify(userrank?userrank:""))
})
useEffect(()=>{
  user()
},[UserData])

const Shopuser=userrank?true:false;
  
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
       <Link to="/"><NavbarBs.Brand  ><img className="navbar-logo" src={logo}  /></NavbarBs.Brand></Link>
        <Nav className="me-auto">
        { 
        userrank==="regular"?MenuForRegularAccountData.map(x=>{return <Nav.Link href={x.url}> {x.name} </Nav.Link>}):
        userrank==="business"?MenuForBusinessAccountData.map(x=>{return <Nav.Link href={x.url}> {x.name} </Nav.Link>}):
        userrank==="admin"?MenuForAdminAccountData.map(x=>{return <Nav.Link href={x.url}> {x.name} </Nav.Link>}):
          MenuForGuestData.map(x=>{return <Nav.Link href={x.url}> {x.name} </Nav.Link>})
          }
        </Nav>

        
        {Shopuser &&(<NavbarBs.Brand  ><div style={{color:"blue"}}>
        {Array.isArray(UserData)?UserData.find((x)=>(x.user_Email===localUseremail))?.user_Email:""}
         </div></NavbarBs.Brand>)}

        {cartQuantity > 0&&Shopuser && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
            
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default  Navbar;

