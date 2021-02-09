import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const EditProduct = (props) => {
  const { id, title, description, category, price, image, editProduct } = props;
  const [editedProduct, setEditedProduct] = useState({
    id: id,
    title: title,
    description: description,
    category: category,
    price: price,
    image: image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    editProduct(e, editedProduct);
    alert(
      "The Product was updated with success. Please, go back to inventory."
    );
  };
  return (
    <div>
      <Form.Group>
        <form onSubmit={handleSubmit}>
          <Form.Control
            size="sm"
            type="text"
            name="title"
            defaultValue={title}
            onChange={handleChange}
           
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="description"
            defaultValue={description}
            onChange={handleChange}
            
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="category"
            defaultValue={category}
            onChange={handleChange}
            
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="price"
            defaultValue={price}
            onChange={handleChange}
            required
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="image"
            defaultValue={image}
            onChange={handleChange}
            required
          />
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Edit Product
            </Button>
          </Modal.Footer>
        </form>
      </Form.Group>
    </div>
  );
};

export default EditProduct;
