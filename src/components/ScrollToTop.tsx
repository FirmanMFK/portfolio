import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Instantly jump to top
    window.scrollTo(0, 0);
    
    // Restore smooth scrolling for anchor links after a tiny delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }, [pathname]);

  return null;
}
