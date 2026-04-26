import tourPreviewImg from './assets/VRANDAVN-WIDE-ANGLE-NIGHT--VIEW-02.webp';
import { useScrollReveal } from './useScrollReveal';

function VirtualTour({ openPopup }) {
  const ref = useScrollReveal('.reveal, .reveal-scale', 0.12);
  const handlePlayClick = (e) => {
    e.preventDefault();
    openPopup('Request Virtual Tour');
  };

  return (
    <section className="virtual-tour-section" id="virtual-tour" ref={ref}>
      <div className="vt-container">
        <div className="vt-header reveal">
          <div className="line"></div>
          <h2>Virtual Tour</h2>
          <div className="line"></div>
        </div>

        <div className="video-container reveal-scale" style={{ transitionDelay: '0.15s' }} id="playVideo">
          <img
            src={tourPreviewImg}
            alt="Walkthrough Preview"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="play-overlay">
            <div className="play-circle" onClick={handlePlayClick}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="28"
                height="28"
                style={{ marginLeft: '4px' }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <button className="tour-btn reveal" style={{ transitionDelay: '0.25s' }} onClick={() => openPopup('Request For Tour')}>
          Request For Tour
        </button>
      </div>

      {/* Video Modal (kept for reference, currently using popup instead) */}
      <div className="modal" id="videoModal">
        <div className="modal-body">
          <span className="close-btn" id="closeModalBtn">
            <i className="fa-solid fa-times"></i>
          </span>
          <iframe id="ytPlayer" src="" allow="autoplay; encrypted-media" allowFullScreen title="Virtual Tour"></iframe>
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
