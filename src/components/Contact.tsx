import React, { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      icon: "mail",
      label: "Email",
      value: "firman.mfk@gmail.com",
      href: "mailto:firman.mfk@gmail.com"
    },
    {
      icon: "link",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/muhammad-firman-kahfi-597568117/"
    },
    {
      icon: "code",
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/FirmanMFK"
    }
  ];

  return (
    <section id="contact" className="m3-section" ref={sectionRef}>
      <div className="m3-content">
        <div className="m3-section-title animate-on-scroll mb-16 flex flex-col items-center text-center">
          <h2
            className="m3-display-medium font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Get In Touch
          </h2>
          <p
            className="m3-body-large max-w-2xl mx-auto text-center"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            Let's collaborate on your next Android project. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-card-outlined p-6 group hover:-translate-y-1 transition-all duration-300 animate-on-scroll no-underline"
              style={{ transitionDelay: `${index * 100}ms`, textDecoration: "none" }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "hsl(var(--md-tertiary-container))" }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{
                      color: "hsl(var(--md-on-tertiary-container))",
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    {link.icon}
                  </span>
                </div>
                <h3
                  className="m3-title-medium"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {link.label}
                </h3>
                <p
                  className="m3-body-medium"
                  style={{ color: "hsl(var(--md-on-surface-variant))" }}
                >
                  {link.value}
                </p>
                <span className="m3-tonal-button mt-1">
                  Connect
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p
            className="m3-body-large"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
