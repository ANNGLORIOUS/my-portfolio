'use client';

import Image from 'next/image';
import CountUp from 'react-countup';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import herologo from '../assets/herologo.jpeg';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Back-end Builder',
  'Web Developer',
  'Database Enthusiast',
  'Electrical Engineer',
  'Bibliophile',
  'Tech Geek',
  'Visual Art Enthusiast',
  'Globetrotter',
];

export default function HeroSection() {
  const [text] = useTypewriter({
    words: roles,
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section id="heroSection" className="hero--section">
      <div className="container">
        <div className="hero--grid">
          <div className="hero--section--content-box">
            <h1 className="hero--section--title">Hey, I&apos;m AnnGLorious</h1>

            <div className="typewriter-shell">
              <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#8873ef" />
              </div>
            </div>

            <p>
              I craft digital experiences that users love and systems that scale seamlessly. With 2+ years of
              hands-on development, I specialize in transforming complex problems into elegant solutions through:
              <br />
              <br />
              clean architecture, human-centered design, and full-cycle ownership from concept to deployment.
            </p>

            <div className="hero--buttons">
              <a href="/AnngloriousResume.pdf" download="AnngloriousResume.pdf" className="resume-link">
                <button type="button" className="hero-btn">
                  Get Resume
                </button>
              </a>

              <a href="#contactSection">
                <button type="button" className="hero-btn">
                  Hire Me
                </button>
              </a>
            </div>
          </div>

          <div className="hero--section--img">
            <Image src={herologo} alt="Portrait of AnnGLorious" priority />
          </div>

          <div className="hero--stats">
            <div className="stat-box">
              <h2>
                <CountUp start={0} end={2} duration={8} suffix="+" />
              </h2>
              <h4>Years of Experience</h4>
            </div>
            <div className="stat-box">
              <h2>
                <CountUp start={0} end={100} duration={5} suffix="%" />
              </h2>
              <h4>Commitment to Delivery</h4>
            </div>
            <div className="stat-box">
              <h2>
                <CountUp start={0} end={9} duration={10} suffix="+" />
              </h2>
              <h4>Projects Shipped</h4>
            </div>
            <div className="stat-box">
              <h2>
                <CountUp start={0} end={1000} duration={10} suffix="+" />
              </h2>
              <h4>Hours Spent Coding</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
