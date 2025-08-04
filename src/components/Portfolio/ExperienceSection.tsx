import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Zap } from "lucide-react";

const ExperienceSection = () => {
  const projects = [
    {
      title: "Notes Application UI with Angular Framework",
      description: "Developed a notes application UI ensuring interface validation through manual testing to guarantee visual and functional consistency. The interface is minimalistic and validated through exploratory testing and edge case review.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Angular", "TypeScript", "UI Testing"]
    },
    {
      title: "2D Grid-Based Design System with Collision Detection",
      description: "Developed a grid system based on the Cartesian product of two discrete sets (rows × columns), where each figure is a subset of the Cartesian space. Implemented collision detection before positioning figures.",
      icon: <Database className="w-6 h-6" />,
      technologies: ["JavaScript", "2D Graphics", "Collision Detection"]
    },
    {
      title: "Bidirectional Absolute and Relative Positioning System",
      description: "Developed a system that provides a robust and flexible mechanism for resizing absolutely positioned elements within a relative container. Uses percentage-based calculations with a modular proxy pattern for efficient DOM handling.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["JavaScript", "DOM Manipulation", "CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Highlighted practical experience and training
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-elegant hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-primary">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;