import React, { useEffect, useRef } from "react";

const About = () => {
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

  const highlights = [
    {
      icon: "code",
      title: "Clean Code",
      description: "Writing maintainable, scalable code following SOLID principles and best practices"
    },
    {
      icon: "smartphone",
      title: "Modern UI",
      description: "Building beautiful interfaces with Jetpack Compose, XML and Material Design"
    },
    {
      icon: "bolt",
      title: "Performance",
      description: "Optimizing apps for speed, efficiency, and exceptional user experience"
    }
  ];

  return (
    <section
      id="about"
      className="m3-section"
      style={{ background: `linear-gradient(180deg, hsl(var(--background)), hsl(var(--md-surface-container-low)))` }}
      ref={sectionRef}
    >
      <div className="m3-content">
        <div className="m3-section-title animate-on-scroll mb-16 flex flex-col items-center text-center">
          <h2
            className="m3-display-medium font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            About Me
          </h2>
          <p
            className="m3-body-large max-w-2xl mx-auto text-center"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            Experienced for more than 5 years in Android application development with a focus on modern architecture and complex feature development. Passionate about creating high-performance mobile applications that users love, specializing in Kotlin Java, Jetpack Compose, XML and modern Android technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 animate-on-scroll hover:-translate-y-2 transition-all duration-300 cursor-default"
              style={{
                transitionDelay: `${index * 100}ms`,
                background: "hsl(var(--md-surface-container-low))",
                borderRadius: "16px",
                border: "1px solid hsl(var(--md-outline-variant))",
                boxShadow: "0 2px 8px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid hsl(var(--primary))";
                e.currentTarget.style.boxShadow = "0 6px 16px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid hsl(var(--md-outline-variant))";
                e.currentTarget.style.boxShadow = "0 2px 8px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.15)";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "hsl(var(--md-primary-container))" }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{
                    color: "hsl(var(--md-on-primary-container))",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <h3
                className="m3-title-large mb-2"
                style={{ color: "hsl(var(--foreground))" }}
              >
                {item.title}
              </h3>
              <p
                className="m3-body-medium"
                style={{ color: "hsl(var(--md-on-surface-variant))" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
