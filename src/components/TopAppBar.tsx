import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const TopAppBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`m3-top-app-bar md:hidden transition-all duration-300 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <h1
        className="m3-title-large flex-1"
        style={{ color: "hsl(var(--md-on-surface))" }}
      >
        Portfolio
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default TopAppBar;
