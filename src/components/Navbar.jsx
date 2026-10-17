import React, { useEffect, useState } from 'react';
import { Search, Menu, X, Mail } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from './Icons';
import { creativeSections } from '../data/creativeData';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar({ activePage, setActivePage, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collaborations', label: 'The Creative Portfolio' },
    { id: 'portfolio', label: 'Brand Collaborations' },
    { id: 'about', label: 'About The Model' },
    { id: 'contact', label: 'Contact Me' }
  ];

  // Section anchors shown only while the Creative Portfolio is on screen.
  const showSections = activePage === 'collaborations';
  const sectionItems = creativeSections.map((s) => ({
    id: `cp-section-${s.number}`,
    label: s.title
  }));
  const activeSection = useActiveSection(showSections ? sectionItems.map((s) => s.id) : []);

  // Shadow/contrast state once the page leaves the top.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sections use scroll-margin-top, so the navbar never covers their heading.
  const handleSectionClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left / Logo Section */}
        <div className="nav-logo-group">
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a
            href="#home"
            className="nav-brand-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            aria-label="Home"
          >
            <img
              src="/assets/brand/logo-dark.png"
              alt="Logo"
              className="nav-brand-img"
            />
          </a>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Icons */}
        <div className="nav-actions">
          <button
            className="nav-icon-btn"
            onClick={onOpenSearch}
            title="Search Archive"
            aria-label="Search Archive"
          >
            <Search size={19} />
          </button>

          <a
            href="https://www.instagram.com/azkiaprus/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>

          <a
            href="https://www.tiktok.com/@eiapruush"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="TikTok"
            aria-label="TikTok"
          >
            <TikTokIcon size={18} />
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="nav-icon-btn"
            title="Book Model / Contact"
            aria-label="Contact"
          >
            <Mail size={18} />
          </button>
        </div>
      </div>

      {/* Section indicator — only on The Creative Portfolio */}
      {showSections && (
        <nav className="nav-section-track" aria-label="Creative Portfolio sections">
          <ul className="nav-section-list">
            {sectionItems.map((section) => (
              <li key={section.id}>
                <button
                  className={`nav-section-link ${activeSection === section.id ? 'active' : ''}`}
                  aria-current={activeSection === section.id ? 'true' : undefined}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#ffffff',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 2rem 2.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <img
              src="/assets/brand/logo-dark.png"
              alt="Logo"
              style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: '#111'
              }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    color: activePage === item.id ? '#111' : '#777',
                    borderBottom: activePage === item.id ? '2px solid #111' : 'none',
                    paddingBottom: '0.25rem'
                  }}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {showSections && sectionItems.map((section) => (
              <li key={section.id} style={{ paddingLeft: '0.75rem' }}>
                <button
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    color: activeSection === section.id ? '#111' : '#999',
                    borderBottom: activeSection === section.id ? '2px solid #111' : 'none',
                    paddingBottom: '0.25rem'
                  }}
                  onClick={() => handleSectionClick(section.id)}
                >
                  — {section.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
            <span style={{ fontSize: '0.72rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.35rem' }}>
              Direct Inquiries
            </span>
            <a
              href="mailto:azkiaprusha@gmail.com"
              style={{
                fontSize: '0.9rem',
                color: '#111111',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textDecoration: 'none'
              }}
            >
              azkiaprusha@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
