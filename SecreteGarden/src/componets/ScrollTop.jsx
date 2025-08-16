import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // si quieres animado; usa "auto" si quieres instantáneo
    });
  }, [pathname]);

  return null; // no renderiza nada
}
