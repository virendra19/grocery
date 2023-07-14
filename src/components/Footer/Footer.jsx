import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logoImg from "../../assets/logo.png";
import { firstColData } from "./footerData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer_container ">
      <Container className="my-4">
        <Row>
          <Col sm={12} md={3}>
            <div className="logo_icon_title_subtitle_container">
              <div className="footer_logo_container">
                <img src={logoImg} alt="logo" />
              </div>
              {firstColData.map((item, i) => {
                const IconComponent = item.footerFirstColIconName;
                return (
                  <div
                    className="icon_title_subtitle_container d-flex align-items-center"
                    key={i}
                  >
                    <div className="icon_container">
                      <IconComponent />
                    </div>
                    <b>{item.footerFirstColTitleName}</b>
                    <p>{item.footerFirstColSubtitleName}</p>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="footer_links_container ">
              <b>Menu</b>
              <Link>Home</Link>
              <Link>About Us</Link>
              <Link>Products</Link>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="footer_links_container">
              <b>Quick Links</b>
              <Link>Terms & Conditions</Link>
              <Link>Return & Refund Policy</Link>
              <Link>Shipping Policy</Link>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="footer_links_container">
              <b>Security</b>
              <Link>Privacy Policy</Link>
              <Link>Payment Policy</Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Col sm={12} md={12}>
          <div className="footer_end_container">
            <p className="d-flex ">
              2022 Deal Buddy Limited, All rights reserved.
            </p>
          </div>
        </Col>
      </Container>
    </div>
  );
}
