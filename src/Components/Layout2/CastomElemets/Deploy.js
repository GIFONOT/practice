import React,  { useState }  from "react";
import "./Castom.css";
import Arrow from "../../../img/Arrow.svg";
import ArrowOpen from "../../../img/ArrowOpen.svg";


function Deploy({ label, children }) {
    const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
    
  return (    
    <div className="Deploy-container">
    <div className="Deploy" onClick={handleClick}>
      <span className="layout_label">{label}</span>
      {true && (
        <img
          src={isOpen ? Arrow : ArrowOpen}
          className="Deploy-icon"
          alt="Deploy Icon"
        />
      )}
    </div>
    <div className={`tableLayout2 ${isOpen ? "visible" : ""}`}>{children}</div>
  </div>
  );
}

export default Deploy;
