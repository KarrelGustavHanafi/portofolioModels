import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Picture from './Picture';

export default function Lightbox({ image, title, caption, credits, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content-card lightbox-modal-card"
        style={{ maxWidth: '960px', padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Preview">
          <X size={20} />
        </button>

        <div className="lightbox-modal-grid">
          {/* High-res Image View */}
          <div className="lightbox-image-pane">
            <Picture
              src={image}
              alt={title || 'Editorial Look'}
              className="lightbox-main-img"
              decoding="async"
            />
          </div>

          {/* Details & Editorial Notes */}
          <div className="lightbox-details-pane">
            <div>
              <span className="lightbox-archive-tag">
                Fashion Editorial Archive
              </span>
              <h2 className="lightbox-title-text">
                {title || 'Editorial Photograph'}
              </h2>
              {caption && (
                <p className="lightbox-caption-text">
                  {caption}
                </p>
              )}

              {credits && (
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1.25rem', marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: '0.5rem' }}>
                    Production Credits
                  </h4>
                  {credits.photographer && (
                    <div style={{ fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                      <strong style={{ color: '#222' }}>Photography:</strong> {credits.photographer}
                    </div>
                  )}
                  {credits.stylist && (
                    <div style={{ fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                      <strong style={{ color: '#222' }}>Styling:</strong> {credits.stylist}
                    </div>
                  )}
                  {credits.artDirection && (
                    <div style={{ fontSize: '0.82rem' }}>
                      <strong style={{ color: '#222' }}>Art Direction:</strong> {credits.artDirection}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="lightbox-action-row">
              <a
                href={image}
                target="_blank"
                rel="noreferrer"
                download
                className="lightbox-open-full-btn"
              >
                <ZoomIn size={16} /> Open High-Res Full Size
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
