import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { navLinks } from '../data/portfolioData';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleRefresh = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.location.reload();
  };

  return (
    <header className="nav">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <img src={logo} alt="Lucky Dhaked logo" />
        <span>Lucky<span className="accent">Dhaked</span></span>
      </a>

      <div className="nav-actions">
       

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? '✕' : '☰'}
        </button>
      </div>

      <nav className={open ? 'links open' : 'links'}>
        {navLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
