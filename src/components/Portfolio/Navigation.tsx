import { Button } from "@/components/ui/button";
import { Home, User, Briefcase, Mail } from "lucide-react";
import './FixStyle.css';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between fix-nav-container">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors fix-hero-button"
          >
            <Home className="w-6 h-6" />
            <span className="font-bold text-lg">Portfolio</span>
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;