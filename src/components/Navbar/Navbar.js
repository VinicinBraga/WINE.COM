import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { IconContext } from "react-icons";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="logo" width={150} />
      </div>
      <ul className="links-container">
        <li>Clube</li>
        <li>Loja</li>
        <li>Produtores</li>
        <li>Ofertas</li>
        <li>Eventos</li>
      </ul>
      <IconContext.Provider value={{ className: "icons-container", size: 40 }}>
        <BiSearch />
        <BiUser />
        <BsBag />
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
