import './StacksColumn.css';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { 
  FaJava, FaRProject, FaGithubAlt, FaNodeJs, FaVuejs, 
  FaBootstrap, FaSass 
} from "react-icons/fa"; 
import { 
  SiScrollreveal, SiPowerbi, SiMicrosoftsqlserver, SiMysql, 
  SiMongodb, SiPostgresql, SiPhp, SiDjango, SiPython, 
  SiNodemon, SiExpress, SiReactrouter, SiMui, SiTailwindcss, 
  SiStyledcomponents, SiRedux, SiNextdotjs, SiReact, 
  SiVite, SiTypescript, SiJavascript 
} from "react-icons/si"; 

const stacks = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Vite.Js", icon: <SiVite /> },
    { name: "React", icon: <SiReact /> },
    { name: "Router-Dom", icon: <SiReactrouter /> },
    { name: "Next.Js", icon: <SiNextdotjs /> },
    { name: "Vue.Js", icon: <FaVuejs /> },
    { name: "Scroll Reveal", icon: <SiScrollreveal /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Mui", icon: <SiMui /> },
    { name: "Sass", icon: <FaSass /> },
    { name: "Styled-Comp.", icon: <SiStyledcomponents />, small: true },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ],
  backend: [
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "R", icon: <FaRProject /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Nodemon", icon: <SiNodemon /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql />, small: true },
    { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
    { name: "PowerBi", icon: <SiPowerbi /> },
    { name: "Git", icon: <FaGithubAlt /> },
  ],
};

const StackBox = React.memo(({ name, icon, small }) => (
  <div className={`stack-box ${small ? 'small-stack' : ''}`}>
    <h1>{name}</h1>
    {icon}
  </div>
));

const StacksColumn = () => {
  useEffect(() => {
    ScrollReveal().reveal('.stack-box', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      reset: false,
      interval: 180 
    });
  }, []);

  return (
    <div className="center column">
      {Object.entries(stacks).map(([key, stackList]) => (
        <div className="stacks-sections" key={key}>
          <h2 className={key}>
            {key === 'frontend' ? 'Front End' : 'Back End'} <i>Skills</i>
          </h2>
          <div className='stacks-section'>
            {stackList.map(({ name, icon, small }) => (
              <StackBox key={name} name={name} icon={icon} small={small} alt={name}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StacksColumn;