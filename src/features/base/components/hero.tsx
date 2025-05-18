import { Button } from "../../../components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 to-white py-20 md:py-32">
      <div className="relative z-10 container mx-auto w-full max-w-full px-4 md:max-w-7xl">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-primary block">SKALE</span>
              <span className="block text-2xl font-normal tracking-tighter sm:text-3xl md:text-4xl">
                Student Knowledge and Applied Learning in Engineering
              </span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Building the future of engineering at CSUSM through innovation,
              community, and applied learning.
            </p>
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
          <div className="bg-muted relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-[500px]">
            <img
              src="/team2.jpeg"
              alt="SKALE Team"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
