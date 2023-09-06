import React, { useState, useEffect } from 'react';

const images = [
  'imagen1.jpg',
  'imagen2.jpg',
  'imagen3.jpg',
  // Agrega más imágenes aquí
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia la imagen actual
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative overflow-hidden h-96 w-72">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full }h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
