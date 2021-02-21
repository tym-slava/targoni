import React from "react";
import "../Catalog/Catalog.css";
import CarouselBox from "../../../components/Carousel/CarouselBox";
import TomatoPic from "../../../components/TomatoPic/TomatoPic";
import CtgTomato from "./CtgTomato/CtgTomato";
import CtgSouse from "./CtgSouse/CtgSouse";
import CtgPlumbs from "./CtgPlumbs/CtgPlumbs";

function Catalog() {
  let items: any = [<CtgTomato />, <CtgSouse />, <CtgPlumbs />];
  return (
    <section className="сatalog">
      <div className="container">
        <div className="catalog-items desktop">
          <CtgTomato />
          <CtgSouse />
          <CtgPlumbs />
        </div>
      </div>
      <div className="mobile">
        {/* тут мобильная версия слайдера */}
        <CarouselBox items={items} />
      </div>
      <div className="tomato-pic">
        {/* картинка помидора, которая между секциями */}
        <TomatoPic />
      </div>
    </section>
  );
}

export default Catalog;
