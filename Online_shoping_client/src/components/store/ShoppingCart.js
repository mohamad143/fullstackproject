import React, { useEffect, useState } from "react";
import { Offcanvas, Stack,Button } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";


const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems,StoreitemData,BuyItems} = useWepContext();
 
  


  
  return (
    <Offcanvas show={isOpen} onHide={closeCart}  placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {Array.isArray(cartItems)?cartItems.map((item) => (
            
            <CartItem key={item.id} {...item} />
          )):console.error()}
          
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              Array.isArray(cartItems)?cartItems.reduce((total, cartItem) => {
                const item =Array.isArray(StoreitemData)?StoreitemData.find((i) => i.id === cartItem.id):[];
                return total + (item?.price_Item || 0) * cartItem.quantity;
              }, 0)
            :console.error())}
          </div>
          <Button className="w-100" onClick={() =>(BuyItems())}>
              Buy Items
            </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
