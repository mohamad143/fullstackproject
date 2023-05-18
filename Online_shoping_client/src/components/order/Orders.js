import React from "react";
import { Button,Table, ToastContainer } from "react-bootstrap";
import {useWepContext} from '../../context/WepContext'
import { useEffect } from "react";
import Loading from "../loading/loading";
import 'react-toastify/dist/ReactToastify.css';

const Orders=()=>{
  
    const { OrdersData,DeleteOrder,getOrders,state } = useWepContext();
    useEffect(()=>{
      getOrders()

    },[OrdersData])

    
    
    



return (<>{state.loading?<div style={{alignItems:"center"}}><Loading /></div>:state.error?<h1>{state.error}</h1>:
    <Table striped bordered hover variant="dark">
    
      <thead>
        <tr>
          <th>#</th>
          <th>User ID</th>
          <th>Email</th>
          <th>Order Items</th>
          <th>Order Price</th>
          <th>Location</th>
          <th>Date</th>
          <th>The order has arrived</th>
          <th>Delete Order</th>
        </tr>
      </thead>
      <tbody>
      { 
      Array.isArray(OrdersData)?OrdersData?.map((x,key)=>
       <tr>
      <td>{key+1}</td>
      <td>{x.user_ID}</td>
      <td>{x.order_Email}</td>
      <td>{x.order_Items}</td>
      <td>{x.order_Price}</td>
      <td>{x.order_Location}</td>
      <td>{x.order_Date}</td>
      <td>{x.order_Status}</td>
      <td><Button
        variant="danger"
        size="ms"
        onClick={() => DeleteOrder(x.id)}
      >
        &times;
      </Button></td>
      </tr>):[]}
      </tbody>
    </Table>
    
 } </>
  );




}
export default Orders;