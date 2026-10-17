import React, { useState } from 'react';
import { ArrowRight, Download, Camera, Music, Compass, Sparkles, Heart, Film, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Picture from '../components/Picture';

export default function AboutModel({ onOpenLightbox, onNavigate }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCompCard = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const polaroids = [
    {
      id: 'polaroid-1',
      title: '35mm Film Contact Strip',
      image: '/assets/about/filmstrip_vertical.png',
      caption: 'Three-frame black and white film contact strip.',
      rotation: -3
    },
    {
      id: 'polaroid-2',
      title: 'Backstage Polaroid Expression',
      image: '/assets/about/torn_paper_portrait.png',
      caption: 'Duotone portrait layered between torn paper edges.',
      rotation: 4
    },
    {
      id: 'polaroid-3',
      title: 'Analog Telephone Studio Session',
      image: '/assets/about/model_telephone_hero.webp',
      caption: 'Studio composition built around a rotary telephone.',
      rotation: -2
    }
  ];

  return (
    <div className="about-page-container">
      {/* Top Editorial Hero Section matching Tata Letak Editorial Tentang Model-1.png */}
      <section className="about-hero-editorial">
        <div className="about-hero-grid">
          {/* Left Text Block */}
          <ScrollReveal animation="fade-right" duration={800} className="about-editorial-headline-box">
            <div className="eyebrow">ABOUT THE MODEL</div>
            <h1>
              ABOUT<br />THE MODEL
            </h1>
            <p>
              A content creator and talent model working across visual content, digital branding and brand storytelling.
            </p>

            <button
              className="get-to-know-btn action-hover-pop"
              onClick={() => {
                const target = document.getElementById('deep-dive-section');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get To Know More <ArrowRight size={16} />
            </button>

            {/* Handwritten doodle matching reference */}
            <div style={{ marginTop: '2.5rem' }}>
              <span className="doodle-annotation" style={{ fontSize: '1.8rem', display: 'block', transform: 'rotate(-3deg)' }}>
                SAME GIRL ♡<br />NEW STORIES
              </span>
            </div>
          </ScrollReveal>

          {/* Right Visual Collage Area */}
          <ScrollReveal animation="fade-left" delay={150} duration={850} className="about-hero-visual-area">
            {/* Main Center Image: Model lying down with orange phone */}
            <Picture
              src="/assets/about/model_telephone_hero.webp"
              alt="CONENM — Model with Vintage Telephone"
              className="about-hero-main-img"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              onClick={() => onOpenLightbox({
                image: '/assets/tata_letak_editorial_tentang_model_1.webp',
                title: 'About The Model — Full Editorial Spread',
                caption: 'Full editorial collage: studio portraits, filmstrip frames and torn-paper textures.'
              })}
              title="Click to view full editorial collage"
              style={{ cursor: 'pointer' }}
            />

            {/* Floating Filmstrip on the Right */}
            <div
              className="about-floating-filmstrip"
              onClick={() => onOpenLightbox({
                image: '/assets/about/filmstrip_vertical.png',
                title: '35mm Filmstrip Trio',
                caption: 'Three-frame black and white film contact strip.'
              })}
              title="View 35mm Filmstrip"
              style={{ cursor: 'pointer' }}
            >
              <img src="/assets/about/filmstrip_vertical.png" alt="35mm Filmstrip" />
            </div>

            {/* Floating Torn Paper Collage on Bottom Left */}
            <div
              className="about-floating-torn-paper"
              onClick={() => onOpenLightbox({
                image: '/assets/about/torn_paper_portrait.png',
                title: 'Torn Polaroid Snapshot',
                caption: 'Layered duotone portrait with hand-marked star overlay.'
              })}
              title="View Candid Polaroid"
              style={{ cursor: 'pointer' }}
            >
              <img src="/assets/about/torn_paper_portrait.png" alt="Torn Paper Candid Portrait" />
            </div>
          </ScrollReveal>
        </div>

        {/* Hand-drawn Annotation at Bottom Right */}
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '3rem',
          textAlign: 'right'
        }}>
          <span className="doodle-annotation" style={{ fontSize: '1.5rem', color: '#111' }}>
            FASHION<br />PEOPLE<br />PLACES<br />STORIES ♡
          </span>
        </div>
      </section>

      {/* Deep-Dive Editorial Section: "MORE THAN JUST A FACE" */}
      <section id="deep-dive-section" className="about-deep-dive-section">
        {/* Left: Biography & Story */}
        <ScrollReveal animation="fade-right" duration={800} className="editorial-bio-block">
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', display: 'block', marginBottom: '0.5rem' }}>
            Editorial Biography
          </span>
          <h2>MORE THAN JUST A FACE</h2>

          <p>
            Azkia Putri Rushadi is based in Serang, Banten, Indonesia. She is a continuous learner with a strong
            focus on creative content and digital branding.
          </p>

          <p>
            She has worked as a content creator and talent at Renjana Abadi, contributing to brand growth through
            visual content production and brand identity development.
          </p>

          <p>
            She currently works as a freelancer in social media content production, and as a talent model for
            various brands, including Gozeal.
          </p>

          <p>
            Her background is academic, covering advertising production, brand storytelling and creative team
            management. She is communicative and adaptable, and ready to contribute as a content creator, a talent
            model, or in a creative support role.
          </p>

          {/* Personal Quote */}
          <blockquote style={{
            margin: '2.5rem 0',
            padding: '1.75rem 2rem',
            background: '#ffffff',
            borderLeft: '3px solid #111111',
            borderRadius: '2px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <p style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              lineHeight: 1.4,
              marginBottom: '0.5rem'
            }}>
              "The most arresting fashion photograph is never just about the dress—it’s about the silent conversation between the lens, the posture, and the soul inside the garment."
            </p>
            <cite style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', fontStyle: 'normal' }}>
              — CONENM
            </cite>
          </blockquote>

          {/* Creative Pursuits & Passions */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Creative Passions Beyond The Lens
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1.5rem', border: '1px solid #eee', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Camera size={18} style={{ color: 'var(--accent-denim)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Analog 35mm Film</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                  Carrying mechanical rangefinder cameras backstage to document intimate behind-the-scenes atmospheres.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', border: '1px solid #eee', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Music size={18} style={{ color: 'var(--accent-denim)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Vinyl & City Pop</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                  Collecting 80s Japanese City Pop, French synth-wave, and ambient techno records.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', border: '1px solid #eee', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Compass size={18} style={{ color: 'var(--accent-denim)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Architectural Travel</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                  Studying brutalist and modernist concrete architecture across global fashion capitals.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', border: '1px solid #eee', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={18} style={{ color: 'var(--accent-denim)' }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Vintage Denim Archive</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                  Curating historical selvedge denim pieces, vintage chainstitch caps, and raw workwear.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Official Comp Card & Specifications */}
        <ScrollReveal animation="fade-left" delay={150} duration={850}>
          <div className="comp-card-box">
            <div className="comp-card-header">
              <h3>Comp Card</h3>
              <span>Portfolio Specifications</span>
            </div>

            <div className="comp-spec-list">
              <div className="spec-item">
                <span className="spec-label">Height</span>
                <div className="spec-value">176 cm / 5' 9.5"</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Bust</span>
                <div className="spec-value">82 cm / 32"</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Waist</span>
                <div className="spec-value">59 cm / 23"</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Hips</span>
                <div className="spec-value">88 cm / 34.5"</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Shoe Size</span>
                <div className="spec-value">38.5 EU / 7.5 US</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Eye Color</span>
                <div className="spec-value">Dark Brown</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Hair Color</span>
                <div className="spec-value">Dark Brown / Black</div>
              </div>
              <div className="spec-item">
                <span className="spec-label">Languages</span>
                <div className="spec-value">English, Korean, Japanese</div>
              </div>
            </div>

            {/* Representation Agencies */}
            <div className="agencies-list-box">
              <h4>Representation &amp; Booking</h4>
              <div className="agency-item">
                <span className="agency-city">Worldwide</span>
                <span className="agency-name">Direct booking desk</span>
              </div>
              <div className="agency-item">
                <span className="agency-city">Seoul</span>
                <span className="agency-name">Management &amp; scheduling</span>
              </div>
              <div className="agency-item">
                <span className="agency-city">International</span>
                <span className="agency-name">Agency representation on request</span>
              </div>
            </div>

            {/* Download Comp Card PDF Button */}
            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={handleDownloadCompCard}
                className="action-hover-pop"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#111111',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
              >
                <Download size={16} />
                {downloadSuccess ? 'Request Noted' : 'Request Digital Comp Card'}
              </button>
              {downloadSuccess && (
                <span style={{ fontFamily: 'var(--font-sans)', display: 'block', textAlign: 'center', fontSize: '0.75rem', color: '#27c93f', marginTop: '0.5rem', fontWeight: 600 }}>
                  Contact the desk for the current comp card and full measurements.
                </span>
              )}
            </div>
          </div>

          {/* Quick Inquiry CTA card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e5e5e5',
            padding: '2rem',
            marginTop: '2rem',
            borderRadius: '2px',
            textAlign: 'center'
          }}>
            <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.45rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Planning an Editorial or Campaign?
            </h4>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#666', marginBottom: '1.25rem' }}>
              For availability, rates and scheduling, send a booking inquiry through the contact page.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="action-hover-pop"
              style={{
                fontFamily: 'var(--font-sans)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid #111',
                background: 'transparent',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Inquire Now <ArrowRight size={14} />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Behind The Scenes & Polaroid Scrapbook Carousel */}
      <section style={{ marginTop: '5rem', padding: '4rem 2rem', borderTop: '1px solid #e0e0e0' }}>
        <ScrollReveal animation="fade-up" duration={700} className="section-header-row">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', display: 'block', marginBottom: '0.25rem' }}>
              Analog Diary
            </span>
            <h2 className="section-header-title">Portraits & Behind The Scenes</h2>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#888' }}>
            Kodak 35mm & Instant Film Archives
          </span>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {polaroids.map((p, index) => (
            <ScrollReveal
              key={p.id}
              animation="fade-up"
              delay={index * 120}
              duration={700}
              style={{
                background: '#ffffff',
                padding: '1.25rem 1.25rem 2rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid #e8e8e8',
                borderRadius: '2px',
                transform: `rotate(${p.rotation}deg)`,
                transition: 'transform 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${p.rotation}deg)`; }}
              onClick={() => onOpenLightbox({
                image: p.image,
                title: p.title,
                caption: p.caption
              })}
            >
              <div style={{ background: '#f5f5f5', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Picture src={p.image} alt={p.title} style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {p.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.15rem', color: '#444' }}>
                  {p.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
