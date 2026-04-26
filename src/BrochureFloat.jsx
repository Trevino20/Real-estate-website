import { useEffect, useState } from 'react';

function BrochureFloat({ openPopup }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleBrochureClick = () => {
    window.open('https://drive.google.com/file/d/1TVidyE3o3zkv6q60OZd448mkJA07aBrW/view?usp=sharing', '_blank');
  };

  return (
    <div
      className={`brochure-float${visible ? ' brochure-float-visible' : ''}`}
      onClick={handleBrochureClick}
    >
      <i className="far fa-file-pdf"></i>
      <span>Brochure</span>
      <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginTop: '5px' }}></i>
    </div>
  );
}

export default BrochureFloat;
