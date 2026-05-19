import { useState, useEffect, useRef } from "react";
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
import karim from "../assets/team/Karim.jpeg";
import fady from "../assets/team/Fady.png";
import qasim from "../assets/team/Qasim.png";
import howida from "../assets/team/howida.png";

const teamMembers = [
  { name: "Ahmed Abu AL-hassan", role: "CEO", image: ceo },
  {
    name: "Prof. Dr. Fady Emad Eldin",
    role: "Partner in Zentrix Dubai branch",
    image: fady,
  },
  { name: "Howida Nagy", role: "General Manager", image: howida },

  { name: "Eslam Raafat", role: "Business Development Manager", image: eslam },
  { name: "Mohamed Qasim", role: "PR", image: qasim },
  { name: "Karim Mohamed", role: "Chartered accountant", image: karim },
  { name: "Youssef Ibrahim", role: "CTO", image: youssef },
  { name: "Menna Qasim", role: "Project Manager", image: menna },
  { name: "Walid Ezzat", role: "Frontend Developer", image: walid },
  { name: "Eyad Muhammed", role: "Sales Manager", image: eyad },
  { name: "Mohamed Tarek", role: "Operation Manager", image: tarek },
  { name: "Abdelrahman Tarek", role: "PR", image: pr },
  { name: "Mariam Haitham", role: "HR Manager", image: mariam },
  { name: "Walaa Mokhtar", role: "Secretary", image: walaa },
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // 1. Preload all images before showing the slider
  useEffect(() => {
    let cancelled = false;

    const preload = teamMembers.map(
      (member) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = member.image;
        }),
    );

    Promise.all(preload).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // 2. Crossfade helper — accepts a plain index number
  const triggerTransition = (nextIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsTransitioning(false);
    }, 300);
  };

  // 3. Auto-advance after images are ready
  useEffect(() => {
    if (!imagesReady) return;

    timerRef.current = setInterval(() => {
      triggerTransition((activeIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [activeIndex, imagesReady]);

  // 4. Nav handlers
  const goToPrev = () => {
    clearInterval(timerRef.current);
    triggerTransition(
      (activeIndex - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const goToNext = () => {
    clearInterval(timerRef.current);
    triggerTransition((activeIndex + 1) % teamMembers.length);
  };

  const goToIndex = (index) => {
    clearInterval(timerRef.current);
    triggerTransition(index);
  };

  const activeMember = teamMembers[activeIndex];

  // 5. Hold layout until all images are cached
  if (!imagesReady) {
    return (
      <section id="team" className="section team fade-in">
        <div className="container">
          <div className="team__loading" aria-label="Loading team..." />
        </div>
      </section>
    );
  }

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

          <article
            className="team__card"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.25s ease",
            }}
          >
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
              onClick={() => goToIndex(index)}
              aria-label={`Go to ${member.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
