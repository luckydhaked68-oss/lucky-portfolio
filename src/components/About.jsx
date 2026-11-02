
function About() {
  return (
    <section id="about" className="section about reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Building with <span className="accent">purpose.</span>
        </h2>
        <p>
          Get to know more about my background and passion for technology.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <div className="image-placeholder">
            <span>LD</span>
          </div>

          <div className="image-label">
            <b>Curious by nature</b>
            <span>Always learning • Always building</span>
          </div>
        </div>

        <div className="about-copy">
          <p>
            I'm a developer who enjoys turning ideas into useful, polished
            digital experiences. I care about the details—from a smooth
            interaction to a layout that feels right on every screen.
          </p>

          <p>
            My journey is driven by curiosity and hands-on projects. I like
            exploring modern web technologies, solving problems and
            continuously improving how I build.
          </p>

          <div className="pill-row">
            <span>Creative</span>
            <span>Responsive</span>
            <span>Problem Solver</span>
            <span>Team Player</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
