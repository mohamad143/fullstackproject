import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import { useWepContext } from "../../context/WepContext";
import "./store.css"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loading from "../loading/loading";
const Store = () => {
  const { StoreitemData ,getStoreIteams,informationforitem,state} = useWepContext()
  const [FilterIteams,setIteam]=useState(StoreitemData)
  useEffect(() => {
    informationforitem("")
    getStoreIteams()
    
  }, [StoreitemData]);
  const searchItem=()=>{
    let input=document.getElementById('searchbar').value
    input=input.toLowerCase();
    console.log(input)
      setIteam( StoreitemData.filter(x=>x.name_Item.toLowerCase().match(input)))

  }
  const navigate = useNavigate();
 
  const listOfItems=["all","Phones","Ipads","Computers","Headphones","TV screens"]
  
  const filterSelection=(c)=>{
  if (c === "all")  {
     setIteam(StoreitemData);  
   }
   else{
    listOfItems.map(x=>x===c?(setIteam(StoreitemData.filter(y=>y.category===x))):[])
   }
   
  }
  return (
    <>
      <h1>Store</h1>
      {state.loading?<div style={{alignItems:"center"}}><Loading /></div>:state.error?<h1>{state.error}</h1>:<>
      <input id="searchbar" onKeyUp={()=>searchItem()} type="text" name="search" placeholder="Search items...." ></input>
      <div id="myBtnContainer">
        {
          listOfItems.map(x=>(<button className="btn active"style={{backgroundColor:"blue",color:"white"}} onClick={()=>filterSelection(x)}>{x=="all"?"Show all":x}</button>))
        }
      </div>
      
        <Row md={2} xs={1} lg={3} className="g-4">
            {Array.isArray(FilterIteams)?FilterIteams.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} className="StoreItem" />
          </Col>
       
        )):Array.isArray(StoreitemData)?StoreitemData.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} className="StoreItem" />
          </Col>
          
        )):[]} 
       </Row></> 
    }
        
      
      

     

      
    </>
  );
};

export default  Store;
