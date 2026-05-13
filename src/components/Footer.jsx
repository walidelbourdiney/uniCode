import "../styles/footer.css";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#services", label: "Services" },
  { href: "#collaborators", label: "Partners" },
  { href: "#certificates", label: "Certificates" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#home" className="footer__brand">
            Uni-Code &amp; Zaintrix WT
          </a>
          <nav className="footer__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Uni-Code. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
