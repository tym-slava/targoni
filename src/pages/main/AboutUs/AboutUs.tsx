import React from "react";
import Button from "../../../components/Button/Button";
import img from "../AboutUs/aboutUs.png"
import "../AboutUs/AboutUs.css";

function AboutUs() {
  return (
    <section className="aboutUs">
      <div className="container">
        <h1 className="title title-white aboutUs-title">Про нас</h1>
        <div className="row aboutUs-block">
          <div className="col-lg-6 aboutUs-sec">
            <p className="aboutUsp">
              Targoni – це авторська рецептура, помножена на томати, вирощені на
              кращій у світі землі.{" "}
            </p>
            <br />
            <p className="aboutUsp">
              Стиглі, червоні, м’ясисті, кожен зі своїм неповторним смаком,
              наповнені сонцем томати у запашній олії з добірними спеціями…{" "}
            </p>
            <br />
            <p className="aboutUsp">
              Кожен шматочок – неймовірна насолода, подарована нам щедрим літом
              і дбайливо збережена люблячими руками. В’ялені томати ідеально
              доповнять м'ясні, рибні і овочеві страви; зроблять неповторною
              піцу, салат чи пасту; нададуть оригінальності супам, соусам,
              випічці. А ще, вони є прекрасною самостійною закускою на святковий
              стіл.{" "}
            </p>
            <br />
            <div className="button">
                <Button
                    color="black"
                    title="Детальніше"
                />
            </div>
          </div>
          <div className="col-lg-6 aboutUs-img">
            <img className="img-fluid" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
