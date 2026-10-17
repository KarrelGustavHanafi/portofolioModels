import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { creativeSections } from '../data/creativeData';
import ScrollReveal from '../components/ScrollReveal';
import Picture from '../components/Picture';

/**
 * CreativeWorkItem
 * Single editorial tile: frame, discipline/period caption, opens the global lightbox.
 */
function CreativeWorkItem({ item, onOpenLightbox }) {
  const open = () => onOpenLightbox({
    image: item.image,
    title: item.title,
    caption: item.caption,
    credits: item.credit
  });

  return (
    <ScrollReveal
      as="article"
      animation="fade-up"
      duration={700}
      className={`cp-item ${item.layout} ${item.offset ? 'cp-offset' : ''}`}
      onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') open(); }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title}`}
    >
      <div className={`cp-frame ratio-${item.ratio}`}>
        <Picture
          src={item.image}
          widths={[840]}
          sizes="(max-width: 1023px) 45vw, 415px"
          alt={item.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="cp-caption">
        <div>
          <span className="cp-discipline">{item.discipline}</span>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </div>
        <span className="cp-meta">{item.meta}</span>
      </div>
    </ScrollReveal>
  );
}

/**
 * CompactTile
 * Section 01 only: image-first tile, no caption block. Keeps the same lightbox
 * behaviour as CreativeWorkItem but drops the card chrome so ten frames read as
 * one gallery.
 */
function CompactTile({ item, index, onOpenLightbox }) {
  const open = () => onOpenLightbox({
    image: item.image,
    title: item.title,
    caption: item.caption,
    credits: item.credit
  });

  return (
    <ScrollReveal
      as="article"
      animation="fade-up"
      duration={650}
      delay={(index % 5) * 60}
      className="cp-tile"
      onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') open(); }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title}`}
    >
      <Picture
        src={item.image}
        widths={[840]}
        sizes="(max-width: 640px) 45vw, 251px"
        alt={item.title}
        loading="lazy"
        decoding="async"
      />
      <span className="cp-tile-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </ScrollReveal>
  );
}

/**
 * ContentLinkTile
 * Section 03 only: opens the post on its own platform in a new tab. When no real
 * thumbnail exists yet, it renders the site-styled placeholder rather than
 * borrowing unrelated imagery that would misrepresent the video.
 */
function ContentLinkTile({ item }) {
  const url = item.instagramUrl || item.tiktokUrl || item.youtubeUrl;
  const platform = item.instagramUrl ? 'Instagram' : item.tiktokUrl ? 'TikTok' : 'YouTube';

  return (
    <a
      className="cp-link-tile"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.title} on ${platform} in a new tab`}
    >
      <div className={`cp-link-thumb ${item.ratio === 'wide' ? 'is-wide' : ''}`}>
        {item.thumbnail ? (
          <Picture src={item.thumbnail} alt={item.title} loading="lazy" decoding="async" />
        ) : (
          <span className="cp-link-fallback">
            <Play size={22} />
            <span className="cp-link-platform">{platform}</span>
          </span>
        )}
        <span className="cp-link-open" aria-hidden="true">
          <ArrowUpRight size={13} />
        </span>
      </div>
      <span className="cp-link-name">{item.title}</span>
    </a>
  );
}

/**
 * Main Page: 02. THE CREATIVE PORTFOLIO
 * Lives on the existing "collaborations" route — no new route is created.
 */
export default function BrandCollaborations({ onOpenLightbox, onNavigate }) {
  return (
    <div className="creative-page">
      {/* Hero */}
      <header className="cp-hero">
        <ScrollReveal animation="fade-up" duration={800} className="cp-hero-text">
          <span className="cp-hero-label">/ 02</span>
          <h1>THE CREATIVE<br />PORTFOLIO</h1>
          <p className="cp-hero-lead">
            One archive, three disciplines. Talent on set, stories behind the camera,
            and the post-production craft that finishes every frame — from first pose
            to final grade.
          </p>
          <span className="cp-hero-note">behind every frame</span>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" duration={800} className="cp-hero-visual">
          <figure className="cp-hero-figure">
            <Picture
              src="/assets/book-transparent.webp"
              widths={[860]}
              sizes="(max-width: 640px) 90vw, 460px"
              alt="Editorial composite of the model seated on an open illustrated planner"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </figure>
        </ScrollReveal>
      </header>

      {/* Categories */}
      {creativeSections.map((section) => (
        <section key={section.number} id={`cp-section-${section.number}`} className={`cp-section ${section.compact ? 'cp-section-compact' : ''}`}>
          <ScrollReveal animation="fade-up" duration={700} className={`cp-section-head ${section.compact ? 'cp-section-head-compact' : ''}`}>
            <div>
              <span className="cp-index">{section.number} — Archive</span>
              <h2 className="cp-title">{section.title}</h2>
            </div>
            <p className="cp-intro">{section.intro}</p>
          </ScrollReveal>

          <div className="cp-discipline-row">
            {section.disciplines.map((d) => (
              <span key={d} className="cp-chip">{d}</span>
            ))}
          </div>

          {section.linkGroups ? (
            <div className="cp-link-groups">
              {section.linkGroups.filter((group) => group.enabled !== false).map((group) => (
                <div key={group.id} className="cp-link-group">
                  <div className="cp-link-group-head">
                    <span className="cp-link-group-title">{group.title}</span>
                    <span className="cp-link-group-platform">{group.platform}</span>
                    <span className="cp-link-group-count">{group.items.length}</span>
                  </div>
                  <div className="cp-link-grid">
                    {group.items.map((item) => (
                      <ContentLinkTile key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={section.compact ? 'cp-grid cp-grid-compact' : 'cp-grid'}>
              {section.items.map((item, index) => (
                section.compact ? (
                  <CompactTile
                    key={item.id}
                    item={item}
                    index={index}
                    onOpenLightbox={onOpenLightbox}
                  />
                ) : (
                  <CreativeWorkItem
                    key={item.id}
                    item={item}
                    onOpenLightbox={onOpenLightbox}
                  />
                )
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Closing CTA */}
      <section className="cp-cta">
        <ScrollReveal animation="fade-right" duration={800}>
          <span className="cp-hero-label">Let's Work Together</span>
          <h2 className="cp-cta-title">Available for casting, directing<br />and post-production projects.</h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={120} duration={800}>
          <p className="cp-cta-copy">
            Editorial bookings, runway appearances, brand campaigns, film and audio-visual
            commissions across Seoul, Tokyo, Paris and worldwide destinations.
          </p>
          <div className="cp-cta-actions">
            <button className="cp-btn" onClick={() => onNavigate('contact')}>
              Start a Collaboration <ArrowUpRight size={16} />
            </button>
            <a href="mailto:inquiries@conenm-models.com" className="cp-btn cp-btn-ghost">
              inquiries@conenm-models.com
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}