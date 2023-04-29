import React, { useState, useEffect } from "react";
import './About.css';
import { Margin } from "@mui/icons-material";


const About = () => {
  useEffect(() => {
    setVisible(true);
  })
  const [visible, setVisible] = useState(false);
  return (
    
    <div style={{ backgroundColor: "white" }} > 
      <div className="about-section">
      <h1>About Us</h1>
      <p>Welcome to ELC Market, your one-stop online shop for all your electronic needs. Our mission is to provide the best quality products at affordable prices, while also offering exceptional customer service.</p>
      <p>At ELC Market, we believe that our customers are our top priority. That's why we strive to make your shopping experience as smooth and enjoyable as possible. We offer a wide range of electronic products, from smartphones and laptops to home appliances and accessories.</p>
      <p>Whether you're looking for the latest tech gadgets or simply want to upgrade your existing devices, ELC Market has got you covered. Our team of experts is always ready to assist you with any questions or concerns you may have. </p>
      <p>Thank you for choosing ELC Market as your preferred online shopping destination. We look forward to serving you!</p>
    
      </div>

      <h2 style={{ textAlign: "center" }}>Our team</h2>
      <div style={{ backgroundColor: "white" }}>
        <div className="column">
          <div className="card">
            <img src={"https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Mohamad Bdran</h2>
              <p className="title">Website manager</p>
              <p>bdran1474@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
   
  );
};

export default About;
