"use client";

import React from "react";
import { useCartStore } from "../store/cartStore";
import { Container, Row, Col, Card, Button, ListGroup, Image } from "react-bootstrap";
import Link from "next/link";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();

  // Function to parse price string (e.g., "₹1,499") and return a number
  const parsePrice = (price: string): number => {
    return parseFloat(price.replace("₹", "").replace(",", ""));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4">
              <h2>Your Cart is Empty</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <Link href="/" passHref>
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <Row>
        {/* Cart Items */}
        <Col lg={8}>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="mb-3 border rounded">
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <Image src={item.img} alt={item.title} fluid rounded />
                  </Col>
                  <Col xs={9} md={4}>
                    <h5>{item.title}</h5>
                    <p className="mb-0 fw-bold">{item.price}</p>
                  </Col>
                  <Col xs={7} md={3} className="d-flex align-items-center justify-content-start justify-content-md-center mt-2 mt-md-0">
                    <Button variant="outline-secondary" size="sm" onClick={() => decreaseQty(item.id)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => increaseQty(item.id)}>+</Button>
                  </Col>
                  <Col xs={5} md={3} className="text-md-end mt-2 mt-md-0">
                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card>
            <Card.Header as="h5">Order Summary</Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="text-success">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <Button variant="primary" className="w-100 mt-3">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;