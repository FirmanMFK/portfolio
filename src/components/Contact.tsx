import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "firman.mfk@gmail.com",
      href: "mailto:firman.mfk@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/muhammad-firman-kahfi-597568117/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/FirmanMFK"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next Android project. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <Card 
              key={index}
              className="hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <link.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{link.label}</CardTitle>
                <CardDescription>{link.value}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
