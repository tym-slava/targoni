import React from "react";
// import telegram from '../TopInfo/telegram.svg';
// import viber from '../TopInfo/viber.svg';
// import facebook from '../TopInfo/facebook.svg';
// import instagram from '../TopInfo/instagram.svg';
import SocialIcons from "../Ikons/social-icons/SocialIcons";
import "../TopInfo/TopInfo.css";

const TopInfo = () => {
  return (
    <div className="d-none d-sm-block ">
      <div className="top-info">
        <div className="top-contacts">
          <div className="top-item">+380997880556</div>
          <div className="top-item">+380509809851</div>
          <div className="top-item">targoni.ua@gmail.com</div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default TopInfo;
