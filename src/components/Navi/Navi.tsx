import React from "react";
import "../Navi/Navi.css";
import Logo from "../Logo/Logo";
import Bag from "../Ikons/btn-bag/Btnbag";
import Menu from "../Ikons/btn-menu/Btnmenu";

const Navi = () => {
  
  return (
    <div>
      <div className="header-top navbar ">
        <Logo />
        <div className="top-icons">
          <ul className="navbar-nav list-icons">
            <li className="nav-item">
              <a className="icon-bascet nav-link" href="#1">
                <Bag /> 
              </a>
            </li>
            <li className="nav-item">
              <a className="menu nav-link" href="#1">
                {/* <img className="icon" src={menu} alt="basket"/> */}
                <Menu/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navi;


