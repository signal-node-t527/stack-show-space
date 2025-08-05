import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Angular Notes App",
      description: "A comprehensive notes application built with Angular featuring full CRUD operations, search functionality, and responsive design.",
      technologies: ["Angular", "TypeScript", "CSS3", "HTML5"],
      github: "https://github.com/NazarenoTognoli/notes-app",
      demo: "https://www.linkedin.com/posts/nazareno-tognoli-024556279_this-ui-is-made-with-angular-repo-https-activity-7323919730275155968-7_bF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPkCZwBhHEavCHGEoLqXstVtDxUfTeHVv0"
    },
    {
      title: "JavaScript Grid System",
      description: "Advanced 2D grid system with collision detection and dynamic form rendering. Implements complex algorithms for spatial positioning.",
      technologies: ["JavaScript", "Canvas API", "CSS Grid"],
      github: "https://github.com/NazarenoTognoli/without-documentation/tree/master/2024/flexible-grid-placer",
      demo: "https://www.linkedin.com/posts/nazareno-tognoli-024556279_this-project-demanded-strong-oop-logic-in-activity-7323923313745887232-JItI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPkCZwBhHEavCHGEoLqXstVtDxUfTeHVv0"
    },
    {
      title: "Positioning Framework",
      description: "Flexible positioning system for web elements using percentage-based calculations and modular architecture patterns.",
      technologies: ["JavaScript", "DOM API", "CSS3"],
      github: "https://github.com/NazarenoTognoli/without-documentation/tree/master/2024/flexible-grid-placer",
      demo: "https://www.linkedin.com/posts/nazareno-tognoli-024556279_this-project-demanded-strong-oop-logic-in-activity-7323923313745887232-JItI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPkCZwBhHEavCHGEoLqXstVtDxUfTeHVv0"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some of my recent work and experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-elegant hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div className="flex gap-2 ml-auto">
                      <Button variant="ghost" size="icon" onClick={() => window.open(project.github, '_blank')} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4"/>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => window.open(project.demo, '_blank')} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4"/>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-muted/50 text-muted-foreground"
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

export default ProjectsSection;