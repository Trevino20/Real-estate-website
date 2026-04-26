import { useState, useEffect } from 'react';

function Navbar({ openPopup }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // tiny delay so CSS transition fires after first paint
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar${mounted ? ' navbar-visible' : ''}`} id="navbar">
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
        <button
          className="btn-contact" onClick={() => openPopup('Contact Us')}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Contact
        </button>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
