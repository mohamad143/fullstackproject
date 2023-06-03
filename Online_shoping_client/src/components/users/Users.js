import React, { useState} from "react";
import { Button,Table, ToastContainer } from "react-bootstrap";
import { Link  } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import axios from "axios";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

const Users=()=>{
  
    const { UserData,DeleteUser,getUserdata } = useWepContext();
    useEffect(()=>{
      getUserdata()

    },[UserData])
    



return (
  <div className="table-responsive">
  <Table striped bordered hover variant="dark" >
     <ToastContainer position="top-center" /> 
    <thead>
      <tr>
        <th>#</th>
        <th>User ID</th>
        <th>User Email</th>
        <th>User Rank</th>
        <th>User Status</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
    { 
    Array.isArray(UserData)?UserData?.map((x,key)=>
     <tr>
    <td>{key+1}</td>
    <td>{x.id}</td>
    <td>{x.email}</td>
    <td>{x.rank}</td>
    <td>{x.status}</td>
    <td><Button
      variant="danger"
      size="ms"
      onClick={() => DeleteUser(x.email)}
    >
      &times;
    </Button></td>
    </tr>):[]}
    </tbody>
  </Table>
  </div>
  );




}
export default Users;