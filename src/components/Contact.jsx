import { useState } from "react";
import FadeIn from "./FadeIn";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <FadeIn>
          <div className="section-badge">GET IN TOUCH</div>
          <h2 className="contact__heading">
            Let's build something<br />
            <span className="accent">impactful together</span>
          </h2>
          <p className="contact__subtext">
            Have a project in mind or need help scaling an existing system? I'm always
            open to meaningful conversations and long-term collaborations.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="contact__card">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
                <button className="btn btn--primary" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  />
                </div>
                <button className="btn btn--primary btn--full" onClick={handleSubmit}>
                  Send Message →
                </button>
              </>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact__links">
            <a href="mailto:vanshrajput7817@gmail.com" className="contact__link">
              ✉ vanshrajput7817@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-grade-334b0335a/"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              🔗 LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;
