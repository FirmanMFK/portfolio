import { Code2, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following SOLID principles and best practices"
    },
    {
      icon: Smartphone,
      title: "Modern UI",
      description: "Building beautiful interfaces with Jetpack Compose and Material Design"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing apps for speed, efficiency, and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced for more than 5 years in Android application development with a focus on modern architecture and complex feature development. Passionate about creating high-performance mobile applications that users love, specializing in Kotlin and Jetpack libraries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
