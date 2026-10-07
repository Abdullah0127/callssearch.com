import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/ReferenceHeader.jsx';
import Footer from './components/layout/ReferenceFooter.jsx';
import Home from './pages/HomeReference.jsx';
import About from './pages/AboutReference.jsx';
import Services from './pages/ServicesReference.jsx';
import Contact from './pages/ContactReference.jsx';
import Claim from './pages/ClaimReference.jsx';
import Partners from './pages/PartnersReference.jsx';
import Legal from './pages/LegalReference.jsx';
import NotFound from './pages/NotFound.jsx';
import FloatingContact from './components/layout/FloatingContact.jsx';

export default function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const title = {
      '/': 'Motor Vehicle Claim | Clear advice after an accident',
      '/about': 'About | Motor Vehicle Claim',
      '/services': 'Services | Motor Vehicle Claim',
      '/contact': 'Contact | Motor Vehicle Claim',
      '/partners': 'Legal Partners | Motor Vehicle Claim',
      '/terms': 'Terms & Conditions | Motor Vehicle Claim',
      '/privacy': 'Privacy Policy | Motor Vehicle Claim',
      '/claim': 'Start a Claim | Motor Vehicle Claim',
    };
    document.title = title[location.pathname] || 'Page not found | Motor Vehicle Claim';
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/privacy" element={<Legal privacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
