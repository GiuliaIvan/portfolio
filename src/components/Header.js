// Images import
import headerSmall from "../images/1about-copy.jpg";
import pdf from "../images/cv.pdf";

export default function Header() {
  return (
    <header className="header">
      <div className="big-quote-text">
        <h1 id="first-h1">
          <span>Coding</span> <span>is</span>
        </h1>
        <h3>
          <span>the</span> <span>essence</span>
        </h3>
        <h1 id="second-h1">
          <span>of</span> <span>life</span>
        </h1>
      </div>

      <div className="figure header-figure">
        <div className="div-header-small-image">
          <img
            src={headerSmall}
            className="header-small-image pulse-image"
            alt="Header small pic with myself"
          />
        </div>

        <figcaption className="header-figcaption">
          <div className="small-quote-text">
            <p>
              turning the basic
              <br />
              into "GR8" through
              <br />
              code & creativity
              <br /> <br />
              <a href= {pdf} target="_blank" rel="noreferrer" title="Click to open my CV">
                Check my CV
              </a>
            </p>
          </div>
        </figcaption>
      </div>
    </header>
  );
}
