import React from 'react';


const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container item-list-container">
      <div className="row">
        <div className="col-12">
          <p className="text-center" style={{color:"gray"}}>{greeting}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
