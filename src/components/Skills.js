// src/Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { icon: faHtml5, label: 'HTML' },
    { icon: faCss3Alt, label: 'CSS' },
    { icon: faJsSquare, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
    { icon: faBootstrap, label: 'Bootstrap' },
    { icon: faPython, label: 'Python' },
    { icon: faLaptopCode, label: 'Flask' }, // Using a laptop icon for Flask
    { icon: faDatabase, label: 'SQLite' },
    { icon: faDatabase, label: 'Postgres' },
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <FontAwesomeIcon icon={skill.icon} size="3x" />
                        <p>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
