import React from "react";
import "../Header/Header.css";
import TopInfo from "../../../components/TopInfo/TopInfo";
import Navi from "../../../components/Navi/Navi";
import Button from "../../../components/Button/Button";

const Header = () => {
  return (
    <header className="header">
      <TopInfo />
      <Navi />
      <div className="card card-header">
        <div className="card-body">
          <h5 className="card-title">Зробимо разом світ смачнішим!</h5>
          <p className="card-text">
            Targoni - це авторська рецептура, помножена на томати, вирощені на
            кращій у світі землі
          </p>
          <div className="btn-wrapper">
            <Button title="Асортимент" color="black" section="btn-header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

