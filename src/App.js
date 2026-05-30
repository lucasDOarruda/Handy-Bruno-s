import React, { useState } from 'react';
import './App.css';

/* ── SVG Icons ── */
const IconBroom = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3L5 17h14L15 3"/>
    <path d="M5 17c0 2.2 3.1 4 7 4s7-1.8 7-4"/>
    <line x1="12" y1="3" x2="12" y2="8"/>
  </svg>
);

const IconKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M21 2l-9.6 9.6M15.5 7.5l3 3"/>
  </svg>
);

const IconTrash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14H6L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4h6v2"/>
  </svg>
);

const IconHammer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/>
    <path d="M17.64 15L22 10.36 17 5l-4.5 4.5"/>
    <path d="M16 7l1-5 5 1"/>
  </svg>
);

const IconPaint = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 3H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <path d="M12 11v4"/>
    <path d="M8 15h8"/>
    <path d="M10 19a2 2 0 104 0v-4h-4v4z"/>
  </svg>
);

const IconGarden = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M12 12C12 12 7 10 5 5c4 0 7 3 7 7z"/>
    <path d="M12 12c0 0 5-2 7-7-4 0-7 3-7 7z"/>
    <path d="M5 22h14"/>
  </svg>
);

const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconWA = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.736 5.484 2.027 7.793L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.852l-.485-.288-5.003 1.191 1.234-4.872-.315-.5A13.266 13.266 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333zm7.307-9.987c-.4-.2-2.366-1.168-2.733-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.222-2.77-.233-.4-.025-.616.175-.815.18-.178.4-.467.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.966-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.034.955.412 1.7.658 2.282.843.958.305 1.831.262 2.52.159.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
  </svg>
);

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const services = [
  { Icon: IconBroom,  title: 'House Cleaning',        description: 'Professional deep cleaning for homes of all sizes. Every corner spotless, guaranteed.' },
  { Icon: IconKey,    title: 'End of Lease Cleaning', description: 'Get your full bond back. End-of-lease cleans that meet real estate standards.' },
  { Icon: IconTrash,  title: 'Garbage & Junk Removal',description: 'Fast removal of unwanted items, rubbish, and old furniture — same day available.' },
  { Icon: IconHammer, title: 'Demolition',            description: 'Safe partial or full demolition for residential and light commercial properties.' },
  { Icon: IconPaint,  title: 'Painting',              description: 'Interior & exterior painting with premium finishes that refresh any space.' },
  { Icon: IconGarden, title: 'Garden Services',       description: 'Mowing, pruning, weeding, and full garden makeovers to boost curb appeal.' },
];

const checks = [
  'Fully insured & licensed',
  'Free quotes — no obligation',
  'Available 7 days a week',
  'Satisfaction guaranteed',
];

const WHATSAPP_URL = 'https://wa.me/14085998831';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-svg"><IconWrench /></span>
            <span className="logo-text">Handy <span className="logo-accent">Bruno's</span></span>
          </div>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['Services','About','Location','Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a></li>
            ))}
            <li><a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Get a Quote</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            <IconMapPin /> San Jose, California
          </div>
          <h1>Your Property,<br /><span className="accent">Transformed.</span></h1>
          <p className="hero-sub">
            Cleaning &nbsp;·&nbsp; End of Lease &nbsp;·&nbsp; Junk Removal &nbsp;·&nbsp; Demolition &nbsp;·&nbsp; Painting &nbsp;·&nbsp; Garden
          </p>

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
              <div className="pin-label"><IconMapPin /> San Jose, CA</div>
            </div>
          </div>

          <a className="btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <IconWA /> Book via WhatsApp
          </a>
        </div>

        <div className="hero-badge">
          <IconShield />
          <span>Licensed &amp; Insured</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-label">What We Offer</div>
        <h2>Full-Service Property Solutions</h2>
        <p className="section-sub">One call. Every job. Done right.</p>
        <div className="cards">
          {services.map(({ Icon, title, description }) => (
            <div className="card" key={title}>
              <div className="card-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-label">Who We Are</div>
            <h2>About <span className="accent">Handy Bruno's</span></h2>
            <p>
              Handy Bruno's is a family-owned property services company built on trust, hard work,
              and attention to detail. Moving out, renovating, or just need a fresh start —
              our team shows up on time and gets the job done right.
            </p>
            <ul className="check-list">
              {checks.map(c => (
                <li key={c}>
                  <span className="check-icon"><IconShield /></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-stats">
            {[['500+','Jobs Done'],['7','Days a Week'],['100%','Satisfaction'],['Free','Quotes']].map(([n,l]) => (
              <div className="stat" key={l}>
                <span className="stat-num">{n}</span>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section" id="location">
        <div className="section-label">Service Area</div>
        <h2>Based in San Jose, CA</h2>
        <p className="section-sub">Covering the entire Bay Area — we come to you.</p>
        <div className="map-wrapper">
          <div className="live-badge">
            <span className="live-dot" />
            LIVE · San Jose, CA
          </div>
          <iframe
            title="Handy Bruno's Location"
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
            <div className="pin-label"><IconMapPin /> San Jose, CA</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-label light">Get In Touch</div>
        <h2>Ready to Get Started?</h2>
        <p>Message us on WhatsApp — we reply within minutes.</p>
        <a className="btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <IconWA />
          Chat with us on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Handy Bruno's — San Jose, CA</p>
        <p>+1 (408) 599-8831</p>
      </footer>

      {/* FLOATING WA */}
      <a className="float-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <IconWA />
      </a>
    </div>
  );
}
