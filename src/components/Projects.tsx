import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MyTelkomsel Android App",
      description: "Developing and Maintenance Telkomsel Android App in domain transaction, digital wallet integration, payment native and universal payment page services",
      image: project1,
      tags: ["Kotlin", "Java", "XML", "MVVM", "Retrofit", "GSON", "Clean Architecture", "Room", "Shared Preferences", "Google Analytics", "Firebase Crashlytics", "JUnit", "Mockito"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm&hl=id&pli=1",
      detailLink: "/projects/mytelkomsel"
    },
    {
      title: "Digital Alumni Book Android App",
      description: "Helping user to find alumni from their school or community and help them to connect with each other",
      image: project2,
      tags: ["Kotlin", "MVP", "Coroutines", "Material Design", "XML", "SQLite", "Shared Preferences", "Firebase Crashlytics"],
      github: "#",
      demo: "",
      detailLink: "/projects/digital-alumni-book"
    },
    {
      title: "Bukku E-Commerce App",
      description: "Full-featured finding books, publisher or writer and buying books app with payment integration, cart management, and user profiles",
      image: project3,
      tags: ["Kotlin", "MVP", "Retrofit", "GSON", "Firebase Crashlytics"],
      github: "#",
      demo: "#",
      detailLink: "/projects/bukku-e-commerce"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work in Android development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-2">
                {project.detailLink && (
                  <Button size="sm" className="flex-1" asChild variant="outline">
                    <Link to={project.detailLink}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                )}
                {project.github && !project.detailLink && (
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
