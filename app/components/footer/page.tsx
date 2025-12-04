"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#232F3E",
        color: "white",
        padding: "40px 0",
        marginTop: "40px",
      }}
    >
      <Container>
        <Row>
          {/* Get to Know Us */}
          <Col md={3} sm={6} xs={12}>
            <h5 style={{ marginBottom: "20px" }}>Get to Know Us</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "30px" }}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5 style={{ marginBottom: "20px" }}>Connect with Us</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "30px" }}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5 style={{ marginBottom: "20px" }}>Make Money with Us</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "30px" }}>
              <li>Sell on Amazon</li>
              <li>Affiliate Marketing</li>
              <li>Advertise Your Products</li>
              <li>Fulfilment by Amazon</li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <h5 style={{ marginBottom: "20px" }}>Let Us Help You</h5>
            <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "30px" }}>
              <li>Your Account</li>
              <li>Returns</li>
              <li>Customer Service</li>
              <li>Help</li>
            </ul>
          </Col>
        </Row>
        <hr style={{ margin: "30px 0", borderColor: "rgba(255,255,255,0.2)" }} />
        {/* Copyright */}
        <p className="text-center" style={{ marginTop: "15px" }}>
          © {new Date().getFullYear()} Copyright <b>Aryan Srivastav</b>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

