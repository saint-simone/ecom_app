"use client"

import Image from 'next/image';
import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  model: string;
  color: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Wool Runner',
    model: 'Mizzies',
    color: 'Stony Cream',
    price: 125,
    image: '/pexels-mart-production-7880182.jpg'
  },
  {
    id: '2',
    name: 'Wool Dasher',
    model: 'Mizzies',
    color: 'Stony Beige',
    price: 145,
    image: '/pexels-mart-production-7880182.jpg'
  },
  {
    id: '3',
    name: 'Tree Dasher 2',
    model: '',
    color: 'Stony Cream',
    price: 135,
    image: '/pexels-mart-production-7880182.jpg'
  },
  {
    id: '4',
    name: 'Tree Runner Go',
    model: '',
    color: 'Stony Cream',
    price: 120,
    image: '/pexels-mart-production-7880182.jpg'
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
        src="/pexels-mart-production-7880182.jpg"
        width={5412}
        height={3608}
        alt={`${product.name} in ${product.color}`}
        className="w-full"
        />
        
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white bg-opacity-90 transition-all duration-300">
            <a 
              href="#" 
              className="w-32 py-3 text-center bg-white text-black text-sm border border-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              SHOP MEN
            </a>
            <a 
              href="#" 
              className="w-32 py-3 text-center bg-white text-black text-sm border border-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              SHOP WOMEN
            </a>
          </div>
        )}
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{product.name}</h3>
            {product.model && <p className="text-sm">{product.model}</p>}
          </div>
          <span className="text-sm">${product.price}</span>
        </div>
        <p className="text-sm text-gray-600">{product.color}</p>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;