"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";   // <-- ADD THIS

const categories = [
  { title: "Watch", img: "/images/phone.png" },
  { title: "Fashion", img: "/images/unnamed.png" },
  { title: "Spices", img: "/images/malasa.jpg" },
  { title: "Watch", img: "/images/watch.png" },
  { title: "watch", img: "/images/phone.png" },
  { title: "gerocy", img: "/images/images2.png" },
];

export default function CategoryStrip() {
  return (
    <Container className="my-4">
      <Row className="text-center">
        {categories.map((cat, index) => (
          <Col key={index} xs={4} md={2}>

            {/* WRAP CARD IN LINK */}
            <Link
              href={`/product/${cat.title.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="p-2 shadow-sm rounded" style={{ cursor: "pointer" }}>
                <Card.Img src={cat.img} alt={cat.title} />
                <Card.Body className="p-2">
                  <Card.Title style={{ fontSize: "14px" }}>
                    {cat.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>

          </Col>
        ))}
      </Row>
    </Container>
  );
}
