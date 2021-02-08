import React from "react";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          The Fake Store - Admin Backoffice
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
