import './StacksConstant.css'
import { STACKS } from '../../constants/stacks';
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const one = '[';
const two = '] ;';

const index = () => {

   useEffect(() => {
      ScrollReveal().reveal('.const-stacks', {
        distance: '100px',
        duration: 1000,
        reset: false,
        interval: 200,
        origin: 'bottom'
      });
    }, []);

  return (
   <div class="const-stacks">
      <div className="const-text-one" aria-label='Stacks const'>
        <p class="p-pink"> const </p>
        <p class="p-green"> Staks </p>
        <p class="p-pink"> = </p>
        <p class="p-white">{one}</p>
      </div>

      <div class="stacks">
        <div className="stacks-slide">
          {STACKS.map(({ id, src, alt }) => (
            <img key={id} src={src} alt={alt} />
          ))}
        </div>
        <div className="stacks-slide">
          {STACKS.map(({ id, src, alt }) => (
            <img key={id} src={src} alt={alt} />
          ))}
        </div>

        <div class="const-text-two">
          <p class="p-white">{two}</p>
       </div>
     </div>
   </div>
  )
}

export default index