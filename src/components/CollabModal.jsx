import React from 'react';
import { X, Calendar, Camera, Scissors } from 'lucide-react';

export default function CollabModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content-card"
        style={{ maxWidth: '840px', padding: 0, overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mac OS Top Bar Header */}
        <div className="finder-titlebar" style={{ height: '36px' }}>
          <div className="finder-controls">
            <span className="control-dot close" onClick={onClose} style={{ cursor: 'pointer' }}></span>
            <span className="control-dot minimize"></span>
            <span className="control-dot maximize"></span>
          </div>
          <span className="finder-filename" style={{ fontSize: '0.8rem' }}>
            {project.number} — {project.brand}
          </span>
          <button
            onClick={onClose}
            style={{ position: 'absolute', right: '12px', color: '#666' }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr' }}>
          {/* Visual Display */}
          <div style={{
            background: '#ffffff',
            borderRight: '1px solid #f0f0f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            position: 'relative'
          }}>
            <img
              src={project.image}
              alt={project.title}
              decoding="async"
              style={{ maxHeight: '380px', width: 'auto', objectFit: 'contain' }}
            />
            {project.handwrittenNote && (
              <span className="doodle-annotation" style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.5rem',
                transform: 'rotate(-4deg)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px'
              }}>
                "{project.handwrittenNote}"
              </span>
            )}
          </div>

          {/* Campaign Narrative */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#111',
                  background: '#f0f0f0',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px'
                }}>
                  {project.category}
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={13} /> {project.year}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '2.2rem',
                fontWeight: 400,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#111',
                lineHeight: 1,
                marginBottom: '0.35rem'
              }}>
                {project.title}
              </h2>

              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#555',
                marginBottom: '1.25rem'
              }}>
                Collaboration with <span style={{ color: '#111' }}>{project.brand}</span>
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              {project.quote && (
                <div style={{
                  borderLeft: '2px solid #111',
                  paddingLeft: '1rem',
                  fontStyle: 'italic',
                  fontSize: '0.85rem',
                  color: '#333',
                  marginBottom: '1.5rem'
                }}>
                  "{project.quote}"
                </div>
              )}

              {/* Credits */}
              <div style={{
                background: '#fafafa',
                padding: '1rem 1.25rem',
                borderRadius: '2px',
                border: '1px solid #f0f0f0',
                fontSize: '0.8rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <Camera size={14} style={{ color: '#888' }} />
                  <span style={{ color: '#777' }}>Photographer:</span>
                  <span style={{ fontWeight: 600, color: '#111' }}>{project.photographer}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scissors size={14} style={{ color: '#888' }} />
                  <span style={{ color: '#777' }}>Styling & Direction:</span>
                  <span style={{ fontWeight: 600, color: '#111' }}>{project.styling}</span>
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
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
