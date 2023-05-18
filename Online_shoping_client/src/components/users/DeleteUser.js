import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import axios from "axios";

const DeleteUser=()=>{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{url,DeleteUser,UserData}=useWepContext();
  

  const navigate = useNavigate();
  const cheek = (e) => {
    e.preventDefault();
    
    const userId= Array.isArray(UserData)?UserData.find(x=>x.user_Email==email&&x.user_Pass==password)?.id:[]
    DeleteUser(userId)

    if(userId){
        localStorage.removeItem("shopping-cart");
        localStorage.setItem("user",JSON.stringify(""))
        localStorage.removeItem("useremail");
            
        navigate("/store");
        window.location.reload()
    }   
   
      
      
  };



return (
    <div className="login">
    <Link to="/">
      <img className="login-logo" src={logo} alt="logo-img" />
    </Link>
    <div className="login-container">
      <h1>Delete Account</h1>
      <form onSubmit={cheek}>
        <h5>Email</h5>
        <input
        required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
        required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-signInBtn" type="submit" >
        Delete!!
        </button>
      </form>
    </div>
  </div>
     
   
  );




}
export default DeleteUser;