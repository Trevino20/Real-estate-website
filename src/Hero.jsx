import { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
  
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
=======

// Import all hero slides — Vite will hash and cache these
import heroSlideImage  from './assets/VRANDAVAN-DAY-DEC-3-SEND.webp';
import heroSlideImage1 from './assets/VRINDAVAN-ARIAL-DAY.webp';
import heroSlideImage2 from './assets/VRANDAVAN-DAY--VIEW--ALL-WINGS.webp';

const slides = [
  { src: heroSlideImage,  alt: 'Trident Vrindavan – Day View' },
  { src: heroSlideImage1, alt: 'Trident Vrindavan – Arial View' },
  { src: heroSlideImage2, alt: 'Trident Vrindavan – All Wings' },
];

// ── Paste your Google Apps Script Web App URL below ──────────────────────────
const SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwhi6UnVLmzVY7hqXa1z2ExlMgIXOMdXV2aOv5Jw1ED8qdZz3vQCy_MjBAu0E0Zjewz/exec";
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef(null);

  const showSlide = (n) => {
    setSlideIndex((n + slides.length) % slides.length);
  };

  const moveSlide = (step) => {
    setSlideIndex((prev) => (prev + step + slides.length) % slides.length);
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
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

<<<<<<< HEAD
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
=======
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Build FormData exactly like the working HTML example
    const sheetData = new FormData();
    sheetData.append('timestamp',    '');                                   // filled by script
    sheetData.append('name',         e.target.querySelector('[name=name]').value);
    sheetData.append('email',        e.target.querySelector('[name=email]').value);
    sheetData.append('country_code', e.target.querySelector('[name=country_code]').value);
    sheetData.append('phone',        e.target.querySelector('[name=phone]').value);
    sheetData.append('source',       'Hero Form');

    // Send to Google Sheet (same pattern as working HTML — no JSON, plain FormData)
    fetch(SHEET_SCRIPT_URL, { method: 'POST', body: sheetData })
      .catch(() => {}); // silently ignore; no-cors not needed with FormData

    // Also send via web3forms
    const web3Data = new FormData(e.target);
    web3Data.append('access_key', 'f38e771e-e954-4234-9e28-5d0cc8f2b3b7');
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: web3Data })
      .catch(() => {});

    e.target.reset();
    e.target.querySelector('#cbox').checked = true;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      {showToast && (
        <div style={{
          position: 'fixed', top: '20px', left: '50%',
          transform: 'translateX(-50%)',
          background: '#d4a24c', color: '#fff',
          padding: '14px 30px', borderRadius: '8px',
          zIndex: 999999, fontFamily: 'Poppins, sans-serif',
          fontSize: '15px', fontWeight: 500,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          Thank you! We will contact you shortly.
        </div>
      )}
    <main className="hero" id="home">
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
      <section className="slider-container">
        <div className="slider" id="heroSlider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`slide${i === slideIndex ? ' active' : ''}`}
<<<<<<< HEAD
              style={{ backgroundImage: slide.style }}
            />
=======
              style={{ backgroundImage: `url(${slide.src})` }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                aria-hidden="true"
                fetchpriority={i === 0 ? 'high' : 'low'}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding={i === 0 ? 'sync' : 'async'}
                style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }}
              />
            </div>
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
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

<<<<<<< HEAD
      {/* Info Panel */}
      <aside className="info-panel">
        <div className="fade-in">
          <p className="sub-head">The New Pride Of Badlapur</p>
          <h1 className="main-head">Trident Vrindavan</h1>
          <p className="price-label">Luxury 1, 2 &amp; 3 Bed Residences starting at</p>
          <h2 className="price-value">₹31.99 Lakhs*</h2>
=======
      <aside className="info-panel">
        <div className="fade-in">
          <p className="sub-head hero-anim" style={{ animationDelay: '0.1s' }}>The New Pride Of Badlapur</p>
          <h1 className="main-head hero-anim" style={{ animationDelay: '0.25s' }}>Trident Vrindavan</h1>
          <p className="price-label hero-anim" style={{ animationDelay: '0.4s' }}>Luxury 1, 2 &amp; 3 Bed Residences starting at</p>
          <h2 className="price-value hero-anim" style={{ animationDelay: '0.55s' }}>₹31.99 Lakhs*</h2>
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
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
<<<<<<< HEAD
              <input type="tel" name="phone" placeholder="Mobile Number" required />
=======
              <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength={10} onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} />
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
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
<<<<<<< HEAD
=======
    </>
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
  );
}

export default Hero;