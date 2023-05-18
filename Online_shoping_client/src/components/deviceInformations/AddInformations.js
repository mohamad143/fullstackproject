import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../store/store.css";
import { useWepContext } from '../../context/WepContext'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddInformations = () => {

  const { NameItem, urlitem, priceitem, Add, Category,CompanyItem,Barcode,Color,ProductionYear,Details,AddInformations } = useWepContext();
  const listOfItems = ["Phones", "Ipads", "Computers", "Headphones", "TV screens"]
  return (
    <div className="Addinformation">

      <div className="Addinformation-container">
        <h1>Add more Informations</h1>
        <form onSubmit={(e)=>(e.preventDefault(),Add(),AddInformations(),e.target.reset())}>
            <div className="information"> 
          <h5>Name Iteam</h5>
          <input
          required
            type="text"
            onChange={(e) => NameItem(e.target.value)}
            maxLength={30}
          />
          <h5>Img-Url</h5>
          <input
          required
            type="url"
            onChange={(e) => urlitem(e.target.value)}
          />
          <h5>price</h5>
          <input
          required
            type="number"
            step="0.01"
            onChange={(e) => priceitem(e.target.value)}
          />
          <h5>Details</h5>
          <input
            type="text"
            onChange={(e) => Details(e.target.value)}
            
          />
          </div>
          <div className="information">
          <h5>Company</h5>
           <input
            type="text"
            onChange={(e) => CompanyItem(e.target.value)}
            maxLength={19}
          />
          <h5>Barcode</h5>
          <input
          required
            type="text"
            onChange={(e) => Barcode(e.target.value)}
            minLength={3}
            maxLength={15}
          />
          <h5>Color</h5>
          <input
            type="text"
            onChange={(e) => Color(e.target.value)}
            maxLength={10}
          />
          <h5>Production year</h5>
          <input
            type="date"
            onChange={(e) => ProductionYear(e.target.value)}
            maxLength={10}
          />
          </div>
         
          <Form.Select aria-label="Default select example" onChange={(e) => Category(e.target.value)}>
            <option>Open this select menu</option>
            {listOfItems.map((x) => (<option value={x}>{x}</option>))}
          </Form.Select>
          <button className="AddItem-signInBtn" type="submit" >
            AddItem
          </button>
         
        </form>
      </div>
    </div>

  )
};

export default AddInformations;
