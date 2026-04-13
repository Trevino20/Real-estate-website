import { useState } from 'react';

function Footer() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleReadMore = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <footer className="legacy-footer" id="footer">
      <div className="footer-container">
        <div className="section-title-footer">
          <div className="line"></div>
          <h2>A Legacy of Trust</h2>
          <div className="line"></div>
        </div>

        <div className="description-wrapper">
          <p
            id="footerText"
            className={`description-text${collapsed ? ' collapsed' : ''}`}
          >
            Founded on the principles of quality, integrity, and customer-first thinking, Trident Group Real
            Estate has built a strong and enduring reputation as one of the region's most reliable developers.
            Every Trident project reflects an unwavering focus on superior design, efficient planning, and
            sustainable development — from location selection to construction quality and timely delivery. With
            this landmark project, the goal is to introduce a future-ready, value-driven lifestyle for residents
            while contributing meaningfully to Badlapur's ongoing growth story.
          </p>
          <button
            id="readMoreToggle"
            className="read-more-btn"
            onClick={toggleReadMore}
          >
            {collapsed ? 'Read More' : 'Read Less'}
          </button>
        </div>

        <img
          src="https://69dbb75eb9fe4e9da070d86a.imgix.net/vrindavan%20logo.png?w=1875&h=1250"
          alt="Trident Vrindavan Logo"
          className="footer-logo"
        />

        <div className="rera-text">
          The project has been registered under the name <strong>Trident Vrindavan </strong> via MahaRERA
          registration number: <strong>PR1330002502221</strong>, is available on the website{' '}
          <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer">
            https://maharera.mahaonline.gov.in
          </a>.
        </div>

        <div className="disclaimer">
          Disclaimer: All the specifications, design, facilities, dimensions, etc. are subject to the approval of
          the respective authorities &amp; developers and would be changed if necessary. The discretion remains
          with the developers.
        </div>

        <div className="copyright-bar">
          &copy; Copyright | <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
