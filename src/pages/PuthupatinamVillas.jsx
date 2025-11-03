import React, { useState } from "react";
import "./ExploreProjects.css";

function PuthupatinamVillas() {
  const projects = [
    { id: 1, img: "/assets/Pudupattinamvillas/IMG-20251014-WA0060.jpg", title: "Puthupatinam Villa - 1" },
    { id: 2, img: "/assets/Pudupattinamvillas/IMG-20251014-WA0061.jpg", title: "Puthupatinam Villa - 2" },
    { id: 3, img: "/assets/Pudupattinamvillas/IMG-20251014-WA0062.jpg", title: "Puthupatinam Villa - 3" },
    { id: 4, img: "/assets/Pudupattinamvillas/IMG-20251014-WA0063.jpg", title: "Puthupatinam Villa - 4" },
    { id: 5, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.01.13_09eb93a9.jpg", title: "Puthupatinam Villa - 5" },
    { id: 6, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.01.14_eeac5dc1.jpg", title: "Puthupatinam Villa - 6" },
    { id: 7, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.03.43_62e5ec07.jpg", title: "Puthupatinam Villa - 7" },
    { id: 8, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.03.44_0d34d088.jpg", title: "Puthupatinam Villa - 8" },
    { id: 9, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.03.44_2d65665c.jpg", title: "Puthupatinam Villa - 9" },
    { id: 10, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.13.12_569534ee.jpg", title: "Puthupatinam Villa - 10" },
    { id: 11, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.13.12_c22076e3.jpg", title: "Puthupatinam Villa - 11" },
    { id: 12, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.13.12_e6852ef3.jpg", title: "Puthupatinam Villa - 12" },
    { id: 13, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.17.39_fdde0b91.jpg", title: "Puthupatinam Villa - 13" },
    { id: 14, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.18.16_256b2398.jpg", title: "Puthupatinam Villa - 14" },
    { id: 15, img: "/assets/Pudupattinamvillas/WhatsApp Image 2025-10-14 at 14.18.17_ad479ba2.jpg", title: "Puthupatinam Villa - 15" },
  ];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="projects-page">
      <h1>Puthupatinam Villas</h1>
      <p className="page-subtitle">
        Discover our Puthupatinam Villas — designed for comfort, crafted with quality,
        and located in one of the most serene coastal environments. These villas redefine
        premium living with thoughtful architecture and elegant finishes.
      </p>

      {/* 🏡 Villas Grid */}
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setPopupImage(project.img)}
          >
            <img src={project.img} alt={project.title} className="project-thumb" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* 🔍 Image Popup */}
      {popupImage && (
        <div className="image-popup" onClick={() => setPopupImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={popupImage} alt="Full View" className="popup-image" />
        </div>
      )}
    </div>
  );
}

export { PuthupatinamVillas };
