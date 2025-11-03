import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="page-title">About Us</h1>

      <p className="intro-text">
        Mr. <strong>Mohamed Nowfel</strong>, Founder & CEO of <strong>Keystone Ventures</strong>, 
        is a distinguished real estate professional and veteran property developer with over three 
        decades of industry expertise. Starting his entrepreneurial journey at just 21, he has built 
        an impeccable reputation for trust, transparency, and value-driven developments.
      </p>

      <p>
        A specialist in <strong>ECR, Chennai</strong>, he has successfully developed and marketed several 
        residential layouts in prime locations such as <strong>ECR, OMR, GST Road, Thirukazhukundram, 
        and Tirunelveli</strong>. His projects are renowned for their precision, quality, and customer-focused 
        approach, ensuring strong property appreciation and long-term satisfaction.
      </p>

      <p>
        Backed by robust due diligence, efficient land banking, and a deep understanding of regulatory 
        frameworks, his ventures are known for superior planning standards, flawless title documentation, 
        and value-optimized infrastructure.
      </p>

      <p>
        Known for his commitment to excellence, he has executed large-scale land trading and meticulously 
        planned developments, consistently earning trust and credibility in the competitive real estate 
        sector. His strong network with prestigious clients, investors, and NRI customers further adds 
        strength to his ventures, enabling him to complete projects quickly and efficiently.
      </p>

      <p>
        As CEO of Keystone Ventures, he continues to lead with vision and reliability, delivering developments 
        that not only align with market demands but also create enduring value for every customer.
      </p>

      <section className="vision-section">
        <h2>Vision</h2>
        <p>
          To be a trusted leader in real estate, creating premium developments that deliver lasting value and growth.
        </p>
      </section>

      <section className="mission-section">
        <h2>Mission</h2>
        <ul>
          <li>Develop quality layouts that align with market needs.</li>
          <li>Ensure trust, transparency, and timely execution.</li>
          <li>Build strong networks with clients, investors, and NRIs.</li>
          <li>Deliver developments that bring appreciation and satisfaction.</li>
        </ul>
      </section>

      <section className="values-section">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Trust</strong> – Building relationships on honesty and reliability.</li>
          <li><strong>Excellence</strong> – Striving for precision and quality in every project.</li>
          <li><strong>Innovation</strong> – Adapting to market trends with forward-thinking solutions.</li>
          <li><strong>Customer Focus</strong> – Ensuring value, growth, and satisfaction for every client.</li>
        </ul>
      </section>
    </div>
  );
}

export { AboutUs };
