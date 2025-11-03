import React, { useState } from "react";
import "./ExploreProjects.css";

function OngoingProjects() {
  const projects = [
    { id: 1, img: "/assets/Ongoing/Jasmin Nagar.jpg", title: "Jasmin Nagar" },
    { id: 2, img: "/assets/Ongoing/Palm enclave.jpg", title: "Palm Enclave" },
    { id: 3, img: "/assets/Ongoing/River View Top View.jpg", title: "River View Top View" },
    { id: 4, img: "/assets/Ongoing/WhatsApp Image 2025-10-18 at 13.51.40_591ed3c4.jpg", title: "Eden Enclave - Koovathur Beach" },
  ];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="projects-page">
      <h1>Ongoing Projects</h1>
      <p className="page-subtitle">
        Explore our ongoing developments where luxury meets lasting value —
        crafted to deliver comfort, connectivity, and community.
      </p>

      {/* 🏗️ Project Grid */}
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

      {/* 📘 Project Details */}
      <div className="project-details">
        <h2>Ongoing Projects :</h2>

        <h3>ECR – Palm Avenue & Eden Avenue</h3>
        <p>
          A premium beachside DTCP-approved layout with plots ranging from
          5000 to 15000 sq.ft in Koovathur – Kanathur village. Designed for
          those who value coastal living, this project blends natural beauty
          with modern infrastructure, making it perfect for holiday homes,
          boutique villas, and long-term investments.
        </p>

        <h3>Thirukazhukundram – River View</h3>
        <p>
          Discover boutique DTCP-approved plots ranging from 1000 to 2000 sq.ft.,
          thoughtfully planned along the scenic Palar River belt. Nestled in a
          serene, unpolluted, and clean environment. Experience riverside living
          with fresh air, open skies, and a peaceful neighborhood — ideal for
          your dream home, holiday retreat, or a smart investment for the future.
        </p>

        <h3>Tirunelveli – Jasmin Nagar</h3>
        <p>
          A sprawling 16-acre DTCP-approved residential layout, thoughtfully
          designed for immediate construction. Ideally located in the prime area
          of Seydunganallur, Jasmin Nagar offers residents the perfect blend of
          convenience and connectivity.
        </p>
        <p>
          Surrounded by existing houses and vibrant shopping areas, and supported
          by excellent social infrastructure including a nearby railway station,
          this well-developed community is the ideal choice for families seeking
          comfort, accessibility, and long-term value.
        </p>
      </div>

      {/* 🔍 Popup Image */}
      {popupImage && (
        <div className="image-popup" onClick={() => setPopupImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={popupImage} alt="Full view" />
        </div>
      )}
    </div>
  );
}

export { OngoingProjects };
