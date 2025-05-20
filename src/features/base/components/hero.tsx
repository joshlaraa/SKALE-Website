// Hero section component for the SKALE website homepage
// Displays the main headline, description, call-to-action buttons, and a team image with download option

"use client";

import { Button } from "../../../components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import { downloadFile } from "@/lib/download-helper";

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    // Main hero section with background gradient
    <section className="to-white-50 relative overflow-hidden bg-gradient-to-b from-blue-100 py-20 md:py-24">
      <div className="relative z-10 container mx-auto w-full max-w-full px-4 md:max-w-7xl">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            {/* Headline and subheadline */}
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-primary block">SKALE</span>
              <span className="block text-2xl font-normal tracking-tighter sm:text-3xl md:text-4xl">
                Student Knowledge and Applied Learning in Engineering
              </span>
            </h1>
            {/* Description paragraph */}
            <p className="text-muted-foreground text-xl">
              Building the future of engineering at CSUSM through innovation,
              community, and applied learning.
            </p>
            {/* Call-to-action buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Get Involved
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("goals")}
              >
                Our Projects
              </Button>
            </div>
          </div>
          {/* Team image with download button */}
          <div className="bg-muted flex flex-col overflow-hidden rounded-lg">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <img
                src="https://res.cloudinary.com/dndzimyjp/image/upload/v1747686960/team2_h4n9et.jpg"
                alt="SKALE Team"
                width={600}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-muted p-2 text-center">
              <button
                onClick={() =>
                  downloadFile(
                    "https://res.cloudinary.com/dndzimyjp/image/upload/v1747686960/team2_h4n9et.jpg",
                    "SKALE_Team.jpg",
                  )
                }
                className="text-primary inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <Download className="h-4 w-4" /> Download Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
