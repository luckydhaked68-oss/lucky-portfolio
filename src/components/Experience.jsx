import { experienceItems } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="section experience reveal-on-scroll">
      <div className="section-head">
        <p className="eyebrow">MY JOURNEY</p>
        <h2>Learning through <span className="accent">experience.</span></h2>
      </div>

      <div className="timeline">
        {experienceItems.map(([time, title, description]) => (
          <div className="timeline-item" key={title}>
            <span className="dot" />
            <div><span className="time">{time}</span><h3>{title}</h3><p>{description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
