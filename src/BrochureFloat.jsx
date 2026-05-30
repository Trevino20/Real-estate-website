<<<<<<< HEAD
function BrochureFloat({ openPopup }) {
  return (
    <div className="brochure-float" onClick={() => openPopup('Download Brochure')}>
=======
import { useEffect, useState } from 'react';

function BrochureFloat({ openPopup }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleBrochureClick = () => {
    openPopup('Download Brochure');
  };

  return (
    <div
      className={`brochure-float${visible ? ' brochure-float-visible' : ''}`}
      onClick={handleBrochureClick}
    >
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
      <i className="far fa-file-pdf"></i>
      <span>Brochure</span>
      <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginTop: '5px' }}></i>
    </div>
  );
}

export default BrochureFloat;
