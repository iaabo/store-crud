import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { FaEye, FaEdit, FaDotCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Product.css";

const Product = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Table>
        <tr>
          <td style={{ width: "20px" }}>{props.id}</td>
          <td style={{ width: "200px" }}>{props.title}</td>
          <td style={{ width: "100px" }}>{props.category}</td>
          <td style={{ width: "100px" }}>{props.price} €</td>
          <td style={{ width: "100px" }}>
            <img
              src={props.image}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?cs=srgb&dl=pexels-markus-spiske-2672097.jpg&fm=jpg";
              }}
              style={{ height: "40px", width: "40px" }}
            />
          </td>
          <td style={{ width: "50px" }}>
            <FaEye
              style={{ width: "50px", color: "green", cursor: "pointer" }}
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="product-title">
                {props.title}
              </Modal.Header>
              <Modal.Body>
                <div>
                  <img
                    src={props.image}
                    alt=""
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg?cs=srgb&dl=pexels-markus-spiske-2672097.jpg&fm=jpg";
                    }}
                    style={{ height: "100px", width: "100px" }}
                  />
                  <p>
                    <br />
                    {props.description}
                  </p>
                  <p>Category: {props.category}</p>
                  <p>Price: {props.price} €</p>
                  <p>
                    In Stock
                    <FaDotCircle
                      style={{ color: "green", height: "10px", width: "10px" }}
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
          <td style={{ width: "50px" }}>
            <FaEdit style={{ width: "50px", color: "grey" }} />
          </td>
          <td style={{ width: "50px" }}>
            <RiDeleteBinLine
              style={{ width: "50px", color: "red", cursor: "pointer" }}
              onClick={() => {
                /* Message to confirm if you want to delete the item */
                if (window.confirm("Do you want to delete this product?"))
                  props.handleRemove(props.id);
              }}
            />
          </td>
        </tr>
      </Table>
    </div>
  );
};

export default Product;
