import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../store/store.css";
import { useWepContext } from '../../context/WepContext'
import Form from 'react-bootstrap/Form';
import { useEditContext } from "./EditStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateItem = () => {

  const { NameItem, urlitem, priceitem, Add, Category,CompanyItem,Barcode,Color,ProductionYear,Details,Edit,itemForUpdate,InformationsData ,EditInformations} = useWepContext();
  const listOfItems = ["Phones", "Ipads", "Computers", "Headphones", "TV screens"]
  const info=Array.isArray(InformationsData)?InformationsData.find(x=>x.barcode==itemForUpdate.item_Barcode):[]
  useEffect(()=>{
    Barcode( itemForUpdate?.item_Barcode)

  })
  return (
    <div className="Addinformation">
        

      <div className="Addinformation-container">
        <h2 style={{color:"blue"}} >{itemForUpdate?.name_Item} </h2>
        <form onSubmit={(e)=>( e.preventDefault(),Edit(),EditInformations())}>
            <div className="information"> 
          <h5>Name Iteam</h5>
          <input
          required
            type="text"
            placeholder={itemForUpdate?.name_Item}
            onChange={(e)=>(NameItem(e.target.value))}
            maxLength={30}
          />
          <h5>Img-Url</h5>
          <input
          required
          placeholder={itemForUpdate?.img_Url}
            type="url"
            onChange={(e) => urlitem(e.target.value)}
          />
          <h5>price</h5>
          <input
          required
          placeholder={itemForUpdate?.price_Item}
          type="number"
          step="0.01"
            onChange={(e) =>priceitem(e.target.value)}
          />
          <h5>Details</h5>
          <textarea
            placeholder={info?.details}
            type="text"
            onChange={(e) => Details(e.target.value)}
            
          />
          </div>
          <div className="information">
          <h5>Company</h5>
           <input
            type="text"
            placeholder={info?.company}
            onChange={(e) => CompanyItem(e.target.value)}
            maxLength={19}
          />
          <h5>Barcode</h5>
          <input
          required
            type="text"
            value={itemForUpdate?.item_Barcode}
            onChange ={()=>(Barcode( itemForUpdate?.item_Barcode))}
            minLength={3}
            maxLength={15}
          />
          <h5>Color</h5>
          <input
            type="text"
            placeholder={info?.color}
            onChange={(e) => Color(e.target.value)}
            maxLength={10}
          />
          <h5>Production year</h5>
          <input
            type="date"
            placeholder={info?.production_year}
            onChange={(e) => ProductionYear(e.target.value)}
            maxLength={10}
          />
          </div>
         
          <Form.Select aria-label="Default select example" onChange={(e) => Category(e.target.value)}>
            <option>Open this select menu</option>
            {listOfItems.map((x) => (<option value={x}>{x}</option>))}
          </Form.Select>
          <button className="AddItem-signInBtn" type="submit"  >
            Update Item
          </button>
        
        </form>
      </div>
    </div>

  )
};

export default  UpdateItem;


