import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProduct(product);
    alert("The Product was added with success. Please, go back to inventory.");
  };
  return (
    <div>
      <Form.Group>
        <form onSubmit={handleSubmit}>
          <Form.Control
            size="sm"
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            required
          />
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Modal.Footer>
        </form>
      </Form.Group>
    </div>
  );
};

export default AddProduct;
