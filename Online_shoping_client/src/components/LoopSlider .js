import React, { useState, useEffect } from 'react';


const LoopSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images?.length) % images?.length);
  };

  return (
    <div className="loop-slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={Array.isArray(images)?images[currentSlide]:""} alt={`Slide ${currentSlide}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};


export default LoopSlider ;
