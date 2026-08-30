import { socialLinks } from '../data/socialLinks';

function Contact() {
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section contact reveal-on-scroll">
      <div className="contact-box">
        <div className="contact-content">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>
            Have an idea?<br />
            <span className="accent">Let&apos;s build it.</span>
          </h2>
          <p>
            I&apos;m always interested in learning, collaborating and creating
            something useful.
          </p>

          <div className="social-links" aria-label="Social media links">
            {socialLinks.map(({ name, icon: Icon, url, label }) => (
              <button
                key={name}
                type="button"
                className="social-btn"
                aria-label={label}
                title={name}
                onClick={() => handleSocialClick(url)}
              >
                <Icon aria-hidden="true" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>

        <a className="btn primary" href="mailto:hello@example.com">
          Say Hello <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
