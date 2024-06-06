import React from "react";
import "./Castom.css";

function Block({ label, width }) {
  return (
    <div className="LayoutBlock" >
      <div className="Layout-label">{label}</div>
    </div>
  );
}

export default Block;
