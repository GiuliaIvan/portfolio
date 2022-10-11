// Images import
import aboutCircle1 from "../images/9about.jpg";
import aboutCircle2 from "../images/8about.jpg";

export default function About() {
  return (
    <div className="about-section">
      <div className="title about-title">
        <h1>hey, it's not about me</h1>
      </div>

      <div className="small-title about-small-title">
        <h3>...except for this part</h3>
      </div>

      <section className="grid-container about-cards">
        <article className="clearfix">
          <img
            src={aboutCircle2}
            className="about-header-small-image left"
            alt="Header small pic with myself"
          />

          <div className="body-text">
            <h4 className="card-title">
              Giulia Rafaela, also called "the GR8" ...
            </h4>
            <p>
              A highly motivated student currently pursuing an AP degree in
              Multimedia Design. Creative, insightful, principled, passionate,
              altruistic, perfectionist, original, hard-working, true leader
              that loves community and a reader between the lines are just a few
              adjectives that describe me. A volleyball freak, that finds joy in
              teaming up with people to reach the top of the pyramid.
              <br />
              <br />
              <i>
                Found my purpose in life, to be GR8-ful and to make others
                GR8-ful that they have worked with me.
              </i>
            </p>
          </div>
        </article>

        <article className="clearfix">
          <img
            src={aboutCircle1}
            className="about-header-small-image right"
            alt="Header small pic with myself"
          />

          <div className="body-text">
            <h4>... to code with inspiration not transpiration</h4>
            <p>
              Coding is the essence of my life, turning boring lines of code
              into GR8 interfaces is my daily motivation. Helping others find a
              solution to their problems - this is my aim through programming -
              helping people materialize their dream into a beautiful, hands-on
              prototype. Although my day is made 70% of coding, I still need the
              rest of 30% to be made of my passions, which are photography,
              videography and writing, to keep myself creative and bring new
              ideas on the plate. And of course, because somedays I need a life
              apart from a screen.
              <br />
              <br />
              <i>
                It's better to code with inspiration rather than transpiration.{" "}
              </i>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
