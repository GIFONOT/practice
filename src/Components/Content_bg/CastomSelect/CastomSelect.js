import React from "react";
import "./CastomSelect.css";

function CastomSelect({ options, label, width }) {
  const selectStyle = {
    width: width || '300px'
  };
  return (
    
    <div className="CastomSelect" style={selectStyle}>
      <div className="label">{label}</div>
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

export default CastomSelect;
