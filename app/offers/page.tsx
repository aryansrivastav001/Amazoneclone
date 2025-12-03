"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import { useRouter } from "next/navigation";


const OffersSection = () => {
  // Get the addToCart function from the store
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  const offers = [
    {
      id: "jeans-blue",
      title: "50% OFF - Blue Jeans",
      price: "₹499",
      oldPrice: "₹999",
      img: "images/bluejeansbundle.jpg",
    },
    {
      id: "watch", // This ID already exists in productData
      title: "Special Deal -  Watch",
      price: "₹899",
      oldPrice: "₹1999",
      img: "images/watch.png",
    },
    {
      id: "shoes-green",
      title: "Mega Sale - Shoes",
      price: "₹699",
      oldPrice: "₹1499",
      img: "images/shoesgreen.jpg",
    },
    {
      id: "jacket-red",
      title: "Winter Offer - Jacket",
      price: "₹1199",
      oldPrice: "₹2499",
      img: "images/redjacket.jpg",
    },
  ];

  return (
    <Container className="mt-4">
      <h3 className="mb-3" style={{ fontWeight: "600", color: "#202161"}}>
         Best Offers Today
      </h3>

      <Row>
        {offers.map((offer) => (
          <Col key={offer.id} xs={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm rounded">
              <Link href={`/product/${offer.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Img variant="top" src={offer.img} />

                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>{offer.title}</Card.Title>

                  <p className="m-0" style={{ color: "red", fontWeight: "bold" }}>
                    {offer.price}
                  </p>
                  <p
                    style={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "13px",
                    }}
                  >
                    {offer.oldPrice}
                  </p>
                </Card.Body>
              </Link>
              <Card.Footer className="border-0 bg-white">
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => {
                    addToCart(offer);
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

export default OffersSection;