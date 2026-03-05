// Import React and the useState hook to manage component state
import React, { useState } from 'react';
// Import component-specific styles
import './App.css';
<<<<<<< HEAD
=======
import Navbar from './navbar';
import Courses from './courses';
import Footer from './Footer';
>>>>>>> 3c03ae2a1b0320ee44bc54baec4e8101a922e6a5

function App() {
  // State to hold the tracking ID entered by the user
  const [trackingId, setTrackingId] = useState('');

  // Form submission handler for the tracking feature
  const handleTrack = (e) => {
    e.preventDefault(); // Prevent default page reload on form submit

    // Check if the user entered an ID and show corresponding message
    if (trackingId) {
      alert(`Tracking package: ${trackingId}. Simulation only!`);
    } else {
      alert('Please enter a tracking ID');
    }
  };

  return (
<<<<<<< HEAD
    // Main application container
    <div className="app">

      {/* NAVIGATION BAR SECTION */}
      <nav className="navbar">
        {/* Brand Logo & Name */}
        <div className="logo">
          {/* Package Box SVG Icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          Nexus<span>Logistics</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#network">Global Network</a>
          <a href="#contact">Contact Support</a>
        </div>

        {/* Call to Action Button */}
        <div className="nav-action">
          <button>Get a Quote</button>
        </div>
      </nav>

      {/* HERO SECTION - Initial landing view */}
      <section className="hero" id="home">
        <div className="tagline">Next-Generation Supply Chain</div>
        <h1>Global Logistics,<br />Simplified.</h1>
        <p>Experience seamless freight forwarding, real-time advanced tracking, and adaptive end-to-end supply chain solutions built for the modern world.</p>

        {/* Package Tracking Form */}
        <form className="tracking-box" onSubmit={handleTrack}>
          {/* Tracking Input Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input
            type="text"
            placeholder="Enter tracking number (e.g. NX-9482)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)} // Update state on user input
          />
          <button type="submit">Track Package</button>
        </form>

        {/* Highlight Statistics */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-num">150+</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">99.9%</span>
            <span className="stat-label">On-Time Delivery</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Real-Time Support</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Grid displaying key offerings */}
      <section className="services" id="services">
        <h2 className="section-title">Logistics Capabilities</h2>
        <p className="section-subtitle">Tailored logistics and robust supply chain services to efficiently move your business forward anywhere in the world.</p>

        <div className="service-grid">
          {/* Service Card 1: Air Freight */}
          <div className="service-card">
            <div className="service-icon">
              {/* Airplane SVG Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1 2.5L9 13l-4 4-2.5-.5-1.5 1.5 3.5 2 2 3.5 1.5-1.5-.5-2.5 4-4 3.5 6.3c.5.8 1.5 1 2.2.5l2-2.5c.3-.4.2-1-.2-1.2z" />
              </svg>
            </div>
            <h3>Air Freight Expedite</h3>
            <p>Exceptionally fast and reliable air cargo services with direct routes to all major global commerce destinations for your time-critical shipments.</p>
          </div>

          {/* Service Card 2: Ocean Freight */}
          <div className="service-card">
            <div className="service-icon">
              {/* Ship SVH Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h20" /><path d="M20 12v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" /><path d="M9 22H5a2 2 0 0 1-2-2v-6" /><path d="M15 22h4a2 2 0 0 0 2-2v-6" /><path d="M12 15V8" /><path d="m14 10-2-2-2 2" /><path d="M10 5a2 2 0 0 1 4 0v3h-4V5Z" />
              </svg>
            </div>
            <h3>Ocean Freight Solutions</h3>
            <p>Cost-effective sea transport solutions managed by elite maritime experts, ensuring the safest passage for your bulk container loads.</p>
          </div>

          {/* Service Card 3: Supply Chain */}
          <div className="service-card">
            <div className="service-icon">
              {/* Warehouse/Building SVG Icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="16" x="4" y="4" rx="2" /><path d="M4 11h16" /><path d="M4 15h16" /><path d="M10 4v16" /><path d="M14 4v16" />
              </svg>
            </div>
            <h3>Supply Chain Mastery</h3>
            <p>Comprehensive end-to-end warehousing, distribution algorithms, and inventory management tailored strictly to optimize operational flow.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Nexus Logistics. Advancing Global Trade.</p>
      </footer>
=======
    <div>
      <Navbar />
      <Courses />
      <Footer />
>>>>>>> 3c03ae2a1b0320ee44bc54baec4e8101a922e6a5
    </div>
  );
}
/* this line is for renita esther*/
export default App;