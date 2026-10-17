import React from 'react';
import { ArrowRight } from 'lucide-react';
import { creativeHighlights } from '../data/creativeData';
import { brandProducts, brandCampaign, brandCollectionLabel } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import Picture from '../components/Picture';

export default function Home({ onNavigate, onOpenLightbox }) {
  const featuredCreative = creativeHighlights;

  // Brand preview is derived from the same exports the Brand Collaborations page
  // renders, so the two cannot drift apart again.
  const featuredBrand = [
    ...brandProducts.map((product) => ({
      id: product.id,
      meta: 'Product',
      title: product.name,
      image: product.image
    })),
    {
      id: 'home-brand-film',
      meta: 'Campaign Film',
      title: brandCollectionLabel,
      note: brandCampaign.label,
      image: brandCampaign.thumbnail
    }
  ];

  return (
    <div className="home-container">
      {/* Editorial Hero Section matching hOME.png */}
      <section className="home-hero-section">
        <div className="home-hero-inner">
          <div className="home-master-visual">
            <Picture
              src="/assets/home.webp"
              alt="CONENM — Editorial Model Portfolio Hero"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Creative Introduction Statement */}
      <section className="home-intro-section">
        <ScrollReveal animation="fade-right" duration={750} className="home-intro-left">
          <h2>
            Redefining the cadence of modern runway and
            <span className="highlight-span">subcultural elegance</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.6rem',
              color: 'var(--accent-denim)',
              fontWeight: 700
            }}>
              "raw poise meets playful spontaneity"
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150} duration={750} className="home-intro-right">
          <p>
            An editorial model working across studio portraiture, runway and street-adjacent styling.
            Trained in posture, expression and movement, she brings a relaxed discipline to camera and
            takes direction well on set.
          </p>

          <div className="stats-grid">
            <ScrollReveal animation="fade-up" delay={100} duration={600} className="stat-item">
              <div className="stat-num">Editorial</div>
              <div className="stat-label">Print &amp; digital</div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200} duration={600} className="stat-item">
              <div className="stat-num">Runway</div>
              <div className="stat-label">Show &amp; fittings</div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300} duration={600} className="stat-item">
              <div className="stat-num">Commercial</div>
              <div className="stat-label">Campaign work</div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* Creative Portfolio Highlights — previews The Creative Portfolio */}
      <section className="home-showcase-section">
        <ScrollReveal animation="fade-up" duration={700} className="section-header-row">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', display: 'block', marginBottom: '0.25rem' }}>
              Selected Lookbook Archive
            </span>
            <h2 className="section-header-title">The Creative Portfolio</h2>
          </div>

          <button
            className="section-header-link"
            onClick={() => onNavigate('collaborations')}
          >
            Explore Full Portfolio <ArrowRight size={16} />
          </button>
        </ScrollReveal>

        <div className="home-highlight-grid">
          {featuredCreative.map((frame, index) => (
            <ScrollReveal
              key={frame.id}
              animation="fade-up"
              delay={index * 120}
              duration={750}
              as="article"
              className="home-highlight-card"
              onClick={() => onOpenLightbox({
                image: frame.image,
                title: frame.title
              })}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenLightbox({ image: frame.image, title: frame.title }); }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${frame.title}`}
            >
              <div className="home-highlight-frame">
                <Picture
                  src={frame.image}
                  widths={[840]}
                  sizes="(max-width: 640px) 90vw, 415px"
                  alt={frame.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="home-highlight-name">{frame.title}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brand Collaborations Banner / Teaser */}
      <section className="home-brand">
        <div className="home-brand-inner">
          <ScrollReveal animation="fade-up" duration={700} className="section-header-row">
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', display: 'block', marginBottom: '0.25rem' }}>
                Commercial & Cultural Partnerships
              </span>
              <h2 className="section-header-title">Brand Collaborations</h2>
            </div>

            <button
              className="section-header-link"
              onClick={() => onNavigate('portfolio')}
            >
              View Brand Collaborations <ArrowRight size={16} />
            </button>
          </ScrollReveal>

          <div className="home-brand-grid">
            {featuredBrand.map((collab, index) => (
              <ScrollReveal
                key={collab.id}
                animation="fade-up"
                delay={index * 110}
                duration={700}
                onClick={() => onNavigate('portfolio')}
                style={{
                  background: '#f8f8f8',
                  border: '1px solid #eee',
                  borderRadius: '6px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#111'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#eee'; }}
              >
                <div className="home-brand-thumb">
                  <Picture
                    src={collab.image}
                    widths={[660]}
                    sizes="86px"
                    alt={collab.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', color: '#888', letterSpacing: '0.08em' }}>
                    {collab.meta}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111', margin: '0.25rem 0' }}>
                    {collab.title}
                  </h4>
                  {collab.note && (
                    <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: '#444' }}>
                      "{collab.note}"
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About The Model Quick Teaser */}
      <section className="home-profile">
        <div className="home-profile-card">
          <ScrollReveal animation="fade-right" duration={800} className="home-profile-head">
            <span className="home-profile-label">The Muse Profile</span>
            <h2 className="home-profile-title">More Than Just A Face</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150} duration={850} className="home-profile-media">
            <Picture
              src="/assets/about/model_telephone_hero.webp"
              alt="Editorial Profile Preview"
              className="home-profile-img sr-img-lift"
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={80} duration={800} className="home-profile-body">
            <p className="home-profile-text">
              Blending fashion, art and everyday life, and finding new stories through style and image.
              View the full profile, portfolio specifications and booking information.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="home-profile-cta action-hover-pop"
            >
              Get To Know More <ArrowRight size={16} />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
