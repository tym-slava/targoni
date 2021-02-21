import React from "react";
import InstaGallery from "../../../components/InstaGallery/InstaGallery";
import "../Gallery/Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <div className="container-fluid">
          <h2 className="title title-gallery">Наша Instagram сторіночка</h2>
          <p className="gallery-text">
            Познач нас в Instagram @Targonitomato та отримай знижку 10% на наступне
            замовлення
          </p>
            <InstaGallery/>
      </div>
    </section>
  );
}

export default Gallery;
