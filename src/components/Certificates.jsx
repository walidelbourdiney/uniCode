import "../styles/certificates.css";

const certificates = [
  { title: "ISO 9001 Certification" },
  { title: "ISO 14001 Certification" },
  { title: "GDPR Compliance" },
  { title: "Cybersecurity Certification" },
  { title: "Industry Excellence Award" },
  { title: "Innovation Patent" },
];

function Certificates() {
  return (
    <section id="certificates" className="section certificates fade-in">
      <div className="container">
        <div className="section__heading certificates__heading">
          <p className="certificates__eyebrow" id="c-eyebrow">
            Our Achievements
          </p>
          <h2>Certificates & Accreditations</h2>
          <p className="certificates__subtitle">
            We are proud to hold industry-leading certifications that
            demonstrate our commitment to excellence, security, and innovation.
          </p>
        </div>
        <ul className="certificates__list">
          {certificates.map((cert, index) => (
            <li key={index} className="certificate__item">
              <h3>{cert.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificates;
