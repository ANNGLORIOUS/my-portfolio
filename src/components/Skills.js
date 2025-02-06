import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
const frontendSkills = [
  { logo: reactLogo, name: "React" },
  { logo: javascriptLogo, name: "JavaScript" },
  { logo: htmlLogo, name: "HTML" },
  { logo: cssLogo, name: "CSS" },
  { logo: tailwindLogo, name: "Tailwind CSS" },
];

const backendSkills = [
  { logo: pythonLogo, name: "Python" },
  { logo: flaskLogo, name: "Flask" },
  { logo: nodejsLogo, name: "Node.js" },
  { logo: sqliteLogo, name: "SQLite" },
];

const versionSkills = [
  { logo: gitLogo, name: "Git" },
  { logo: githubLogo, name: "Github" },
];

const toolsSkills = [
  { logo: dockerLogo, name: "Docker" },
  { logo: typescriptLogo, name: "TypeScript" },
];

// Slider settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000, // Reduced speed for smoother transitions
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
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <Tabs>
        <TabList>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Version Control & Deployment</Tab>
          <Tab>Tools</Tab>
        </TabList>

        {[frontendSkills, backendSkills, versionSkills, toolsSkills].map((skills, index) => (
          <TabPanel key={index}>
            <Slider {...sliderSettings}>
              {skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <div className="logo-container">
                    <img src={skill.logo} alt={skill.name} className="logo" />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </Slider>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default Skills;
