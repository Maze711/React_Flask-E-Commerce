import { useState, useEffect } from 'react';
import './HomeCarousel.css';

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://placecats.com/neo/800/400",
      title: "Neo",
      description: "Beautiful cat enjoying the sunshine"
    },
    {
      id: 2,
      image: "https://placecats.com/millie/800/400",
      title: "Millie",
      description: "Playful and adorable companion"
    },
    {
      id: 3,
      image: "https://placecats.com/bella/800/400",
      title: "Bella",
      description: "Elegant and graceful feline"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      {/* Carousel Header */}
      <div className="carousel-header">
        <h2>Featured Gallery</h2>
      </div>

      {/* Main Carousel */}
      <div className="carousel-wrapper">
        {/* Slides Container */}
        <div className="carousel-slides">
          <div 
            className="slides-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="slide">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                />
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
