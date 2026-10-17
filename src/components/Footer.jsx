import React from 'react';
import { Mail, ArrowUpRight, Globe } from 'lucide-react';
import { InstagramIcon } from './Icons';
import ScrollReveal from './ScrollReveal';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top-row">
          {/* Brand & Editorial Identity */}
          <ScrollReveal animation="fade-up" delay={0} duration={700} className="footer-brand">
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/assets/brand/logo-light.png"
                alt="Logo"
                className="footer-brand-img"
              />
            </div>
            <p>
              Editorial model working across conceptual fashion, portraiture and
              commercial campaigns.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <button 
                onClick={() => handleNav('contact')}
                className="action-hover-pop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '2px'
                }}
              >
                Booking Inquiries <ArrowUpRight size={14} />
              </button>
            </div>
          </ScrollReveal>

          {/* Navigation Links */}
          <ScrollReveal animation="fade-up" delay={100} duration={700} className="footer-col">
            <h4>Index</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('collaborations')}>The Creative Portfolio</button></li>
              <li><button onClick={() => handleNav('portfolio')}>Brand Collaborations</button></li>
              <li><button onClick={() => handleNav('about')}>About the Model</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact & Inquiries</button></li>
            </ul>
          </ScrollReveal>

          {/* Direct Contacts */}
          <ScrollReveal animation="fade-up" delay={200} duration={700} className="footer-col">
            <h4>Direct Desk</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>
              For editorial assignments, runway bookings, lookbooks, and brand ambassador inquiries:
            </p>
            <a 
              href="mailto:azkiaprusha@gmail.com" 
              className="footer-email-link"
              style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'underline' }}
            >
              azkiaprusha@gmail.com
            </a>
          </ScrollReveal>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} Azkia Prusha. All rights reserved.
          </div>

          <div className="footer-social-icons">
            <a href="https://www.instagram.com/azkiaprus/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="mailto:azkiaprusha@gmail.com" title="Email Direct">
              <Mail size={18} />
            </a>
            <a href="https://models.com" target="_blank" rel="noopener noreferrer" title="Models.com Portfolio">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
