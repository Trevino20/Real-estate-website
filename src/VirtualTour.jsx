<<<<<<< HEAD
import tourPreviewImg from './assets/VRANDAVN WIDE ANGLE NIGHT  VIEW 02.jpg.jpeg';

function VirtualTour({ openPopup }) {
=======
import tourPreviewImg from './assets/VRANDAVN-WIDE-ANGLE-NIGHT--VIEW-02.webp';
import { useScrollReveal } from './useScrollReveal';

function VirtualTour({ openPopup }) {
  const ref = useScrollReveal('.reveal, .reveal-scale', 0.12);
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
  const handlePlayClick = (e) => {
    e.preventDefault();
    openPopup('Request Virtual Tour');
  };

  return (
<<<<<<< HEAD
    <section className="virtual-tour-section" id="virtual-tour">
      <div className="vt-container">
        <div className="vt-header">
=======
    <section className="virtual-tour-section" id="virtual-tour" ref={ref}>
      <div className="vt-container">
        <div className="vt-header reveal">
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
          <div className="line"></div>
          <h2>Virtual Tour</h2>
          <div className="line"></div>
        </div>

<<<<<<< HEAD
        <div className="video-container" id="playVideo">
          <img
            src={tourPreviewImg}
            alt="Walkthrough Preview"
          />
          <div className="play-overlay">
            <div className="play-circle" onClick={handlePlayClick}>
              <i className="fa-solid fa-play"></i>
=======
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
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <button className="tour-btn" onClick={() => openPopup('Request For Tour')}>
=======
        <button className="tour-btn reveal" style={{ transitionDelay: '0.25s' }} onClick={() => openPopup('Request For Tour')}>
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
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
