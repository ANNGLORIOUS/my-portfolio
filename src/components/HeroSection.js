import { useTypewriter, Cursor } from "react-simple-typewriter";
import herologo from "../assets/herologo.jpeg";
import CountUp from "react-countup";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer 👩‍💻",
      "Full-Stack Developer 💻",
      "Back-end Ninja 🥋",
      "Web Developer 🛠️",
      "Database Expert 📊",
      "Electrical Engineer 👩🏾‍🔬",
      "Bibliophile 📚",
      "Tech Geek 🤓",
      "Visual Art Enthusiast 🌄",
      "Globetrotter 🌍",
    ],
    loop: true,
    typespeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section id="heroSection" className="hero--section">
      <div className="container">
        <div className="hero--grid">
          {/* Left Section */}
          <div className="hero--section--content-box">
            <h1 className="hero--section--title">
              Hey, I'm AnnGLorious
              <br />
              <span>{text}</span>
              <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#8873ef" />
            </h1>
            <p>I’m a full-stack software engineer specializing in Python (Flask, Django) and JavaScript (React, Node.js). With a background in software engineering and project management, I build scalable, user-centric applications. I’m passionate about empowering tech startups, I bridge the gap between business goals and technology to drive impactful results. My expertise in system architecture, API development, and UI/UX optimization allows me to craft seamless digital experiences while continuously learning and innovating.</p>
            
            <a href="/_MY-RESUME.pdf" download="MY-RESUME.pdf">
              <button className="resume-button">Get Resume</button>
            </a>
          </div>

          {/* Center Section */}
          <div className="hero--section--img">
            <img src={herologo} alt="Hero Section" />
          </div>

          {/* Right Section */}
          <div className="hero--stats">
            <div className="stat-box">
              <h2><CountUp start={0} end={1} duration={8} suffix="+" /></h2>
              <h4>Years of Experience</h4>
            </div>
            <div className="stat-box">
              <h2><CountUp start={0} end={100} duration={5} suffix="%" /></h2>
              <h4>Success Rate</h4>
            </div>
            <div className="stat-box">
              <h2><CountUp start={0} end={9} duration={10} suffix="+" /></h2>
              <h4>Projects</h4>
            </div>
            <div className="stat-box">
              <h2><CountUp start={0} end={1000} duration={10} suffix="+" /></h2>
              <h4>Hours Spent Coding</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
