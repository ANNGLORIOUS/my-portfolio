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
              </h1>

              <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#8873ef" />
              </div>
            <p>I craft digital experiences that users love and systems that scale seamlessly. With 2+ years of hands-on development, I specialize in transforming complex problems into elegant solutions through:<br></br>

                → Clean Architecture<br></br>
                  Modular, maintainable code that stands the test of iterations<br></br>

                → Human-Centered Design<br></br>
                Interfaces that delight while solving real needs<br></br>

                  → Full-Cycle Ownership<br></br>
                  From concept to deployment,with metrics-driven improvements</p><br></br>
            
            <div className="hero--buttons">
                <a href="/AnngloriousResume.pdf" download="AnngloriousResume.pdf">
                  <button className="hero-btn">Get Resume</button>
                </a>

                <a href="#contactSection">
                  <button className="hero-btn">Hire Me</button>
                </a>
             </div>
          </div>

          {/* Center Section */}
          <div className="hero--section--img">
            <img src={herologo} alt="Hero Section" />
          </div>

          {/* Right Section */}
          <div className="hero--stats">
            <div className="stat-box">
              <h2><CountUp start={0} end={2} duration={8} suffix="+" /></h2>
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
