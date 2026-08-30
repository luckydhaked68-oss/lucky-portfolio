import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section skills reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2>Skills & <span className="accent">tools.</span></h2>
        <p>A practical toolkit for building modern digital products.</p>
      </div>

      <div className="skill-grid">
        {skills.map(([title, tags, desc], index) => (
          <article className="skill-card" key={title}>
            <div className="skill-number">0{index + 1}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="skill-tags">{tags.split(' • ').map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
