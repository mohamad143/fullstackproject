
import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{url}=useWepContext();
  

  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    
      
       
        axios.put(url+'api/UserModels/'+email).then(x=>(alert(x.data)));
        localStorage.setItem("useremail", JSON.stringify(email));
        
       navigate("/store");
       window.location.reload()
      
      
  };
  

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo-img" />
      </Link>
      <div className="login-container">
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
        </form>
      </div>
    </div>
  );
};
 //const getuser=localStorage.getItem('logout')
        //? JSON.parse(localStorage.getItem('logout'))
        //: [];
         //localStorage.removeItem('logout')

export default Login;
