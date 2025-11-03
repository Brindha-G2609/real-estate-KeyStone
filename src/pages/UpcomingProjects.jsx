import React, { useState } from "react";
import "./ExploreProjects.css";

function UpcomingProjects() {
  const projects = [
    { id: 1, img: "src/assets/Upcoming/Casuarina Avenue.jpg", title: "Casuarina Avenue" },
    { id: 2, img: "src/assets/Upcoming/Jasmin Garden 5 Oct.JPG", title: "Jasmin Garden" },
  ];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="projects-page">
      <h1>Upcoming Projects</h1>
      <p className="page-subtitle">
        Get a glimpse of our exciting upcoming ventures — built to redefine comfort,
        community, and coastal living. These projects mark the next chapter in Keystone
        Ventures’ journey of excellence.
      </p>

      {/* 🖼️ Project Grid */}
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setPopupImage(project.img)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* 🔍 Image Popup */}
      {popupImage && (
        <div className="image-popup" onClick={() => setPopupImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={popupImage} alt="Full view" />
        </div>
      )}

      {/* 📘 Project Details */}
      <div className="project-details">
        <h2>Upcoming Projects</h2>
        <p>
          Elevate your lifestyle with four upcoming landmark projects from Keystone Ventures,
          each crafted to deliver premium living, prime connectivity, and lasting value.
        </p>

        <h3>Casuarina Avenue – ECR Kovalam</h3>
        <p>
          Welcome to luxury living by the sea, where every morning begins with the sound of waves.
          This DTCP-approved 1.5-acre beachside layout at Kovalam offers sea-view plots with private
          access to the sand — perfect for your dream villa or holiday retreat.
        </p>

        <h3>Azure Bay – ECR Uthandi</h3>
        <p>
          A boutique gated community overlooking the sea, located in Uthandi. Spread across 1.2 acres,
          Azure Bay is designed for the chosen few, offering a serene coastal lifestyle with effortless
          connectivity and premium amenities.
        </p>

        <h3>Jasmin Garden – ECR Pudupattinam</h3>
        <p>
          A premium DTCP & RERA-approved gated community on 7.83 acres featuring 115 plots.
          The project offers a fully compounded layout with wide tar roads, avenue trees, solar lights,
          and landscaped parks — just 600m from ECR and 500m from the upcoming New ECR (CPR).
        </p>

        <h3>Jasmin’s Brindhavanam – Tirunelveli</h3>
        <p>
          A 110-acre mega integrated township in Unnankulam Village, Nanguneri Taluk. Combining
          modern convenience with lush green landscapes, Jasmin’s Brindhavanam redefines future-ready
          community living in Southern Tamil Nadu.
        </p>
      </div>
    </div>
  );
}

export { UpcomingProjects };
