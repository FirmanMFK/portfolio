import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme as string);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="m3-icon-button-filled-tonal"
      aria-label="Toggle theme"
    >
      <span
        className="material-symbols-outlined transition-transform duration-500"
        style={{
          transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)",
          fontVariationSettings: "'FILL' 1",
        }}
      >
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
