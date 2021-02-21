import React from 'react';
import Button from '../../../../components/Button/Button';
import img1 from '../CtgTomato/tomatos.png';

function CtgTomato() {
    return (
        <div className="item">
            <h5 className="item-title">В’ялені томати </h5>
            <img
              src={img1}
              className="catalog-img img-fluid"
              alt="sun-dried tomatoes"
            />
            <Button
              // onClick={}
              color="black"
              title="Детальніше"
            />
          </div>
    );
}

export default CtgTomato;