import React from "react";
import img from "../AboutProducts/photo-about.png";
import "../AboutProducts/AboutProducts.css";
import CarouselBox, {
  CarouselItem,
} from "../../../components/Carousel/CarouselBox";
import Bullet, { BulletProps } from "./Bullet";

let bulletList: BulletProps[] = [
  {
    title: "Власне виробництво",
    description: "Родинна справа яка має італійське коріння та історичну назву",
  },
  {
    title: "Екологічний бренд",
    description:
      "Це авторська рецептура, помжножена на томати, вирощені на кращій усвіті землі",
  },
  {
    title: "Гарантія якості",
    description:
      "Використовуємо сертифіковану продукцію, без консeрвантів та барвників",
  },
  {
    title: "Зроблено з любов’ю",
    description:
      "Ми отримуємо задовлоення від процесу приготування кожної баночки власноруч",
  },
];

function AboutProducts() {
  let items: CarouselItem[] = bulletList.map(function (item) {
    return (
      <Bullet
        key={item.title}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <section className="aboutProducts">
      <h2 className="title">Декілька фактів про нашу продукцію</h2>
      <div className="subtitle">
        TM Targoni пропонує для вас крафтову продукцію, кожна баночка томатів,
        слив та соусу виготовляється власноруч.{" "}
      </div>
      <div className="image">
        <img src={img} alt="Targoni" />
      </div>
      <div className="desktop">
        {items.map(function (item, index) {
          return (
            <div key={index} className={`productBullet bullet${index + 1}`}>
              {item}
            </div>
          );
        })}
      </div>

      <div className="mobile">
        <CarouselBox items={items} fade={true} />
      </div>
    </section>
  );
}

export default AboutProducts;
