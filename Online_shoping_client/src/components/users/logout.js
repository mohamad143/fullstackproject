import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom"; 
import "./login.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useWepContext } from "../../context/WepContext";



const Logout = () => {
  const navigate = useNavigate();
  const { user } = useWepContext();
  const signout = (e) => {
    e.preventDefault();
   
        
        axios.put('https://localhost:44325/api/UserModels/logout?id='+user.id);
        localStorage.removeItem("shopping-cart");
        localStorage.setItem("jwt",JSON.stringify(""))
        localStorage.removeItem("jwt");
        navigate("/");
    
      window.location.reload()
      
  };
   
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>sign out</h1>
        <form>
          <h5>you are sure??</h5>
          <button className="login-signInBtn" type="submit" onClick={signout}>
            yes!
          </button>
          <button className="login-signInBtn" type="submit" onClick={()=>navigate("/store")}>
            opps..,no!
          </button>
        </form>
      </div>
    </div>
  );
};



export default Logout;
