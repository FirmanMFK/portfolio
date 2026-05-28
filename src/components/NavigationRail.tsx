import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "person" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "projects", label: "Projects", icon: "devices" },
  { id: "contact", label: "Contact", icon: "mail" },
];

const NavigationRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation Rail */}
      <nav className="m3-nav-rail hidden md:flex" aria-label="Main navigation">


        {/* Nav Items */}
        <div className="flex flex-col items-center gap-3 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`m3-nav-rail-item ${activeSection === item.id ? "active" : ""}`}
              aria-label={`Navigate to ${item.label}`}
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              <div
                className={`m3-nav-rail-indicator ${activeSection === item.id ? "active" : ""}`}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{
                    color:
                      activeSection === item.id
                        ? "hsl(var(--md-on-secondary-container))"
                        : "hsl(var(--md-on-surface-variant))",
                    fontVariationSettings: activeSection === item.id
                      ? "'FILL' 1"
                      : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <span className="m3-nav-rail-label">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Theme Toggle at bottom */}
        <div className="mb-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="m3-bottom-nav md:hidden" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`m3-bottom-nav-item ${activeSection === item.id ? "active" : ""}`}
            aria-label={`Navigate to ${item.label}`}
          >
            <div
              className={`m3-bottom-nav-indicator ${activeSection === item.id ? "active" : ""}`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{
                  color:
                    activeSection === item.id
                      ? "hsl(var(--md-on-secondary-container))"
                      : "hsl(var(--md-on-surface-variant))",
                  fontVariationSettings: activeSection === item.id
                    ? "'FILL' 1"
                    : "'FILL' 0",
                }}
              >
                {item.icon}
              </span>
            </div>
            <span
              className="m3-label-medium"
              style={{
                color:
                  activeSection === item.id
                    ? "hsl(var(--md-on-surface))"
                    : "hsl(var(--md-on-surface-variant))",
                fontWeight: activeSection === item.id ? 700 : 500,
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default NavigationRail;
