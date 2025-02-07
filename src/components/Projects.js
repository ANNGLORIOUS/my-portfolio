import React from 'react';
import { ProjectCard } from './ProjectCard';
import Criterionlogo from '../assets/assetlogo/Criterionlogo.png';
import moringadev from '../assets/assetlogo/moringadev.png';
import letafood from '../assets/assetlogo/letafood.png';
import smartsoko from '../assets/assetlogo/smartsoko.png';
import traveljournal from '../assets/assetlogo/traveljournal.png';

const Projects = () => {
  const projects = [
    {
      title: 'Moringa.dev',
      description: 'A social platform for developers in Moringa to collaborate and share knowledge.',
      imgUrl: moringadev,
      webUrl: 'https://github.com/Qjones254/Moringa.dev',
    },
    {
      title: 'Travel-Journal',
      description: 'A simple journal application built with React, allowing users to log and manage entries.',
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
      description: 'A food delivery app that allows users to order meals and have them delivered.',
      imgUrl: letafood,
      webUrl: 'https://github.com/ANNGLORIOUS/LetaFoodApp',
    },
    {
      title: 'Smart Soko',
      description: 'An e-commerce platform that connects farmers directly with customers.',
      imgUrl: smartsoko,
      webUrl: 'https://github.com/ANNGLORIOUS/Pro-coder',
    },
  ];

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <p>Explore my projects and see the innovative solutions I've built.</p>
      <div id="project-tiles">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;