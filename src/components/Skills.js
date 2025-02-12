import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';

// Importing logos
import pythonLogo from '../assets/assetlogo/python-svgrepo-com.svg';
import reactLogo from '../assets/assetlogo/react-svgrepo-com.svg';
import sqliteLogo from '../assets/assetlogo/sqlite-svgrepo-com.svg';
import javascriptLogo from '../assets/assetlogo/javascript-svgrepo-com.svg';
import gitLogo from '../assets/assetlogo/git-svgrepo-com.svg';
import htmlLogo from '../assets/assetlogo/html-5-svgrepo-com.svg';
import githubLogo from '../assets/assetlogo/github-svgrepo-com.svg';
import nodejsLogo from '../assets/assetlogo/nodejs-icon-logo-svgrepo-com.svg';
import flaskLogo from '../assets/assetlogo/flask-svgrepo-com.svg';
import dockerLogo from '../assets/assetlogo/docker-svgrepo-com.svg';
import typescriptLogo from '../assets/assetlogo/typescript-svgrepo-com.svg';
import cssLogo from '../assets/assetlogo/css-3-svgrepo-com.svg';
import tailwindLogo from '../assets/assetlogo/tailwindcss-icon-svgrepo-com.svg';

// Skill categories
const skills = [
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
];

const services = [
  { name: "Web Development", description: "Creating modern, responsive, and high-performance web applications using the latest technologies." },
  { name: "Mobile App Development", description: "Building native and cross-platform mobile apps tailored to business and user needs." },
  { name: "API Development & Integration", description: "Designing and integrating RESTful and GraphQL APIs for seamless data exchange." },
  { name: "Database Development & Management", description: "Efficiently structuring, managing, and optimizing databases for scalability and performance." },
  { name: "SaaS Development", description: "Developing cloud-based Software as a Service (SaaS) applications with subscription models." },
  { name: "Custom Software Development", description: "Creating tailor-made software solutions for businesses to improve efficiency and productivity." },
  { name: "AI & Machine Learning Solutions", description: "Implementing AI-powered tools, chatbots, and predictive analytics for data-driven decision-making." },
  { name: "UI/UX Design & Prototyping", description: "Designing intuitive and visually appealing interfaces using Figma and Adobe XD." },
  { name: "Blockchain & Web3 Development", description: "Developing smart contracts, decentralized applications (DApps), and NFT marketplaces." },
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

const Skills = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    setIsRotating(selectedService === null);
  }, [selectedService]);

  return (
    <section id='skillsSection' className="skills">
      <h2>Tech stack</h2>
      <Slider {...sliderSettings} className="skills-slider">
        {skills.map((skill, idx) => (
          <motion.div 
            className="skill-item" 
            key={idx}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="logo-container">
              <img src={skill.logo} alt={skill.name} className="logo" />
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </Slider>
      
      <h2>My Services</h2>
      <motion.div 
        className="services-container" 
        animate={{ rotateY: isRotating ? 360 : 0 }} 
        transition={isRotating ? { repeat: Infinity, duration: 10, ease: "linear" } : {}}
      >
        {services.map((service, idx) => (
          <motion.div 
            className="service-item" 
            key={idx}
            onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
            whileHover={{ scale: 1.05 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {service.name}
            <AnimatePresence>
              {selectedService === service.name && (
                <motion.div 
                  className="service-dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
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
};

export default Skills;