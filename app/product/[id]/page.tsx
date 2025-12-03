"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// 🔹 Product data (title, price, images)
const productData = {
  watch: {
    title: "Smart Digital Watch",
    price: "₹1,499",
    images: [
      "/images/watch1.jpg",
      "/images/watch2.jpg",
      "/images/watch3.jpg",
    ],
  },

  fashion: {
    title: "Stylish Men's Fashion",
    price: "₹999",
    images: [
      "/images/fashion1.png",
      "/images/fashion2.jpg",
    ],
  },

  spices: {
    title: "Premium Masala Pack",
    price: "₹249",
    images: [
      "/images/mashala1.jpg",
      "/images/mashala2.jpg",
    ],
  },

  watch2: {
    title: "Classic Analog Watch",
    price: "₹799",
    images: [
      "/images/watch6.jpg",
      "/images/watch5.jpg",
    ],
  },

  gerocy: {
    title: "Daily Grocery Pack",
    price: "₹499",
    images: [
      "/images/gerocy1.jpg",
      "/images/gerocy3.jpg",
    ],
  },
  /* --- Featured Products Data --- */
  "shirt-blue": {
    title: "Blue Denim Shirt",
    price: "₹799",
    images: [
      "/images/topwear.jpg"
    ]
  },
  "shirt-black": {
    title: "Black Denim Shirt",
    price: "₹1499",
    images: [
      "/images/darkclud.png"
    ]
  },
  "tshirt-casual": {
    title: "T Shirt Casual",
    price: "₹1199",
    images: [
      "/images/oversized.png"
    ]
  },
  "tshirt-blue": {
    title: "Blue Tshirt",
    price: "₹999",
    images: [
      "/images/professional.png"
    ]
  },
  /* --- Offers Page Data --- */
  "jeans-blue": {
    title: "50% OFF - Blue Jeans",
    price: "₹499",
    images: [
      "/images/bluejeansbundle.jpg"
    ]
  },
  "shoes-green": {
    title: "Mega Sale - Shoes",
    price: "₹699",
    images: [
      "/images/shoesgreen.jpg"
    ]
  },
  "jacket-red": {
    title: "Winter Offer - Jacket",
    price: "₹1199",
    images: [
      "/images/redjacket.jpg"
    ]
  },
};

export default function ProductPage() {
  const params = useParams();

  if (!params.id) return <div>Loading...</div>;

  // params.id can be a string or string[]. We ensure it's a string.
  const id = Array.isArray(params.id)
    ? params.id[0].toLowerCase()
    : params.id.toLowerCase();

  const product = productData[id];
  const images = product?.images || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Product not found</h1>
        <Link href="/">Back to Categories</Link>
      </div>
    );
  }

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>

      {/* 🔥 PRODUCT TITLE */}
      <h1 style={{ marginBottom: 10 }}>{product.title}</h1>

      {/* 🔥 PRODUCT PRICE */}
      <h2 style={{ color: "green", marginBottom: 20 }}>{product.price}</h2>

      {/* Main Image */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={images[currentIndex]}
          alt={`product-${currentIndex}`}
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: 10,
          }}
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 24,
            background: "rgba(0,0,0,0.3)",
            border: "none",
            color: "white",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 24,
            background: "rgba(0,0,0,0.3)",
            border: "none",
            color: "white",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: 80,
              height: 80,
              objectFit: "cover",
              border: currentIndex === idx ? "3px solid green" : "1px solid gray",
              borderRadius: 8,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Back */}
      <div style={{ marginTop: 30 }}>
        <Link href="/">← Back to Categories</Link>
      </div>
    </div>
  );
}
