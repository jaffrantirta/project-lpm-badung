"use client";

import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <div className="relative w-full mx-auto overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      </div>
  );
};

export default Carousel;
