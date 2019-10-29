import React from "react";
import { Navbar, Button, Form, Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function NavbarReact() {
  const dispatch = useDispatch();
  const isLog = useSelector(obj => obj.isLoggedIn);
  const style = isLog ? "block" : "none";
  const signout = e => {
    e.preventDefault();
    dispatch({ type: "SIGN_OUT" });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/home" className="navbar-brand" href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Khoa
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/candidates" className="nav-link">
            Candidates
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </Nav>
        <Button style={{ display: style }} onClick={signout}>
          Sign Out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
