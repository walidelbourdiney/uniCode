import "../styles/collaborators.css";
import ABLifting from "../assets/partners/ABLifting.webp";
import Arab from "../assets/partners/Arab.jpeg";
import ATC from "../assets/partners/ATC.png";
import eeac from "../assets/partners/EEAC2.png";
import horas from "../assets/partners/horos2.png";
import QDS from "../assets/partners/QDS2.png";

const collaborators = [
  {
    name: "AB-LIFTING",
    role: "Technology Partner",
    description:
      "Providing cutting-edge software solutions and technical expertise.",
    logo: ABLifting,
  },
  {
    name: "Arab Weavers for Clothes",
    role: "Research Collaborator",
    description:
      "Joint research initiatives in emerging technologies and innovation.",
    logo: Arab,
  },
  {
    name: "A.T.C.",
    role: "Business Partner",
    description:
      "Strategic partnerships for market expansion and business development.",
    logo: ATC,
  },
  {
    name: "EAAC Training and Consulting Group",
    role: "Educational Partner",
    description:
      "Collaborating on educational programs and skill development initiatives.",
    logo: eeac,
  },
  {
    name: "HORUS for contracting and road paving",
    role: "Sustainability Partner",
    description:
      "Working together on sustainable practices and environmental initiatives.",
    logo: horas,
  },
  {
    name: "Quality Durable System",
    role: "Data Partner",
    description:
      "Advanced data analytics and insights for informed decision-making.",
    logo: QDS,
  },
];

function Collaborators() {
  return (
    <section id="collaborators" className="section collaborators fade-in">
      <div className="container">
        <div className="section__heading collaborators__heading">
          <p className="collaborators__eyebrow">Our Collaborators</p>
          <h2>Trusted Partners</h2>
          <p className="collaborators__subtitle">
            We work with leading organizations to deliver exceptional results
            and drive innovation.
          </p>
        </div>
        <div className="collaborators__grid">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="collaborator__card">
              <div className="collaborator__logo">
                <img
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                />
              </div>
              <div className="collaborator__content">
                <h3>{collaborator.name}</h3>
                {/* <p className="collaborator__role">{collaborator.role}</p> */}
                {/* <p className="collaborator__description"> */}
                {/* {collaborator.description} */}
                {/* </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collaborators;
