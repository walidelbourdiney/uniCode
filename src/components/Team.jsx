import { useState, useEffect } from "react";
import "../styles/team.css";

const teamMembers = [
  {
    name: "Amira Hassan",
    role: "Lead Software Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1723802522352-9c1d0f67d6a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    name: "Youssef Karim",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
  },
  {
    name: "Lina Farouk",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8MnwwfHx8MA%3D%3D",
  },
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 3 seconds; resets if user manually navigates
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    // Clear the old timer whenever activeIndex changes or component unmounts
    return () => clearInterval(timer);
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <section id="team" className="section team fade-in">
      <div className="container">
        <div className="section__heading team__heading">
          <p className="team__eyebrow">Our Team</p>
          <h2>Our Team</h2>
          <p>
            Professionals committed to shaping elegant, scalable digital
            products.
          </p>
        </div>

        <div className="team__slider">
          <button
            type="button"
            className="team__nav-btn"
            onClick={goToPrev}
            aria-label="Previous team member"
          >
            ‹
          </button>

          <article className="team__card" key={activeMember.name}>
            <img src={activeMember.image} alt={activeMember.name} />
            <div className="team__card-content">
              <p className="team__role">{activeMember.role}</p>
              <h3>{activeMember.name}</h3>
              <p className="team__bio">
                Delivers thoughtful execution, collaborative leadership, and
                measurable impact across every project phase.
              </p>
            </div>
          </article>

          <button
            type="button"
            className="team__nav-btn"
            onClick={goToNext}
            aria-label="Next team member"
          >
            ›
          </button>
        </div>

        <div className="team__dots" aria-label="Team member navigation">
          {teamMembers.map((member, index) => (
            <button
              type="button"
              key={member.name}
              className={`team__dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${member.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
