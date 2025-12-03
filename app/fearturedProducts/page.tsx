"use client";

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useCartStore } from "../store/cartStore"; // Import the cart store
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  // Get the addToCart function from the store
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const products = [
    {
      id: "shirt-blue",
      title: "Blue Denim Shirt",
      price: "₹799",
      img: "/images/topwear.jpg",
    },
    {
      id: "shirt-black",
      title: "Black Denim Shirt",
      price: "₹1499",
      img: "/images/darkclud.png",
    },
    {
      id: "tshirt-casual",
      title: "T Shirt Casual",
      price: "₹1199",
      img: "/images/oversized.png",
    },
    {
      id: "tshirt-blue",
      title: "Blue Tshirt",
      price: "₹999",
      img: "/images/professional.png",
    },
  ];

  return (
    <Container className="mt-4">
      <h3 className="mb-3" style={{ fontWeight: "600" }}>
        Featured Products
      </h3>
      <Row>
        {products.map((item) => (
          <Col key={item.id} xs={6} lg={3} className="mb-4">

            <Card className="h-100 shadow-sm rounded">
              {/* ⭐ Product Page Link */}
              <Link href={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Img variant="top" src={item.img} />

                <Card.Body>
                  <Card.Title style={{ fontSize: "16px" }}>
                    {item.title}
                  </Card.Title>

                  <Card.Text style={{ fontWeight: "bold", color: "#202161" }}>
                    {item.price}
                  </Card.Text>
                </Card.Body>
              </Link>
              <Card.Footer className="border-0 bg-white">
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => {
                    addToCart(item);
                    router.push("/cart");
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
