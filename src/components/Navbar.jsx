import { useState } from "react";
import "../styles/navbar.css";
import logoIcon from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#services", label: "Services" },
    { href: "#collaborators", label: "Partners" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#home" onClick={closeMenu}>
          {/* Logo icon on top */}
          <img
            src={logoIcon}
            alt="Uni-Code logo"
            className="navbar__logo-icon"
          />

          {/* Text block below the icon */}
          <div className="navbar__logo-text">
            <div className="navbar__logo-wordmark">
              <span className="navbar__logo-uni">UNI-C</span>
              <span className="navbar__logo-o">O</span>
              <span className="navbar__logo-de">DE</span>
            </div>
            <span className="navbar__logo-tagline">Unlimited Creativity</span>
          </div>
        </a>

        <button
          className={`navbar__toggle ${isOpen ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
