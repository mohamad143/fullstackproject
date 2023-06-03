import React ,{ createContext, useContext, useEffect, useState }from "react";
import { Col, Row, ToastContainer } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import EditeAndDeleteItem from "./EditeAndDeleteItem"
import UpdateItem from "./UpdateItem";
import Loading from "../loading/loading";
import 'react-toastify/dist/ReactToastify.css';





const EditContext = createContext();

const EditStore = () => {
  const { StoreitemData,state } = useWepContext()
  


  return (
    <>
      <h1>Store</h1>{state.loading?<div style={{alignItems:"center"}}><Loading /></div>:state.error?<h1>{state.error}</h1>:
      <Row md={2} xs={1} lg={3} className="g-3">
        {Array.isArray(StoreitemData)?StoreitemData.map((item) => (
          <Col key={item.id}>
             <EditContext.Provider  value={{item}}>
             <ToastContainer position="top-center" /> 
            <EditeAndDeleteItem />
             </EditContext.Provider>
          </Col>
        )):[]}
      </Row>}
    </>
  );
};

export default  EditStore;
export const useEditContext = () => {
  return useContext(EditContext);
};
