"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  slug: string;
}

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const productsToShow: number = 4;

  const products: Product[] = [
    {
      id: 1,
      name: "Women's Wool Runner Go",
      category: "Women's",
      color: "Stony Beige",
      price: 110,
      imageUrl: "/https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      slug: "womens-wool-runner-go-stony-beige"
    },
    {
      id: 2,
      name: "Men's Wool Dasher Mizzles",
      category: "Men's",
      color: "Dark Grey",
      price: 101,
      originalPrice: 145,
      imageUrl: "/product2.jpg",
      slug: "mens-wool-dasher-mizzles-dark-grey"
    },
    {
      id: 3,
      name: "Women's Wool Runner Go - Fluff",
      category: "Women's",
      color: "Natural White",
      price: 60,
      originalPrice: 120,
      imageUrl: "/product3.jpg",
      slug: "womens-wool-runner-go-fluff-natural-white"
    },
    {
      id: 4,
      name: "Men's Tree Runner Go",
      category: "Men's",
      color: "Stony Cream",
      price: 120,
      imageUrl: "/product4.jpg",
      slug: "mens-tree-runner-go-stony-cream"
    },
    {
      id: 5,
      name: "Women's Tree Dasher",
      category: "Women's",
      color: "Jet Black",
      price: 100,
      imageUrl: "/product5.jpg",
      slug: "womens-tree-dasher-jet-black"
    },
    {
      id: 6,
      name: "Men's Wool Runner",
      category: "Men's",
      color: "Natural Grey",
      price: 115,
      imageUrl: "/product6.jpg",
      slug: "mens-wool-runner-natural-grey"
    },
    {
      id: 7,
      name: "Women's Tree Breezers",
      category: "Women's",
      color: "Misty Rose",
      price: 98,
      imageUrl: "/product7.jpg",
      slug: "womens-tree-breezers-misty-rose"
    },
    {
      id: 8,
      name: "Men's Tree Loungers",
      category: "Men's",
      color: "Navy Night",
      price: 105,
      imageUrl: "/product8.jpg",
      slug: "mens-tree-loungers-navy-night"
    },
    {
      id: 9,
      name: "Women's Tree Skippers",
      category: "Women's",
      color: "Coastal Blue",
      price: 95,
      imageUrl: "/product9.jpg",
      slug: "womens-tree-skippers-coastal-blue"
    },
  ];

  const handlePrevious = (): void => {
    setCurrentIndex((prevIndex: number): number => 
      prevIndex === 0 ? products.length - productsToShow : prevIndex - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex: number): number => 
      prevIndex === products.length - productsToShow ? 0 : prevIndex + 1
    );
  };

  const getVisibleProducts = (): Product[] => {
    return products.slice(currentIndex, currentIndex + productsToShow);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">MORE TO SHOP</h2>
      
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          aria-label="Previous products"
          type="button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Products Container */}
        <div className="flex gap-4 overflow-hidden">
          {getVisibleProducts().map((product: Product) => (
            <Link 
              href={`/products/${product.slug}`}
              key={product.id}
              className="flex-none w-1/4 group"
            >
              <div className="flex transition-transform aspect-square  bg-gray-100 rounded-lg overflow-hidden mb-3">
                <div className="relative aspect-square">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
              
              <h3 className="font-medium text-base">{product.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">{product.color}</p>
              <div className="flex gap-2 items-center">
                <span className={`text-base ${product.originalPrice ? "text-red-600" : ""}`}>
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          aria-label="Next products"
          type="button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;