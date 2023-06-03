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
  const{deleteAcc}=useWepContext();
  

  const navigate = useNavigate();
  const cheek = (e) => {
    e.preventDefault();
    
    
    deleteAcc(email,password)

   
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