import React from "react";
import { Navbar } from "react-bootstrap";

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
              src="https://www.flaticon.com/svg/vstatic/svg/2922/2922561.svg?token=exp=1612896180~hmac=3493db7c1752b682e8521402024059f7"
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
