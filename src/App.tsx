import React, { useState } from "react";
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
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
      <section id="home">
        <HomePage onNavClick={handleNavClick} />
      </section>
      <section id="portfolio">
        <PortfolioPage />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
}

export default App;
