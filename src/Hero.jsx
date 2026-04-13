import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    style: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRINDAVAN%20ARIAL%20DAY.jpg.jpeg?h=5195&w=8250')"
  },
  {
    style: "url('https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRANDAVAN%20DAY%20DEC%203%20SEND.jpg.jpeg?w=8100&h=5100')"
  },
  {
    style: "url('https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRANDAVAN%20DAY%20%20VIEW%20%20ALL%20WINGS.jpg.jpeg?w=7425&h=5443')"
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    openPopup('Get Luxury Walkthrough');
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
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email (optional)" />
            <div className="tel-group">
              <select>
                <option>India (+91)</option>
                <option>UAE (+971)</option>
              </select>
              <input type="tel" placeholder="Mobile Number" required />
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
