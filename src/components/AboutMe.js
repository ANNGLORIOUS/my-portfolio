import aboutMeImage from '../assets/about-me.jpeg'; // Adjust the path and name if needed

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={aboutMeImage} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I recently completed moringa school where I developed my skills and built my first web applications. My passion for technology drives me to continually learn and explore new tools, including React and Flask.
          </p>
          <p className="hero--section-description">
            Although I am at the beginning of my career, I am eager to tackle new challenges and collaborate with others. I thrive on problem-solving and enjoy bringing ideas to life through code. I am excited about the opportunity to contribute to innovative projects and grow within a supportive team.
            <br />
            When I’m not coding, you can find me reading books, which inspires my creativity and keeps me motivated. I look forward to connecting and exploring how I can add value to your team!
          </p>
        </div>
      </div>
    </section>
  );
}
