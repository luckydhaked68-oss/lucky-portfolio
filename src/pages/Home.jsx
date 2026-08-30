import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    if (!revealItems.length) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add('is-visible');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default Home;
