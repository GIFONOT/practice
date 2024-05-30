import React from "react";
import "./Castom.css";

function Block({label, width}) {
  const selectStyle = {
    width: width || '266.8px'
  };
  return (
    
    <div className="Block" style={selectStyle}>
      <div className="label3">{label}</div>
    </div>
  );
}

export default Block;