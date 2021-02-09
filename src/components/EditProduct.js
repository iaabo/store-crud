import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const EditProduct = (props) => {
  const [editProduct, setEditProduct] = useState({});

  return (
    <div>
      <Form.Group>
        <form>
          <Form.Control
            size="sm"
            type="text"
            name="title"
            placeholder="Title"
            value={editProduct.title}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="description"
            placeholder="Description"
            value={editProduct.description}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="category"
            placeholder="Category"
            value={editProduct.category}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="price"
            placeholder="Price"
            value={editProduct.price}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="image"
            placeholder="Image URL"
            value={editProduct.image}
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
