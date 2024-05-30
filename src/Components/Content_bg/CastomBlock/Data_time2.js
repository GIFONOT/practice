import React from "react";
import "./Castom.css";
import CalendarIcon from "../../../img/Calendar.svg";

function DataTimePicker({lable, width, borderRadius}) {
    const selectStyle = {
        width: width || '197.45px',
        borderRadius: borderRadius || '5px',
      };
  return (
    <div className="data-time-picker2" style={selectStyle}>
      <span className="data2">{lable}</span>
      <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
    </div>
  );
}

export default DataTimePicker;
