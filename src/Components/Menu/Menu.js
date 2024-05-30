import React from "react";
import MenuItem from "./MenuItem.js";
import LogoHome from "../../img/Home.svg";
import { Link } from 'react-router-dom';
import "./MenuItem.css";


function Menu() {
  return (
    <>
    <Link className="Link" to={'/Default'}>
    <MenuItem title="Default" collapse={false} icon={LogoHome} />
    </Link>
    <Link className="Link" to={'/Variant2'}>
    <MenuItem title="Variant2" collapse={false} icon={LogoHome} />
    </Link>
        
        <MenuItem title="Title" collapse={true} icon={LogoHome}>
          <MenuItem title="Title" collapse={false} icon={LogoHome} />
          <MenuItem title="Title" collapse={false} icon={LogoHome} />
        </MenuItem>
        <MenuItem title="Title" collapse={true} icon={LogoHome}>
          <MenuItem title="Title" collapse={false} icon={LogoHome} />
        </MenuItem>
        <MenuItem title="Title" collapse={false} icon={LogoHome} />
        <MenuItem title="Title" collapse={false} icon={LogoHome} />
        <MenuItem title="Title" collapse={false} icon={LogoHome} />
        <MenuItem title="Title" collapse={false} icon={LogoHome} />
    </>
  );
}

export default Menu;
