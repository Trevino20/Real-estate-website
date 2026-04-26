import { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

const accordionData = [
  {
    title: 'Connectivity',
    items: [
      { name: 'UPCOMING BADLAPUR - PANVEL ROAD', time: '0 min' },
      { name: 'UPCOMING CHIKHLOI STATION', time: '10 min' },
      { name: 'KALYAN-BADLAPUR ROAD', time: '5 mins' },
      { name: 'Badlapur Railway Station', time: '15 mins' },
      { name: 'BADLAPUR-KATAI ROAD', time: '5 mins' }
    ]
  },
  {
    title: 'Education',
    items: [
      { name: 'PNew English School', time: '1 mins' },
      { name: 'Shri Narayana School', time: '3 mins' },
      { name: 'Aniruddha International School', time: '4 mins' },
      { name: 'Carmel Convent High School', time: '8 mins' }
    ]
  },
  {
    title: 'Retail & Recreation',
    items: [
      { name: 'UPCOMING MOVIE THEATRE', time: '5 mins' },
      { name: 'DMart', time: '10 mins' },
      { name: 'MAX SHOPPING', time: '15 mins' },
      { name: 'TANDOOR RAO', time: '1 mins' },
      { name: 'KONDESHWAR WATERFALLS', time: '15 mins' },
      { name: "MCDONALD'S", time: '6 mins' }
    ]
  },
  {
    title: 'Hospitals',
    items: [
      { name: 'BALAJI MULTI SPECIALITY HOSPITAL', time: '2 mins' },
      { name: 'ETRIX MULTI SPECIALITY HOSPITAL', time: '3 mins' },
      { name: 'MAXCARE HOSPITAL', time: '4 mins' },
      { name: 'NEW DHANVANTARI HOSPITAL', time: '5 mins' },
      { name: 'DENTLE CARE HOSPITAL', time: '5 mins' }
    ]
  }
];

function Location({ openPopup }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useScrollReveal('.reveal, .reveal-left, .reveal-right', 0.1);

  const handleAccordionClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="location-section" id="location" ref={ref}>
      <div className="loc-header reveal">
        <div className="line"></div>
        <h2>Location</h2>
        <div className="line"></div>
      </div>

      <div className="location-grid">
        {/* Map */}
        <div className="map-wrapper reveal-left" style={{ transitionDelay: '0.1s' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6427.345652824899!2d73.22110612017684!3d19.161506882364446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed3f834bbc37%3A0xc86391f7e1d0b4a2!2sTrident%20Vrindavan!5e0!3m2!1sen!2sin!4v1776071011526!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trident Vrindavan Location"
          />
        </div>

        {/* Accordion */}
        <div className="accordion reveal-right" style={{ transitionDelay: '0.2s' }} id="locationAccordion">
          {accordionData.map((section, index) => (
            <div
              key={index}
              className={`accordion-item${activeIndex === index ? ' active' : ''}`}
            >
              <div
                className="accordion-header"
                onClick={() => handleAccordionClick(index)}
              >
                <h3>{section.title}</h3>
                <span className="acc-arrow">&#9660;</span>
              </div>
              <div className="accordion-content">
                <ul className="location-list">
                  {section.items.map((item, i) => (
                    <li key={i} className="location-row">
                      <span>{item.name}</span>
                      <span className="time-badge">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="btn-container reveal" style={{ transitionDelay: '0.3s' }}>
          <button
            className="request-btn"
            onClick={(e) => { e.preventDefault(); openPopup('Request Location Details'); }}
          >
            Request Location Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default Location;
