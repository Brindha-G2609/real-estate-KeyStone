import React from "react";
import { Link } from "react-router-dom";
import "./ExploreProjects.css";

function ExploreProjects() {
  return (
    <div className="projects-page">
      <h1 className="page-title">Explore Our Projects</h1>
      <p className="page-subtitle">
        Discover our wide range of real estate developments — from completed
        milestones to upcoming visions.
      </p>

      <div className="project-grid">
        {/* Completed Projects */}
        <Link to="/completed-projects" className="project-card">
          <img
            src="/assets/gn_asset/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg"
            alt="Completed Projects"
            className="project-thumb"
          />
          <h3>Completed Projects</h3>
          <p>
            Explore our successfully delivered projects that reflect quality,
            innovation, and trust.
          </p>
        </Link>

        {/* Puthupatinam Villas */}
        <Link to="/puthupatinam-villas" className="project-card">
          <img
            src="/assets/gn_asset/husband-pushing-his-wife-sitting-cardboard-box.jpg"
            alt="Puthupatinam Villas"
            className="project-thumb"
          />
          <h3>Puthupatinam Villas</h3>
          <p>
            Take a look at our luxurious coastal villas that blend modern
            architecture with serene living.
          </p>
        </Link>

        {/* Upcoming Projects */}
        <Link to="/upcoming-projects" className="project-card">
          <img
            src="/assets/gn_asset/young-couple-moving-into-new-home.jpg"
            alt="Upcoming Projects"
            className="project-thumb"
          />
          <h3>Upcoming Projects</h3>
          <p>
            Get a sneak peek into our upcoming developments designed for premium
            comfort and smart investment.
          </p>
        </Link>

        {/* Ongoing Projects */}
        <Link to="/ongoing-projects" className="project-card">
          <img
            src="/assets/gn_asset/AdobeStock_626749294_Preview.jpeg"
            alt="Ongoing Projects"
            className="project-thumb"
          />
          <h3>Ongoing Projects</h3>
          <p>
            Track our current ventures that redefine community living with
            sustainable design and innovation.
          </p>
        </Link>
      </div>
    </div>
  );
}

export { ExploreProjects };
