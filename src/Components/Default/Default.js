import React from "react";
import Menu from "../Menu/Menu.js";
import Content from "../Content_bg/Var1/Content.js";
import "./Default.css";

function Default() {
  return (
      <div className="Page">
        <div className="Menu">
          <Menu />
        </div>
        <main className="Content">
          <Content />
        </main>
      </div>
  );
}

export default Default;
