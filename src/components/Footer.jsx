import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <span className="footer__logo">
            Vansh<span className="footer__logo-dot">.</span>
          </span>
          <p className="footer__tagline">Full-Stack Developer · India · Remote</p>
        </div>
        <p className="footer__copy">© 2026 Vansh Grade. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
