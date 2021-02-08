import React from "react";
import { Form } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div>
      <Form.Group>
        <Form.Control size="sm" type="text" placeholder="Title" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Description" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Category" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Price" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Image URL" />
      </Form.Group>
    </div>
  );
};

export default AddProduct;
