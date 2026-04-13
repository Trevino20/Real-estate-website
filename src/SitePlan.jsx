import { useState, useRef } from 'react';

const floorPlans = [
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/A-wing.png',
    alt: 'A Wing Floor Plan',
    title: 'Wing A \u00a0(1st to 7th, 9th & 10th Floor Plan)'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/awing2.png',
    alt: '8th Floor Plan A Wing',
    title: 'Wing A \u00a0(8th Floor Plan)'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/bwing1.png',
    alt: 'B Wing Floor Plan',
    title: 'Wing B \u00a0(1st to 7th, 9th & 10th Floor Plan)'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/bwing2.png',
    alt: 'B Wing Floor Plan - 8th Floor',
    title: 'Wing B \u00a0(8th Floor Plan)'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/cwing1.png',
    alt: 'C Wing Floor Plan',
    title: 'Wing C \u00a0(1st to 7th, 9th to 12th Floor Plan)'
  },
  {
    src: 'https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/cwing2.png',
    alt: 'C Wing Floor Plan - 8th Floor',
    title: 'Wing C \u00a0(8th Floor Plan)'
  }
];

function SitePlan({ openPopup }) {
  const [isHovering, setIsHovering] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);

  const handleCardMouseEnter = () => setIsHovering(true);
  const handleCardMouseLeave = () => setIsHovering(false);

  const handleCardClick = (index) => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      if (mobileActiveIndex === index) {
        setMobileActiveIndex(null);
        setIsHovering(false);
      } else {
        setMobileActiveIndex(index);
        setIsHovering(true);
      }
    }
  };

  const handleOverlayBtnClick = (e) => {
    e.stopPropagation();
    openPopup('Get Floor Plan Details');
  };

  return (
    <section className="siteplan-section" id="siteplan">
      <div className="siteplan-header">
        <div className="line"></div>
        <h2>Site &amp; Floor Plan</h2>
        <div className="line"></div>
      </div>

      <div
        className={`floorplan-grid${isHovering ? ' is-hovering' : ''}`}
        id="cardGrid"
        onClick={(e) => {
          if (!e.target.closest('.floorplan-card')) {
            setMobileActiveIndex(null);
            setIsHovering(false);
          }
        }}
      >
        {floorPlans.map((plan, index) => (
          <div
            key={index}
            className={`floorplan-card${mobileActiveIndex === index ? ' mobile-active' : ''}`}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            onClick={() => handleCardClick(index)}
          >
            <div className="fp-image-container">
              <img src={plan.src} alt={plan.alt} />
              <div className="fp-card-overlay">
                <button className="overlay-btn" onClick={handleOverlayBtnClick}>
                  Typical Floor Plan
                </button>
              </div>
            </div>
            <p className="card-title">{plan.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SitePlan;
