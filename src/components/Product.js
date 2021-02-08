import React from "react";

const Product = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.category}</p>
      <p>{props.price} €</p>
      <img src={props.image} alt="" style={{ height: "40px", width: "40px" }} />
    </div>
  );
};

export default Product;
