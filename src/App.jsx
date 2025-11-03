import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NRIInvestment } from "./pages/NRIInvestment";
import { ExploreProjects } from "./pages/ExploreProjects";
import { CompletedProjects } from "./pages/CompletedProjects";
import { UpcomingProjects } from "./pages/UpcomingProjects";
import { OngoingProjects } from "./pages/OngoingProjects";
import { PuthupatinamVillas } from "./pages/PuthupatinamVillas";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import "./App.css";
import logo from "./assets/logo.png";

// ✅ Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo-section">
            <img src={logo} alt="KeyStone Ventures Logo" className="logo-img" />
            <h2 className="logo-text">KeyStone Ventures</h2>
          </div>

          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nri-investment">NRI Investment</Link></li>

              {/* Dropdown menu */}
              <li className="dropdown">
                <Link to="/explore-projects" className="dropdown-title">
                  Explore Projects ▾
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/completed-projects">Completed Projects</Link></li>
                  <li><Link to="/upcoming-projects">Upcoming Projects</Link></li>
                  <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
                  <li><Link to="/puthupatinam-villas">Puthupatinam Villas</Link></li>
                </ul>
              </li>

              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nri-investment" element={<NRIInvestment />} />
          <Route path="/explore-projects" element={<ExploreProjects />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/upcoming-projects" element={<UpcomingProjects />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/puthupatinam-villas" element={<PuthupatinamVillas />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export { App };
