import { useEffect, useState } from 'react';

function MobileStickyBar({ openPopup }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleBrochureClick = () => {
    openPopup('Download Brochure');
  };

  return (
    <div className={`mobile-sticky-bar${visible ? ' sticky-bar-visible' : ''}`}>
      <div className="sticky-container">
        <a href="tel:+917776887293" className="sticky-btn btn-call">
          <i className="fa-solid fa-phone"></i> Call
        </a>
        <button
          className="sticky-btn btn-brochure"
          onClick={handleBrochureClick}
        >
          <i className="far fa-file-pdf"></i> Brochure
        </button>
        <a
          href="https://wa.me/917776887293"
          className="sticky-btn btn-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default MobileStickyBar;
