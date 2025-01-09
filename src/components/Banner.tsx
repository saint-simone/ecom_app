'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ComfortBannerCarousel = () => {
  const slides = [
    {
      id: 1,
      src: '/pexels-borevina-1778412.jpg',
      alt: 'Comfort banner background 1',
      title: 'Let Comfort Take You Places',
      description:
        'Two light bouncy sneaks. Countless reasons to get outside and reset.',
      buttons: [
        { label: 'Shop Men', style: 'primary' },
        { label: 'Shop Women', style: 'secondary' },
      ],
    },
    {
      id: 2,
      src: '/pexels-athul-adhu-186900-684152.jpg',
      alt: 'Comfort banner background 2',
      title: 'Step Into Elegance',
      description: 'Find timeless designs for any occasion.',
      buttons: [
        { label: 'Explore Collection', style: 'primary' },
        { label: 'Shop Now', style: 'secondary' },
      ],
    },
    {
      id: 3,
      src: '/pexels-mikhail-nilov-8456072.jpg',
      alt: 'Comfort banner background 3',
      title: 'Adventure Awaits',
      description: 'Gear up for your next journey with our latest arrivals.',
      buttons: [
        { label: 'Shop Gear', style: 'primary' },
        { label: 'Learn More', style: 'secondary' },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer); // Clear interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Image carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-30" />

      {/* Content */}
      <div className="relative z-40 h-full container mx-auto px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg text-white uppercase tracking-wider font-light">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex gap-4 mt-12">
            {slides[currentSlide].buttons.map((button, idx) => (
              <button
                key={idx}
                className={`px-8 py-3 text-sm font-medium uppercase tracking-wider ${
                  button.style === 'primary'
                    ? 'bg-white text-gray-900'
                    : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortBannerCarousel;














// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const ComfortBannerCarousel = () => {
//   const images = [
//     {
//       id: 1,
//       src: '/pexels-borevina-1778412.jpg',
//       alt: 'Comfort banner background 1',
//     },
//     {
//       id: 2,
//       src: '/pexels-athul-adhu-186900-684152.jpg',
//       alt: 'Comfort banner background 2',
//     },
//     {
//       id: 3,
//       src: '/pexels-mikhail-nilov-8456072.jpg',
//       alt: 'Comfort banner background 3',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 2000);

//     return () => clearInterval(timer); // Clear interval on unmount
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-96 overflow-hidden">
//       {/* Image carousel */}
//       <div className="absolute inset-0 transition-transform duration-500 ease-in-out">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="absolute inset-0 w-full h-full object-cover object-center"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-30" />

//       {/* Content container */}
//       <div className="relative z-40 h-full container mx-auto px-6 lg:px-8">
//         <div className="h-full flex flex-col justify-center items-start">
//           <div className="max-w-2xl space-y-6">
//             <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
//               Let Comfort
//               <br />
//               Take You Places
//             </h1>
//             <p className="text-lg text-white uppercase tracking-wider font-light">
//               Two light bouncy sneaks. countless reasons
//               <br />
//               to get outside and reset.
//             </p>
//           </div>

//           <div className="flex gap-4 mt-12">
//             <button className="group relative px-8 py-3 bg-white text-gray-900 overflow-hidden">
//               <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
//                 Shop Men
//               </span>
//               <div className="absolute inset-0 bg-gray-100 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
//             </button>

//             <button className="group relative px-8 py-3 bg-transparent border-2 border-white text-white overflow-hidden hover:bg-white hover:text-gray-900 transition-colors duration-300">
//               <span className="text-sm font-medium uppercase tracking-wider">
//                 Shop Women
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComfortBannerCarousel;


















// "use client"

// import Image from 'next/image';
// import React from 'react';

// const ComfortBanner = () => {
//   return (
//     <div className="relative w-full h-96 overflow-hidden">
//       {/* Standard image with proper styling */}
//       <Image
//         src="/pexels-borevina-1778412.jpg"
//         alt="Comfort banner background"
//         fill
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       {/* Gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />

//       {/* Content container */}
//       <div className="relative z-20 h-full container mx-auto px-6 lg:px-8">
//         <div className="h-full flex flex-col justify-center items-start">
//           <div className="max-w-2xl space-y-6">
//             <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
//               Let Comfort
//               <br />
//               Take You Places
//             </h1>
//             <p className="text-lg text-white uppercase tracking-wider font-light">
//               Two light bouncy sneaks. countless reasons
//               <br />
//               to get outside and reset.
//             </p>
//           </div>

//           <div className="flex gap-4 mt-12">
//             <button className="group relative px-8 py-3 bg-white text-gray-900 overflow-hidden">
//               <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
//                 Shop Men
//               </span>
//               <div className="absolute inset-0 bg-gray-100 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
//             </button>

//             <button className="group relative px-8 py-3 bg-transparent border-2 border-white text-white overflow-hidden hover:bg-white hover:text-gray-900 transition-colors duration-300">
//               <span className="text-sm font-medium uppercase tracking-wider">
//                 Shop Women
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComfortBanner;