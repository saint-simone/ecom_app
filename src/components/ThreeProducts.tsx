'use client';

import React, { useState } from 'react';

const ProductCard = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Placeholder image with aspect ratio */}
      <div className="relative h-96 w-full bg-neutral-100">
        <img 
          src={imageUrl} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay with text */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
          
          {/* Buttons that appear on hover */}
          <div className={`flex flex-row gap-2 mt-4 transition-all duration-300 ease-in-out ${
            isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <button className="flex-1 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 text-sm">
              Shop Men
            </button>
            <button className="flex-1 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 text-sm">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      title: 'Tree Glider',
      description: 'Bouncy, Everyday Active Sneaker',
      imageUrl: '/api/placeholder/400/500'
    },
    {
      title: 'Tree Runner',
      description: 'Breezy, Lightweight Sneaker',
      imageUrl: '/api/placeholder/400/500'
    },
    {
      title: 'Tree Glider',
      description: 'Sleek, Springy Athleisure Style',
      imageUrl: '/api/placeholder/400/500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductShowcase;