import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import FormatCurrency from "./FormatCurrency";
import DeviceInformations from "../deviceInformations/DeviceInformations";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StoreItem = (item) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    InformationsData,informationforitem
   
  } = useWepContext();
  const navigate = useNavigate();
  
  
  const quantity = getItemQuantity(item.id);
  const Informations=()=>{
    
    InformationsData.map(i=>i.barcode==item.item_Barcode?(informationforitem(i),navigate("/DeviceInformations")):[])
  
  }
  return (
    <Card className="h-100">
       
      <Card.Img
        variant="top"
        src={item.img_Url}
        style={{ height: "400px", objectFit: "cover" }}
      />
     
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.name_Item}</span>
          <span className="ms-2 text-muted">{FormatCurrency(item.price_Item)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <>
            <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>
              Add To Cart
            </Button>
            <Button variant="danger"
                size="sm" to="/DeviceInformations" onClick={()=>Informations?Informations():[]} >
                More information
              </Button>
            </>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
            
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
