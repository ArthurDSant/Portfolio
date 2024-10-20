import './Footer.css';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { FaWhatsapp } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { MdEmail } from "react-icons/md"; 
import { AiFillLinkedin } from "react-icons/ai"; 


const index = () => {

  useEffect(() => {
    ScrollReveal().reveal('.footer-bar', {
      origin: 'top',
      distance: '60px',
      duration: 1000,
      reset: true,
    });
  }, []);

  return (
    <div id='Footer' className="Container">
      <div className="Footer">
        <div className="footer-center">
          <div className='footer-bar shadow'>
            <a href="https://www.linkedin.com/in/devarthursant" target="_blank" aria-label="Linkedin">
              <AiFillLinkedin className='footer-bar-link' alt="Linkedin"/>
            </a>
            <a href="https://github.com/ArthurSantDev" target="_blank" aria-label="GitHub">
              <AiFillGithub className='footer-bar-link' alt="GitHub"/>
            </a>
            <a href="https://wa.me/5524988638508" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className='footer-bar-link' alt="WhatsApp"/>
            </a>
            <a href="mailto:DevArthurSant@gmail.com" target="_blank" aria-label="E-mail">
              <MdEmail className='footer-bar-link' alt="E-mail"/>
            </a>
          </div>
          <p class="footer-copy">
            <a href="https://github.com/ArthurSantDev" target="_blank" class="footer__copy-link" aria-label="Copy Right">
              &#169;2024 <i>Arthur Sant</i>. All right reserved.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index