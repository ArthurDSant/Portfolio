import './Skills.css';
import React, { useEffect } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { SiReact, SiRedux, SiNodedotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Index = () => {
  useEffect(() => {
    const revealSettings = {
      distance: '100px',
      duration: 1000,
      reset: true,
      interval: 200
    };
    if (window.innerWidth > 800) {
      ScrollReveal().reveal('.skill', {
        ...revealSettings,
        origin: 'right'
      });
    } else {
      ScrollReveal().reveal('.skill', {
        ...revealSettings,
        origin: 'left'
      });
    }
  }, []);

  return (
    <div>
      <div className="skills_container">
        <div className='skills'>
          <div className='skill shadow'>
            <SiReact className="one" alt="Framworks"/>
            <h2 className="one" aria-labelledby="Framworks">Framworks</h2>
            <div className="skill-text">
              <p>Utilizo de Frameworks para um projeto mais ágil, eficaz e de simples manutenção.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Nike" target='_blank' aria-label="gitHub">One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <SiRedux className="two" alt="Libraries"/>
            <h2 className="two" aria-labelledby="Libraries">Libraries</h2>
            <div className="skill-text">
              <p>Faço uso de bibliotecas como subprogramas para evoluir o desenvolvimento.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank' aria-label="gitHub">One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <FaPython className="three" alt="Data Science"/>
            <h2 className="three" aria-labelledby="Data Science">Data Science</h2>
            <div className="skill-text">
              <p>Uso do estudo dos dados para formular insights que sejam relevantes e úteis.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Crud-SQL" target='_blank' aria-label="gitHub">One project with<RiShareBoxLine /></a>
            </div>
          </div>

          <div className='skill shadow'>
            <SiNodedotjs className="four" alt="API's"/>
            <h2 className="four" aria-labelledby="API's">API's</h2>
            <div className="skill-text">
              <p>Utilizo API's, para extrair e consumir dados de diferentes tipos de sistemas.</p>
            </div>
            <div className="link">
              <a href="https://github.com/ArthurSantDev/Mern.In" target='_blank' aria-label="gitHub">One project with<RiShareBoxLine /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;