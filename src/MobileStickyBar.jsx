import { useEffect, useState } from 'react';

function StickyContactBar({ openPopup }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleBrochureClick = () => {
    openPopup('Download Brochure');
  };

  return (
    <>
      {/* ── Mobile: bottom bar ── */}
      <div className={`mobile-sticky-bar${visible ? ' sticky-bar-visible' : ''}`}>
        <div className="sticky-container">
          <a href="tel:+919004398491" className="sticky-btn btn-call">
            <i className="fa-solid fa-phone"></i> Call
          </a>
          <button className="sticky-btn btn-brochure" onClick={handleBrochureClick}>
            <i className="far fa-file-pdf"></i> Brochure
          </button>
          <a
            href="https://wa.me/919004398491"
            className="sticky-btn btn-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>

      {/* ── Desktop: floating column (bottom-right) ── */}
      <div className={`desktop-sticky-bar${visible ? ' sticky-bar-visible' : ''}`}>
        <a href="tel:+919004398491" className="desktop-sticky-btn btn-call">
          <i className="fa-solid fa-phone"></i> 
        </a>
        <a
          href="https://wa.me/919004398491"
          className="desktop-sticky-btn btn-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i> 
        </a>
      </div>
    </>
  );
}

export default StickyContactBar;

