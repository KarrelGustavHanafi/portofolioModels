import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { brandProducts, brandCampaign, brandCollectionLabel, lookbookStageLooks, collaboratedWorks } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import Picture from '../components/Picture';

/**
 * BRAND COLLABORATIONS page (route: portfolio).
 * Layout, assets, sections and interactions of the original "The Portfolio"
 * page are unchanged — only its display name follows the new navbar label.
 */
export default function Portfolio({ onOpenLightbox }) {
  const [category, setCategory] = useState('All');

  // Stage cards read their own data; `portfolioLooks` stays reserved for search
  // and the lookups that reference it.
  const [heroLook, secondLook] = lookbookStageLooks;
  const categories = ['All', ...new Set(collaboratedWorks.map(w => w.category))];

  const archivedLooks = category === 'All'
    ? collaboratedWorks
    : collaboratedWorks.filter(w => w.category === category);

  const openLook = (look) => onOpenLightbox({
    image: look.fullImage || look.image,
    title: look.title,
    caption: look.description,
    credits: look.credits
  });

  const scrollToArchive = () => {
    document.getElementById('brand-archive-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Page Title */}
      <ScrollReveal animation="fade-up" duration={800}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#888',
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          / Brand Collaborations
        </span>
        <h1 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          letterSpacing: '0.04em',
          lineHeight: 0.95,
          color: '#111',
          marginBottom: '1rem'
        }}>
          BRAND COLLABORATIONS
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.02rem',
          lineHeight: 1.75,
          color: '#555',
          maxWidth: '560px'
        }}>
          Studio looks, product flatlays and campaign work collected in one archive.
          Each entry links to the full image set or the source post.
        </p>
      </ScrollReveal>

      {/* Lookbook Duo Stage */}
      <ScrollReveal animation="fade-up" delay={120} duration={800} className="lookbook-main-stage">
        <div className="lookbook-models-duo">
          {[heroLook, secondLook].map((look) => (
            <div
              key={look.id}
              className="model-pose-card"
              onClick={() => openLook(look)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLook(look); }}
              aria-label={`Open ${look.title}`}
            >
              <Picture src={look.image} alt={look.title} loading="lazy" decoding="async" />
              <span className="pose-floating-caption">{look.campaign}</span>
            </div>
          ))}
        </div>

        {/* Brand Collaboration — product pair */}
        <div className="brand-product-row">
          <span className="brand-collection-label">{brandCollectionLabel}</span>
          {brandProducts.map((product) => (
            <figure key={product.id} className="brand-product">
              <div className="brand-product-frame">
                <Picture
                  src={product.image}
                  widths={[660]}
                  sizes="(max-width: 640px) 45vw, 323px"
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="brand-product-name">{product.name}</figcaption>
            </figure>
          ))}
        </div>

        {/* Campaign — thumbnail linking out to the Reel, centred on the same
            900px measure so both product columns stay the same height. */}
        <div className="brand-campaign">
          <a
            className="brand-campaign-frame"
            href={brandCampaign.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${brandCampaign.label} on Instagram in a new tab`}
          >
            <Picture src={brandCampaign.thumbnail} alt={brandCampaign.label} loading="lazy" decoding="async" />
            <span className="brand-campaign-play" aria-hidden="true">
              <Play size={16} />
            </span>
          </a>
          <span className="brand-video-label">{brandCampaign.label}</span>
        </div>

        {/* Campaign Banner */}
        <button className="campaign-ocean-banner" onClick={scrollToArchive}>
          <span className="banner-text" style={{ textAlign: 'left' }}>
            <span>2025SS</span>
            <h4>Fantasy About the Ocean</h4>
          </span>
          <span className="banner-arrow"><ArrowRight size={22} /></span>
        </button>
      </ScrollReveal>

      {/* Full Archive */}
      <section id="brand-archive-section" className="portfolio-archive-section">
        <div className="section-header-row">
          <div>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#777',
              display: 'block',
              marginBottom: '0.25rem'
            }}>
              Complete Archive
            </span>
            <h2 className="section-header-title">Collaborated Works</h2>
          </div>
        </div>

        {categories.length > 1 && (
          <div className="filter-pills-bar" role="tablist" aria-label="Archive Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={category === cat}
                className={`filter-pill ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="work-grid">
          {archivedLooks.map((work, index) => (
            <ScrollReveal
              key={work.id}
              as="article"
              animation="fade-up"
              delay={(index % 5) * 70}
              duration={650}
              className="work-card"
              onClick={() => openLook(work)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLook(work); }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${work.title}`}
            >
              <div className="work-card-frame">
                <Picture
                  src={work.image}
                  widths={[480]}
                  sizes="(max-width: 640px) 45vw, 232px"
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="work-card-name">{work.title}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}