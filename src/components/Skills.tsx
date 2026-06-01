import React, { useEffect, useRef } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "code",
      skills: ["Kotlin", "Java", "Dart", "JavaScript", "PHP", "SQL"]
    },
    {
      title: "Mobile Development",
      icon: "smartphone",
      skills: ["Android SDK", "Flutter", "Jetpack Compose", "Coroutines"]
    },
    {
      title: "Architecture & State",
      icon: "architecture",
      skills: ["Clean Architecture", "MVVM", "BLoC", "Provider"]
    },
    {
      title: "Web & Backend",
      icon: "cloud",
      skills: ["HTML/CSS", "React", "Express", "Ktor", "Firebase", "Docker"]
    },
    {
      title: "Data & Networking",
      icon: "database",
      skills: ["REST APIs", "Retrofit", "Room", "SQLite", "Koin", "Datastore"]
    },
    {
      title: "Tools & Testing",
      icon: "construction",
      skills: ["Git", "Gradle", "detekt", "JUnit", "MockK", "Kover"]
    }
  ];

  return (
    <section id="skills" className="m3-section" ref={sectionRef}>
      <div className="m3-content">
        <div className="m3-section-title animate-on-scroll mb-16 flex flex-col items-center text-center">
          <h2
            className="m3-display-medium font-bold mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Skills & Technologies
          </h2>
          <p
            className="m3-body-large max-w-2xl mx-auto text-center"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            Comprehensive expertise across the Android and multi-platform development ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="m3-card-filled p-6 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{
                    color: "hsl(var(--primary))",
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  {category.icon}
                </span>
                <h3
                  className="m3-title-large"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="m3-chip cursor-default hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;