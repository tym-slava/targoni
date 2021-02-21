import React from "react";
import Button from '../../../../components/Button/Button';
import img2 from '../CtgSouse/souse.png';

function CtgSouse() {
  return (
    <div className="item">
      <h5 className="item-title">Соус</h5>
      <img src={img2} className="catalog-img img-fluid" alt="sauce" />
      <Button color="black" title="Детальніше" />
    </div>
  );
}

export default CtgSouse;
