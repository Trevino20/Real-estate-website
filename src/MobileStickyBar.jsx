<<<<<<< HEAD
function MobileStickyBar({ openPopup }) {
  const handleClick = (e) => {
    e.preventDefault();
    openPopup('Contact Us');
  };

  return (
    <div className="mobile-sticky-bar">
      <div className="sticky-container">
        <a
          href="tel:+917776887293"
          className="sticky-btn btn-call"
          // onClick={handleClick}
        >
          <i className="fa-solid fa-phone"></i> Call
        </a>
=======
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
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
        <a
          href="https://wa.me/917776887293"
          className="sticky-btn btn-whatsapp"
          target="_blank"
          rel="noreferrer"
<<<<<<< HEAD
          // onClick={handleClick}
=======
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
        >
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default MobileStickyBar;
