
function Hero() {
  return (
    <section id="home" className="hero section reveal-on-scroll">
      <div className="hero-copy reveal">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span className="accent">Lucky Dhaked</span>
        </h1>

        <h2>
          <span className="typewriter">Full Stack Developer</span>
        </h2>

        <p className="lead">
          I create stunning web experiences with modern technologies,
          thoughtful interactions and clean, responsive design.
        </p>

        <div className="actions">
          <a className="btn primary" href="#projects">
            View Work <span>↗</span>
          </a>

          <a className="btn ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="orbit" />

        <div className="portrait-wrap">
          <div className="profile-placeholder">
            LD
          </div>
        </div>

        <div className="floating-card card-one">
          <span>⚡</span>
          <div>
            <b>Creative</b>
            <small>Problem solver</small>
          </div>
        </div>

        <div className="floating-card card-two">
          <span>⌘</span>
          <div>
            <b>Developer</b>
            <small>Clean & scalable</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
