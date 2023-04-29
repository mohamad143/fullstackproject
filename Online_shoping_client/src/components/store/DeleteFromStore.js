import React from "react";
import { Col, Row } from "react-bootstrap";
import { useWepContext } from "../../context/WepContext";
import DeleteItem from "./DeleteItem"
import { useEffect } from "react";
const DeleteFromStore = () => {
  const { StoreitemData,getStoreIteams } = useWepContext()
  useEffect(()=>{
    getStoreIteams()
  }
  ,[StoreitemData])

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {Array.isArray(StoreitemData)?StoreitemData.map((item) => (
          <Col key={item.id}>
            <DeleteItem {...item} />
          </Col>
        )):[]}
      </Row>
    </>
  );
};

export default DeleteFromStore;
