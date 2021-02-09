import React, { useState } from "react";
import { Table, Modal, Button, Form } from "react-bootstrap";
import { FaEye, FaEdit } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Product.css";

const Product = (props) => {
  const { id, title, description, category, price, image, editProduct } = props;
  //For the Check
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //For the Edit Modal
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const [editedProduct, setEditedProduct] = useState({
    id: id,
    title: title,
    description: description,
    category: category,
    price: price,
    image: image,
  });

  //Edit Product

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
      <Table>
        <tr>
          <td style={{ width: "150px" }}>{id}</td>
          <td style={{ width: "200px" }}>{title}</td>
          <td style={{ width: "100px" }}>{category}</td>
          <td style={{ width: "100px" }}>{price} €</td>
          <td style={{ width: "100px" }}>
            <img
              src={image}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?cs=srgb&dl=pexels-stephanie-ho-1214212.jpg&fm=jpg";
              }}
              style={{ height: "40px", width: "40px" }}
            />
          </td>

          {/* CRUD Buttons */}

          {/*  See Details Button */}

          <td style={{ width: "50px" }}>
            <FaEye
              style={{ width: "50px", color: "green", cursor: "pointer" }}
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="product-title">
                {title}
              </Modal.Header>
              <Modal.Body>
                <div>
                  <img
                    src={image}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?cs=srgb&dl=pexels-stephanie-ho-1214212.jpg&fm=jpg";
                    }}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <p>
                    <br />
                    {description}
                  </p>
                  <p>Category: {category}</p>
                  <p>Price: {price} €</p>
                  <p>
                    In Stock
                    <GoPrimitiveDot
                      style={{ color: "green", height: "20px", width: "20px" }}
                    />
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>
                  Return
                </Button>
              </Modal.Footer>
            </Modal>
          </td>

          {/* Edit Product Button */}

          <td style={{ width: "50px" }}>
            <FaEdit
              style={{ width: "50px", color: "grey", cursor: "pointer" }}
              onClick={handleShowEdit}
            />
            <Modal show={showEdit} onHide={handleCloseEdit}>
              <Modal.Header closeButton className="product-title">
                Edit Product
              </Modal.Header>
              <Modal.Body>
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
                      <Button variant="primary" type="submit" onClick={handleCloseEdit}>
                        Update Product
                      </Button>
                    </Modal.Footer>
                  </form>
                </Form.Group>
              </Modal.Body>
            </Modal>
          </td>

          {/* Delete Button */}

          <td style={{ width: "50px" }}>
            <RiDeleteBinLine
              style={{ width: "50px", color: "red", cursor: "pointer" }}
              onClick={() => {
                /* Message to confirm if you want to delete the item */
                if (window.confirm("Do you want to delete this product?"))
                  props.handleRemove(id);
              }}
            />
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default Product;
