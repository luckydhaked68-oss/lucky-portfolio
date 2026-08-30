import { projects } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section projects reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Things I've <span className="accent">built.</span></h2>
        <p>Some project concepts based on the visual assets you provided.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <span className="project-index">0{index + 1}</span>
            </div>
            <div className="project-body">
              <div className="project-title"><h3>{project.title}</h3><span>↗</span></div>
              <p>{project.desc}</p>
              <div className="skill-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
