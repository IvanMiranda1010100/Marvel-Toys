import React, { useState, useEffect } from 'react';

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2812/xR10Bo3dC6iArjBJDE73LgYj.jpg",
    "https://sm.ign.com/ign_es/screenshot/default/br_fq24.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/mayores-villanos-universo-marvel-comics_11.jpg?tf=3840x",
    "https://i.blogs.es/95fcf3/sdcc_avengerssecretwars/1366_2000.jpeg",
    "https://iforum-sg.c.hihonor.com/latin/latin_data/images/2020/12/18/055980a7-7876-41c7-801c-1cd186fdd523.jpg?imageId=298373"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="default-carousel" className="relative block w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
        {images.map((src, index) => (
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
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute flex space-x-3 -translate-x-1/2 z-[4] bottom-3 left-1/2 rtl:space-x-reverse">
        {images.map((_, index) => (
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
    </div>
  );
};
