import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ smooth = false }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!smooth) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, smooth]);
  return null;
}
