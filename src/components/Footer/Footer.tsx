import React from "react";
import Logo from "../Logo/Logo";
import SocialIcons from "../Ikons/social-icons/SocialIcons";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row block-footer">
          <div className="col-3">
            <div className="logo"><Logo /></div>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <a href="#1"><li>В’ялені томати</li></a>
              <li>В’ялені сливи</li>
              <li>Соус</li>
              <li>Подарункові коплекти </li>
              <li>Корпоративні пропозиції</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li>Партнерам</li>
              <li>Про нас</li>
              <li>Доставка та оплата</li>
              <li>Рецепти </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li>+38 099 788 05 56</li>
              <li>+38 050 980 98 51</li>
              <li>targoni.ua@gmail.com</li> 
              <li className="footer-si"><SocialIcons/></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyrights">Targoni@ 2018-2021 *All rights reserved*</p>
    </footer>
  );
}

export default Footer;

//TODO: СДЕЛАТЬ СПИСКИ МЕНЮ И ЛИШКИ ОБЕРНУТЬ В ССЫЛКИ
