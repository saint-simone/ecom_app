/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {/* Overlay with buttons that appear on hover */}
          <div
            className={`absolute inset-0 bg-black/20 flex flex-col justify-center items-center gap-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <button className="bg-white px-6 py-2 font-semibold hover:bg-gray-100 transition w-32">
              SHOP MEN
            </button>
            <button className="bg-white px-6 py-2 font-semibold hover:bg-gray-100 transition w-32">
              SHOP WOMEN
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.color}</p>
            </div>
            <span className="font-semibold">${product.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ShoeShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Wool Runner Mizzles",
      price: 125,
      color: "Stony Cream",
      image: "/pexels-athul-adhu-186900-684152.jpg",
    },
    {
      id: 2,
      name: "Wool Dasher Mizzles",
      price: 145,
      color: "Stony Beige",
      image: "/pexels-zaktech90-1027130.jpg",
    },
    {
      id: 3,
      name: "Tree Dasher 2",
      price: 135,
      color: "Stony Cream",
      image: "/pexels-mart-production-7880182.jpg",
    },
    {
      id: 4,
      name: "Tree Runner Go",
      price: 120,
      color: "Stony Cream",
      image: "/pexels-mikhail-nilov-8456072.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex ml-12"> {/* Added margin-left here */}
      {/* Hero Section - Left Side */}
      <div
        className="w-1/2 bg-orange-100 p-12 flex flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/pexels-timegrocery-2421374.jpg)" }}
      >
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Warm. Modern. Understated.
          </h1>
          <p className="text-xl mb-8">
            Neutrals so subtle they can&apos;t help but stand out.
          </p>
          <div className="flex gap-4">
            <button className="bg-white px-8 py-3 font-semibold hover:bg-gray-100 transition">
              SHOP MEN
            </button>
            <button className="bg-white px-8 py-3 font-semibold hover:bg-gray-100 transition">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid - Right Side */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeShowcase;
