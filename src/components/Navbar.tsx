"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Search, ShoppingBag, User, HelpCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';

// Main Component with Header and Navbar
const HeaderNavbar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Mock product data for search
  const mockProducts: SearchResult[] = [
    {
      id: 1,
      name: "Wool Runner",
      category: "Men's Shoes",
      price: 98,
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Tree Dasher",
      category: "Women's Shoes",
      price: 128,
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Wool Pipers",
      category: "Men's Shoes",
      price: 98,
      image: "/api/placeholder/100/100"
    }
  ];

  // Handle scroll to show or hide the header only
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide header when scrolling down and show it when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle product search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Toggle search overlay visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  return (
    <div>
      {/* Header Component */}
      <header 
        className={`transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
            Free Shipping On Orders Over $75. Free Returns.
          </p>
          <div className="inline-flex gap-1 items-center">
            <Link href="/shop">
              <p>Get started now!</p>
            </Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Search Header */}
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="flex items-center flex-1">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="ml-2 flex-1 text-base outline-none placeholder-gray-400"
                  autoFocus
                />
              </div>
              <button
                onClick={toggleSearch}
                className="ml-4 p-1.5 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search Results */}
            <div className="py-3">
              {searchQuery && (
                <p className="text-sm text-gray-500 mb-3">
                  {searchResults.length} results for &quot;{searchQuery}&quot;
                </p>
              )}
              
              <div className="space-y-3">
                {searchResults.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.category}</p>
                      <p className="text-sm text-gray-900">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {searchQuery && searchResults.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-gray-500 text-sm">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="text-xs text-gray-400 mt-1">Try checking your spelling or using different keywords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-14">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              {/* Left Menu Items - Hidden on Mobile */}
              <div className="hidden lg:flex space-x-6">
                <a href="/men" className="text-gray-700 hover:text-gray-900 text-sm font-medium">MEN</a>
                <a href="/women" className="text-gray-700 hover:text-gray-900 text-sm font-medium">WOMEN</a>
                <a href="/socks" className="text-gray-700 hover:text-gray-900 text-sm font-medium">SOCKS</a>
                <a href="/sale" className="text-red-600 hover:text-red-700 text-sm font-medium">SALE</a>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="text-xl font-light italic">allbirds</a>
              </div>

              {/* Right Menu Items */}
              <div className="flex items-center">
                <div className="hidden lg:flex items-center space-x-6">
                  <a href="/sustainability" className="text-gray-700 hover:text-gray-900 text-sm font-medium">SUSTAINABILITY</a>
                  <a href="/return" className="text-gray-700 hover:text-gray-900 text-sm font-medium">RERUN</a>
                  <a href="/stores" className="text-gray-700 hover:text-gray-900 text-sm font-medium">STORES</a>
                </div>
                
                <div className="flex items-center space-x-3 ml-4">
                  <button
                    onClick={toggleSearch}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <Link href="/profile">
                    <User className="w-4 h-4 text-gray-700 cursor-pointer hidden sm:block" />
                  </Link>
                  <Link href="/help">
                    <HelpCircle className="w-4 h-4 text-gray-700 cursor-pointer hidden sm:block" />
                  </Link>
                  <div className="relative">
                    <Link href="/cart">
                      <ShoppingBag className="w-4 h-4 text-gray-700 cursor-pointer" />
                    </Link>
                    <span className="absolute -top-1 -right-1 bg-gray-700 text-white text-xs rounded-full w-3.5 h-3.5 flex items-center justify-center text-[10px]">99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute w-full bg-white z-40 border-b border-gray-200 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-1 space-y-2">
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">MEN</a>
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">WOMEN</a>
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">SOCKS</a>
          <a href="#" className="block py-2 text-sm text-red-600 hover:text-red-700 font-medium">SALE</a>
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">SUSTAINABILITY</a>
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">RERUN</a>
          <a href="#" className="block py-2 text-sm text-gray-700 hover:text-gray-900 font-medium">STORES</a>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="w-full border-b border-gray-200 hidden sm:block bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 h-12 items-center overflow-x-auto">
            <a href="#" className="text-gray-700 hover:text-gray-900 whitespace-nowrap">Men&apos;s Shoes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 whitespace-nowrap">Women&apos;s Shoes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 whitespace-nowrap">New Arrivals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
