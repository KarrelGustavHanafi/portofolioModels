import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import CollabModal from './components/CollabModal';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import BrandCollaborations from './pages/BrandCollaborations';
import AboutModel from './pages/AboutModel';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Modals state
  const [lightboxData, setLightboxData] = useState(null);
  const [activeCollab, setActiveCollab] = useState(null);

  // Sync page title
  useEffect(() => {
    const titles = {
      home: 'CONENM — Editorial Fashion Model Portfolio',
      portfolio: 'BRAND COLLABORATIONS — 2025SS Lookbook Archive | CONENM',
      collaborations: 'THE CREATIVE PORTFOLIO — Talent, Film & Audio Visual | CONENM',
      about: 'ABOUT THE MODEL — More Than Just A Face | CONENM',
      contact: 'CONTACT & BOOKING — Inquiries & Agency Representation | CONENM'
    };
    document.title = titles[activePage] || 'CONENM — Fashion Model';
  }, [activePage]);

  return (
    <div className="portfolio-app-root">
      {/* Editorial Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Main Persistent Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Page Rendering — keyed so the entrance transition replays on each
          route change. Modals live outside this node, so its transform never
          becomes a containing block for them. */}
      <main id="main-content" key={activePage} className="page-enter">
        {activePage === 'home' && (
          <Home
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLightbox={(data) => setLightboxData(data)}
          />
        )}

        {activePage === 'portfolio' && (
          <Portfolio
            onOpenLightbox={(data) => setLightboxData(data)}
          />
        )}

        {activePage === 'collaborations' && (
          <BrandCollaborations
            onOpenLightbox={(data) => setLightboxData(data)}
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'about' && (
          <AboutModel
            onOpenLightbox={(data) => setLightboxData(data)}
            onNavigate={(page) => {
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Persistent Global Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Global Lightbox Modal */}
      {lightboxData && (
        <Lightbox
          image={lightboxData.image}
          title={lightboxData.title}
          caption={lightboxData.caption}
          credits={lightboxData.credits}
          onClose={() => setLightboxData(null)}
        />
      )}

      {/* Brand Collaboration Project Modal */}
      {activeCollab && (
        <CollabModal
          project={activeCollab}
          onClose={() => setActiveCollab(null)}
        />
      )}
    </div>
  );
}
