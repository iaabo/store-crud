import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { FaEye, FaEdit } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import EditProduct from "./EditProduct";
import "./Product.css";

const Product = (props) => {
  //For the Check Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //For the Edit Modal
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <div>
      <Table>
        <tr>
          <td style={{ width: "150px" }}>{props.id}</td>
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
                        "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?cs=srgb&dl=pexels-stephanie-ho-1214212.jpg&fm=jpg";
                    }}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <p>
                    <br />
                    {props.description}
                  </p>
                  <p>Category: {props.category}</p>
                  <p>Price: {props.price} €</p>
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
                <EditProduct />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                  Go Back to Inventory
                </Button>
              </Modal.Footer>
            </Modal>
          </td>


          {/* Delete Button */}
          
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
