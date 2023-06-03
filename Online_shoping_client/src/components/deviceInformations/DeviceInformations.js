import React, { useEffect, useState } from "react";
import "../store/store.css";
import { useWepContext } from '../../context/WepContext'
import StoreItem from "../store/StoreItem";
import { Col, Row } from "react-bootstrap";



const DeviceInformations = () => {

  const { information, StoreitemData } = useWepContext()


  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
    {Array.isArray(StoreitemData) && StoreitemData.map((item) => (
      item.item_Barcode === information.barcode && <StoreItem key={item.id} {...item} />
    ))}
    
    {information && (
      <div className="Moreinformation-container">
        <h1>More Information</h1>
        <form>
          <div>
            <h5>Name Item: {information.name}</h5>
            <h5>Price: {information.price}$</h5>
            <h5>Company: {information.company}</h5>
            <h5>Barcode: {information.barcode}</h5>
            <h5>Color: {information.color}</h5>
            <h5>Production year: {information.production_year}</h5>
          </div>
        </form>
      </div>
    )}
  
    {information && (
      <div className="Details">
        <h5>Details:</h5>
        <div style={{ overflow: "auto" }}>
          <h6 style={{ whiteSpace: "pre-wrap" }}>{information.details}</h6>
        </div>
      </div>
    )}
  </div>


  )



};

export default DeviceInformations;
