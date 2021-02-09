import React from "react";
import { Navbar } from "react-bootstrap";
import woman from "../assets/woman.png";

const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          The Fake Store - Admin Backoffice
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Admin User</a>
            <img
              src={woman}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                margin: "5px",
              }}
              alt=""
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
