import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faJsSquare, 
    faReact, 
    faBootstrap, 
    faPython, 
    faGit, 
    faGithub, 
    // faTailwind 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faLaptopCode, 
    faDatabase, 
    faPaintBrush 
} from '@fortawesome/free-solid-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
    { icon: faHtml5, label: 'HTML' },
    { icon: faCss3Alt, label: 'CSS' },
    { icon: faJsSquare, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
    { icon: faBootstrap, label: 'Bootstrap' },
    { icon: faPython, label: 'Python' },
    { icon: faLaptopCode, label: 'Flask' },
    { icon: faDatabase, label: 'SQLite' },
    { icon: faDatabase, label: 'Postgres' },
    { icon: faGit, label: 'Git' },
    { icon: faGithub, label: 'GitHub' },
    // { icon: faTailwind, label: 'TailwindCSS' },
    { icon: faAtom, label: 'Redux' },
    { icon: faPaintBrush, label: 'UI/UX' },
];

const Skills = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <Slider {...sliderSettings} className="skills-slider">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-slide">
                        <div className="skill">
                            <FontAwesomeIcon icon={skill.icon} size="3x" />
                            <p>{skill.label}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Skills;
