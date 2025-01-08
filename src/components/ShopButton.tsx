"use client"

import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const ShopButton: React.FC<ButtonProps> = ({ href, children }) => (
  <a 
    href={href}
    className="inline-block px-8 py-3 border border-black text-center min-w-[140px]
    bg-white text-black transition-colors duration-300
    hover:bg-black hover:text-white"
  >
    {children}
  </a>
);

const ProductShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#ffff]">
      <div className="text-center mb-8 text-black">
        <h2 className="text-2xl font-medium mb-2">Runner Go - Corduroy</h2>
        <p className="text-lg">Classically Cozy Organic Cotton</p>
      </div>
      <div className="w-full gap-8 mb-8">
        <Image 
          src="/pexels-kindelmedia-7298647.jpg"
          width={5184}
          height={2920}        
          alt="Black corduroy shoes" 
          className="w-full"
        />
      </div>
      <div className="flex justify-center gap-4">
        <ShopButton href="/shop/men">SHOP MEN</ShopButton>
        <ShopButton href="/shop/women">SHOP WOMEN</ShopButton>
      </div>
    </div>
  );
};

export default ProductShowcase;