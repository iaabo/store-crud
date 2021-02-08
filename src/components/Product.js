import React from "react";
import { Table } from "react-bootstrap";

const Product = (props) => {
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
              style={{ height: "40px", width: "40px" }}
            />
          </td>
          <td style={{ width: "50px" }}>Check</td>
          <td style={{ width: "50px" }}>Update</td>
          <td style={{ width: "50px" }}>Eliminate</td>
        </tr>
      </Table>
    </div>
  );
};

export default Product;
