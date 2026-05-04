import '../styles/hero.css'
import heroVideo from '../assets/onlinecoursevideo.mp4'

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Video Background */}
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
        >
          
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        {/* Layered overlays for readability & mood */}
        <div className="hero__overlay hero__overlay--dark" />
        <div className="hero__overlay hero__overlay--teal" />
        <div className="hero__overlay hero__overlay--vignette" />
        <div className="hero__overlay hero__overlay--scanlines" />
      </div>

      {/* Floating ambient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* Content */}
      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Software Company
        </div>

        <h1 className="hero__title">
          Building Scalable
          <br />
          <span className="hero__title-accent">Software Solutions</span>
          <br />
          for the Future
        </h1>

        <p className="hero__subtitle">
          Uni‑Code &amp; Zaintrix WT deliver innovative and reliable
          digital solutions that scale with your ambitions.
        </p>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#contact">
          Contact Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* <a className="hero__btn hero__btn--ghost" href="#contact">
            Contact Us
          </a> */}
        </div>

        
      </div>


      
    </section>
  )
}

export default Hero