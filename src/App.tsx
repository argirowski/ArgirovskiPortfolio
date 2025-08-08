import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ResumePage from "./components/ResumePage/ResumePage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="App">
        <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
        <Routes>
          <Route path="/" element={<HomePage onNavClick={handleNavClick} />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
