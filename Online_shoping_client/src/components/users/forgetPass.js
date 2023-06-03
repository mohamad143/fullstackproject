import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import { useWepContext } from '../../context/WepContext'
import { ToastContainer } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';
import axios from "axios";







const ForgetPass = () => {
    const [email, setEmail] = useState("");
    const { url } = useWepContext();


   
    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();
        axios.post(url+'api/UserModels/send-email?email='+email).then(x=>(console.log(x.data),toast(x.data)))
        


    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login-logo" src={logo} alt="logo-img" />
            </Link>
            <div className="login-container">
                <form onSubmit={sendEmail}>
                    <h5>Email</h5>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="login-signInBtn" type="submit" >
                        Send password To Email
                    </button>
                    <ToastContainer position="top-center" />
                </form>
            </div>
        </div>
    );
};


export default ForgetPass;
