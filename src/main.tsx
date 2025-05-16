import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Nav, Hero, Information } from "./features/base";
import { useState } from "react";

function MainApp() {
  const [activeSection, setActiveSection] = useState("introduction");
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Nav activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Information />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
);
