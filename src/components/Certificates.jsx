import "../styles/certificates.css";

// Replace these with your actual certificate image imports
import iso9001 from "../assets/certs/iso9001-2.jpg";
import iso27001 from "../assets/certs/iso27001-2.png";
import google from "../assets/certs/google2.png";
import microsoft from "../assets/certs/microsoft4.png";
import oracleFusion from "../assets/certs/oracle2.webp";
import oracleCertified from "../assets/certs/oracle2.webp";
import odoo from "../assets/certs/odoo2.png";

const certificates = [
  {
    name: "International Organization for Standardization ISO 9001",
    image: iso9001,
  },
  {
    name: "International Organization for Standardization ISO/IEC 27001",
    image: iso27001,
  },
  { name: "GOOGLE Cloud Partner Certification", image: google },
  { name: "MICROSOFT Cloud Partner Certification", image: microsoft },
  { name: "Oracle Fusion Cloud ERP Certification", image: oracleFusion },
  { name: "Oracle Certified Implementation Partner", image: oracleCertified },
  { name: "Odoo Ready Partner", image: odoo },
];

function Certificates() {
  return (
    <section id="certificates" className="section certificates fade-in">
      <div className="container">
        <div className="section__heading certificates__heading">
          <p className="certificates__eyebrow">Accreditations</p>
          <h2>Our Certificates</h2>
          <p className="certificates__subtitle">
            Recognized and certified by leading international organizations for
            quality, security, and excellence.
          </p>
        </div>

        <div className="certificates__grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate__card">
              <div className="certificate__logo-box">
                <img src={cert.image} alt={`${cert.name} certificate`} />
              </div>
              <p className="certificate__name">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
