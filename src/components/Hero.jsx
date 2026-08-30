import profile from '../assets/profile.jpg';

function Hero() {
  return (
    <section id="home" className="hero section reveal-on-scroll">
      <div className="hero-copy reveal">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm <span className="accent">Lucky Dhaked</span></h1>
        <h2><span className="typewriter">Full Stack Developer</span></h2>
        <p className="lead">I create stunning web experiences with modern technologies, thoughtful interactions and clean, responsive design.</p>
        <div className="actions">
          <a className="btn primary" href="#projects">View Work <span>↗</span></a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
        {/*<div className="stats">
          <div><strong>4+</strong><span>Projects</span></div>
          <div><strong>100%</strong><span>Curiosity</span></div>
          <div><strong>24/7</strong><span>Learning</span></div>
        </div>*/}
      </div>

      <div className="hero-visual reveal">
        <div className="orbit" />
        <div className="portrait-wrap"><img src={profile} alt="Lucky Dhaked profile" /></div>
        <div className="floating-card card-one"><span>⚡</span><div><b>Creative</b><small>Problem solver</small></div></div>
        <div className="floating-card card-two"><span>⌘</span><div><b>Developer</b><small>Clean & scalable</small></div></div>
      </div>
    </section>
  );
}

export default Hero;
