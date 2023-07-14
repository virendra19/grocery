import React, { useState } from "react";
import { Button, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  billingCheckOut,
  radioAddress,
  paymentMtd,
  itemsCheckout,
} from "./groceryCheck";
import "./grocerycheckout.css";

export default function GroceryCheckout() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <p className="my-4">
            Home <BsChevronRight /> My Cart <BsChevronRight /> Checkout
          </p>
          <Col sm={12} md={8}>
            <div className="cart_container ">
              <b>Select Address</b>
              <div className="address_container my-3">
                {radioAddress.map((add, i) => {
                  return (
                    <div className="radio_two_text_container" key={i}>
                      <input type="radio" className="radio_btn" id="name1" />
                      <label
                        htmlFor="name1"
                        className="two_text_address_name_container d-flex flex-column"
                      >
                        <p>
                          Sean Smith <br />
                          <span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </span>
                        </p>
                      </label>
                    </div>
                  );
                })}
              </div>

              <Button className="new_address_btn mt-3">Add New Address</Button>
            </div>

            <div className="cart_container mt-4">
              <b>Payment Method</b>
              <div className="address_container my-3 pb-5">
                {paymentMtd.map((mtd, i) => {
                  return (
                    <div
                      className="radio_two_text_container mtd_container"
                      key={i}
                    >
                      <input type="radio" className="radio_btn" id="name1" />
                      <label
                        htmlFor="name1"
                        className="two_text_address_name_container d-flex flex-column"
                      >
                        <p className="mtd_img_container d-flex flex-column">
                          <img src={mtd.mtdImg} alt="paypal" />
                          <span>{mtd.mtdName}</span>
                        </p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="cart_container  ">
              <b>Items</b>
              {itemsCheckout.map((perItem) => {
                return (
                  <div>
                    <div className="item_img_title_subtitle_pricetag_container">
                      <div className="item_img_container">
                        <img src={perItem.itemImg} alt="img" />
                      </div>
                      <div className="item_texts_container">
                        <p>
                          {perItem.itemsType} <br />
                          <b> {perItem.itemsName}</b>
                        </p>

                        <p>$ {perItem.itemPrice}</p>
                      </div>
                    </div>
                    <div className="dashed_container mt-2" />
                  </div>
                );
              })}

              <div className="mt-3">
                {billingCheckOut.map((elem, i) => {
                  return (
                    <div className="billing_text_style_container" key={i}>
                      <p>{elem.billingName}</p>
                      <p>$ {elem.billingPrice}</p>
                    </div>
                  );
                })}

                <div className="dashed_container" />

                <div className="total_container d-flex justify-content-between my-4">
                  <p>Total</p>
                  <p>$ 40.10</p>
                </div>

                <Button className="checkout_btn">Place Order</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
