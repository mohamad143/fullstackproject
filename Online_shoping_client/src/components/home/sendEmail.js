import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import { useWepContext } from '../../context/WepContext'
import { ToastContainer } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import emailjs from 'emailjs-com';







const SendEmail = () => {
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [text, settext] = useState("");
    const { UserData } = useWepContext();


   
    const navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();
        const emailParams = {
            to_email: 'bdran1474@gmail.com',
            from_name: name +" email: "+email,
            message: text
          };
        if (emailParams) {
            emailjs.send('service_bk3xkum', 'template_f6vk4cn', emailParams, '75habKzM0BPRnZIw6')
              .then(() => {
                toast.success('Our team will contact you on email in the coming days')
                e.target.reset()
                
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
      <div style={{ backgroundColor: "black", display: "flex", flexDirection: "column" }}>
      <form onSubmit={sendEmail} target="_blank">
        <h2 style={{ textAlign: "center",color:"white" }}>Contact Us</h2>
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            onChange={(e) => setname(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            required
            onChange={(e) => settext(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              resize: 'vertical',
            }}
          />
        </div>
        <div className="mb-3 pt-0" style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
    
    );
};


export default SendEmail;
