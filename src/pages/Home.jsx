import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const heroBanners = [
  {
    img: "public/assets/gn_asset/jasper-boer-CvpWxeAEUOE-unsplash (1).jpg",
    title: "Luxury Villas that Redefine Modern Living",
    subtitle: "Experience elegance, comfort, and serenity in every corner.",
  },
  {
    img: "public/assets/gn_asset/luxury-beachfront-villa-sunset-with-infinity-pool.jpg",
    title: "Crafted With Precision, Built on Trust",
    subtitle: "Three generations of legacy and excellence in real estate.",
  },
  {
    img: "public/assets/gn_asset/beachfront-bungalow-dusk.jpg",
    title: "Where Modern Architecture Meets Heritage",
    subtitle: "Experience a blend of innovation and timeless design.",
  },
  {
    img: "public/assets/gn_asset/mohd-elle-oji_NGmBI5o-unsplash.jpg",
    title: "Homes that Reflect Your Dreams",
    subtitle: "Every home is designed for the way you live today.",
  },
];

const familyImages = [
  "/assets/gn_asset/pexels-dariaobymaha-1683975.jpg",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  "/assets/gn_asset/pexels-a-darmel-7641904.jpg",
];

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* ✅ Hero Banner Section */}
      <section className="hero-banner">
        {heroBanners.map((banner, index) => (
          <div
            key={index}
            className={`banner-slide ${index === currentBanner ? "active" : ""}`}
            style={{ backgroundImage: `url(${banner.img})` }}
          >
            <div className="hero-overlay">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <button
                className="explore-btn"
                onClick={() => navigate("/explore-projects")}
              >
                Explore Our Projects
              </button>
            </div>
          </div>
        ))}

        {/* ✅ Dots Navigation */}
        <div className="hero-controls">
          {heroBanners.map((_, i) => (
            <span
              key={i}
              className={i === currentBanner ? "dot active" : "dot"}
              onClick={() => setCurrentBanner(i)}
            />
          ))}
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="about-section">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h2>About Keystone Ventures</h2>
          <p>
            For over three generations, <strong>KeyStone Ventures</strong> has
            been a symbol of heritage, integrity, and excellence in Indian real
            estate. Rooted in a legacy of trust and guided by timeless family
            values, we help discerning clients invest in properties that offer
            both emotional and financial value.
            <br />
            <br />
            With deep market expertise and an unwavering commitment to
            transparency, we ensure every transaction is secure, seamless, and
            rewarding. At KeyStone Ventures, real estate is more than business —
            it’s a family legacy built on trust, vision, and enduring
            relationships.
          </p>
        </div>
      </section>

      {/* ✅ Mission Section */}
      <section className="mission-section">
        <div className="mission-overlay"></div>
        <div className="mission-container">
          <h2>Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card">
              Develop quality layouts that align with market needs.
            </div>
            <div className="mission-card">
              Ensure trust, transparency, and timely execution.
            </div>
            <div className="mission-card">
              Build strong networks with clients, investors, and NRIs.
            </div>
            <div className="mission-card">
              Deliver developments that bring appreciation and satisfaction.
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Core Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Trust</h3>
              <p>Building relationships on honesty and reliability.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>Striving for precision and quality in every project.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Adapting to market trends with forward-thinking solutions.</p>
            </div>
            <div className="value-item">
              <h3>Customer Focus</h3>
              <p>Ensuring value, growth, and satisfaction for every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Family Section */}
      <section className="family-section">
        <h2>Where Families Find Their Forever Home</h2>
        <div className="family-grid">
          {familyImages.map((img, i) => (
            <motion.div
              key={i}
              className="family-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={img} alt={`Family ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch With Us</h2>
        <p>
          Have questions or want to know more about our luxury villas? Reach out
          to our team — we’d love to help you start your dream home journey.
        </p>
        <button className="contact-btn" onClick={() => navigate("/Contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export { Home };
