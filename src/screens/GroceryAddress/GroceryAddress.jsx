import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import "./groceryaddress.css";

export default function GroceryAddress() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="my-4 d-flex gap-3">
              Home <BsChevronRight /> My Cart <BsChevronRight />
              Checkout <BsChevronRight />
              Add New Address
            </p>
            <div className="box_address_main_container">
              <div className="three_address_btn_container">
                <b>Confirm Delivery Location</b>
                <InputGroup className="my-3 input_apply_container">
                  <Form.Control
                    placeholder="Ahmedabad, Gujarat"
                    aria-label="Ahmedabad, Gujarat"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="" className="apply_btn" id="button-addon2">
                    Change
                  </Button>
                </InputGroup>
                <Button className="checkout_btn" onClick={() => navigate("/")}>
                  Confirm Location & Proceed
                </Button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689333900777!5m2!1sen!2sin"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
