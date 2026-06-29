import FadeIn from "./FadeIn";
import { SKILLS } from "../data";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <FadeIn>
          <div className="skills__header">
            <div className="section-badge">SKILLS & SERVICES</div>
            <h2 className="skills__heading">What I Bring to the Table</h2>
            <p className="skills__subtext">
              End-to-end web development services backed by a strong technical skill set.
            </p>
          </div>
        </FadeIn>

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.title} delay={i * 0.08}>
              <div className="skill-card">
                <span className="skill-card__icon">{skill.icon}</span>
                <h3 className="skill-card__title">{skill.title}</h3>
                <p className="skill-card__desc">{skill.desc}</p>
                <div className="skill-card__tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="tag tag--purple">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
