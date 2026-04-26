import { useRef } from 'react';
import { useScrollReveal } from './useScrollReveal';

import communityHallImg from './assets/ABHINAV-AVASTHI--VIEW-01.webp';
import swimmingPoolImg from './assets/VRINDAVAN-SWIMING-POOL-1.webp';
import mandirImg from './assets/VRINDAVAN-MANDIR.webp';
import gardenImg from './assets/VRINDAVAN-GARDEN-01.webp';

const amenities = [
  {
    src: communityHallImg,
    alt: 'Multipurpose Hall',
    title: 'Community Hall'
  },
  {
    src: swimmingPoolImg,
    alt: 'Infinity Pool',
    title: 'Swimming Pool'
  },
  {
    src: mandirImg,
    alt: 'Open Amphitheatre',
    title: 'Krishna Mandir'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    alt: 'Fitness Center',
    title: 'Fitness Center'
  },
  {
    src: gardenImg,
    alt: 'Kids Play Area',
    title: 'VRINDAVAN GARDEN'
  }
];

function Amenities() {
  const sliderTrackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const revealRef = useScrollReveal('.reveal', 0.1);

  const getScrollStep = () => {
    const firstCard = sliderTrackRef.current?.querySelector('.amenity-card');
    return firstCard ? firstCard.offsetWidth + 25 : 345;
  };

  const handleNext = () => {
    sliderTrackRef.current?.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  };

  const handlePrev = () => {
    sliderTrackRef.current?.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  };

  const handleScroll = () => {
    const track = sliderTrackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (prevBtnRef.current) {
      prevBtnRef.current.style.opacity = track.scrollLeft < 5 ? '0.3' : '0.8';
      prevBtnRef.current.style.pointerEvents = track.scrollLeft < 5 ? 'none' : 'auto';
    }
    if (nextBtnRef.current) {
      nextBtnRef.current.style.opacity = track.scrollLeft >= maxScroll - 5 ? '0.3' : '0.8';
      nextBtnRef.current.style.pointerEvents = track.scrollLeft >= maxScroll - 5 ? 'none' : 'auto';
    }
  };

  return (
    <section className="amenities-section" id="amenities" ref={revealRef}>
      <div className="amenities-heading reveal">
        <div className="line"></div>
        <h2>Amenities</h2>
        <div className="line"></div>
      </div>

      <div className="slider-wrapper">
        <button
          className="nav-btn prev-amenity"
          id="prevBtn"
          ref={prevBtnRef}
          aria-label="Previous"
          onClick={handlePrev}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div
          className="slider-track"
          id="sliderTrack"
          ref={sliderTrackRef}
          onScroll={handleScroll}
        >
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <img
                src={amenity.src}
                alt={amenity.alt}
                loading="lazy"
                decoding="async"
                width="320"
                height="240"
              />
              <div className="amenity-overlay">
                <h3>{amenity.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-btn next-amenity"
          id="nextBtn"
          ref={nextBtnRef}
          aria-label="Next"
          onClick={handleNext}
        >
          <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Amenities;
