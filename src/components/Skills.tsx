'use client';

import type { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaDatabase, FaLayerGroup, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import { GiCube, GiSparkles } from 'react-icons/gi';
import { HiOutlineChip } from 'react-icons/hi';
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
  icon: IconType;
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
    icon: FaCode,
    name: 'Web Development',
    description: 'Responsive, production-ready web apps built with strong UX and maintainable code.',
  },
  {
    icon: FaMobileAlt,
    name: 'Mobile App Development',
    description: 'Cross-platform mobile experiences designed to feel fast, polished, and intuitive.',
  },
  {
    icon: GiSparkles,
    name: 'API Development & Integration',
    description: 'Reliable APIs and integrations that keep products connected and data flowing cleanly.',
  },
  {
    icon: FaDatabase,
    name: 'Database Development & Management',
    description: 'Thoughtful data models and database tuning for long-term performance and scale.',
  },
  {
    icon: FaLayerGroup,
    name: 'SaaS Development',
    description: 'Cloud-based software shaped around product goals, scalability, and clear architecture.',
  },
  {
    icon: GiCube,
    name: 'Custom Software Development',
    description: 'Tailored software systems built around the exact workflow your team needs.',
  },
  {
    icon: FaBrain,
    name: 'AI & Machine Learning Solutions',
    description: 'Practical AI features, chat experiences, and automation that support real decisions.',
  },
  {
    icon: FaPaintBrush,
    name: 'UI/UX Design & Prototyping',
    description: 'Wireframes and polished interfaces that balance clarity, delight, and usability.',
  },
  {
    icon: HiOutlineChip,
    name: 'Blockchain & Web3 Development',
    description: 'Product-minded exploration of smart contracts and decentralized user experiences.',
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
      <div className="services-container">
        {services.map((service) => (
          <motion.div
            className="service-item"
            key={service.name}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <div className="service-icon">
              <service.icon aria-hidden="true" />
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
