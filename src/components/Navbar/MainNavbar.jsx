import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBag, BsSearch } from "react-icons/bs";
import logoImg from "../../assets/logo.png";
import "./navbar.css";

export default function MainNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav_bg_color ">
        <Container>
          <Navbar.Brand href="#home" className="logo_img_container">
            <img src={logoImg} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_container gap-md-3">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Products1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Products2
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/GroceryCart"}>
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="searchbar_container d-flex gap-md-3 gap-2">
              <InputGroup className="">
                <InputGroup.Text
                  id="basic-addon1"
                  className="search_icon_container"
                >
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search Product"
                  className="search_bar"
                  aria-label="Search"
                />
              </InputGroup>

              <Button className="btn_mycart_container d-flex">
                <BsBag /> <span>My Cart</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
