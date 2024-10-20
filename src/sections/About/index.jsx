import './About.css'
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Helmet } from 'react-helmet';
import StacksColumn from '../../components/StacksColumn'

const index = () => {

   useEffect(() => {
      const revealSettings = {
        distance: '150px',
        duration: 1000,
        reset: false,
      };      
      
      if (window.innerWidth > 768) {
        ScrollReveal().reveal('.about-img', {
          ...revealSettings,
          origin: 'left'
        });
      } else {
        ScrollReveal().reveal('.about-img', {
          ...revealSettings,
          origin: 'top'
        });
      };

      if (window.innerWidth > 768) {
         ScrollReveal().reveal('.about-text', {
           ...revealSettings,
           origin: 'right'
         });
       } else {
         ScrollReveal().reveal('.about-text', {
           ...revealSettings,
           origin: 'bottom'
         });
       };
    }, []);

  return (
   <div className='center'>
      <Helmet>
        <meta name="description" content="Página sobre Arthur Sant, um desenvolvedor Full Stack com foco em design, usabilidade e performance." />
        <meta name="keywords" content="Arthur Sant, desenvolvedor, Full-Stack, React, JavaScript, Python, R, Java, programação, tecnologia, software" />
        <meta name="author" content="Arthur Sant" />
      </Helmet>

      <div id='About' className='container background-image'>
         <h1 className='Title'>
            About Me
         </h1>
         <div className='center'>
            <div className='about-grid'>
               <div className='about-img'>
                  <img src="/profile.avif" className='shadow' alt='Profile pick'/>
               </div>
               <div className='about-text'>
                  <h2>
                     Um pouco sobre mim
                  </h2>
                  <p>
                     Me chamo Arthur Sant e sou um <i>desenvolvedor Full Stack</i>.  
                     Entrei no mundo da programação com intuito de achar soluções para problemas como  <i>layout, 
                     usabilidade e fluidez</i>, o que considero ser meu forte. Como estou me especializando para 
                     futuramente me tornar referência na área, busco sempre aprender e me atualizar sobre as <i>principais 
                     técnicas e tecnologias do mercado</i>, tendo como minhas mais fortes características a capacidade de compreender 
                     e elevar o código e funcionalidades das aplicações em que trabalho.
                  </p>
               </div>
            </div>
         </div>

        <StacksColumn />
        
      </div>
   </div>
  )
}

export default index