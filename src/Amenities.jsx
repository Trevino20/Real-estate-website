import { useRef } from 'react';

const amenities = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    alt: 'Multipurpose Hall',
    title: 'Community Hall'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRINDAVAN%20SWIMING%20POOL%201.jpg.jpeg',
    alt: 'Infinity Pool',
    title: 'Swimming Pool'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRINDAVAN%20MANDIR.jpg.jpeg',
    alt: 'Open Amphitheatre',
    title: 'Krishna Mandir'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    alt: 'Fitness Center',
    title: 'Fitness Center'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRINDAVAN%20GARDEN%2001.jpg.jpeg',
    alt: 'Kids Play Area',
    title: 'VRINDAVAN GARDEN'
  }
];

function Amenities() {
  const sliderTrackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

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
    <section className="amenities-section" id="amenities">
      <div className="amenities-heading">
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
              <img src={amenity.src} alt={amenity.alt} />
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
