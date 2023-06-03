
import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import axios from "axios";
import { ToastContainer } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{url}=useWepContext();
  

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    
      
       
        axios.post(url+'api/UserModels/login',{email,password}).then(x=>x.data=="Invalid Credentials"?toast.error(x.data):
        (toast.success("welcome"),localStorage.setItem("jwt", JSON.stringify(x.data)),setTimeout(()=>{window.location.reload()}, 2000)))
        .catch((error)=>toast.error(error),navigate("/store"));
        e.target.reset()
   
      
      
  };
  

  return (
    <div className="login" >
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo-img" />
      </Link>
      <div className="login-container" style={{backgroundColor:"white"}}>
        <h1>Sign in</h1>
        <form onSubmit={signIn}>
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
            Sign in
          </button>
          <Link to="/send-pass" >
          forgot password? 
          </Link>
          <ToastContainer position="top-center" /> 
        </form>
      </div>
    </div>
  );
};
 

export default Login;
