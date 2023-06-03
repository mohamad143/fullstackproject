import React, { useEffect } from "react";
import { Button,Table } from "react-bootstrap";
import {useWepContext} from '../../context/WepContext'
import Loading from "../loading/loading";

const OrderForUser=()=>{
  
    const { OrdersData,IsArrived,user,getOrders,state } = useWepContext();
    useEffect(()=>{
      getOrders()

    },[OrdersData])
    



return (<>{state.loading?<div style={{alignItems:"center"}}><Loading /></div>:state.error?<h1>{state.error}</h1>:
<div className="table-responsive">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Order Items</th>
          <th>Order Price</th>
          <th>Location</th>
          <th>Date</th>
          <th>The order has arrived</th>
        </tr>
      </thead>
      <tbody>
      { 
      Array.isArray(OrdersData)?OrdersData?.map((x,key)=>(x.order_Status=="false")&&(user.email==x.order_Email) &&
       (<tr>
      <td>{key+1}</td>
      <td>{x.order_Email}</td>
      <td>{x.order_Items}</td>
      <td>{x.order_Price}</td>
      <td>{x.order_Location}</td>
      <td>{x.order_Date}</td>
      <td><Button
        variant="success"
        size="ms"
        onClick={() => IsArrived(x.id)}
      >
       yes!
      </Button></td>
      
      </tr>)||(user.email==x.order_Email) &&
      (<tr>
        <td>{key+1}</td>
        <td>{x.order_Email}</td>
        <td>{x.order_Items}</td>
        <td>{x.order_Price}</td>
        <td>{x.order_Location}</td>
        <td>{x.order_Date}</td>
        <td>The order has arrived</td>
        
        </tr>)
  
        
      
      ):[]}
      </tbody>
    </Table>
    </div>}
    </>
  );
  




}
export default OrderForUser;