function BrochureFloat({ openPopup }) {
  return (
    <div className="brochure-float" onClick={() => openPopup('Download Brochure')}>
      <i className="far fa-file-pdf"></i>
      <span>Brochure</span>
      <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginTop: '5px' }}></i>
    </div>
  );
}

export default BrochureFloat;
