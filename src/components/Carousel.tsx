'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState('ON THE MOVE');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = ['ON THE MOVE', 'EVERYDAY WEAR', 'WEATHER READY'];
  
  const slides = [
    {
      id: 1,
      title: "Men's Active Shoes",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "ON THE MOVE",
    },
    {
      id: 2,
      title: "Men's Active Shoes",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "ON THE MOVE",
    },
    {
      id: 3,
      title: "Casual Wear",
      image: "/pexels-athul-adhu-186900-684152.jpg",
      category: "EVERYDAY WEAR",
    },
  ];
  

  const filteredSlides = slides.filter(slide => slide.category === activeTab);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredSlides.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setCurrentSlide(0);
            }}
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
        <div className="relative h-[600px]">
          {filteredSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  fill
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20">
                  <div className="absolute bottom-8 left-8">
                    <h2 className="text-white text-3xl font-bold">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
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