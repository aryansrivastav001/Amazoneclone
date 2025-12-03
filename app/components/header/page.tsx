"use client";
import { useState, useEffect } from "react";
import { Navbar, Container, Offcanvas, Form, FormControl, Button, Badge } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartStore } from "../../store/cartStore";
import Link from "next/link";


export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "rgb(32,33,97)", padding: "10px" }}
        className="text-white"
      >
        <Container fluid className="d-flex flex-row justify-content-between align-items-center w-100">

          {/* toggle button */}
          <div className="toggle"> <Button variant="light" className="d-lg-none me-3" onClick={handleShow}>☰</Button></div>

          {/* Logo */}
          <div className="text-white fw-bold fs-4 me-3"><img src="/images/amazone.png"style={{width:"120px",marginTop:"25px"}} alt="Logo" /></div>
          <div className="mt-3"><p>Shop Category Shell</p></div>

          {/*  Search bar */}
          <div className="flex-grow-1 d-flex justify-content-center mx-2" style={{ maxWidth: "700px" }}>
            <Form className="d-flex w-100">
              <FormControl type="search" placeholder="Search..." className="me-2" />
              <Button variant="light"style={{color:"orange"}}>Search</Button>
            </Form>
          </div>

          {/*  Icon  */}
          <div className="d-flex align-items-center gap-5  ms-3">
            <div className="text-white fs-2"><i className="bi bi-bag-dash-fill"></i></div>
            <Link href="/cart" passHref legacyBehavior>
              <a className="text-white fs-2 position-relative">
                <i className="bi bi-cart4"></i>
                {cartCount > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: '0.6rem', padding: '0.4em 0.6em' }}
                  >
                    {cartCount}
                  </Badge>
                )}
              </a>
            </Link>
          </div>
        </Container>
      </Navbar>

      {/* OFFCANVAS */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header
          closeButton
          style={{ backgroundColor: "rgb(32,33,97)", color: "white" }}
        >
          <Offcanvas.Title><img src="/images/amazone.png"style={{width:"120px",marginTop:"25px"}} alt="Logo" /></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ backgroundColor: "white", color: "black" }}>
          {/* Offcanvas items */}
          <div className="p-2 fs-5">Home</div>
          <div className="p-2 fs-5">About</div>
          <div className="p-2 fs-5">Contact</div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
