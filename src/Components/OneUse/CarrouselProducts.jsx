import React, { useState, useEffect } from 'react';
import { products } from '@lib/data';

export const Carrousel = ({ productName }) => {
  // Filtrar productos por nombre
  const productImages = products
    .filter(product => product.name === productName)
    .flatMap(product =>
      product.images.length > 0 ? product.images : [product.image]
    );

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + productImages.length) % productImages.length);
  };

  return (
    <>
    <div id="default-carousel" className="relative block w-full">
      {/* Carousel wrapper */}
      <div className="relative contenedor h-[300px] overflow-hidden rounded-lg md:h-[500px]">
        {productImages.length > 0 ? (
          productImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item={index === currentIndex ? 'active' : ''}
            >
              <img
                src={src}
                className="block object-contain w-full h-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No images available</p>
        )}
      </div>
      {/* Slider indicators */}
      <div className="absolute flex space-x-3 -translate-x-1/2 z-[99] bottom-3 left-1/2 rtl:space-x-reverse">
        {productImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full opacity-10 hover:opacity-75 ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      {/* Navigation buttons */}
      {productImages.length === 1 ? (
        ''
      )
      : (
        <>
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-20 rounded-full">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-20 rounded-full">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="opacity-50 icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
      </button>
      </>
      )
    }
    </div>

    <style>{`
        .contenedor{
          @media(max-width:420px){
          .contenedor{
           height:250px;
          }
          }
          @media(min-width:421px)(max-width:500px){
          .contenedor{
          height:350px;
          }
          }
        }
      `}</style>
      </>
  );
};
