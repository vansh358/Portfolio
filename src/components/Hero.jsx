import { useState, useEffect, useRef } from "react";
import avatar from "../assets/avatar.png";
import "./Hero.css";

const PHRASES = ["Full-Stack Developer", "React.js Developer", "Node.js Developer"];


function Hero() {
  const [typed, setTyped] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const phrase = PHRASES[phraseIndex.current];
      if (!isDeleting.current) {
        charIndex.current++;
        setTyped(phrase.slice(0, charIndex.current));
        if (charIndex.current === phrase.length) {
          isDeleting.current = true;
          setTimeout(tick, 2500);
          return;
        }
      } else {
        charIndex.current--;
        setTyped(phrase.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
        }
      }
      setTimeout(tick, isDeleting.current ? 80 : 150);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__content">

        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span>Available for new projects</span>
          </div>

          <h1 className="hero__heading">
            Hi, I'm Vansh 👋<br />
            <span className="hero__heading-accent">I Build</span> Scalable<br />Web Apps
          </h1>

          <div className="hero__typewriter">
            {typed}<span className="hero__cursor"> </span>
          </div>

          <p className="hero__description">
            I'm a passionate Full-Stack Developer who loves building clean and
            responsive web apps. Skilled in React.js, Node.js, and MongoDB, I
            enjoy solving real-world problems through code.
          </p>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >
              View Projects →
            </button>
            <a href="mailto:vanshrajput@gmail.com" className="hero__btn hero__btn--secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero__stats">
            {[["Fresher"], ["3+", "Projects"], ["5+", "Technologies"]].map(
              ([value, label]) => (
                <div key={value} className="hero__stat">
                  <span className="hero__stat-value">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT — avatar with orbit */}
        <div className="hero__right">
          <div className="hero__orbit-wrapper">

            {/* Orbit rings */}
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />

            {/* Avatar */}
            <img src={avatar} alt="Vansh" className="hero__avatar" />

            {/* Badge cards like Vansh */}
            <div className="hero__badge hero__badge--tl">
              <span className="hero__badge-icon">💻</span>
              <div>
                <small>CLEAN CODE</small>
                <strong>Scalable</strong>
              </div>
            </div>

            <div className="hero__badge hero__badge--tr">
              <span className="hero__badge-dot" />
              <div>
                <small>STATUS</small>
                <strong>Available</strong>
              </div>
            </div>

            <div className="hero__badge hero__badge--bl">
              <span className="hero__badge-icon">⚡</span>
              <div>
                <small>PERFORMANCE</small>
                <strong>Optimized</strong>
              </div>
            </div>

            <div className="hero__badge hero__badge--br">
              <span className="hero__badge-icon">🌐</span>
              <div>
                <small>FULL-STACK</small>
                <strong>Web & API</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;