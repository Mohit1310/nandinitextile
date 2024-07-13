import React from "react";
import ProductItem from "./ProductItem";
import "./styles/ProductSection.css";
import { Link } from "react-router-dom";

const ProductSection = ({ cards }) => {
  return (
    <div className="ourProducts" id="products">
      <div className="ourProducts--heading">
        <h1>Our Products</h1>
      </div>
      <div className="productSection">
        {cards.map((card, index) => (
          <Link to={"/product/" + card.url}>
            <div>
              <ProductItem
                key={index}
                name={card.name}
                image={card.image}
                availableGSM={card.availableGSM}
                availableSize={card.availableSize}
                availableColors={card.availableColors}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
