function MobileStickyBar({ openPopup }) {
  const handleClick = (e) => {
    e.preventDefault();
    openPopup('Contact Us');
  };

  return (
    <div className="mobile-sticky-bar">
      <div className="sticky-container">
        <a
          href="tel:+910000000000"
          className="sticky-btn btn-call"
          onClick={handleClick}
        >
          <i className="fa-solid fa-phone"></i> Call
        </a>
        <a
          href="https://wa.me/910000000000"
          className="sticky-btn btn-whatsapp"
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default MobileStickyBar;
