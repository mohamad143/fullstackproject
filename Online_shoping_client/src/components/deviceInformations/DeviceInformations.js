import React, { useEffect, useState } from "react";
import "../store/store.css";
import { useWepContext } from '../../context/WepContext'
import StoreItem from "../store/StoreItem";
import { Col, Row } from "react-bootstrap";



const DeviceInformations = () => {

  const { information, StoreitemData } = useWepContext()
 

  return (

    <div style={{ display: "flex", flexDirection: "row" ,width:"100%",height:"600PX"}} >
       {Array.isArray(StoreitemData) ? StoreitemData.map((item) => 
      (item.item_Barcode == information.barcode ? <StoreItem {...item} />: [])) : []}


      <div style={{ display: information ? "" : "none" }} className="Moreinformation-container">
        
        <h1>More Informations</h1>
        <form>
          <div >
            <h5>Name Item: {information.name}</h5>
            <h5>price: {information.price}$</h5>
            <h5>Company: {information.company}</h5>
            <h5>Barcode: {information.barcode}</h5>
            <h5>Color: {information.color}</h5>
            <h5>Production year: {information.production_year}</h5>
          </div>
        </form>
      </div>
      <div style={{ display: information ? "" : "none" }} className="Details" >
           
            <h5>Details:</h5>
            <h6>{information.details}</h6>
          
            
          </div>
    </div>
    

  )



};

export default DeviceInformations;
