import React from "react";
import "./Header.css";
import bell from "../../img/bell.svg";
import Number from "../../img/UnionNumber.svg";
import Avatar from "../../img/Avatar.svg";

function Header({ root, Name, Role }) {
  return (
    <>
      <header>
        <div className="frame1">
          <span className="breadcrumbs">
            <p className="breadcrumbsroot">раздел01</p>
            <img src={Number} alt="Number" />
            <p className="breadcrumbsroot">подраздел01</p>
            <img src={Number} alt="Number" />
            <p className="breadcrumbsroot">подраздел02</p>
            <img src={Number} alt="Number" />
          </span>
          {/* вместо 'раздел01' пдолжен передоваться 'root'  */}
          <h1>Текущий раздел</h1>
        </div>
        <div className="frame2">
          <img src={bell} alt="bell" className="bell" />

          <span className="profile">
            <img src={Avatar} alt="Avatar" className="Avatar" />
            <div>
              <h1 className="Name">{Name}</h1>
              <h4 className="Role">{Role}</h4>
            </div>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;