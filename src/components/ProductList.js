import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
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
      <div>
        <h1>Store Inventory</h1>
        <Button variant="secondary">Add Product</Button>
      </div>
      <div className="container">
        <Table>
          <tr>
            <th style={{ width: "20px" }}>#</th>
            <th style={{ width: "200px" }}>Title</th>
            <th style={{ width: "100px" }}>Category</th>
            <th style={{ width: "100px" }}>Price</th>
            <th style={{ width: "100px" }}>Image</th>
            <th style={{ width: "50px" }}>Check</th>
            <th style={{ width: "50px" }}>Update</th>
            <th style={{ width: "50px" }}>Eliminate</th>
          </tr>
        </Table>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
