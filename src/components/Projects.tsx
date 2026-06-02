import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import project1 from "@/assets/mytelkomsel-home.jpg";
import project2 from "@/assets/alumni-home.jpeg";
import project3 from "@/assets/bukku-detail.jpg";

import DeviceMockup from "./DeviceMockup";
import tjpFuel from "@/assets/tjp-fuelmonitoring-home.jpeg";
import jejakOto from "@/assets/jejakoto-home.jpg";

const Projects = () => {
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
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "MyTelkomsel Android App",
      description: "Developing and Maintenance Telkomsel Android App in domain transaction, digital wallet integration, payment native and universal payment page services",
      image: project1,
      tags: ["Kotlin", "Java", "XML", "MVVM", "Retrofit", "GSON", "Clean Architecture", "Room", "Shared Preferences", "Google Analytics", "Firebase Crashlytics", "JUnit", "Mockito"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm&hl=id&pli=1",
      detailLink: "/projects/mytelkomsel",
      useMockup: true
    },
    {
      title: "Digital Alumni Book Android App",
      description: "Helping user to find alumni from their school or community and help them to connect with each other",
      image: project2,
      tags: ["Kotlin", "MVP", "Coroutines", "Material Design", "XML", "SQLite", "Shared Preferences", "Firebase Crashlytics"],
      github: "#",
      demo: "",
      detailLink: "/projects/digital-alumni-book",
      useMockup: true
    },
    {
      title: "Bukku E-Commerce App",
      description: "Full-featured finding books, publisher or writer and buying books app with payment integration, cart management, and user profiles",
      image: project3,
      tags: ["Kotlin", "MVP", "Retrofit", "GSON", "Firebase Crashlytics"],
      github: "#",
      demo: "",
      detailLink: "/projects/bukku-e-commerce",
      useMockup: true
    },
    {
      title: "Tunas Jaya Perkasa Fuel Monitoring",
      description: "Developed the TJP Fuel Monitoring application from the ground up using Flutter and Dart, delivering a highly responsive cross-platform experience for tracking and managing fuel assets.",
      image: tjpFuel,
      tags: ["Flutter", "Dart", "Provider", "SQLite", "DAO", "REST API", "Google MLKit", "OCR", "Geolocation"],
      github: "#",
      demo: "",
      detailLink: "/projects/tjp-fuel-monitoring",
      useMockup: true
    },
    {
      title: "JejakOto - Vehicle Management",
      description: "A comprehensive mobile-first Progressive Web Application designed to help users track and manage their vehicles, featuring an integrated AI Mechanic.",
      image: jejakOto,
      tags: ["React", "JavaScript", "Tailwind CSS", "Zustand", "Firebase", "Leaflet", "Vite", "PWA"],
      github: "#",
      demo: "https://jejakoto.web.id",
      detailLink: "/projects/jejakoto",
      useMockup: true
    }
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p
            className="m3-body-large max-w-2xl mx-auto text-center"
            style={{ color: "hsl(var(--md-on-surface-variant))" }}
          >
            Showcasing my best work in Android, Web and Multi-platform development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="m3-card-elevated group animate-on-scroll hover:-translate-y-2 transition-all duration-300"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Project Screenshot */}
              <div
                className="relative overflow-hidden flex justify-center items-center transition-colors duration-300"
                style={{ height: "300px", background: "hsl(var(--md-surface-container-high))" }}
              >
                {project.useMockup ? (
                  <div className="scale-[0.55] transform origin-center group-hover:scale-[0.6] transition-transform duration-500">
                    <DeviceMockup src={project.image} alt={project.title} />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3
                  className="m3-title-large mb-2"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {project.title}
                </h3>
                <p
                  className="m3-body-medium mb-4 line-clamp-3"
                  style={{ color: "hsl(var(--md-on-surface-variant))" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span key={tagIndex} className="m3-chip-tonal text-xs h-6 px-2.5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span
                      className="m3-chip text-xs h-6 px-2.5"
                      style={{ borderStyle: "dashed" }}
                    >
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-6">
                  {project.detailLink && (
                    <Link
                      to={project.detailLink}
                      className="m3-tonal-button w-full"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                      View Details
                    </Link>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m3-filled-button w-full"
                    >
                      <span className="material-symbols-outlined text-lg">
                        open_in_new
                      </span>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
