import React from "react";

import "./css/product.css";
function Product({ products, selected }) {
  return (
    <div className="products">
      {products.map((product) => (
        <div
          style={{ backgroundImage: `url(${product.src})` }}
          key={product.name}
          className="product"
        >
          <div
            style={
              product.name === selected
                ? { backgroundColor: "blue" }
                : { backgroundColor: "white" }
            }
            className="selected"
          >
            {product.name === selected ? <i class="fa fa-check"></i> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
