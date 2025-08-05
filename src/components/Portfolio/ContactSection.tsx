import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">helper1422@gmail.com</p>
                <Button variant="outline" size="sm" onClick={() => window.location.href = 'mailto:helper1422@gmail.com'}>
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground mb-4">Buenos Aires, Argentina</p>
                <Button variant="outline" size="sm" onClick={() => window.open('https://maps.app.goo.gl/JZ4qrCqNuAmcRHus6', '_blank')}>
                  View Map
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 fix-contact-container">
            <Button variant="hero" size="lg" className="group" onClick={() => window.open('https://github.com/NazarenoTognoli', '_blank')}>
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button variant="hero" size="lg" className="group" onClick={() => window.open('https://www.linkedin.com/in/nazareno-tognoli-024556279/', '_blank')}>
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="portfolio" size="lg" className="group" onClick={() => window.location.href = 'mailto:helper1422@gmail.com'}>
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;