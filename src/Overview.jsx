import overviewImage from './assets/VRANDAVN-WIDE-ANGLE-NIGHT--VIEW-02.webp';
import { useScrollReveal } from './useScrollReveal';

function Overview({ openPopup }) {
  const ref = useScrollReveal('.reveal, .reveal-left, .reveal-right', 0.12);

  return (
    <section className="overview-section" id="overview" ref={ref}>
      <header className="section-header-center">
        <h2 className="divider-title reveal">Overview</h2>
        <h3 className="main-subheading reveal" style={{ transitionDelay: '0.1s' }}>A Township Designed To Complete Every Part Of Your Life</h3>
        <p className="overview-text reveal" style={{ transitionDelay: '0.2s' }}>
          Trident Group Real Estate is a trusted name in quality construction, committed to creating thoughtfully
          planned homes and commercial spaces that deliver long-term value. With a strong foundation built on
          transparency, integrity, and customer satisfaction, the group has consistently aimed to redefine modern
          living while staying rooted in trust.
          <br /><br />
          Trident Vrindavan is a reflection of this commitment — Badlapur's first spiritually inspired township,
          thoughtfully planned to offer a divine living experience, superior design, and exceptional connectivity
          in one of the region's fastest-growing residential destinations. Every detail of this landmark
          development has been crafted to cater to the evolving needs of families, professionals, and investors
          seeking lasting value.
        </p>
      </header>

      <div className="content-grid">
        <div className="highlights-column reveal-left" style={{ transitionDelay: '0.1s' }}>
          <h3 className="highlights-title">Highlights</h3>
          <ul className="highlights-list">
            <li>BADLAPUR'S FIRST SPIRITUAL BASED TOWNSHIP</li>
            <li>LUXURIOUS 1 , 2 &amp; 3BHK RESIDENCES</li>
            <li>ICONIC 10 AND 13 STOREY RESIDENTIAL TOWER</li>
            <li>A LANDMARK ADDRESS IN A PRIME LOCATION</li>
            <li>STUNNING SKYLINE VIEWS</li>
            <li>Grand Royal Lobby with Premium Finishes</li>
            <li>24×7 CCTV Surveillance for Complete Safety</li>
            <li>Advanced Biometric Door Lock System</li>
          </ul>
          <button
            className="btn-gold popup-trigger"
            data-title="Request Brochure"
            onClick={() => openPopup('Request Brochure')}
          >
            Request Brochure
          </button>
        </div>

        <div className="image-column reveal-right" style={{ transitionDelay: '0.2s' }}>
          <div className="building-card">
            <img
              src={overviewImage}
              alt="Luxury Building Architecture"
              loading="lazy"
              decoding="async"
              width="800"
              height="534"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
