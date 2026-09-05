import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Data
import { GALLERY_ITEMS } from './data/galleryData';

// Global Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingEnquire from './components/FloatingEnquire/FloatingEnquire';
import EnquiryModal from './components/EnquiryModal/EnquiryModal';
import BrochureModal from './components/BrochureModal/BrochureModal';
import LightboxModal from './components/LightboxModal/LightboxModal';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

// Pages
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Spaces from './pages/Spaces/Spaces';
import Retail from './pages/Retail/Retail';
import Offices from './pages/Offices/Offices';
import Studios from './pages/Studios/Studios';
import FoodCourt from './pages/FoodCourt/FoodCourt';
import Location from './pages/Location/Location';
import FloorPlans from './pages/FloorPlans/FloorPlans';
import FloorPlanDetail from './pages/FloorPlanDetail/FloorPlanDetail';
import Gallery from './pages/Gallery/Gallery';
import Investment from './pages/Investment/Investment';
import AboutUs from './pages/AboutUs/AboutUs';
import AboutProject from './pages/AboutProject/AboutProject';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

import './App.css';

// Scroll to top helper component on page transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Global modal state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInterest, setEnquiryInterest] = useState('Retail');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Gallery Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenEnquiry = (interest = 'Retail') => {
    setEnquiryInterest(typeof interest === 'string' ? interest : 'Retail');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleCloseBrochure = () => {
    setIsBrochureOpen(false);
  };

  const handleOpenGalleryItem = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Luxury Loading Screen */}
      <LoadingScreen />

      <div className="app-shell">
        {/* Sticky Luxury Navbar */}
        <Navbar onOpenBrochure={handleOpenBrochure} />

        {/* Main Routed Page Content */}
        <main className="main-content-viewport">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenEnquiry={handleOpenEnquiry}
                  onSelectGalleryItem={handleOpenGalleryItem}
                />
              }
            />
            <Route
              path="/project"
              element={<Project onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/spaces"
              element={<Spaces onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/retail"
              element={<Retail onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/offices"
              element={<Offices onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/studios"
              element={<Studios onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/food-court"
              element={<FoodCourt onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/location"
              element={<Location onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/floor-plans"
              element={
                <FloorPlans
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />
            <Route
              path="/floor-plans/:id"
              element={
                <FloorPlanDetail
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenBrochure={handleOpenBrochure}
                />
              }
            />
            <Route
              path="/gallery"
              element={
                <Gallery
                  onSelectGalleryItem={handleOpenGalleryItem}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />
            <Route
              path="/investment"
              element={<Investment onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/about-us"
              element={
                <AboutUs
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenBrochure={handleOpenBrochure}
                />
              }
            />
            <Route
              path="/about-project"
              element={
                <AboutProject
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenBrochure={handleOpenBrochure}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Dark Luxury Footer */}
        <Footer onOpenEnquiry={() => handleOpenEnquiry('General')} />

        {/* Persistent Floating Quick Enquiry Trigger */}
        <FloatingEnquire onOpenEnquiry={() => handleOpenEnquiry('Retail')} />

        {/* Global Modals */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseEnquiry}
          initialInterest={enquiryInterest}
        />

        <BrochureModal
          isOpen={isBrochureOpen}
          onClose={handleCloseBrochure}
        />

        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      </div>
    </Router>
  );
}
