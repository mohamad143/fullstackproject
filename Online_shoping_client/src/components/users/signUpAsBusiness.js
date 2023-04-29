import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import logo from '../../components/R.jpg'
import {useWepContext} from '../../context/WepContext'


const SignUpAsBusiness = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const{passwodruser,emailuser,rankuser,Adddatauser}=useWepContext();

  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    
          Adddatauser();
          localStorage.setItem("useremail", JSON.stringify(email));
          
    };
  

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1> Sign Up As Business</h1>
        <form onSubmit={register}>
          <h5>Email</h5>
          <input
          required
            type="email"
            value={email}
            onChange={(e) => (emailuser(e.target.value),setEmail(e.target.value))}
          />
          <h5>Password</h5>
          <input
          required
            type="password"
            value={password}
            onChange={(e) => (passwodruser(e.target.value),setPassword(e.target.value),rankuser("business"))}
          />
          <button className="login-signInBtn" type="submit" >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
// const Business={
           // ...auth,
           // rank:isrank
         // }
          //localStorage.setItem('user', JSON.stringify(Business));
          

export default SignUpAsBusiness;
