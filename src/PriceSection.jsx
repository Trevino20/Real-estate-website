import { useEffect, useRef } from 'react';
import floorplanImg from './assets/price.webp';
import { useScrollReveal } from './useScrollReveal';

const priceData = [
  { type: '1 BHK', area: '665-735 Sqft', price: '₹ 36.39-39.83 Lakhs*' },
  { type: '1 BHK', area: '765-995 Sqft', price: '₹ 41.31-54.58 Lakhs*' },
  { type: '2 BHK', area: '980-985 Sqft', price: '₹ 54.92-55.18 Lakhs*' },
  { type: '3 BHK', area: '1020-1095 Sqft', price: '₹ 56.97-60.80 Lakhs*' },
  // { type: 'Office', area: '3100-1320 Sqft', price: '₹ 71.26-72.28 Lakhs*' },
  // { type: 'Studio', area: '1050-1010 Sqft', price: '₹ 81.73-81.99 Lakhs*' }
];

function PriceSection({ openPopup }) {
  const gridRef = useRef(null);
  const sectionRef = useScrollReveal('.reveal', 0.1);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.fade-up');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="price-section" id="pricing" ref={sectionRef}>
      <div className="heading-container reveal">
        <div className="line"></div>
        <h2>Price</h2>
        <div className="line"></div>
      </div>

      <div className="price-grid" id="priceGrid" ref={gridRef}>
        {priceData.map((item, index) => (
          <div
            key={index}
            className="price-card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="image-box">
              <img src={floorplanImg} alt="Floor Plan" />
              <div className="zoom-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <div className="row">
                <span className="label">Typology</span>
                <span className="value typology">{item.type}</span>
              </div>
              <div className="row">
                <span className="label">Carpet Area</span>
                <span className="value">{item.area}</span>
              </div>
              <div className="row">
                <span className="label">Price</span>
                <span className="value price">{item.price}</span>
              </div>
              <div className="row">
                <span className="label">Price Sheet</span>
                <button
                  className="btn-details"
                  onClick={() => openPopup('Get Price Details')}
                >
                  Get Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PriceSection;
