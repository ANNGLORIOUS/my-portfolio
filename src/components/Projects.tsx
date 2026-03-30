import Criterionlogo from '../assets/assetlogo/Criterionlogo.png';
import letafood from '../assets/assetlogo/letafood.png';
import moringadev from '../assets/assetlogo/moringadev.png';
import smartsoko from '../assets/assetlogo/smartsoko.png';
import superheros from '../assets/assetlogo/superheros.jpg';
import traveljournal from '../assets/assetlogo/traveljournal.png';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Moringa.dev',
    description: 'A social platform for developers in Moringa to collaborate and share knowledge.',
    imgUrl: moringadev,
    webUrl: 'https://github.com/Qjones254/Moringa.dev',
  },
  {
    title: 'Travel Journal',
    description: 'A simple React journal for creating and organizing memorable travel entries.',
    imgUrl: traveljournal,
    webUrl: 'https://github.com/ANNGLORIOUS/Travel-journal',
  },
  {
    title: 'Criterion Hospital',
    description: 'A CLI for managing hospital operations, including patient and doctor records.',
    imgUrl: Criterionlogo,
    webUrl: 'https://github.com/ANNGLORIOUS/criterion-hospital',
  },
  {
    title: 'Leta Food App',
    description: 'A food delivery app that lets users order meals and track convenient delivery.',
    imgUrl: letafood,
    webUrl: 'https://github.com/ANNGLORIOUS/LetaFoodApp',
  },
  {
    title: 'Smart Soko',
    description: 'An e-commerce platform that connects farmers directly with customers.',
    imgUrl: smartsoko,
    webUrl: 'https://github.com/ANNGLORIOUS/Pro-coder',
  },
  {
    title: 'Superheroes API',
    description: 'A Flask and SQLAlchemy API for managing superheroes, powers, and relationships.',
    imgUrl: superheros,
    webUrl: 'https://github.com/ANNGLORIOUS/phase4-code1',
  },
] as const;

export default function Projects() {
  return (
    <section id="projectsSection" className="project">
      <h2>Projects</h2>
      <p>Explore my projects and see the innovative solutions I&apos;ve built.</p>
      <div id="project-tiles">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
