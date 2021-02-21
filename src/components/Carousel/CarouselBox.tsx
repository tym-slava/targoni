import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import { ProductItem } from "../../pages/main/AboutProducts/AboutProducts";
import "../Carousel/CarouselBox.css";

export type CarouselItem = React.ReactNode; 

interface Props {
  items: CarouselItem[];
  fade?: boolean;
}

function CaruselBox(props: Props) {
  let items = props.items;
  let fade = props.fade;

  let a = items.map(function (item, index: number) {
    return (
      <Carousel.Item key={index}>
        <div className="d-block w-20 slider-item">
          {item}
        </div>
      </Carousel.Item>
    );
  });
  
  return <Carousel fade={fade}>{a}</Carousel>;
  
}

export default CaruselBox;
