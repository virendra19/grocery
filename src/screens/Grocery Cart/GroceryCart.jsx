import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import "./grocerycart.css";
import { BiMinus } from "react-icons/bi";
import { selectedCartData, billingData } from "./groceryCartData";

export default function GroceryCart() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  return (
    <>
      <Container>
        <Row>
          <p className="my-4">
            Home <BsChevronRight /> My Cart
          </p>
          <Col sm={12} md={8}>
            <div className="cart_container">
              <b>Items in your cart</b>
              <Table responsive striped hover className="cart_type_container">
                <tr className="cart_title_text_container">
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
                {selectedCartData.map((prod) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <div className="cart_img_content_container d-flex justify-content-start">
                            <div className="cart_img_container">
                              <img src={prod.prodImg} alt="cart_product" />
                            </div>

                            <div className="cart_title_subtitle_container d-flex flex-column">
                              <p>{prod.prodType}</p>
                              <b>{prod.prodName}</b>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="cart_price_container">
                            <span>$ {prod.prodPrice}</span>
                          </div>
                        </td>
                        <td>
                          <div className="">
                            <div className="plus_minus_btn_container">
                              <button
                                onClick={() => {
                                  if (count > 0) {
                                    setCount(count - 1);
                                  }
                                }}
                              >
                                <BiMinus />
                              </button>
                              <button>{count}</button>
                              <button onClick={() => setCount(count + 1)}>
                                <BsPlus />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="cart_price_container">
                            <span>$ {prod.prodTotal}</span>
                          </div>
                        </td>
                        <td>
                          <div className="cart_price_container delete_btn_container">
                            <Button>
                              <RiDeleteBin7Line />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <Form.Control
                            className="input_special_instruction"
                            disabled
                            type="text"
                            placeholder="Special Instruction"
                          />
                          <div className="dashed_container" />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </Table>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="cart_container">
              <b>Customer Details</b>
              <p className="cart_userName_number">
                Johnathan Deo <br /> <span>+1 98754 32154</span>
              </p>
            </div>

            <div className="cart_container mt-4 ">
              <b>Billing Details</b>
              <div className="mt-3">
                {billingData.map((elem, i) => {
                  return (
                    <div className="billing_text_style_container" key={i}>
                      <p>{elem.billingName}</p>
                      <p>$ {elem.billingPrice}</p>
                    </div>
                  );
                })}

                <InputGroup className="my-3 input_apply_container">
                  <Form.Control
                    placeholder="Promo code"
                    aria-label="Promo code"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="" className="apply_btn" id="button-addon2">
                    Apply
                  </Button>
                </InputGroup>

                <div className="dashed_container" />

                <div className="total_container d-flex justify-content-between my-4">
                  <p>Total</p>
                  <p>$ 40.10</p>
                </div>

                <Button
                  className="checkout_btn"
                  onClick={() => navigate("/GroceryAddress")}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
