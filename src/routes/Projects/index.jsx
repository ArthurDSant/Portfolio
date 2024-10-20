import '../../CSS/Projects.css';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from 'react-helmet';
import { PROJECTS } from '../../constants/projects';
import { HiHome } from "react-icons/hi"; 
import { Link } from 'react-router-dom';
import { FaGithubAlt } from "react-icons/fa"; 
import { IoMdEyeOff, IoMdEye } from "react-icons/io"; 

const index = () => {
    useEffect(() => {
        const revealSettings = {
            distance: '300px',
            duration: 1400,
            reset: true,
            origin: 'left',
        };

        ScrollReveal().reveal('.project, .reverse', revealSettings);
    }, []);

    const filteredProjects = PROJECTS.filter(project => project.id);

    return (
        <div id='Projects' className='container'>
            <Helmet>
                <meta name="description" content="Todos os projetos que o Arthur possui no portfolio." />
                <meta name="keywords" content="Landing-Pages, Front-end, back-end, full-stack, react, javascript, python, ciência de dados, software-developer, software" />
                <meta name="author" content="Arthur Sant" />
            </Helmet>

            <section className="projects">
                <h1 className='TitleCenter'>All My Projects</h1>

                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className={index % 2 === 0 ? project.classReverse : `${project.class}`}
                        aria-label={project.title}
                    >
                        <div className="project-about">
                            <div className={project.classMark}>
                                {project.markfront && <img src={project.markfront} alt={project.none} />}
                                {project.markback && <img src={project.markback} alt={project.none} />}
                            </div>
                            <div>
                                <h2 className="att">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="stack-icons">
                                {project.stack.map((tech, index) => (
                                    <img key={index} src={`/assets/stacks/${tech}.svg`} alt={tech} />
                                ))}
                            </div>
                            <div className='button-project-section'>
                                <div className="button-project github-btn">
                                    <a href={project.github} target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                                        <FaGithubAlt />
                                        <p>Github</p>
                                    </a>
                                </div>
                                {project.deploy ? (
                                    <div className={project.classButton}>
                                        <a href={project.deploy} target='_blank' rel="noopener noreferrer" aria-label="Deploy">
                                            <IoMdEye />
                                            <p>Deploy</p>
                                        </a>
                                    </div>
                                ) : (
                                    <div className={project.classButtonCant}>
                                        <a href={project.deploy} target='_blank' rel="noopener noreferrer" aria-label="No Deploy">
                                            <IoMdEyeOff />
                                            <p>Deploy</p>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="project-img">
                            <img src={project.image} alt={`${project.title} screenshot`} />
                        </div>
                    </div>
                ))}
            </section>

            <Link to='/'>
                <button className='back-to-home routes-button button' aria-label="Home button">
                    <i className="home-icon"><HiHome /></i>
                </button>
            </Link>
        </div>
    );
}

export default index;