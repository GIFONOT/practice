import React from "react";
import "./CastomSelectVar2.css";

function CastomSelectVar2({ options, label, width }) {
  const selectStyle = {
    width: width || '300px'
  };
  return (
    
    <div className="CastomSelectVar2" style={selectStyle}>
      <div className="labelVar2">{label}</div>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CastomSelectVar2;