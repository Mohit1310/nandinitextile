import React from "react";
import "./styles/ProductSection.css";

const ProductItem = ({
  name,
  image,
  availableGSM,
  availableSize,
  availableColors,
}) => {
  return (
    <div className="productItem">
      <div className="productItem--front">
        <img src={image} alt={name} />
        <div className="productItem--footer">
          <h2>{name}</h2>
        </div>
      </div>
      {/* <div className="productItem--back">
        <div className="productItem--backHeader">
          <p>{name}</p>
        </div>
        <div className="productItem--backBody">
          <h4>Available GSM</h4>
          <p className="para">{availableGSM}</p>
          <hr />
          <h4>Available Colors</h4>
          <p className="para">
            {availableColors}
          </p>
          <hr />
          <h4>Available Size</h4>
          <p className="para">
            {availableSize}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ProductItem;
