"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";

export default function Nav({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "history", label: "History" },
    { id: "project-pivot", label: "Project Pivot" },
    { id: "new-space", label: "New Space" },
    { id: "goals", label: "Goals" },
    { id: "vision", label: "Vision" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 w-full max-w-full items-center justify-between px-4 md:max-w-7xl">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="cursor-pointer text-xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SKALE
          </a>
        </div>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-primary cursor-pointer text-sm font-medium transition-colors hover:cursor-pointer ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <Button
          className="hidden cursor-pointer md:flex"
          onClick={() => scrollToSection("contact")}
        >
          Get Involved
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 border-b bg-white shadow-lg md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer py-2 text-left text-sm font-medium transition-colors hover:cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => handleNavClick("contact")}
            >
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
