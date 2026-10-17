import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, MapPin, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText('azkiaprusha@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="contact-page-container">
      {/* Contact Header */}
      <ScrollReveal animation="fade-up" duration={700} className="contact-hero-header">
        <span className="eyebrow">Direct Booking &amp; Collaborations</span>
        <h1>LET'S CREATE TOGETHER</h1>
        <p>
          Open for fashion editorial, runway bookings, commercial campaigns, and creative audio-visual projects.
          Reach out directly via Instagram DM or Email — no forms required.
        </p>
      </ScrollReveal>

      {/* Two Direct Contact Action Cards */}
      <div className="contact-channels-grid">
        {/* Instagram DM Card */}
        <ScrollReveal animation="fade-up" delay={100} duration={700} className="contact-channel-card">
          <div className="channel-card-top">
            <span className="channel-badge">Fast Response</span>
            <div className="channel-icon-circle">
              <InstagramIcon size={28} />
            </div>
          </div>

          <div className="channel-card-body">
            <span className="channel-eyebrow">Social Channel</span>
            <h2 className="channel-title">Instagram DM</h2>
            <p className="channel-desc">
              Direct message for quick collaboration proposals, casting calls, moodboard sharing, and creative inquiries.
            </p>

            <div className="channel-target-box">
              <span className="channel-target-label">Profile Handle</span>
              <a
                href="https://www.instagram.com/azkiaprus/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-handle-link"
                title="View Instagram Profile"
              >
                @azkiaprus
              </a>
            </div>
          </div>

          <div className="channel-card-footer">
            <a
              href="https://www.instagram.com/azkiaprus/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-primary-btn action-hover-pop"
              aria-label="Send a direct message on Instagram"
            >
              <span>SEND A DM</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        {/* Email Direct Card */}
        <ScrollReveal animation="fade-up" delay={200} duration={700} className="contact-channel-card">
          <div className="channel-card-top">
            <span className="channel-badge channel-badge-desk">Official Desk</span>
            <div className="channel-icon-circle">
              <Mail size={28} />
            </div>
          </div>

          <div className="channel-card-body">
            <span className="channel-eyebrow">Direct Inbox</span>
            <h2 className="channel-title">Email Me</h2>
            <p className="channel-desc">
              For lookbook briefs, runway scheduling, commercial briefs, call sheets, and full project commissions.
            </p>

            <div className="channel-target-box">
              <div className="channel-target-row">
                <span className="channel-target-label">Email Address</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="channel-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} style={{ color: '#27c93f' }} />
                      <span style={{ color: '#27c93f' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:azkiaprusha@gmail.com"
                className="channel-email-link"
                title="Send email via default email client"
              >
                azkiaprusha@gmail.com
              </a>
            </div>
          </div>

          <div className="channel-card-footer">
            <a
              href="mailto:azkiaprusha@gmail.com"
              className="channel-primary-btn action-hover-pop"
              aria-label="Send an email to azkiaprusha@gmail.com"
            >
              <span>SEND AN EMAIL</span>
              <Mail size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Editorial Details Strip */}
      <ScrollReveal animation="fade-up" delay={300} duration={700} className="contact-details-strip">
        <div className="detail-item">
          <div className="detail-icon-wrap">
            <MapPin size={18} />
          </div>
          <div>
            <strong className="detail-label">Location Base</strong>
            <p className="detail-value">Serang, Banten, Indonesia • Available Worldwide</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon-wrap">
            <Clock size={18} />
          </div>
          <div>
            <strong className="detail-label">Response Time</strong>
            <p className="detail-value">Replies typically within 24 to 48 hours</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon-wrap">
            <Sparkles size={18} />
          </div>
          <div>
            <strong className="detail-label">Portfolio &amp; Rates</strong>
            <p className="detail-value">Comp card, measurements &amp; rates provided upon request</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
