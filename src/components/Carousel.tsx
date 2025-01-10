'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Men's Active Shoes",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "ON THE MOVE",
    },
    {
      id: 2,
      title: "Women's Active Shoes",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "ON THE MOVE",
    },
    {
      id: 3,
      title: "Casual Wear",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "EVERYDAY WEAR",
    },
    {
      id: 4,
      title: "Casual Comfort",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "EVERYDAY WEAR",
    },
    {
      id: 5,
      title: "Rain Jacket",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "WEATHER READY",
    },
    {
      id: 6,
      title: "Winter Boots",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "WEATHER READY",
    }
  ];

  const tabs = ['ON THE MOVE', 'EVERYDAY WEAR', 'WEATHER READY'];

  // Update active tab based on current slide
  const activeTab = slides[currentSlide]?.category;

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= slides.length - 2 ? 0 : prev + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, slides.length - 2) : Math.max(0, prev - 2)
    );
  };

  // Handle tab click
  const handleTabClick = (tab: string) => {
    // Find the first slide index that matches the selected category
    const slideIndex = slides.findIndex(slide => slide.category === tab);
    if (slideIndex !== -1) {
      setCurrentSlide(Math.floor(slideIndex / 2) * 2); // Ensure we start on even numbers
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="relative h-[600px] flex gap-4">
          {slides.map((slide, index) => {
            const isVisible = index === currentSlide || index === currentSlide + 1;
            const position = index % 2 === 0 ? 'left' : 'right';

            return (
              <div
                key={slide.id}
                className={`absolute w-[calc(50%-8px)] h-full transition-transform duration-300 ease-in-out ${
                  position === 'left' ? 'left-0' : 'right-0'
                } ${
                  isVisible ? 'translate-x-0 opacity-100' : 
                  index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
                }`}
                style={{
                  display: isVisible ? 'block' : 'none'
                }}
              >
                <div className="relative h-full overflow-hidden group">
                  {/* Image container with zoom effect on hover */}
                  <div className="relative w-full h-full group-hover:scale-110 transform transition-transform duration-300 ease-in-out">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1000}  // Set a fixed width
                      height={1000} // Set a fixed height
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Center the text in the middle of the image */}
                  <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-40">
                    <h2 className="text-white text-3xl font-bold px-4">{slide.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
