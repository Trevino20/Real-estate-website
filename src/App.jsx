import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
import Navbar from './Navbar';
import Hero from './Hero';
import Overview from './Overview';
import PriceSection from './PriceSection';
import SitePlan from './SitePlan';
import Amenities from './Amenities';
import VirtualTour from './VirtualTour';
import Gallery from './Gallery';
import Location from './Location';
import Footer from './Footer';
import MobileStickyBar from './MobileStickyBar';
import BrochureFloat from './BrochureFloat';
import PopupModal from './PopupModal';
<<<<<<< HEAD

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const openPopup = (title) => {
    setPopupTitle(title || 'Request Location Details');
    setPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Auto-open popup on page load after 3 seconds
=======
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

function HomePage({ openPopup }) {
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
  useEffect(() => {
    const timer = setTimeout(() => {
      openPopup('Get Exclusive Offer');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar openPopup={openPopup} />
      <Hero openPopup={openPopup} />
      <Overview openPopup={openPopup} />
      <PriceSection openPopup={openPopup} />
      <SitePlan openPopup={openPopup} />
      <Amenities />
      <VirtualTour openPopup={openPopup} />
      <Gallery />
      <Location openPopup={openPopup} />
      <Footer />
      <MobileStickyBar openPopup={openPopup} />
      <BrochureFloat openPopup={openPopup} />
<<<<<<< HEAD
      <PopupModal isOpen={popupOpen} title={popupTitle} onClose={closePopup} />
=======
>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
    </>
  );
}

<<<<<<< HEAD
=======
function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const openPopup = (title) => {
    setPopupTitle(title || 'Request Location Details');
    setPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage openPopup={openPopup} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <PopupModal isOpen={popupOpen} title={popupTitle} onClose={closePopup} />
    </BrowserRouter>
  );
}

>>>>>>> 1d1c97a3b7ad8d11d62945d560ffe33ae2f65ace
export default App;
