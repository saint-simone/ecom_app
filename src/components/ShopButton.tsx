"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const [showButtons, setShowButtons] = useState(false);

  const products = [
    {
      title: "Runner Go - Corduroy",
      subtitle: "Classically Cozy Organic Cotton",
      image: "/pexels-mart-production-7880182.jpg",
      type: "shoes"
    },
    {
      title: "Wool Lounger",
      subtitle: "Cozy, Casual, Versatile.",
      image: "/pexels-kindelmedia-7298647.jpg",
      type: "comfort"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div 
            key={index}
            className="relative group"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
          >
            {/* Product Card */}
            <div className="bg-stone-100 rounded-lg p-6">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600">{product.subtitle}</p>
              </div>
              
              <div className="aspect-video relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Animated Buttons */}
              <motion.div 
                className="flex justify-center gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: showButtons ? 1 : 0,
                  y: showButtons ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
              >
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Shop Men
                </button>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Shop Women
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;