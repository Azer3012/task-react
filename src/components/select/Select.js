import React, { useState } from "react";
import Product from "../product/Product";
import "./css/select.css";

function Select() {
  const [products, setProducts] = useState([
    { name: "burger", src: "burger.jpg" },
    { name: "spagetti", src: "spagetti.jpg" },
  ]);

  const [selected, setSelected] = useState("burger");
  return (
    <div className="select">
      <h1 className="question">Hansini secirsiz?</h1>

      <div className="menu">
        {products.map((product) => (
          <h2 onClick={() => setSelected(product.name)}>{product.name}</h2>
        ))}
      </div>

      <Product products={products} selected={selected} />
    </div>
  );
}

export default Select;
