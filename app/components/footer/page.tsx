import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// Inline styles for the footer
const footerStyle = {
  backgroundColor: "#232f3e", // Dark blue, similar to Amazon
  color: "white",
  paddingTop: "40px",
};

const footerLinkStyle = {
  color: "#DDD",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  fontSize: "14px",
};

const footerTitleStyle = {
  fontWeight: "bold",
  marginBottom: "15px",
  fontSize: "16px",
};

const copyrightSectionStyle = {
  backgroundColor: "#131A22", // Even darker blue for the bottom bar
  padding: "20px 0",
  marginTop: "30px",
  textAlign: "center",
  fontSize: "14px",
  color: "#DDD",
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          {/* Column 1: Get to Know Us */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5 style={footerTitleStyle}>Get to Know Us</h5>
            <Link href="/about" style={footerLinkStyle}>About Us</Link>
            <Link href="/careers" style={footerLinkStyle}>Careers</Link>
            <Link href="/press" style={footerLinkStyle}>Press Releases</Link>
            <Link href="/science" style={footerLinkStyle}>Flipcart Science</Link>
          </Col>

          {/* Column 2: Connect with Us */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5 style={footerTitleStyle}>Connect with Us</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Instagram</a>
          </Col>

          {/* Column 3: Make Money with Us */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5 style={footerTitleStyle}>Make Money with Us</h5>
            <Link href="/sell" style={footerLinkStyle}>Sell on Flipcart</Link>
            <Link href="/affiliate" style={footerLinkStyle}>Become an Affiliate</Link>
            <Link href="/advertise" style={footerLinkStyle}>Advertise Your Products</Link>
            <Link href="/sell-on-flipcart" style={footerLinkStyle}>Sell under Flipcart Accelerator</Link>
          </Col>

          {/* Column 4: Let Us Help You */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <h5 style={footerTitleStyle}>Let Us Help You</h5>
            <Link href="/account" style={footerLinkStyle}>Your Account</Link>
            <Link href="/returns" style={footerLinkStyle}>Returns Centre</Link>
            <Link href="/help" style={footerLinkStyle}>100% Purchase Protection</Link>
            <Link href="/help" style={footerLinkStyle}>Help</Link>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div style={copyrightSectionStyle}>
        © 2025, Aryan Srivastav
      </div>
    </div>
  );
}
