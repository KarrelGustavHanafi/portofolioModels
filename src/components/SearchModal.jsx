import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { portfolioLooks, brandProducts } from '../data/portfolioData';
import { collabProjects } from '../data/collabData';
import Picture from './Picture';

export default function SearchModal({ isOpen, onClose, onSelectItem, onNavigate }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matchedLooks = portfolioLooks
      .filter(l => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q) || l.category.toLowerCase().includes(q))
      .map(l => ({ ...l, type: 'Look' }));

    // Garments were retired from the page, so the product pair is searchable instead
    const matchedProducts = brandProducts
      .filter(p => p.name.toLowerCase().includes(q))
      .map(p => ({ ...p, title: p.name, type: 'Product' }));

    const matchedCollabs = collabProjects
      .filter(c => c.title.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q) || c.category.toLowerCase().includes(q))
      .map(c => ({ ...c, type: 'Collaboration' }));

    return [...matchedLooks, ...matchedProducts, ...matchedCollabs].slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-card" 
        style={{ maxWidth: '640px', padding: '1.5rem 2rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '2px solid #111', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
          <Search size={22} style={{ color: '#111' }} />
          <input 
            type="text" 
            autoFocus
            placeholder="Search looks, products, campaigns, denim..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '1.15rem',
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              color: '#111'
            }}
          />
          <button onClick={onClose} style={{ color: '#666' }} aria-label="Close Search">
            <X size={20} />
          </button>
        </div>

        {/* Quick Tag Suggestions */}
        {!query && (
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', display: 'block', marginBottom: '0.75rem' }}>
              Suggested Searches
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Ocean 2025SS', 'Denim Skirt', 'Vintage Cap', 'Streetwear', 'Sunglasses', 'Balloon Silhouette', 'Filmstrip'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    background: '#f4f4f4',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Tag size={12} /> {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && results.length === 0 && (
          <div style={{ padding: '2rem 0', textAlign: 'center', color: '#888' }}>
            No results found for "{query}". Try searching "denim", "tank", or "streetwear".
          </div>
        )}

        {results.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '420px', overflowY: 'auto' }}>
            {results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  background: '#fcfcfc',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f2f2f2'; e.currentTarget.style.borderColor = '#111'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fcfcfc'; e.currentTarget.style.borderColor = '#f0f0f0'; }}
              >
                <Picture
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '48px', height: '48px', objectFit: 'contain', background: '#fff', borderRadius: '2px', border: '1px solid #eee' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#666', background: '#eee', padding: '0.1rem 0.4rem', borderRadius: '2px' }}>
                      {item.type}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#888' }}>
                      {item.category || item.brand || item.season}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.title}
                  </h4>
                </div>
                <ArrowRight size={16} style={{ color: '#888' }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
