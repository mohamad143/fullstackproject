
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./store.css";
import { useWepContext } from '../../context/WepContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddInformations from "../deviceInformations/AddInformations";


const AddItem = () => {

  const { NameItem, urlitem, priceitem, Add, Category, Barcode } = useWepContext();
  const listOfItems = ["Phones", "Ipads", "Computers", "Headphones", "TV screens"]
  return (
    <div className="AddItem">

      <div className="AddItem-container">
        <h1>Add Iteam</h1>
        <form onSubmit={(e)=>(e.preventDefault(),Add(),e.target.reset())}>
          <h5>Name Iteam</h5>
          <input
            required
            type="text"
            onChange={(e) => NameItem(e.target.value)}
            maxLength={19}

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
          <h5>Barcode</h5>
          <input
            required
            type="text"
            onChange={(e) => Barcode(e.target.value)}
            maxLength={15}
            minLength={3}
            
          />
          <select aria-label="Default select example" onChange={(e) => Category(e.target.value)}>
            <option >Open this select menu</option>
            {listOfItems.map(x => (<option value={x}>{x}</option>))}
          </select>
          <Link to="/Add-Informations" >
            <button className="AddItem-signInBtn" >
              Add more Informations
            </button>
          </Link>
          <button className="AddItem-signInBtn" type="submit" >
         
            Add Item
          </button>
          
         
        </form>
      </div>
    </div>

  )
};

export default AddItem;
