import React from "react";
import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
    <div>
      
      <ReactLoading
        type="spinningBubbles"
        color="#0000FF"
        height={300}
        width={300}
        
      />
    </div>
  );
}