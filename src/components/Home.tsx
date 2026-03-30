import ContactMe from './ContactMe';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
