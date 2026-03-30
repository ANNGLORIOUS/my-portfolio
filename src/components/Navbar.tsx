'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../assets/logo1.png';

const navItems = [
  { href: '#heroSection', label: 'Home' },
  { href: '#skillsSection', label: 'Skills' },
  { href: '#projectsSection', label: 'Projects' },
  { href: '#contactSection', label: 'Contact Me' },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setNavActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <Image src={logo} alt="AnnGlorious logo" className="navbar-logo" priority />
      </div>

      <button
        type="button"
        className={`nav__hamburger ${navActive ? 'active' : ''}`}
        onClick={() => setNavActive((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={navActive}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="navbar--content" onClick={() => setNavActive(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a href="#contactSection" className="btn btn-outline-primary" onClick={() => setNavActive(false)}>
        Contact Me
      </a>
    </nav>
  );
}
