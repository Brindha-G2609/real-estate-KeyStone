import React from "react";
import "./NRIInvestment.css";

function NRIInvestment() {
  return (
    <div className="nri-page">
      <div className="nri-card">
        <h1 className="nri-title">NRI Investment Desk</h1>
        <p className="nri-subtitle">
          Specialized Services for Global Indian Investors
        </p>

        <ul className="nri-list">
          <li>🏠 End-to-end property buying assistance</li>
          <li>🌍 Virtual site visits and complete document support</li>
          <li>💰 High-potential real estate investment opportunities</li>
          <li>🔒 Secure and transparent transaction process</li>
        </ul>
       <a href="/Contact">
        <button className="nri-btn">Contact Our Team</button></a>
      </div>
    </div>
  );
}

export { NRIInvestment };
