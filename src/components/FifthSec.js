// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";

// const Project = () => {
//   const imageContainer = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: imageContainer,
//     offset: ["start 45%", "start start"]
//   })
//   const scaleProgress = useTransform(scrollYProgress,[0,1],[1,400])
//   return (
//     <div className="py-[250px] desktop pb-[400px] flex justify-center items-start classic overflow-hidden relative">
//       <motion.img  ref={imageContainer} style={{ scale:scaleProgress }} src='images/Our Projects.svg' alt='Our Projects' />
//     </div>
//   );
// };
// export default Project;









import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const imageRef = useRef(null);
  const main = useRef(null);

  useLayoutEffect(() => {
    const image = imageRef.current;
    const imageContainer = main.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer,
        start: '70% center',
        end: 'bottom center',
        scrub: 2,
        markers:true,
      },
    });

    tl.to(image, {
      scale: 300.5,
      duration:1.9,
      ease: 'power1.inOut',
      force3D: true
    });
  }, []);
  

  return (
    <div className="py-[250px] desktop pb-[400px] flex justify-center items-center classic overflow-hidden relative" ref={main}>
        <img ref={imageRef} src='images/Our Projects.svg' alt='Our Projects' />
    </div>
  );
};
export default Project;




















// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const { innerHeight } = window;

// const Project = () => {
//   const imageRef = useRef(null);
//   const main = useRef(null);

//   useLayoutEffect(() => {
//     const image = imageRef.current;
//     const imageContainer = main.current;
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         // trigger: imageContainer,
//         trigger: image,
//         start: 'top center',
//         end: `+=${innerHeight * 1.3}`,
//         scrub: 2,
//       },
//     });

//     tl.to(image, {
//       scale: 400,
//       duration: 2,
//     });
//   }, []);

//   return (
//     <div className="py-[250px] desktop pb-[400px] flex justify-center items-center classic overflow-hidden" ref={main}>
//       <div ref={imageRef} className="leading-[96px] text-[96px] font-[400] text-white" >
//         <img src='images/Our Projects.svg' alt='Our Projects' />
//       </div>
//     </div>
//   );
// };


// export default Project;











// import React, { useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const { innerHeight } = window;

// const Project = () => {

//   const main = useRef();
//   useLayoutEffect(() => {
//     const ctx = gsap.context((self) => {
//       const text = self.selector('#zooming-text img');
//       gsap.to(text, {
//         scale: 450, duration: 0.5,
//         scrollTrigger: {
//           trigger: text,
//           pin: true,
//           end: `+=${innerHeight * 1.3}`,
//           scrub: 3
//         }
//       });
//     }, main); // <- Scope!
//     // return () => ctx.revert(); // <- Cleanup!
//   }, []);

//   return (
//     <div className="py-[250px] desktop pb-[400px] flex justify-center items-center classic overflow-hidden" ref={main}>
//       <div id='zooming-text' className="leading-[96px] text-[96px] font-[400] text-white" >
//         <img src='images/Our Projects.svg' alt='Our Projects' />
//       </div>
//     </div>
//   );
// };


// export default Project;
