import React from "react";
import "./Footer.css";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section company-info">
          <h3>KeyStone Ventures Private Limited</h3>
          <p>Building Trust for Three Generations</p>
          <p>Neelankarai, Chennai, Tamil Nadu</p>
          <p>Phone: +91-98765 43210</p>
          <p>Email: contact@keystoneventures.com</p>
          <p>Website: www.keystoneventures.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-vision">Our Vision</a></li>
            <li><a href="/our-mission">Our Mission</a></li>
            <li><a href="/our-values">Our Values</a></li>
            <li><a href="/nri-investment-desk">NRI Investment Desk</a></li>
            <li><a href="/explore-projects">Explore Our Projects</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h4>Stay connected for the latest project updates and investment opportunities.</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={18} /> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={18} /> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter size={18} /> Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <Youtube size={18} /> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 KeyStone Ventures Private Limited. All Rights Reserved.</p>
        <p className="disclaimer">
          Disclaimer: The information on this website is for general guidance and does not constitute legal or financial advice.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
