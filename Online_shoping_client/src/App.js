import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import About from "./components/about/About"
import WepProvider from "./context/WepContext";
import Login from "./components/users/Login";
import Logout from "./components/users/logout";
import SignUpAsBusiness from './components/users/signUpAsBusiness'
import SignUpAsRegular from './components/users/signUpAsRegular'
import SignUpAsAdmin from "./components/users/signUpAsAdmin";
import AddItem from './components/store/AddItem'
import EditStore from "./components/store/EditStore";
import Errorpage from "./components/errorpage/Errorpage"
import Users from "./components/users/Users"
import Orders from "./components/order/Orders";
import OrderForUser from "./components/order/OrderForUser";
import AddInformations from "./components/deviceInformations/AddInformations";
import DeviceInformations from "./components/deviceInformations/DeviceInformations";
import DeleteUser from "./components/users/DeleteUser";
import UpdateItem from "./components/store/UpdateItem";
import SendEmail from "./components/home/sendEmail";
import axios from "axios";
import ForgetPass from "./components/users/forgetPass";


const localjwt = localStorage.getItem("jwt")
? JSON.parse(localStorage.getItem("jwt"))
: "";

const App = () => {
  const [user,setuser]=useState("")
const  getuser=useCallback(() => {
  (localjwt)&&(
  axios.get("https://localhost:44325/" + 'api/UserModels/user?jwt='+localjwt).then((response) => {
    const User = response.data; setuser(User)
  }).catch((error)=>{
   console.log(error);;
  }
  ))
}, []);
useEffect(()=>{
  getuser()
},[])
 
  return (
    
    
    <WepProvider>
      
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/add-items"   element={user.rank==="admin"?<AddItem/>:user.rank==="business"?<AddItem/>:()=>(<Errorpage/>)} />
          <Route path="/Add-Informations"   element={user.rank==="admin"?<AddInformations/>:user.rank==="business"?<AddInformations/>:()=>(<Errorpage/>)} />
          <Route path="/DeviceInformations" element={<DeviceInformations/> }/>
          <Route path="/editstore-item"   element={user.rank==="admin"?<EditStore/>:user.rank==="business"?<EditStore/>:()=>(<Errorpage/>)} />
          <Route path="/updateItem" element={user.rank==="admin"?<UpdateItem/>:user.rank==="business"?<UpdateItem/>:()=>(<Errorpage/>)}/>
          <Route path="/about" element={<About></About>} />
          <Route path="/sign-in"   element={<Login/>}/>
          <Route path="/send-pass"   element={<ForgetPass/>}/>
          <Route path="/sign-Out"   element={<Logout/>}/>
          <Route path="/delete-account"   element={<DeleteUser/>}/>
          <Route path="/business-registration"   element={<SignUpAsBusiness/>} />
          <Route path="/regular-registration"   element={<SignUpAsRegular/>} />
          <Route path="/Admin-registration"   element={<SignUpAsAdmin/>} />
          <Route path="/Users" element={user.rank==="admin"?<Users/>:()=>(<Errorpage/>)} />
          <Route path="/Orders" element={user.rank==="admin"?<Orders/>:()=>(<Errorpage/>)} />
          <Route path="/OrderForUser" element={<OrderForUser/>} />
          <Route path="*"   element={<Errorpage/>} />
          
         
        </Routes>
      </Container>
        
    </WepProvider>
    
    
  );
};

export default  App;
