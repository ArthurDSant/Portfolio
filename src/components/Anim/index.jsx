import './Anim.css';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const index = () => {
   useEffect(() => {
      ScrollReveal().reveal('.animated-text', {
        origin: 'top',
        distance: '100px',
        duration: 1000,
        reset: false,
        interval: 200
      });
   }, []);

  return (
   <div>
      <div class="animated-text">
         <h3>Olá, meu nome é</h3>
         <h1>Arthur Sant</h1>
            <h2>
               e sou <span class="typing"></span>
            </h2>
      </div>
   </div>
  )
}

export default index