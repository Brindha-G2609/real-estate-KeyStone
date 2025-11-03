import React, { useState } from "react";
import "./ExploreProjects.css";

function CompletedProjects() {
  // ✅ Always keep images in /public/assets for direct access
  const completedProjects = [
    { id: 1, name: "Ayesha Enclave", img: "/assets/Completed/Ayesha Enclave-1.JPG" },
    { id: 2, name: "Fathima Avenue", img: "/assets/Completed/Fathima Avenue-1.JPG" },
    { id: 3, name: "Hameedia Nagar", img: "/assets/Completed/Hameedia Nagar-1.JPG" },
    { id: 4, name: "Jasmin Nagar", img: "/assets/Completed/Jasmin Nagar-1.JPG" },
    { id: 5, name: "Jasraj Nagar", img: "/assets/Completed/Jasraj Nagar-1.jpg" },
    { id: 6, name: "Kanathur Reddykuppam", img: "/assets/Completed/Kanathur Reddykuppam-1.jpg" },
    { id: 7, name: "Kovalam", img: "/assets/Completed/Kovalam-1.JPG" },
    { id: 8, name: "Muttukadu", img: "/assets/Completed/Muttukadu-1.JPG" },
    { id: 9, name: "Sri Ananda Padmanabha Avenue", img: "/assets/Completed/SRI ANANDA PADMANABHA AVENUE-1.jpg" },
    { id: 10, name: "Tindivanam", img: "/assets/Completed/TINDIVANAM-1.JPG" },
  ];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="projects-page">
      <h1>Completed Projects</h1>
      <p className="page-subtitle">
        Our completed projects showcase the trust, innovation, and excellence
        that define KeyStone Ventures. Each property reflects superior design
        and construction quality.
      </p>

      {/* 🖼️ Project Grid */}
      <div className="project-grid">
        {completedProjects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setPopupImage(project.img)}
          >
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>

      {/* 🏗️ Project Description Section */}
      <div className="completed-description">
        <h2>Completed Projects Overview</h2>
        <p>
          Over the years, we have successfully completed several landmark
          developments across ECR, OMR, and other fast-growing regions of Tamil
          Nadu. A few of them include:
        </p>

        <ul>
          <li>
            <strong>ECR – Neelangarai (2 Acres):</strong> A premium boutique
            coastal layout offering residents the rare combination of serene
            beachside living and seamless urban connectivity.
          </li>
          <li>
            <strong>ECR – Kanathur (10 Acres):</strong> Developed near the iconic
            Mayajaal Multiplex, Kanathur has grown into a thriving hub on the
            East Coast Road.
          </li>
          <li>
            <strong>ECR – Muttukadu (17 Acres):</strong> Strategically located next
            to MGM Dizzee World and overlooking the scenic Muttukadu backwaters,
            offering a unique blend of leisure and lifestyle.
          </li>
          <li>
            <strong>ECR – Kovalam (4 Acres):</strong> A beachfront community with
            unobstructed views of the Bay of Bengal, located near Fisherman’s
            Cove.
          </li>
          <li>
            <strong>ECR – Koovathur (40 Acres):</strong> A large-scale beachside
            layout that set new benchmarks for plotted developments midway between
            Chennai and Pondicherry.
          </li>
          <li>
            <strong>OMR – Pudupakkam (14 Acres):</strong> Premium DTCP-approved
            layout, Jasraj Nagar, developed near SIPCOT IT Park.
          </li>
          <li>
            <strong>Thirukazhukundram (5 Acres):</strong> Two thoughtfully planned
            layouts – Aysha Enclave and Fathima Nagar – developed at Karumarapakkam
            village.
          </li>
          <li>
            <strong>Marakkanam – Siruvadi (5 Acres):</strong> A well-laid-out plotted
            development, Hameedia Nagar, situated on the busy Tindivanam–Marakkanam
            Road.
          </li>
          <li>
            <strong>Tenkasi – Elathur (16 Acres):</strong> A residential plotted
            community developed amidst the lush green Tenkasi belt close to the
            Western Ghats and Courtallam.
          </li>
        </ul>
      </div>

      {/* 🔍 Image Popup */}
      {popupImage && (
        <div className="image-popup" onClick={() => setPopupImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={popupImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}

export { CompletedProjects };
