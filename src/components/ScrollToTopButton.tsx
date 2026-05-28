import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="m3-fab fixed z-50 animate-fab-enter"
          style={{
            bottom: "96px",
            right: "16px",
          }}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
