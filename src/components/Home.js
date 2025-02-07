// import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
// import MyPortfolio from "../MyPortfolio";
import Skills from "./Skills";
// import Testimonial from "../Testimonials";
import  Projects from './Projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
    
      {/* <MyPortfolio />
      <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}