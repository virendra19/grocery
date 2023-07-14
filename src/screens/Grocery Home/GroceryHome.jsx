import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./groceryhome.css";
import { BsChevronRight, BsTelephone } from "react-icons/bs";
import { allCategories } from "./allCategories";
import { allProducts } from "./allProducts";
import logoImg from "../../assets/logo.png";

import heroImg from "../../assets/Banners.png";
import product1 from "../../assets/img1.png";

import Footer from "../../components/Footer/Footer";

export default function GroceryHome() {
  const navigate = useNavigate();
  return (
    <div className="grocery_home_container">
      <Container>
        <div className="mt-3">
          <img src={heroImg} alt="img" />
        </div>

        <div className="mt-4">
          <Row>
            <Col xs={12} md={4} lg={3}>
              <div className="left_categories_container">
                <div>
                  <p className="top_categories_text">Top Categories</p>
                </div>
                {allCategories.map((catName, i) => {
                  return (
                    <div
                      className="categories_container d-flex align-items-center my-3"
                      key={i}
                    >
                      <div className="categories_icon_container">
                        <img src={catName.imgName} alt="cat1" />
                      </div>
                      <p>{catName.categoriesName}</p>
                      <div>
                        <BsChevronRight />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col xs={12} md={8} lg={9}>
              <div className="product_all_container d-flex flex-wrap gap-3 gap-md-4 ">
                {allProducts.map((prod, index) => {
                  const maxLength = 22;

                  const truncatedText =
                    prod.productName.length > maxLength
                      ? prod.productName.slice(0, maxLength) + "..."
                      : prod.productName;

                  return (
                    <div className="product_container" key={index}>
                      <div
                        className="product_img_container"
                        current-count="25% OFF"
                      >
                        <img src={prod.productImgName} alt="product1" />
                      </div>

                      <div className="product_description_container">
                        <p>
                          {prod.productType} <br />
                          <span>{truncatedText}</span>
                        </p>
                        <p>
                          {prod.productPrice}{" "}
                          <span>{prod.productMrpPrice}</span>
                        </p>
                        <Button onClick={() => navigate("/GroceryCart")}>
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="map_container my-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689333900777!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
