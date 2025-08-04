import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Nazareno E. Tognoli
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;