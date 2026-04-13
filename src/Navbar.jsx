import { useState } from 'react';

function Navbar({ openPopup }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="logo">
        <img
          src="https://69dbb75eb9fe4e9da070d86a.imgix.net/vrindavan%20logo.png?w=1875&h=1250"
          alt="Trident Vrindavan"
          className="logo-img"
        />
      </div>

      <nav className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} id="navLinks">
        <a href="#home" onClick={closeMobileMenu}>Home</a>
        <a href="#amenities" onClick={closeMobileMenu}>Amenities</a>
        <a href="#pricing" onClick={closeMobileMenu}>Pricing</a>
        <a href="#siteplan" onClick={closeMobileMenu}>Floor Plan</a>
        <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
        <a href="#location" onClick={closeMobileMenu}>Location</a>
        <a href="#virtual-tour" onClick={closeMobileMenu}>Virtual Site Visit</a>
        <a href="#footer" onClick={closeMobileMenu}>Brochure</a>
      </nav>

      <div className="nav-right">
        <button className="btn-contact" onClick={() => openPopup('Contact Us')}>
          <i className="fas fa-phone-alt"></i> Contact
        </button>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
