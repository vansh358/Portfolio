import FadeIn from "./FadeIn";
import "./About.css";

const TRAITS = [
  ["🧱", "Clean & Scalable Code", "Maintainable architecture with performance in mind."],
  ["🎯", "Product-Oriented Mindset", "I think beyond code — focusing on real user problems."],
  ["⚡", "Performance & Optimization", "Optimizing load times, API performance, and overall UX."],
  ["🤝", "Collaboration & Communication", "Working closely with designers, PMs, and stakeholders."],
  ["🧪", "Reliability & Testing", "Writing stable, well-tested code for long-term reliability."],
  ["🔐", "Ownership & Accountability", "Taking responsibility from idea to production and beyond."],
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <FadeIn>
          <div className="section-badge">WHO I AM</div>
          <h2 className="about__heading">
            Building digital experiences that are<br />
            <span className="accent">fast, scalable & meaningful</span>
          </h2>
        </FadeIn>

        <div className="about__grid">
          <FadeIn delay={0.1}>
            <p className="about__text">
              I'm a Full-Stack Developer passionate about building modern, responsive web applications. 
              I love turning ideas into clean, functional products using React, Node.js, and MongoDB — 
              always eager to learn, grow, and take on new challenges.
            </p>
            <p className="about__text">
              I enjoy solving complex problems, collaborating with teams, and turning
              ideas into reliable, production-ready products.
            </p>
            <div className="about__actions">
              <a
                href="https://www.linkedin.com/in/vansh-grade-334b0335a/"
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Connect on LinkedIn
              </a>
              <button
                className="btn btn--secondary"
                onClick={() =>
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="about__traits">
              {TRAITS.map(([icon, title, desc]) => (
                <div key={title} className="trait-card">
                  <span className="trait-card__icon">{icon}</span>
                  <h4 className="trait-card__title">{title}</h4>
                  <p className="trait-card__desc">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default About;
