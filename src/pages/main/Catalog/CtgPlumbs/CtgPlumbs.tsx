import React from 'react';
import Button from '../../../../components/Button/Button';
import img3 from '../CtgPlumbs/plumbs.png';

function CtgPlumbs() {
    return (
        <div className="item">
            <h5 className="item-title">В’ялені сливи</h5>
            <img
              src={img3}
              className="catalog-img img-fluid"
              alt="dried plumbs"
            />
            <Button color="black" title="Детальніше" />
          </div>
    );
}

export default CtgPlumbs;