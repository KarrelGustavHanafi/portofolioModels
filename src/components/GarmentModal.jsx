import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function GarmentModal({ garment, onClose }) {
  if (!garment) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content-card garment-modal-card"
        style={{ maxWidth: '780px', padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Garment Details">
          <X size={20} />
        </button>

        <div className="garment-modal-grid">
          {/* Garment High-Res Flatlay Display */}
          <div className="garment-modal-image-pane">
            <img
              src={garment.image}
              alt={garment.name}
              className="garment-modal-img"
              decoding="async"
            />
          </div>

          {/* Garment Editorial Spec Sheet */}
          <div className="garment-modal-details-pane">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-denim)',
                  backgroundColor: 'rgba(43, 73, 104, 0.08)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px'
                }}>
                  {garment.season} Capsule
                </span>
                <span style={{ fontSize: '0.72rem', color: '#999', fontFamily: 'monospace' }}>
                  {garment.code}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '2rem',
                fontWeight: 400,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#111',
                lineHeight: 1,
                marginBottom: '1rem'
              }}>
                {garment.name}
              </h2>

              <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {garment.details}
              </p>

              <div style={{
                background: '#fafafa',
                border: '1px solid #f0f0f0',
                padding: '1.25rem',
                borderRadius: '2px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                fontSize: '0.8rem'
              }}>
                <div>
                  <span style={{ color: '#888', display: 'block', textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 700 }}>
                    Composition
                  </span>
                  <span style={{ fontWeight: 600, color: '#222' }}>
                    {garment.composition}
                  </span>
                </div>
                <div>
                  <span style={{ color: '#888', display: 'block', textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 700 }}>
                    Silhouette
                  </span>
                  <span style={{ fontWeight: 600, color: '#222' }}>
                    {garment.silhouette}
                  </span>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ color: '#888', display: 'block', textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 700 }}>
                    Colorway
                  </span>
                  <span style={{ fontWeight: 600, color: '#222' }}>
                    {garment.color}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '2rem', display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={onClose}
                className="btn-interactive-press"
                style={{
                  flex: 1,
                  padding: '0.85rem',
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '2px',
                  transition: 'all 0.2s ease'
                }}
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
