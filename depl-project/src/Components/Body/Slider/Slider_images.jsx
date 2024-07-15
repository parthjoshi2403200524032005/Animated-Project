import React, { useState, useEffect } from "react";
import "./Slider_images.css";
import image1 from "./Slider_images/84770f_6ae4822c69ed4fb48148b9e04fc0702b~mv2.jpg";
import image2 from "./Slider_images/aa.jpg";
import image3 from "./Slider_images/bbb.jpg";
import image4 from "./Slider_images/mmmm.jpg";
import image5 from "./Slider_images/nnnn.jpg";

const images = [image1, image2, image3, image4, image5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container ">
      <div className="image-container zindex" >
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="wrapper ten">
        <div className="overlay">
          <h3 className="bounce">
            <span>I</span>
            <span>LIKE</span>
            <span>TO</span>
            <span>YOU</span>
          </h3>
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            // fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      <button className="next-button" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            // fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
