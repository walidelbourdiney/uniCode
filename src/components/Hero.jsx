import { useEffect, useRef, memo } from "react";
import "../styles/hero.css";
import heroVideo from "../assets/onlinecoursevideo.mp4";

const Hero = memo(function Hero() {
  const videoRef = useRef(null);

  // Only load & play video when the section enters the viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load(); // triggers actual network fetch
          video.play().catch(() => {}); // autoplay may be blocked silently
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <div className="hero__video-wrap">
        <video
          ref={videoRef}
          className="hero__video"
          muted
          loop
          playsInline
          preload="none" /* ← don't fetch until IntersectionObserver fires */
          poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=75&fm=webp"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Layered overlays */}
        <div className="hero__overlay hero__overlay--dark" aria-hidden="true" />
        <div className="hero__overlay hero__overlay--teal" aria-hidden="true" />
        <div
          className="hero__overlay hero__overlay--vignette"
          aria-hidden="true"
        />
        <div
          className="hero__overlay hero__overlay--noise"
          aria-hidden="true"
        />
      </div>

      {/* Ambient orbs — GPU-only animation, no layout triggers */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__rule" aria-hidden="true">
          {/* <span className="hero__rule-line" /> */}
          <span className="hero__rule-text">Software Company</span>
          {/* <span className="hero__rule-dot" /> */}
        </div>

        <h1 className="hero__title">
          Building Scalable
          <br />
          <em>Software Solutions</em>
          <br />
          for the Future
        </h1>

        <p className="hero__subtitle">
          Uni‑Code &amp; Zaintrix WT deliver innovative and reliable digital
          solutions that scale with your ambitions.
        </p>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#contact">
            Contact Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      {/* <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div> */}
    </section>
  );
});

export default Hero;
