import React from 'react';
import allbirdsImage from '../assets/allbirds.jpg'; // Ensure the image path is correct

const ComfortBanner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url(${allbirdsImage})`,
          backgroundColor: '#f3f4f6',
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-20 h-full container mx-auto px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Let Comfort
              <br />
              Take You Places
            </h1>
            <p className="text-lg text-white uppercase tracking-wider font-light">
              Two light bouncy sneaks. countless reasons
              <br />
              to get outside and reset.
            </p>
          </div>

          <div className="flex gap-4 mt-12">
            <button className="group relative px-8 py-3 bg-white text-gray-900 overflow-hidden">
              <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
                Shop Men
              </span>
              <div className="absolute inset-0 bg-gray-100 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </button>

            <button className="group relative px-8 py-3 bg-transparent border-2 border-white text-white overflow-hidden hover:bg-white hover:text-gray-900 transition-colors duration-300">
              <span className="text-sm font-medium uppercase tracking-wider">
                Shop Women
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortBanner;
