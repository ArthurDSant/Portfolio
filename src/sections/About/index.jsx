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
                  Sou Arthur Gabriel D. Sant, Cientista de Dados e Desenvolvedor de Software. Combinando análise de dados e programação, busco transformar problemas complexos em <i>soluções práticas e estratégicas</i>. 
                  Tenho facilidade em aprender rapidamente tecnologias novas e por em prática metodologias de desenvolvimento, sempre buscando melhorar resultados técnicos e interpessoais com a equipe. Com relação a código 
                  tenho mais expertise em <i>Python</i>, <i>R</i> e <i>JavaScript</i>, dominando suas Libs e Frameworks como Pandas, NumPy, React.Js entre outros.
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