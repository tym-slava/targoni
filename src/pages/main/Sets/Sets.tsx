import React from "react";
import leftImg from "../Sets/left.png";
import rightImg from "../Sets/right.png";
import "../Sets/Sets.css";

function Sets() {
  return (
    <section className="sets">
      <div className="container-fluid">
        <div className="block">
            <div className="row sets-block">
              <div className="col-md-auto sets-block sets-img ">
                <a href="#1"><img className="img-fluid" src={leftImg} alt="" /></a>
                <p>Обрати подарунковий комплект </p>
              </div>
              <div className="col-md-6 sets-block center-block">
                <h1>Подарунковi та корпоративнi комплекти</h1>
                <p className="font-weight-bolder">
                  Збери свій унікальний комплект самостійно. Перейди на потрібний
                  розділ натиснувши на картинку
                </p>
              </div>
              <div className="col-md-auto sets-block sets-img">
                <a href="#2"><img className="img-fluid" src={rightImg} alt="" /></a>
                <p>Обрати подарунковий комплект </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Sets;
