import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Globe, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "CSS", "HTML", 
    "React", "Angular", "GitHub", "GIT", "ExpressJS", "NodeJS", "MySQL", "SQL"
  ];

  const languages = [
    { name: "English", level: "Advanced" },
    { name: "Spanish", level: "Native" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about technology and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="outline" className="border-primary/30">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Data & Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Universidad de Buenos Aires</p>
                    <p className="text-sm text-muted-foreground">2025 - 2030</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;