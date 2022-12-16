import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

function CommonHomepageNavbar() {
  return (
    <>
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex ms-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="warning">Search</Button>
              </Form>
              <Nav
                className="me-auto my-2 my-lg-0 Hnav"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/login">Login</Nav.Link>
                <Nav.Link to="#action2">Sign in</Nav.Link>
                <NavDropdown title="About" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default CommonHomepageNavbar;
