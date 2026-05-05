import "../styles/collaborators.css";

const collaborators = [
  {
    name: "TechCorp Solutions",
    role: "Technology Partner",
    description:
      "Providing cutting-edge software solutions and technical expertise.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=TechCorp",
  },
  {
    name: "Innovate Labs",
    role: "Research Collaborator",
    description:
      "Joint research initiatives in emerging technologies and innovation.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=Innovate+Labs",
  },
  {
    name: "Global Ventures",
    role: "Business Partner",
    description:
      "Strategic partnerships for market expansion and business development.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=Global+Ventures",
  },
  {
    name: "EduTech Institute",
    role: "Educational Partner",
    description:
      "Collaborating on educational programs and skill development initiatives.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=EduTech+Institute",
  },
  {
    name: "GreenEnergy Corp",
    role: "Sustainability Partner",
    description:
      "Working together on sustainable practices and environmental initiatives.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=GreenEnergy+Corp",
  },
  {
    name: "DataAnalytics Pro",
    role: "Data Partner",
    description:
      "Advanced data analytics and insights for informed decision-making.",
    logo: "https://via.placeholder.com/150x100/102424/FFFFFF?text=DataAnalytics+Pro",
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
                <p className="collaborator__role">{collaborator.role}</p>
                <p className="collaborator__description">
                  {collaborator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collaborators;
