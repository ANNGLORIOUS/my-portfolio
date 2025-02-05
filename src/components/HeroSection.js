import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroLogoImage from "../assets/hero-logo.jpeg";
import CountUp from "react-countup";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer 👩‍💻",
      "Full-Stack Developer 💻",
      "Back-end Ninja 🥋",
      "Web Developer 🛠️",
      "Database Expert 📊",
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
    <section id="heroSection" className="hero--section py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Hey, I'm AnnGLorious
              <br />
              <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#8873ef"
              />
            </h1>

            <a
              href="/ANN-Glorious-CV.pdf"
              download="ANN-Glorious-CV.pdf"
              className="resume-link mt-5 inline-block"
            >
              <button className="resume-button bg-primaryColor text-white py-2 px-4 rounded-[8px] hover:bg-smallTextColor transition duration-300">
                <i className="ri-shake-hands-line"></i> Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="hero--section--img">
            <img src={heroLogoImage} alt="Hero Section" className="rounded-[8px]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex justify-end">
          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="text-center md:text-right">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={8} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={5} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={9} duration={10} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects
              </h4>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1000} duration={10} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Hours Spent Coding
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
