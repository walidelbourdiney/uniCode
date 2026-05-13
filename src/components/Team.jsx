import { useState, useEffect } from "react";
import "../styles/team.css";

// Team Images
import walid from "../assets/team/Walid-Profile.png";
import ceo from "../assets/team/CEO.jpeg";
import eslam from "../assets/team/Eslam.jpeg";
import youssef from "../assets/team/CTO (1).jpeg";
import menna from "../assets/team/Menna (1).jpeg";
import eyad from "../assets/team/Eyad2.png";
import tarek from "../assets/team/Tarek2.png";
import pr from "../assets/team/PR (1).jpeg";
import mariam from "../assets/team/Mariam2.png";
import walaa from "../assets/team/Walaa.jpeg";

const teamMembers = [
  {
    name: "Ahmed Abu AL-hassan",
    role: "CEO",
    image: ceo,
  },
  {
    name: "Eslam Raafat",
    role: "Business Development Manager",
    image: eslam,
  },
  {
    name: "Youssef Ibrahim",
    role: "CTO",
    image: youssef,
  },
  {
    name: "Menna Qasim",
    role: "Project Manager",
    image: menna,
  },
  {
    name: "Walid Ezzat",
    role: "Frontend Developer",
    image: walid,
  },

  {
    name: "Eyad Muhammed",
    role: "Sales Manager",
    image: eyad,
  },
  {
    name: "Mohamed Tarek",
    role: "Operation Manager",
    image: tarek,
  },
  {
    name: "Abdelrahman Tarek",
    role: "PR",
    image: pr,
  },
  {
    name: "Mariam Haitham",
    role: "HR Manager",
    image: mariam,
  },
  {
    name: "Walaa Mokhtar",
    role: "Secretary",
    image: walaa,
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
