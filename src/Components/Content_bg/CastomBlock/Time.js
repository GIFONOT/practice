import React from "react";
import "./Castom.css";

function Time({label, width}) {
  const selectStyle = {
    width: width || '197.45px'
  };
  return (
    
    <div className="Time" style={selectStyle}>
      <div className="label2">{label}
      <p className="time-text">00:00</p>
      </div>
    </div>
  );
}

export default Time;
