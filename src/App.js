import React, { useState } from 'react';
import './App.css';

const services = [
  {
    icon: '🏠',
    title: 'House Cleaning',
    description: 'Professional deep cleaning for homes of all sizes. We leave every corner spotless.',
  },
  {
    icon: '🔑',
    title: 'End of Lease Cleaning',
    description: 'Get your full bond back. Thorough end-of-lease cleans that meet real estate standards.',
  },
  {
    icon: '🗑️',
    title: 'Garbage & Junk Removal',
    description: 'Fast and efficient removal of unwanted items, rubbish, and old furniture.',
  },
  {
    icon: '🔨',
    title: 'Demolition',
    description: 'Safe partial or full demolition services for residential and light commercial properties.',
  },
  {
    icon: '🎨',
    title: 'Painting',
    description: 'Interior and exterior painting with premium finishes that refresh any space.',
  },
  {
    icon: '🌿',
    title: 'Garden Services',
    description: 'Lawn mowing, pruning, weeding, and full garden makeovers to boost your curb appeal.',
  },
];

const WHATSAPP_NUMBER = '14085998831';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-icon">🛠️</span>
            <span className="logo-text">Handy <span className="logo-accent">Bruno's</span></span>
          </div>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Property,<br /><span className="accent">Transformed.</span></h1>
          <p className="hero-sub">
            Cleaning · End of Lease · Junk Removal · Demolition · Painting · Garden
          </p>
          {/* Mini map in hero */}
          <div className="hero-map-wrapper">
            <div className="live-badge">
              <span className="live-dot" />
              LIVE · San Jose, CA
            </div>
            <iframe
              title="San Jose CA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101946.52978795507!2d-122.02249674609376!3d37.33233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-pin-overlay">
              <div className="map-pin">
                <span className="pin-ring" />
                <span className="pin-ring pin-ring-2" />
                <span className="pin-dot" />
              </div>
              <div className="pin-label">📍 San Jose, CA</div>
            </div>
          </div>

          <a className="btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            📲 Book via WhatsApp
          </a>
        </div>
        <div className="hero-badge">
          <span>Licensed</span>
          <span>&amp;</span>
          <span>Insured</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2>What We Do</h2>
        <p className="section-sub">Full-service property solutions under one roof.</p>
        <div className="cards">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-text">
            <h2>About <span className="accent">Handy Bruno's</span></h2>
            <p>
              Handy Bruno's is a family-owned property services company built on trust, hard work,
              and attention to detail. Whether you're moving out, renovating, or just need a
              fresh start — our team shows up on time and gets the job done right.
            </p>
            <ul className="check-list">
              <li>✅ Fully insured &amp; licensed</li>
              <li>✅ Free quotes — no obligation</li>
              <li>✅ Available 7 days a week</li>
              <li>✅ Satisfaction guaranteed</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat"><span className="stat-num">500+</span><span>Jobs Done</span></div>
            <div className="stat"><span className="stat-num">7</span><span>Days a Week</span></div>
            <div className="stat"><span className="stat-num">100%</span><span>Satisfaction</span></div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section" id="location">
        <h2>Where We Serve</h2>
        <p className="section-sub">Based in San Jose, California — covering the entire Bay Area.</p>
        <div className="map-wrapper">
          <div className="live-badge">
            <span className="live-dot" />
            LIVE · San Jose, CA
          </div>
          <iframe
            title="Handy Bruno's Location - San Jose CA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101946.52978795507!2d-122.02249674609376!3d37.33233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Pinging pin overlay centred on San Jose */}
          <div className="map-pin-overlay">
            <div className="map-pin">
              <span className="pin-ring" />
              <span className="pin-ring pin-ring-2" />
              <span className="pin-dot" />
            </div>
            <div className="pin-label">📍 San Jose, CA</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Ready to Get Started?</h2>
        <p>Send us a message on WhatsApp and we'll get back to you within minutes.</p>
        <a className="btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.736 5.484 2.027 7.793L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.852l-.485-.288-5.003 1.191 1.234-4.872-.315-.5A13.266 13.266 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333zm7.307-9.987c-.4-.2-2.366-1.168-2.733-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.178.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.966-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.034.955.412 1.7.658 2.282.843.958.305 1.831.262 2.52.159.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
          </svg>
          Chat with us on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Handy Bruno's. All rights reserved.</p>
        <p>+1 (408) 599-8831</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        className="float-wa"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.736 5.484 2.027 7.793L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.852l-.485-.288-5.003 1.191 1.234-4.872-.315-.5A13.266 13.266 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333zm7.307-9.987c-.4-.2-2.366-1.168-2.733-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.178.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.966-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.034.955.412 1.7.658 2.282.843.958.305 1.831.262 2.52.159.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
        </svg>
      </a>
    </div>
  );
}
