'use client';

import type { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import canvaLogo from '../assets/assetlogo/canva-svgrepo-com.svg';
import cssLogo from '../assets/assetlogo/css-3-svgrepo-com.svg';
import dockerLogo from '../assets/assetlogo/docker-svgrepo-com.svg';
import figmaLogo from '../assets/assetlogo/figma-svgrepo-com.svg';
import flaskLogo from '../assets/assetlogo/flask-svgrepo-com.svg';
import gitLogo from '../assets/assetlogo/git-svgrepo-com.svg';
import githubLogo from '../assets/assetlogo/github-svgrepo-com.svg';
import htmlLogo from '../assets/assetlogo/html-5-svgrepo-com.svg';
import javascriptLogo from '../assets/assetlogo/javascript-svgrepo-com.svg';
import nodejsLogo from '../assets/assetlogo/nodejs-icon-logo-svgrepo-com.svg';
import pythonLogo from '../assets/assetlogo/python-svgrepo-com.svg';
import reactLogo from '../assets/assetlogo/react-svgrepo-com.svg';
import sqliteLogo from '../assets/assetlogo/sqlite-svgrepo-com.svg';
import tailwindLogo from '../assets/assetlogo/tailwindcss-icon-svgrepo-com.svg';
import typescriptLogo from '../assets/assetlogo/typescript-svgrepo-com.svg';

type Skill = {
  logo: StaticImageData;
  name: string;
};

type Service = {
  name: string;
  description: string;
};

const skills: Skill[] = [
  { logo: reactLogo, name: 'React' },
  { logo: javascriptLogo, name: 'JavaScript' },
  { logo: htmlLogo, name: 'HTML' },
  { logo: cssLogo, name: 'CSS' },
  { logo: tailwindLogo, name: 'Tailwind CSS' },
  { logo: pythonLogo, name: 'Python' },
  { logo: flaskLogo, name: 'Flask' },
  { logo: nodejsLogo, name: 'Node.js' },
  { logo: sqliteLogo, name: 'SQLite' },
  { logo: gitLogo, name: 'Git' },
  { logo: githubLogo, name: 'GitHub' },
  { logo: dockerLogo, name: 'Docker' },
  { logo: typescriptLogo, name: 'TypeScript' },
  { logo: canvaLogo, name: 'Canva' },
  { logo: figmaLogo, name: 'Figma' },
];

const services: Service[] = [
  {
    name: 'Web Development',
    description: 'Creating modern, responsive, and high-performance web applications using the latest technologies.',
  },
  {
    name: 'Mobile App Development',
    description: 'Building native and cross-platform mobile apps tailored to business and user needs.',
  },
  {
    name: 'API Development & Integration',
    description: 'Designing and integrating RESTful and GraphQL APIs for seamless data exchange.',
  },
  {
    name: 'Database Development & Management',
    description: 'Structuring and optimizing databases for reliable performance and scale.',
  },
  {
    name: 'SaaS Development',
    description: 'Developing cloud-based products with strong product thinking and maintainable architecture.',
  },
  {
    name: 'Custom Software Development',
    description: 'Creating tailored software solutions that improve operational efficiency and user outcomes.',
  },
  {
    name: 'AI & Machine Learning Solutions',
    description: 'Implementing AI-powered tools, chatbots, and analytics for practical decision support.',
  },
  {
    name: 'UI/UX Design & Prototyping',
    description: 'Designing intuitive and visually appealing interfaces using modern prototyping workflows.',
  },
  {
    name: 'Blockchain & Web3 Development',
    description: 'Exploring smart contracts and decentralized applications with a product-minded approach.',
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function Skills() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    setIsRotating(selectedService === null);
  }, [selectedService]);

  return (
    <section id="skillsSection" className="skills">
      <h2>Tech Stack</h2>
      <Slider {...sliderSettings} className="skills-slider">
        {skills.map((skill) => (
          <motion.div
            className="skill-item"
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="logo-container">
              <img src={skill.logo.src} alt={skill.name} className="logo" />
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </Slider>

      <h2>My Services</h2>
      <motion.div
        className="services-container"
        animate={{ rotateY: isRotating ? 360 : 0 }}
        transition={isRotating ? { repeat: Infinity, duration: 10, ease: 'linear' } : { duration: 0.3 }}
      >
        {services.map((service) => (
          <motion.div
            className="service-item"
            key={service.name}
            onClick={() => setSelectedService((current) => (current === service.name ? null : service.name))}
            whileHover={{ scale: 1.05 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            {service.name}
            <AnimatePresence>
              {selectedService === service.name && (
                <motion.div
                  className="service-dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
