import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

function HomePage({ openPopup }) {
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
    </>
  );
}

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

export default App;
