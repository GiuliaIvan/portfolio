// Images import
import footerSmall from "../images/0header-portrait-copy.jpg";
// import headerSmall from "../images/0footer.jpg";
import linktreeIcon from "../images/icons/linktree.png"
import githubIcon from "../images/icons/github.png";
import linkedinIcon from "../images/icons/linkedin.png";
import mailIcon from "../images/icons/mail.png";
import facebookIcon from "../images/icons/facebook.png";
import pdf from "../images/cv.pdf";

export default function Footer() {
  return (
    <div className="footer">
      <section className="grid-container grid-container-footer">
        <article>
          <h3 className="footer-left-text">from basic</h3>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            title="Click to open my CV"
          >
            <img
              src={footerSmall}
              className="footer-small-image pulse-image"
              alt="Header small pic with myself"
            />
          </a>
          <h3 className="footer-right-text"> to GR8</h3>
        </article>
      </section>

      <div className="title footer-title">
        <h1>long-distance relationships ...</h1>
      </div>

      <div className="small-title footer-small-title">
        <h3>couldn't be easier nowadays</h3>
      </div>

      <div className="social-media">
        <a
          href="https://www.facebook.com/giuli.ivan.20.07"
          title="This is my Facebook profile"
        >
          <img
            src={facebookIcon}
            className="social-icons-image"
            alt="Facebook icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/giulia-ivan-let-601a9121b"
          title="This is my LinkedIn profile"
        >
          <img
            src={linkedinIcon}
            className="social-icons-image"
            alt="LinkedIn icon"
          />
        </a>

        <a href="mailto:giuliaivanlet.gr8@gmail.com" title="Send me a Mail">
          <img src={mailIcon} className="social-icons-image" alt="Mail icon" />
        </a>

        <a
          href="https://github.com/GiuliaIvan?tab=repositories"
          title="This is my GitHub profile"
        >
          <img
            src={githubIcon}
            className="social-icons-image"
            alt="GitHub icon"
          />
        </a>

        <a
          href="https://linktr.ee/giuliaivan"
          title="This is my Linktree profile"
        >
          <img
            src={linktreeIcon}
            className="social-icons-image"
            alt="Linktree icon"
          />
        </a>
      </div>

      <div className="copyright">
        <h4>Giulia Ivan @ Copyright 2022 - All rights reserved</h4>
      </div>
    </div>
  );
}
