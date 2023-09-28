import React, { useState } from "react";
import arrow from "../components/assets/images/Arrow.png";
import white from "../components/assets/images/lets/lets_do_white.svg";
import black from "../components/assets/images/lets/lets_do_black.svg";
import { Link } from "react-router-dom";

import "../style/LatsContact.css";


const Lets = () => {

  const [isHover, setIsHover] = useState(false);
  const [isHoverInner, setIsHoverInner] = useState(false);

  return (
    <>
      <section className="section">
        <div
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
          className="bg-black rounded-t-full rounded-l-full mx-auto w-[340px] h-[340px]
                    sm:w-[400px] 
                    sm:h-[400px] 
                    sm:bg-gray-300
                    relative
                    hover:bg-black
                    hover:text-white
                    sm:text-black
                    text-white
                    duration-300
                    lats-contact-style
                    "
        >
          <div className="text-[35px] sm:text-[40px] text-center pt-24 px-10" >
            Let's do something cool Together
          </div>

          <Link to="/contact">
          <div className="lats-contact-child bg-white absolute bottom-4 right-4 text-black"> 
            <p> Lat's Connect 

             </p>
            <img className="ml-2 rotate-180 my-auto " src={arrow} alt="" />
          </div>
            </Link>


          {/* <div className={isHoverInner ? "mr-2 mt-10 absolute bottom-2 right-0 opacity-100 duration-300" : "mr-2 mt-10 absolute bottom-2 right-0 sm:opacity-0  duration-300"}>
            <div
              className="font-sans bg-white p-6 rounded-full flex w-max ml-auto"
            >
              <Link to="/contact" className="text-black">Let's Connect</Link>
              <img className="ml-2 rotate-180 my-auto" src={arrow} alt="" />
            </div>
          </div> */}

          {/* <div onMouseEnter={()=>setIsHoverInner(!isHoverInner)}
            onMouseLeave={() => setIsHoverInner(!isHoverInner)} className={isHover ? "absolute right-2 bottom-2 hidden sm:block opacity-100 duration-300" : "absolute right-2 bottom-2 hidden sm:block opacity-0 duration-300"}>
            <Link to="/contact"
              className={isHoverInner ? "font-sans bg-white p-10 rounded-full flex w-max ml-auto opacity-0 duration-300" : "font-sans bg-white p-10 rounded-full flex w-max ml-auto opacity-100 duration-300"}
            >
              <p className="text-black text-center">Let's<br />Connect</p>
              
            </Link>

          </div> */}


          
        </div>

        
      </section>

      
    </>
  );
};

export default Lets;




















// import React, { useState } from "react";
// import arrow from "../components/assets/images/Arrow.png";
// import white from "../components/assets/images/lets/lets_do_white.svg";
// import black from "../components/assets/images/lets/lets_do_black.svg";
// import { Link } from "react-router-dom";


// const Lets = () => {

//   const [isHover, setIsHover] = useState(false);
//   const [isHoverInner, setIsHoverInner] = useState(false);

//   return (
//     <>
//       <section className="section">
//         <div
//         onMouseEnter={() => setIsHover(!isHover)}
//         onMouseLeave={() => setIsHover(!isHover)}
//           className="bg-black rounded-t-full rounded-l-full mx-auto w-[340px] h-[340px]
//                     sm:w-[400px] 
//                     sm:h-[400px] 
//                     sm:bg-gray-300
//                     relative
//                     hover:bg-black
//                     hover:text-white
//                     sm:text-black
//                     text-white
//                     duration-300
//                     "
//         >
//           <div
//             className="text-[35px] sm:text-[40px] text-center pt-24 px-10
// "
//           >
//             Let's do something cool Together
//           </div>

//           <div className={isHoverInner ? "mr-2 mt-10 absolute bottom-2 right-0 opacity-100 duration-300" : "mr-2 mt-10 absolute bottom-2 right-0 sm:opacity-0  duration-300"}>
//             <div
//               className="font-sans bg-white p-6 rounded-full flex w-max ml-auto"
//             >
//               <Link to="/contact" className="text-black">Let's Connect</Link>
//               <img className="ml-2 rotate-180 my-auto" src={arrow} alt="" />
//             </div>
//           </div>

//           <div onMouseEnter={()=>setIsHoverInner(!isHoverInner)}
//             onMouseLeave={() => setIsHoverInner(!isHoverInner)} className={isHover ? "absolute right-2 bottom-2 hidden sm:block opacity-100 duration-300" : "absolute right-2 bottom-2 hidden sm:block opacity-0 duration-300"}>
//             <Link to="/contact"
//               className={isHoverInner ? "font-sans bg-white p-10 rounded-full flex w-max ml-auto opacity-0 duration-300" : "font-sans bg-white p-10 rounded-full flex w-max ml-auto opacity-100 duration-300"}
//             >
//               <p className="text-black text-center">Let's<br />Connect</p>
              
//             </Link>

//           </div>


          
//         </div>

        
//       </section>

      
//     </>
//   );
// };

// export default Lets;
