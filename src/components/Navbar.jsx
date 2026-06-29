import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import "./Navbar.css";

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <span className="navbar__logo">
          Vansh<span className="navbar__logo-dot">.</span>
        </span>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
            >
              {link}
            </button>
          ))}
          <button className="navbar__cta" onClick={() => scrollTo("Contact")}>
            Hire Me
          </button>
        </div>

        {/* Burger */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`navbar__mobile-link ${active === link ? "navbar__mobile-link--active" : ""}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
