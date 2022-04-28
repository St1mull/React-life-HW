import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">
            <Nav.Item>Home</Nav.Item>
          </NavLink>
          <NavLink to="counter">
            <Nav.Item>Counter</Nav.Item>
          </NavLink>
          <NavLink to="receipts">
            <Nav.Item>Receipts</Nav.Item>
          </NavLink>
          <NavLink to="login">
            <Nav.Item>Login</Nav.Item>
          </NavLink>
          <NavLink to="addcontacts">
            <Nav.Item>Add Contacts</Nav.Item>
          </NavLink>
          <NavLink to="contactslist">
            <Nav.Item>Contacts List</Nav.Item>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
