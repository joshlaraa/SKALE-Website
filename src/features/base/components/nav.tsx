import { Button } from "../../../components/ui/button";
import skaleLogo from "../../../assets/react.svg";

export default function Nav({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 w-full max-w-full items-center justify-between px-4 md:max-w-7xl">
        <div className="flex items-center gap-2">
          <img
            src={skaleLogo || "/placeholder.svg"}
            alt="SKALE Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">SKALE</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          {[
            { id: "introduction", label: "Introduction" },
            { id: "history", label: "History" },
            { id: "project-pivot", label: "Project Pivot" },
            { id: "new-space", label: "New Space" },
            { id: "goals", label: "Goals" },
            { id: "vision", label: "Vision" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-primary text-sm font-medium transition-colors ${
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
          className="hidden md:flex"
          onClick={() => scrollToSection("contact")}
        >
          Get Involved
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
