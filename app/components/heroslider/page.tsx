"use client";

import { Carousel, Image } from "react-bootstrap";

export default function HeroSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slider1.png" // Make sure you have this image in your public/images folder
          alt="First slide"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slider2.png" // Make sure you have this image in your public/images folder
          alt="Second slide"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/images/slider3.png" // Make sure you have this image in your public/images folder
          alt="Third slide"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}