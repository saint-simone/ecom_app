import React from 'react';
import { Search, ShoppingBag, User, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Navigation */}
      <nav className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">MEN</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">WOMEN</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">SOCKS</a>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">SALE</a>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-light italic">allbirds</a>
            </div>

            {/* Right Menu Items */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">SUSTAINABILITY</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">RERUN</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">STORES</a>
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
                <User className="w-5 h-5 text-gray-700 cursor-pointer" />
                <HelpCircle className="w-5 h-5 text-gray-700 cursor-pointer" />
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer" />
                  <span className="absolute -top-1 -right-1 bg-gray-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 h-12 items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900">Men&apos;s Shoes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Women&apos;s Shoes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;