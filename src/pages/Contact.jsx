import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Globe, MapPin, Phone, Clock, FileCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Editorial & Lookbook',
    projectDate: '',
    budget: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionReceipt, setSubmissionReceipt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    'Editorial & Lookbook',
    'Runway & Fashion Week',
    'Global Advertising Campaign',
    'Brand Ambassador & Capsule',
    'Commercial Video / Film',
    'Press & Media Interview'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      errs.message = 'Please describe your project or inquiry details';
    } else if (formData.message.trim().length < 20) {
      errs.message = 'Project brief should be at least 20 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable editorial booking logging
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionReceipt({
        id: `CNM-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        data: { ...formData }
      });
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: 'Editorial & Lookbook',
        projectDate: '',
        budget: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="contact-page-container">
      {/* Contact Header */}
      <ScrollReveal animation="fade-up" duration={700} className="contact-hero-header">
        <span className="eyebrow">Booking & Representation</span>
        <h1>Inquiries & Collaborations</h1>
        <p>
          Open for fashion editorial, runway, campaign and creative film commissions. Booking details and
          the direct inquiry form are below.
        </p>
      </ScrollReveal>

      <div className="contact-main-grid">
        {/* Left Information Panel */}
        <div className="contact-info-panel">
          <ScrollReveal animation="fade-right" delay={100} duration={700} className="contact-info-card">
            <h3><Mail size={18} /> Booking Desk</h3>
            <p>
              Send runway inquiries, casting calls and commercial bookings to the desk below.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#888', fontWeight: 700, display: 'block' }}>
                Booking Email
              </span>
              <a href="mailto:booking@conenm-models.com" className="contact-email-link">
                booking@conenm-models.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={200} duration={700} className="contact-info-card">
            <h3><MapPin size={18} /> Based In</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <div>
                <strong style={{ color: '#111' }}>Seoul</strong>
                <div style={{ color: '#666' }}>South Korea</div>
              </div>
              <div>
                <strong style={{ color: '#111' }}>Paris</strong>
                <div style={{ color: '#666' }}>France</div>
              </div>
              <div>
                <strong style={{ color: '#111' }}>Tokyo</strong>
                <div style={{ color: '#666' }}>Japan</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={300} duration={700} className="contact-info-card">
            <h3><Clock size={18} /> Booking Notes</h3>
            <ul style={{ paddingLeft: '1.2rem', color: '#555', fontSize: '0.85rem', lineHeight: 1.6 }}>
              <li>Two to three weeks notice is appreciated for travel and runway bookings.</li>
              <li>Current comp card and measurements are available on request.</li>
              <li>Usage rights and fittings are agreed in the booking brief.</li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Right Inquiry Form */}
        <ScrollReveal animation="fade-left" delay={150} duration={850} className="contact-form-card">
          <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Booking Inquiry
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#666', marginBottom: '2rem' }}>
            Tell us about the project. Include dates, location and usage so availability can be confirmed.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. director@studio.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Brand / Agency / Publication</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="e.g. Dazed Magazine / Vogue"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Type of Inquiry</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="form-select"
                >
                  {inquiryTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Projected Shooting Dates</label>
                <input
                  type="text"
                  name="projectDate"
                  placeholder="e.g. March 2026 (2 shoot days)"
                  value={formData.projectDate}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g. $5,000 - $15,000 USD"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Lookbook booking for spring 2026"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              />
              {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Project Brief *</label>
              <textarea
                name="message"
                placeholder="Provide moodboard references, shoot location, styling expectations, and requested looks..."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              />
              {errors.message && <span className="form-error-msg">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit-btn"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>Send Inquiry <Send size={16} /></>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>

      {/* Confirmation Modal with Booking Receipt */}
      {submissionReceipt && (
        <div className="modal-backdrop" onClick={() => setSubmissionReceipt(null)}>
          <div
            className="modal-content-card"
            style={{ maxWidth: '580px', padding: '2.5rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={52} style={{ color: '#27c93f', margin: '0 auto 0.75rem' }} />
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '2rem', fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1, textTransform: 'uppercase' }}>
                Inquiry Sent
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#666', marginTop: '0.35rem' }}>
                Reference ID: <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#111' }}>{submissionReceipt.id}</span>
              </p>
            </div>

            <div style={{ fontFamily: 'var(--font-sans)', background: '#f8f8f8', border: '1px solid #eee', padding: '1.25rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Client:</strong> {submissionReceipt.data.name} ({submissionReceipt.data.organization || 'Independent / Self-representation'})
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Work Email:</strong> {submissionReceipt.data.email}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Type:</strong> {submissionReceipt.data.inquiryType}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Subject:</strong> {submissionReceipt.data.subject}
              </div>
              <div style={{ color: '#777', fontSize: '0.78rem', marginTop: '0.75rem', borderTop: '1px solid #e0e0e0', paddingTop: '0.5rem' }}>
                Sent: {submissionReceipt.timestamp} • Quote this reference number in any follow-up.
              </div>
            </div>

            <button
              onClick={() => setSubmissionReceipt(null)}
              style={{
                width: '100%',
                padding: '0.9rem',
                background: '#111111',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
            >
              Return to Website
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
