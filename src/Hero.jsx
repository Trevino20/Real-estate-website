import { useState, useEffect, useRef } from 'react';
  
import heroSlideImage from './assets/VRINDAVAN ARIAL DAY.jpg.jpeg';
import heroSlideImage1 from './assets/VRANDAVAN DAY DEC 3 SEND.jpg.jpeg';
import heroSlideImage2 from './assets/VRANDAVAN DAY  VIEW  ALL WINGS.jpg.jpeg';

const slides = [
  {
    style:  `url(${heroSlideImage1})`
  },
  {
    style: `url(${heroSlideImage})`
  },
  {
    style: `url(${heroSlideImage2})`
  }
];

function Hero({ openPopup }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef(null);

  const showSlide = (n) => {
    setSlideIndex((prev) => {
      const next = (n + slides.length) % slides.length;
      return next;
    });
  };

  const moveSlide = (step) => {
    setSlideIndex((prev) => {
      const next = (prev + step + slides.length) % slides.length;
      return next;
    });
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "f38e771e-e954-4234-9e28-5d0cc8f2b3b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      // KEEP your existing logic
      openPopup('Get Luxury Walkthrough');

      if (!data.success) {
        console.log("Submission failed");
      }

      e.target.reset();
      e.target.querySelector('#cbox').checked = true;

    } catch (error) {
      console.log("Error submitting form");
      openPopup('Get Luxury Walkthrough'); // still open popup even if error
    }
  };

  return (
    <main className="hero" id="home">
      {/* Slider */}
      <section className="slider-container">
        <div className="slider" id="heroSlider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`slide${i === slideIndex ? ' active' : ''}`}
              style={{ backgroundImage: slide.style }}
            />
          ))}
        </div>

        <button className="arrow prev" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="arrow next" onClick={() => moveSlide(1)}>&#10095;</button>

        <div className="dots" id="dot-container">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot${i === slideIndex ? ' active' : ''}`}
              onClick={() => { showSlide(i); resetTimer(); }}
            />
          ))}
        </div>
      </section>

      {/* Info Panel */}
      <aside className="info-panel">
        <div className="fade-in">
          <p className="sub-head">The New Pride Of Badlapur</p>
          <h1 className="main-head">Trident Vrindavan</h1>
          <p className="price-label">Luxury 1, 2 &amp; 3 Bed Residences starting at</p>
          <h2 className="price-value">₹31.99 Lakhs*</h2>
        </div>

        <div className="form-box fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="form-tag">Get Luxury Walkthrough</div>
          <p className="form-subtitle">Tailored For You</p>

          <form id="leadForm" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email (optional)" />
            <div className="tel-group">
              <select name="country_code">
                <option>India (+91)</option>
                <option>UAE (+971)</option>
              </select>
              <input type="tel" name="phone" placeholder="Mobile Number" required />
            </div>
            <div className="consent-area">
              <input type="checkbox" id="cbox" required defaultChecked />
              <label htmlFor="cbox">
                I consent to the use of provided data in accordance with the{' '}
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>privacy policy</span>
              </label>
            </div>
            <button type="submit" className="btn-submit">Get It Now</button>
          </form>
        </div>
      </aside>
    </main>
  );
}

export default Hero;