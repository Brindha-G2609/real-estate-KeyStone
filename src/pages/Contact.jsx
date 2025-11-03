import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="intro-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have questions or want to know more about our projects?  
        Reach out to us — our team will get back to you soon!
      </motion.p>

      <div className="contact-wrapper">
        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Keystone Ventures</h2>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div className="info-text">
              <p>Plot No.1, Villa B,</p>
              <p>1st Avenue, Kuthubi Complex,</p>
              <p>Vettuvankeni, Chennai - 600115</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>
              <a href="tel:+919500269869">9500269869</a> /{" "}
              <a href="tel:+919500269867">9500269867</a>
            </p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:info@keystoneventures.net">
              info@keystoneventures.net
            </a>
          </div>

          <div className="info-item">
            <FaGlobe className="icon" />
            <a
              href="https://www.keystoneventures.net"
              target="_blank"
              rel="noreferrer"
            >
              www.keystoneventures.net
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Send Us a Message</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
              };

              await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

              alert("Message sent successfully!");
              e.target.reset();
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          Building Trust for Three Generations • Excellence • Transparency • Growth • Customer Satisfaction
        </div>
      </div>
    </div>
  );
};

export { Contact };
