import React, { useState } from "react";
import "./MenuItem.css";
import CollapseIconBot from "../../img/UnionBot.svg";
import CollapseIconTop from "../../img/UnionTop.svg";

function MenuItem({ title, collapse, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (collapse) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className="menu-item-container">
      <div className="menu-item" onClick={handleClick}>
        <img src={icon} className="menu-icon" alt="Home Icon" />
        <span className="menu-title">{title}</span>
        {collapse && (
          <img
            src={isOpen ? CollapseIconTop : CollapseIconBot}
            className="collapse-icon"
            alt="Collapse Icon"
          />
        )}
      </div>
      <div className={`submenu ${isOpen ? "visible" : ""}`}>{children}</div>
    </div>
  );
}

export default MenuItem;
