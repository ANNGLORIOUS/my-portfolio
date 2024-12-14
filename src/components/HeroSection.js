// import CountUp from "react-countup";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroLogoImage from "../assets/hero-logo.jpeg"

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer 👩‍💻",
      "Full-Stack Developer 💻",
      "Back-end Ninja 🥋",
      "Web Developer 🛠️",
      "Database Expert 📊",
      " Bibliophile 📚",
      "Tech Geek 🤓",
      "Visual Art Enthusiast 🌄",
      " Globetrotter 🌍 ",
    ],
    loop: true,
    typespeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-headingColor font-[800]
                    text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
          > Hey, I'm AnnGLorious<br /> <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#8873ef"
            />
          </h1>

          <a href="/ANN-Glorious-CV.pdf" download="ANN-Glorious-CV.pdf" className="resume-link">
            <button className="resume-button">
              <i className="ri-shake-hands-line"></i> Get Resume
            </button>
          </a>


        </div>
      </div>
      <div className="hero--section--img">

<img src={heroLogoImage } alt="Hero Section" />
      </div>
    </section>
  );
}