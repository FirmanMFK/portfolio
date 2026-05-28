import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="text-center px-6">
        <div
          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: "hsl(var(--md-primary-container))" }}
        >
          <span
            className="material-symbols-outlined text-4xl"
            style={{ color: "hsl(var(--md-on-primary-container))" }}
          >
            search_off
          </span>
        </div>
        <h1
          className="m3-display-medium font-bold mb-4"
          style={{ color: "hsl(var(--foreground))" }}
        >
          404
        </h1>
        <p
          className="m3-body-large mb-6"
          style={{ color: "hsl(var(--md-on-surface-variant))" }}
        >
          Oops! Page not found
        </p>
        <a href="/" className="m3-filled-button">
          <span className="material-symbols-outlined text-lg">home</span>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
