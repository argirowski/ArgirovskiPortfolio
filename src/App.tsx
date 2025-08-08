import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ResumePage from "./components/ResumePage/ResumePage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  React.useEffect(() => {
    const sectionIds = ["home", "portfolio", "resume", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id));
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the section closest to the top
          const topMost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveSection(topMost.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

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
