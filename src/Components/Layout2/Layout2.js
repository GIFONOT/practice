import React from "react";
import Menu from "../Menu/Menu.js";
import Content3 from "./Content3.js";

function Layout2() {
  return (
      <div className="Page">
        <div className="Menu">
          <Menu />
        </div>
        <main className="Content">
          <Content3 />
        </main>
      </div>
  );
}

export default Layout2;