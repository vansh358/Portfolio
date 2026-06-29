import { useState } from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data";
import "./Projects.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = PROJECTS[activeIndex];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <FadeIn>
          <div className="projects__header">
            <div className="section-badge">SELECTED WORK</div>
            <h2 className="projects__heading">Projects & Ownership</h2>
          </div>
        </FadeIn>

        <div className="projects__layout">
          {/* Sidebar */}
          <div className="projects__sidebar">
            {PROJECTS.map((p, i) => (
              <button
                key={p.num}
                onClick={() => setActiveIndex(i)}
                className={`project-tab ${activeIndex === i ? "project-tab--active" : ""}`}
              >
                <span className="project-tab__num">{p.num}</span>
                <span className="project-tab__title">{p.title}</span>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div key={activeIndex} className="project-detail">
            <div className="project-detail__meta">
              <span className="project-detail__counter">{project.num} / 04</span>
              <span className="badge badge--green">Featured</span>
            </div>

            <h3 className="project-detail__title">{project.title}</h3>
            <p className="project-detail__desc">{project.desc}</p>

            <div className="project-detail__impact">
              {project.impact.map(({ value, label }) => (
                <div key={label} className="impact-stat">
                  <span className="impact-stat__value">{value}</span>
                  <span className="impact-stat__label">{label}</span>
                </div>
              ))}
            </div>

            <div className="project-detail__tags">
              {project.tags.map((t) => (
                <span key={t} className="tag tag--ghost">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
