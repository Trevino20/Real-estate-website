import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from './useScrollReveal';

import towerImg from './assets/ABHINAV-AVASTHI--VIEW-01.webp';
import bedroomImg from './assets/BEDROOM.avif';
import mroom from './assets/MROOM.jpg';
import poolImg from './assets/VRINDAVAN-SWIMING-POOL-1.webp';
import mandirImg from './assets/VRINDAVAN-MANDIR.webp';
import gardenImg from './assets/VRINDAVAN-GARDEN-01.webp';
import image1 from './assets/VRANDAVAN-DAY--VIEW-A-WING.webp';

const galleryData = [
  {
    src: towerImg,
    alt: 'Tower Elevation',
    label: 'Tower Elevation',
    category: 'exterior',
    featured: true
  },
  {
    src: bedroomImg,
    alt: 'Bedroom',
    label: 'Bedroom',
    category: 'interior'
  },
  {
    src: mroom,
    alt: 'Master Bedroom',
    label: 'Master Bedroom',
    category: 'interior'
  },
  {
    src: poolImg,
    alt: 'Swimming Pool',
    label: 'Swimming Pool',
    category: 'amenities'
  },
  {
    src: mandirImg,
    alt: 'Krishna Mandir',
    label: 'Krishna Mandir',
    category: 'exterior'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    alt: 'Fitness Center',
    label: 'Fitness Center',
    category: 'amenities'
  },

  {
    src: gardenImg,
    alt: 'Garden View',
    label: 'VRINDAVAN GARDEN',
    category: 'amenities'
  },
  {
    src: image1,
    alt: 'Day View - A Wing',
    label: 'Day View - A Wing',
    category: 'aerial'
  }
];

const tabs = [
  { label: 'All', filter: 'all' },
  { label: 'Exterior', filter: 'exterior' },
  { label: 'Interior', filter: 'interior' },
  { label: 'Amenities', filter: 'amenities' },
  { label: 'Aerial View', filter: 'aerial' }
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useScrollReveal('.reveal', 0.1);

  const visibleItems = galleryData.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, visibleItems.length]);

  const getGridStyle = (item, filter) => {
    if (filter === 'all' && item.featured) {
      return { gridColumn: 'span 2', gridRow: 'span 2' };
    }
    return {};
  };

  return (
    <section className="gallery-section" id="gallery" ref={ref}>
      <div className="gallery-container">
        <div className="gallery-header reveal">
          <div className="line"></div>
          <h2>Gallery</h2>
          <div className="line"></div>
        </div>
        <p className="gallery-subtitle reveal" style={{ transitionDelay: '0.1s' }}>
          Explore every corner of Trident Vrindavan through our curated gallery
        </p>

        {/* Tabs */}
        <div className="gallery-tabs reveal" style={{ transitionDelay: '0.2s' }}>
          {tabs.map((tab) => (
            <button
              key={tab.filter}
              className={`gallery-tab${activeFilter === tab.filter ? ' active' : ''}`}
              data-filter={tab.filter}
              onClick={() => setActiveFilter(tab.filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid" id="galleryGrid">
          {visibleItems.map((item, index) => (
            <div
              key={`${activeFilter}-${index}`}
              className={`gallery-item${item.featured && activeFilter === 'all' ? ' featured' : ''}`}
              data-category={item.category}
              style={getGridStyle(item, activeFilter)}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              <div className="gallery-item-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`gallery-lightbox${lightboxOpen ? ' active' : ''}`}
        id="galleryLightbox"
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
      >
        <span className="lightbox-close" id="lightboxClose" onClick={closeLightbox}>
          <i className="fa-solid fa-times"></i>
        </span>
        <button className="lightbox-nav lightbox-prev" id="lightboxPrev" onClick={goPrev}>
          &#10094;
        </button>
        {lightboxOpen && visibleItems[currentIndex] && (
          <img
            src={visibleItems[currentIndex].src}
            alt="Gallery Image"
            id="lightboxImg"
            decoding="async"
          />
        )}
        <button className="lightbox-nav lightbox-next" id="lightboxNext" onClick={goNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Gallery;
