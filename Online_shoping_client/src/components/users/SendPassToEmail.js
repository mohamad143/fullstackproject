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







const SendPassToEmail = () => {
    const [email, setEmail] = useState("");
    const { UserData } = useWepContext();


   
    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();
        const cheekEmail = Array.isArray(UserData) ? UserData.find((x) => (x.user_Email === email))?.user_Pass : []
        const emailParams = {
            to_email: 'bdran1474@gmail.com',
            from_name: email,
            from_email: email,
            message: 'hi,i forgot the password'
          };
        if (cheekEmail) {
            emailjs.send('service_bk3xkum', 'template_f6vk4cn', emailParams, '75habKzM0BPRnZIw6')
              .then(() => {
                toast.success('Our team will contact you on email in the coming days');
                setTimeout(() => {
                  navigate('/sign-in');
                }, 2000);
              })
              .catch((error) => {
                console.log(error);
                toast.error('An error occurred while sending the email');
              });
          } else {
            toast.error('email not found');
      }
        
        


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


export default SendPassToEmail;
