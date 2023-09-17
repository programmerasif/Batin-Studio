import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const { innerHeight } = window;

const Project = () => {

  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const text = self.selector('#zooming-text img');
      gsap.to(text, {
        scale: 450, duration: 0.5,
        scrollTrigger: {
          trigger: text,
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 3
        }
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className="py-[250px] desktop pb-[400px] flex justify-center items-center classic overflow-hidden" ref={main}>
      <div id='zooming-text' className="leading-[96px] text-[96px] font-[400] text-white" >
        <img src='images/Our Projects.svg' alt='Our Projects' />
      </div>
    </div>
  );
};


export default Project;
