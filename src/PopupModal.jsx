import { useEffect, useState } from 'react';

// ── Paste your Google Apps Script Web App URL below ──────────────────────────
const SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwhi6UnVLmzVY7hqXa1z2ExlMgIXOMdXV2aOv5Jw1ED8qdZz3vQCy_MjBAu0E0Zjewz/exec";
// ─────────────────────────────────────────────────────────────────────────────

function PopupModal({ isOpen, title, onClose }) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build FormData exactly like the working HTML example
    const sheetData = new FormData();
    sheetData.append('timestamp',    '');                                    // filled by script
    sheetData.append('name',         e.target.querySelector('[name=name]').value);
    sheetData.append('email',        e.target.querySelector('[name=email]').value);
    sheetData.append('country_code', e.target.querySelector('[name=country_code]').value);
    sheetData.append('phone',        e.target.querySelector('[name=phone]').value);
    sheetData.append('source',       `Popup – ${title}`);

    // Send to Google Sheet (same pattern as working HTML — plain FormData)
    fetch(SHEET_SCRIPT_URL, { method: 'POST', body: sheetData })
      .catch(() => {});

    // Also send via web3forms
    const web3Data = new FormData(e.target);
    web3Data.append('access_key', 'f38e771e-e954-4234-9e28-5d0cc8f2b3b7');
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: web3Data })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          onClose();
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
          e.target.reset();
          e.target.querySelector('#popupConsent').checked = true;
        } else {
          alert('Submission failed. Try again.');
        }
      })
      .catch(() => alert('Something went wrong!'));
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#d4a24c',
          color: '#fff',
          padding: '14px 30px',
          borderRadius: '8px',
          zIndex: 999999,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '15px',
          fontWeight: 500,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          animation: 'fadeInUp 0.4s ease'
        }}>
          Thank you! We will contact you shortly.
        </div>
      )}

      {/* Popup Overlay */}
      <div
        className={`popup-overlay${isOpen ? ' active' : ''}`}
        id="popupOverlay"
        onClick={handleOverlayClick}
      >
        <div className="popup-box">
          <button className="popup-close" onClick={onClose}>&times;</button>

          <div className="popup-header">
            <img
              src="https://69dbb75eb9fe4e9da070d86a.imgix.net/vrindavan%20logo.png?w=1875&h=1250"
              alt="Trident Vrindavan Logo"
              className="popup-logo"
            />
            <h2>{title}</h2>
          </div>

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-form-group">
              <input type="text" name="name" className="popup-input" placeholder="Name" required />
            </div>

            <div className="popup-form-group">
              <input type="email" name="email" className="popup-input" placeholder="Email (optional)" />
            </div>

            <div className="popup-form-group popup-phone-group">
              <select name="country_code" className="popup-input popup-country-select">
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+971">UAE (+971)</option>
              </select>
              <input type="tel" name="phone" className="popup-input" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength={10} onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} />
            </div>

            <div className="popup-checkbox-group">
              <input type="checkbox" id="popupConsent" required defaultChecked />
              <label htmlFor="popupConsent">
                I consent to the use of provided data in accordance with the{' '}
                <a href="#">privacy policy</a>
              </label>
            </div>

            <button type="submit" className="popup-submit-btn">Get It Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupModal;