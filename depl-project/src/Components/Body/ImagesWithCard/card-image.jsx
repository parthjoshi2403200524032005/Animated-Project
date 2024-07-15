import React, { useState, useEffect, useRef } from "react";
import "./card-image.css";

const CardsImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const [showButtons, setShowButtons] = useState(true);
  const slideInterval = useRef(null);

  const array = [
    <article className="card card--1">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">15 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Recipe</span>
        <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            Celeste Mills
          </a>
        </span>
      </div>
    </article>,

    <article className="card card--2">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">15 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Recipe</span>
        <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            Celeste Mills
          </a>
        </span>
      </div>
    </article>,

    <article className="card card--3">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">5 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Travel</span>
        <h3 className="card__title">Discover the sea</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            John Doe
          </a>
        </span>
      </div>
    </article>,

    <article className="card card--4">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">5 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Travel</span>
        <h3 className="card__title">Discover the sea</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            John Doe
          </a>
        </span>
      </div>
    </article>,

    <article className="card card--5">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">5 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Travel</span>
        <h3 className="card__title">Discover the sea</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            John Doe
          </a>
        </span>
      </div>
    </article>,

    <article className="card card--6">
      <div className="card__info-hover">
        <svg className="card__like" viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
          />
        </svg>
        <div className="card__clock-info">
          <svg className="card__clock" viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
          <span className="card__time">5 min</span>
        </div>
      </div>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category"> Travel</span>
        <h3 className="card__title">Discover the sea</h3>
        <span className="card__by">
          by{" "}
          <a href="/" className="card__author" title="author">
            John Doe
          </a>
        </span>
      </div>
    </article>
  ];

  const totalSlides = array.length;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumCardsToShow(1);
        setShowButtons(false);
      } else if (window.innerWidth <= 1024) {
        setNumCardsToShow(2);
        setShowButtons(true);
      } else {
        setNumCardsToShow(3);
        setShowButtons(true);
      }
    };

    // Call handleResize once after the initial render
    handleResize();

    // Add event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only once after the initial render

  const startAutoSlide = () => {
    // Only start auto slide if there are more cards than can be shown
    if (totalSlides > numCardsToShow) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide + numCardsToShow < totalSlides ? prevSlide + 1 : 0
        );
      }, 6000);
    }
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [numCardsToShow, totalSlides]);

  const handleMouseEnter = () => {
    clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + numCardsToShow < totalSlides ? prevSlide + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - numCardsToShow : prevSlide - 1
    );
  };

  return (
    <div
      className={`flex bg-[#d8eff7] h-[600px] mt-[20px] main  rounded-[20px]`}
    >
      {showButtons && (
        <button
          onClick={prevSlide}
          className="next transition duration-300 transform hover:scale-110  h-[50px] w-[50px] bg-gray-200 rounded-full flex items-center justify-center focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </button>
      )}
      <div
        className="flex w-full mt-12 mb-8 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className="cards" id="cards">
          {array
            .slice(currentSlide, currentSlide + numCardsToShow)
            .map((card, index) => (
              <div key={index} className="card-wrapper">
                {card}
              </div>
            ))}
        </section>
      </div>
      {showButtons && (
        <button
          onClick={nextSlide}
          className="next transition duration-300 transform hover:scale-110  h-[50px] w-[50px]  bg-gray-200 rounded-full flex items-center justify-center focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default CardsImages;
