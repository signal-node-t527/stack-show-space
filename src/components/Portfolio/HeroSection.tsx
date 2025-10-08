import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import './FixStyle.css';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background code effect */}
      <div className="absolute inset-0 opacity-10 code-bg">
        <pre className="text-xs text-muted-foreground p-8 overflow-hidden">
          {`function createPortfolio() {
  const developer = {
    name: "Lorem Ipsum",
    role: "Fullstack Web Developer",
    passion: "Building amazing web experiences",
    technologies: ["React", "Angular", "Node.js", ".NET"],
    commitment: "Continuous learning and growth"
  };
  
  return developer.buildAwesomeThings();
}`}
        </pre>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name with glow effect */}
          <div className="border border-border/50 rounded-lg p-8 mb-8 card-elegant fix-class-name">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow fix-class-text">
              Emiliano T.
            </h1>
          </div>

          {/* Role cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="border border-border/50 rounded-lg p-4 card-elegant">
              <h2 className="text-lg font-semibold text-primary">Web</h2>
            </div>
            <div className="border border-border/50 rounded-lg p-4 card-elegant">
              <h2 className="text-xl font-bold text-accent">Software</h2>
            </div>
            <div className="border border-border/50 rounded-lg p-4 card-elegant">
              <h2 className="text-lg font-semibold text-primary">Developer</h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software developer with a strong foundation in modern web technologies, committed to delivering scalable solutions and fostering collaborative development environments.
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">Stack:</p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="text-primary">Angular</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary">ASP.NETCore</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary">SQLServer</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fix-hero-btn-container">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('experience')}
            >
              <ExternalLink className="w-5 h-5" />
              Experience
            </Button>
            <Button 
              variant="portfolio" 
              size="xl"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fix-scroll-indicator">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;