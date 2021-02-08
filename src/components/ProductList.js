import React, { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <div>
       {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
