import React, { useEffect, useState } from "react";
import "./Home.css"
import { useNavigate, Link } from "react-router-dom";
import { Col, Row, Carousel } from "react-bootstrap";
import StoreItem from "../store/StoreItem";
import { useWepContext } from "../../context/WepContext";
import "../store/store.css"
import logo from "../R.jpg"
import Loading from "../loading/loading";
import {
	MDBFooter,
	MDBContainer,
	
  } from 'mdb-react-ui-kit';
import SendEmail from "./sendEmail";



const Home = () => {

	const navigate = useNavigate();
	const { StoreitemData,state } = useWepContext()
	
	const [FilterIteams] = useState(StoreitemData)
	const random = () => (Math.floor(Math.random() * items.length))
	const items = Array.isArray(FilterIteams) ? FilterIteams.map((item) => (item)) : Array.isArray(StoreitemData) ? StoreitemData.map((item) => (item)) : []


	return (
		<div>{state.loading?<div style={{alignItems:"center" }}><Loading /></div>:state.error?<h1>{state.error}</h1>:
		<div >

			<div className="intro" >
				<Link to="/">
					<img className="login-logo" src={logo} alt="logo-img" />
				</Link>
				<h1>Electronics Website</h1>
				<h4>On this website you can find all electronic devices</h4>
			</div>
			
			<div >
				<h1>New items in our store</h1>
				<Row md={2} xs={1} lg={3} className="g-3">
					{Array.isArray(items) ? items.slice(-3).map((item) => (
						<Col key={item.id}>
							<StoreItem {...item} className="StoreItem" />

						</Col>

					)) : []}

				</Row>

			</div>
			<div style={{backgroundColor:"gray",marginTop:"100px",marginBottom:"20PX"}} >
				<Carousel interval={2000} >
				{items.map((item, key) => (
					<Carousel.Item >
					<img
						style={{width:"500px" ,height:"450px" ,marginLeft:"400px",marginTop:"100px",marginBottom:"200PX"}}
						src={item.img_Url}
						
					/>
					<Carousel.Caption>
						<h3>{item.name_Item}</h3>
						<p>{item.price_Item}$</p>
					</Carousel.Caption>
				</Carousel.Item>

					
				))}
				</Carousel>
			</div>
			<div>

			</div>
			<SendEmail></SendEmail>
			<MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275',marginLeft:"0px",marginRight:"0px" }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
			<Link to="/regular-registration" >
            <button type='button'  rounded>
              Sign up!
            </button>
          </Link>
            
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <h1 className='text-white' >
          online shoping
        </h1>
      </div>
    </MDBFooter>

		</div>
}</div>)


};

export default React.memo(Home);
