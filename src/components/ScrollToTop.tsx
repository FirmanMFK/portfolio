import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instantly reset scroll before the browser paints — no animation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
