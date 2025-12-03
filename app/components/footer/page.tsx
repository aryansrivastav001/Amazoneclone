"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const hoverStyle = {
    textDecoration: "underline",
  };

  return (
    <footer
      style={{ backgroundColor: "#232f3e", color: "white" }}
      className="pt-5 pb-4"
    >
      <Container>
        <Row>
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" style={{linkStyle}}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" style={{linkStyle}}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" style={{linkStyle}}>
                  Press Releases
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/sell" style={{linkStyle}}>
                  Sell on FlipCart
                </Link>
              </li>
              <li>
                <Link href="/affiliate" style={{linkStyle}}>
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link href="/advertise" style={{linkStyle}}>
                  Advertise Your Products
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/account" style={{linkStyle}}>
                  Your Account
                </Link>
              </li>
              <li>
                <Link href="/orders" style={{linkStyle}}>
                  Your Orders
                </Link>
              </li>
              <li>
                <Link href="/help" style={{linkStyle}}>
                  Help
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5>Hii I am Aryan</h5>
          </Col>
        </Row>
        <hr style={{ borderColor: "white" }} />
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Aryan Srivastav. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
