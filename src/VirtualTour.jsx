function VirtualTour({ openPopup }) {
  const handlePlayClick = (e) => {
    e.preventDefault();
    openPopup('Request Virtual Tour');
  };

  return (
    <section className="virtual-tour-section" id="virtual-tour">
      <div className="vt-container">
        <div className="vt-header">
          <div className="line"></div>
          <h2>Virtual Tour</h2>
          <div className="line"></div>
        </div>

        <div className="video-container" id="playVideo">
          <img
            src="https://69dbb75eb9fe4e9da070d86a.imgix.net/VEDCODE/VRANDAVN%20WIDE%20ANGLE%20NIGHT%20%20VIEW%2002.jpg.jpeg"
            alt="Walkthrough Preview"
          />
          <div className="play-overlay">
            <div className="play-circle" onClick={handlePlayClick}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>

        <button className="tour-btn" onClick={() => openPopup('Request For Tour')}>
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
