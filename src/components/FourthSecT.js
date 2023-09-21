import React, { useState } from 'react';
import '../style/FourthSec.css';

const FourthSecT = () => {
  
  const block = '0px';
  const dnone = '-35px';
  const point = '';
  const pointOut = '-1200px';

  const [fLink, setFlink] = useState(block);
  const [sLink, setSlink] = useState(dnone);
  const [tLink, setTlink] = useState(dnone);
  const [gLink, setGlink] = useState(dnone);

  const [fImg, setFimg] = useState(point);
  const [sImg, setSimg] = useState(point);
  const [tImg, setTimg] = useState(point);

  const [gImg, setGimg] = useState(point);

  const [currentIndex, setCurrentIndex] = useState(1);

  const eventsToTrigger = [
    () => firstLink(),
    () => secondLink(),
    () => thirdLink(),
    () => fourthLink(),
    // Add more events as needed
  ];


  const firstLink = () => {
    setFlink(block);
    setSlink(dnone);
    setTlink(dnone);
    setGlink(dnone);
    setFimg(point);
    setSimg(point);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(1);
  };
  const secondLink = () => {
    setFlink(dnone);
    setSlink(block);
    setTlink(dnone);
    setGlink(dnone);

    setFimg(pointOut);
    setSimg(point);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(2);
  };
  const thirdLink = () => {
    setTlink(block);
    setSlink(dnone);
    setFlink(dnone);
    setGlink(dnone);
    setTimg(pointOut);
    setSimg(pointOut);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(3);
  };

  const fourthLink = () => {
    setTlink(dnone);
    setSlink(dnone);
    setFlink(dnone);
    setGlink(block);
    setTimg(pointOut);
    setSimg(pointOut);
    setFimg(pointOut);
    setGimg(pointOut);
    setCurrentIndex(4);
  };

  return (

    <div className='forth-main-div '>
      <div className="mt-[150px]  py-[90px] ">

        <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
        Our Services

        </p>
        <h2
          className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
          style={{ textAlign: 'left', fontSize: '50px' }}
        >
         We make your brand <br /> stand out.
        </h2>

        {/* <div className="w-[90%] wonderWrapper mx-auto flex md:flex-row justify-between items-center gap-5"> */}
        <div className="w-[90%] FourthSecT-animation-div  mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-5">

          <div className="left_fourth relative h-[300px] md:mt-20 lg:-mt-28 w-[50%] ">
            <div 
            className="w-[95%]  transition-all duration-1000 -top-1 left-2.5 md:-mt-20 lg:top-20 md:left-4 lg:left-0  -rotate-6 flex justify-center  absolute mx-auto ">
            {/* <div className=""> */}
              <img
                className=""
                src="images/mobile_dev2.jpg"
                alt="breif icon"
              />
            </div>

            <div
              className="w-[95%]  transition-all  duration-1000 mt-28  ml-0 md:mt-0   flex justify-center   rounded-2xl  absolute mx-auto "
              style={{ marginLeft: tImg }}
            >
              <img
                className=""
                src="images/web_dev.jpg"
                alt="breif icon"
              />
            </div>

            <div
              className=" w-[95%]   transition-all duration-1000 mt-36 md:mt-8 lg:mt-0 ml-0 -rotate-6   flex justify-center   rounded-2xl  absolute mx-auto "
              style={{ marginLeft: sImg }}
            >
              <img
                className=""
                src="images/branding2.jpg"
                alt="breif icon"
              />
              
            </div>
          </div>


          <div className="right_fourth w-[45%]">
            <h4 id="next" className="text-left font-sans desktop text-[20px]  leading-[20px] font-[400] ">
            Our Services

            </h4>
            <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
            We make your brand  stand out.
            </h2>

            <ul className="list-none listing_link mt-[70px] cursor-pointer">

              <li onMouseEnter={secondLink} className="flex items-center">
                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px] "
                />{' '}
                <span
                style={{ marginLeft : sLink }}
                  
                  className="text-[16px] leading-[172%] py-4  "
                >
                 Brand Identity Design
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={thirdLink} className="flex items-center">
                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span             
                style={{ marginLeft : tLink }}                    
                  className="text-[16px] leading-[172%] py-4  "
                >
                  Web & Mobile Design
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={fourthLink} className="flex     items-center">

                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />
                <span
                 style={{ marginLeft : gLink }}
                 
                  className="text-[16px] leading-[172%] py-4  "
                >
                  Web & Mobile Development
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
            </ul>
          </div>



        </div>

        <hr className="py-[20px] mt-[100px] invisible" />
      </div>


      {/* <div className="mt-[100px] desktop w-full">
        <div className="container mx-auto">
          <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
            <p className="text-center font-sans text-[18px]">Our Speciality</p>
            <h2 className="text-[60px] font-[400] leading-8 mt-8">
              We make complicated things{' '}
            </h2>
            <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
          </div>
        </div>
      </div> */}

    </div>  

  );
};
export default FourthSecT;




// import React, { useState } from 'react';
// import '../style/FourthSec.css';

// const FourthSecT = () => {
  
//   const block = '0px';
//   const dnone = '-35px';
//   const point = '';
//   const pointOut = '-900px';

//   const [fLink, setFlink] = useState(block);
//   const [sLink, setSlink] = useState(dnone);
//   const [tLink, setTlink] = useState(dnone);
//   const [gLink, setGlink] = useState(dnone);

//   const [fImg, setFimg] = useState(point);
//   const [sImg, setSimg] = useState(point);
//   const [tImg, setTimg] = useState(point);

//   const [gImg, setGimg] = useState(point);

//   const [currentIndex, setCurrentIndex] = useState(1);

//   const eventsToTrigger = [
//     () => firstLink(),
//     () => secondLink(),
//     () => thirdLink(),
//     () => fourthLink(),
//     // Add more events as needed
//   ];


//   const firstLink = () => {
//     setFlink(block);
//     setSlink(dnone);
//     setTlink(dnone);
//     setGlink(dnone);
//     setFimg(point);
//     setSimg(point);
//     setTimg(point);
//     setGimg(point);
//     setCurrentIndex(1);
//   };
//   const secondLink = () => {
//     setFlink(dnone);
//     setSlink(block);
//     setTlink(dnone);
//     setGlink(dnone);

//     setFimg(pointOut);
//     setSimg(point);
//     setTimg(point);
//     setGimg(point);
//     setCurrentIndex(2);
//   };
//   const thirdLink = () => {
//     setTlink(block);
//     setSlink(dnone);
//     setFlink(dnone);
//     setGlink(dnone);
//     setTimg(pointOut);
//     setSimg(pointOut);
//     setTimg(point);
//     setGimg(point);
//     setCurrentIndex(3);
//   };

//   const fourthLink = () => {
//     setTlink(dnone);
//     setSlink(dnone);
//     setFlink(dnone);
//     setGlink(block);
//     setTimg(pointOut);
//     setSimg(pointOut);
//     setFimg(pointOut);
//     setGimg(pointOut);
//     setCurrentIndex(4);
//   };

//   return (

//     <div className='forth-main-div '>
//       <div className="mt-[150px]  py-[90px] ">

//         {/* <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
//         Our Services

//         </p>
//         <h2
//           className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
//           style={{ textAlign: 'left', fontSize: '50px' }}
//         >
//          We make your brand <br /> stand out.
//         </h2> */}

//         <div className="w-[90%] wonderWrapper mx-auto flex justify-between items-center gap-5">

//           <div className="left_fourth relative h-[300px] -mt-28 w-[50%]">

//             <div 
//             className="w-[95%]  transition-all duration-1000 top-0 left-0  -rotate-6 flex justify-center  absolute mx-auto ">
//             {/* <div className=""> */}
//               <img
//                 className=""
//                 src="images/mobile_dev.jpg"
//                 alt="breif icon"
//               />
//             </div>

//             <div
//               className="w-[95%] border-2 transition-all  duration-1000  ml-0 mt-0   flex justify-center   rounded-2xl  absolute mx-auto "
//               style={{ marginLeft: tImg }}
//             >
//               <img
//                 className=""
//                 src="images/web_dev.jpg"
//                 alt="breif icon"
//               />
//             </div>

//             <div
//               className=" w-[95%]   transition-all duration-1000  mt-0 ml-0 -rotate-6   flex justify-center   rounded-2xl  absolute mx-auto "
//               style={{ marginLeft: sImg }}
//             >
//               <img
//                 className=""
//                 src="images/branding.jpg"
//                 alt="breif icon"
//               />
              
//             </div>



//           </div>


//           <div className="right_fourth w-[45%]">
//             <h4 id="next" className="text-left font-sans desktop text-[20px]  leading-[20px] font-[400] ">
//             Our Services

//             </h4>
//             <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
//             We make your brand  stand out.
//             </h2>

//             <ul className="list-none listing_link mt-[70px] cursor-pointer">

//               <li onMouseEnter={secondLink} className="flex items-center">
//                 <img
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px] "
//                 />{' '}
//                 <span
//                 style={{ marginLeft : sLink }}
                  
//                   className="text-[16px] leading-[172%] py-4  "
//                 >
//                  Brand Identity Design
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
//               <li  onMouseEnter={thirdLink} className="flex items-center">
//                 <img
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span             
//                 style={{ marginLeft : tLink }}                    
//                   className="text-[16px] leading-[172%] py-4  "
//                 >
//                   Web & Mobile Design
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
//               <li  onMouseEnter={fourthLink} className="flex     items-center">

//                 <img
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />
//                 <span
//                  style={{ marginLeft : gLink }}
                 
//                   className="text-[16px] leading-[172%] py-4  "
//                 >
//                   Web & Mobile Development
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
//             </ul>
//           </div>


//         </div>

//         <hr className="py-[20px] mt-[100px] invisible" />
//       </div>


//       {/* <div className="mt-[100px] desktop w-full">
//         <div className="container mx-auto">
//           <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
//             <p className="text-center font-sans text-[18px]">Our Speciality</p>
//             <h2 className="text-[60px] font-[400] leading-8 mt-8">
//               We make complicated things{' '}
//             </h2>
//             <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
//           </div>
//         </div>
//       </div> */}

//     </div>  

//   );
// };
// export default FourthSecT;






// <div className="mt-[150px] py-[90px] classic">
    //   <div className="w-[85%] forthWrap mx-auto flex justify-between gap-1">
    //     <div className="left_fourth relative h-[550px] w-[50%]">
    //       {links.map((link, index) => (
    //         <div
    //         key={index}
    //         style={{
    //           marginLeft: (activeLink === null || index <= activeLink) ? '0' : '-1200px', transform: index === 1 ? 'rotate(4deg)' : 'rotate(-4deg)',
    //         }}
    //         className={`mobile_dev absolute top-0 w-[424px] ${
    //           isImageActive(index) ? '' : '-rotate-[4deg]'
    //         } h-[548px] rounded-lg`}
    //         >
    //           <img
    //             src={link.imgSrc}
    //             alt={link.name}
    //             className="w-full h-full object-cover rounded-2xl"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="right_fourth w-[50%]">
    //       <h4 className="text-left text-[20px] leading-[20px] font-bold text-white">
    //         Our Services
    //       </h4>
    //       <h2 className="mt-[36px] text-[70px] leading-[70px] text-white font-[400]">
    //         We make your brand stand out.
    //       </h2>
    //       <ul className="right_fourth_ul_style list-none listing_link mt-[70px]  cursor-pointer">
    //         {links.map((link, index) => (
    //           <li key={index} className=""
    //             onMouseEnter={() => handleLinkHover(index)}
    //             onMouseLeave={() => setActiveLink(lastHoveredIndex)} >
    //             <span className=' flex items-center overflow-hidden '>
    //                   <img
    //                     src="images/vlogoicon.png"
    //                     alt="v logo icon"
    //                     className={`w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px] `}
    //                   />
    //                   <span
    //                     className={`text-[16px] leading-[172%]  text-white `}
    //                   >
    //                     <span
                        
    //                     className={`link-name-style ps-2 ${
    //                       isImageActive(index) ? ' ms-1 ' : '-ms-10'
    //                     }`}>{link.name}</span>
    //                   </span>                    
    //             </span>
    //                  <hr className="h-[0px] block bg-[#131519] border-[#131519] my-3" />
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>



























// import React, { useState } from 'react';
// import '../style/FourthSec.css';

// const FourthSecT = () => {
//   const [activeLink, setActiveLink] = useState(null);
//   const [lastHoveredIndex, setLastHoveredIndex] = useState(null);
  
//   const links = [
//     { name: 'Web & Mobile Development', imgSrc: 'images/mobile_dev.jpg' },
//     { name: 'Web & Mobile Design', imgSrc: 'images/web_dev.jpg' },
//     { name: 'Brand Identity Design', imgSrc: 'images/branding.jpg' },
//   ];

//   const handleLinkHover = (index) => {
//     setActiveLink(index);
//     setLastHoveredIndex(index);
//   };

//   const isImageActive = (index) => {
//     return activeLink === index || (activeLink === null && index === lastHoveredIndex);
//   };

//   return (
//     <div className="mt-[150px] py-[90px] classic">
//       <div className="w-[85%] forthWrap mx-auto flex justify-between gap-1">
//         <div className="left_fourth relative h-[550px] w-[50%]">
//           {links.map((link, index) => (
//             <div
//             key={index}
//             style={{
//               marginLeft: (activeLink === null || index <= activeLink) ? '0' : '-1200px', transform: index === 1 ? 'rotate(4deg)' : 'rotate(-4deg)',
//             }}
//             // className={`mobile_dev absolute transition-all duration-1000 top-0 w-[424px] ${
//             className={`mobile_dev absolute top-0 w-[424px] ${
//               isImageActive(index) ? '' : '-rotate-[4deg]'
//             } h-[548px] rounded-lg`}
//             >
//               <img
//                 src={link.imgSrc}
//                 alt={link.name}
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="right_fourth w-[50%]">
//           <h4 className="text-left text-[20px] leading-[20px] font-bold text-white">
//             Our Services
//           </h4>
//           <h2 className="mt-[36px] text-[70px] leading-[70px] text-white font-[400]">
//             We make your brand stand out.
//           </h2>
//           <ul className="right_fourth_ul_style list-none listing_link mt-[70px]  cursor-pointer ">
//             {links.map((link, index) => (
//               <li key={index} className=" "
//                 onMouseEnter={() => handleLinkHover(index)}
//                 onMouseLeave={() => setActiveLink(lastHoveredIndex)} >
//                 <span className='flex items-center py-5 overflow-hidden '>
//                       <img
//                         src="images/vlogoicon.png"
//                         alt="v logo icon"
//                         className={`w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px] ${
//                           isImageActive(index) ? ' ms-2 ' : '-ms-8'
//                         }`}
//                       />
//                       <span
//                         className={`text-[16px] leading-[172%]  text-white `}
//                       >
//                         <span className='link-name-style'>{link.name}</span>

//                       </span>
//                 </span>
//                 <hr className="h-[0px] block bg-[#131519] border-[#131519]" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FourthSecT;