import './Home.css'
import { Helmet } from 'react-helmet';

import AnimatedText from '../../components/Anim'
import StacksConstant from '../../components/StacksConstant'
import Skills from '../../components/Skills'

import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 

const index = () => {
  return (
    <div id='Home'>
      <Helmet>
        <meta name="description" content="Página sobre Arthur Sant, um desenvolvedor Full Stack com foco em design, usabilidade e performance." />
        <meta name="keywords" content="Arthur Sant, desenvolvedor, Full Stack, React, JavaScript, Python, R, Java, programação, tecnologia" />
        <meta name="author" content="Arthur Sant" />
      </Helmet>

      <div id="Home-container">
        <div className="profile-section">
          <div className='profile'>
            <AnimatedText />

            <div className="social shadow">
              <a href="https://www.linkedin.com/in/devarthursant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <AiFillLinkedin className='icon' alt="LinkedIn"/>
              </a>
              <a href="https://github.com/ArthurSantDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <AiFillGithub className='icon' alt="GitHub"/>
              </a>
              <a href="https://wa.me/5524988638508" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className='icon' alt="WhatsApp"/>
              </a>
              <a href="mailto:DevArthurSant@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-mail">
                <MdEmail className='icon'alt="E-mail"/>
              </a>
            </div>

            <StacksConstant />
          </div>
        </div>

        <Skills />
      </div>
    </div>
  );
}

export default index;