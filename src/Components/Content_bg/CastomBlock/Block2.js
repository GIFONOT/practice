import React from "react";
import "./Castom.css";

function Block2({label, width}) {
  const selectStyle = {
    width: width || '266.8px'
  };
  return (
    
    <div className="Block2" style={selectStyle}>
      <div className="label3_2">{label}</div>
    </div>
  );
}

export default Block2;