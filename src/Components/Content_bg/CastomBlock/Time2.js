import React from "react";
import "./Castom.css";

function Time({label, width}) {
  const selectStyle = {
    width: width || '197.45px'
  };
  return (
    
    <div className="Time2" style={selectStyle}>
      <div className="label22">{label}
      <p className="time-text2">00:00</p>
      </div>
    </div>
  );
}

export default Time;
