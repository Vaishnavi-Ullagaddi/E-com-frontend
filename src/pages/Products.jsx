import React from "react";
import { useState, useEffect } from "react";

function Products() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://e-comm-backend-1-qpo6.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <>
      {/* <h1>E-Commerce</h1> */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(function (p) {
          return (
            <div key={p._id}>
              <img height={250} width={250} src={p.image} alt="" />
              <p>{p.title}</p>
              <p>{p.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
