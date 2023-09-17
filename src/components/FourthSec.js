import React, { useState } from 'react';
import '../style/FourthSec.css';

const FourthSec = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [lastHoveredIndex, setLastHoveredIndex] = useState(null);
  
  const links = [
    { name: 'Web & Mobile Development', imgSrc: 'images/mobile_dev.jpg' },
    { name: 'Web & Mobile Design', imgSrc: 'images/web_dev.jpg' },
    { name: 'Brand Identity Design', imgSrc: 'images/branding.jpg' },
  ];

  const handleLinkHover = (index) => {
    setActiveLink(index);
    setLastHoveredIndex(index);
  };

  const isImageActive = (index) => {
    return activeLink === index || (activeLink === null && index === lastHoveredIndex);
  };

  return (
    <div className="mt-[150px] py-[90px] classic">
      <div className="w-[85%] forthWrap mx-auto flex justify-between gap-1">
        <div className="left_fourth relative h-[550px] w-[50%]">
          {links.map((link, index) => (
            <div
            key={index}
            style={{
              marginLeft: (activeLink === null || index <= activeLink) ? '0' : '-1200px', transform: index === 1 ? 'rotate(4deg)' : 'rotate(-4deg)',
            }}
            // className={`mobile_dev absolute transition-all duration-1000 top-0 w-[424px] ${
            className={`mobile_dev absolute transition-all duration-1000 top-0 w-[424px] ${
              isImageActive(index) ? '' : '-rotate-[4deg]'
            } h-[548px] rounded-lg`}
            >
              <img
                src={link.imgSrc}
                alt={link.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
        <div className="right_fourth w-[50%]">
          <h4 className="text-left text-[20px] leading-[20px] font-bold text-white">
            Our Services
          </h4>
          <h2 className="mt-[36px] text-[70px] leading-[70px] text-white font-[400]">
            We make your brand stand out.
          </h2>
          <ul className="list-none listing_link mt-[70px] right_fourth_ul_style cursor-pointer ">
            {links.map((link, index) => (
              <li key={index} className=" "
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={() => setActiveLink(lastHoveredIndex)} >
                <span className='flex items-center py-5 '>
                      <img
                        src="images/vlogoicon.png"
                        alt="v logo icon"
                        className={`w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px] ${
                          isImageActive(index) ? 'block ' : 'hidden'
                        }`}
                      />
                      <span
                        className={`text-[16px] leading-[172%]  text-white `}
                      >
                        {link.name}

                      </span>
                </span>
                <hr className="h-[0px] block bg-[#131519] border-[#131519]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FourthSec;































// import React, { useState } from 'react';

// const FourthSec = () => {
//   const block = 'block';
//   const dnone = 'none';
//   const point = '';
//   const pointOut = '-999px';

//   const [fLink, setFlink] = useState(block);
//   const [sLink, setSlink] = useState(dnone);
//   const [tLink, setTlink] = useState(dnone);

//   const [fImg, setFimg] = useState(point);
//   const [sImg, setSimg] = useState(point);
//   const [tImg, setTimg] = useState(point);

//   const firstLink = () => {
//     setFlink(block);
//     setSlink(dnone);
//     setTlink(dnone);
//     setFimg(point);
//   };
//   const secondLink = () => {
//     setFimg(pointOut);
//     setSimg(point)
//     setFlink(dnone);
//     setSlink(block);
//     setTlink(dnone);
//   };
//   const thirdLink = () => {
//     setSimg(pointOut)
//     setTlink(block);
//     setSlink(dnone);
//     setFlink(dnone);
//   };
//   return (
//     <>
//       <div className="mt-[150px] py-[90px] classic">
//         <div className="w-[85%] forthWrap mx-auto flex justify-between gap-1">
//           <div className="left_fourth relative h-[550px] w-[50%]">
//             <div
//               style={{ marginLeft: tImg }}
//               className="mobile_dev absolute   transition-all duration-1000 top-0 w-[424px] -rotate-[4deg] h-[548px] rounded-lg"
//             >
//               <img
//                 src="images/mobile_dev.jpg"
//                 alt="mobile"
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>

//             <div
//               style={{ marginLeft: sImg }}
//               className="mobile_dev absolute transition-all duration-1000  top-0 w-[424px] rotate-[4deg] h-[548px] rounded-lg"
//             >
//               <img
//                 src="images/web_dev.jpg"
//                 alt="mobile"
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>

//             <div
//               style={{ marginLeft: fImg }}
//               className="mobile_dev absolute   transition-all duration-1000  top-0 w-[424px] -rotate-[4deg] h-[548px] rounded-lg"
//             >
//               <img
//                 src="images/branding.jpg"
//                 alt="mobile"
//                 className="  w-full h-full object-cover rounded-2xl"
//               />
//             </div>
//           </div>

//           <div className="right_fourth w-[50%]">
//             <h4 className="text-left text-[20px]  leading-[20px] font-bold text-white ">
//               Our Services
//             </h4>
//             <h2 className="mt-[36px] text-[70px] leading-[70px] text-white font-[400]">
//               We make your brand stand out.
//             </h2>

//             <ul className="list-none listing_link mt-[70px] cursor-pointer">
//               <li className="flex items-center   pb-5">
//                 <img
//                   style={{ display: fLink }}
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={firstLink}
//                   className="text-[16px] leading-[172%] duration-1000 text-white"
//                 >
//                   Brand Identity Design
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex   transition-all duration-700 items-center pb-5">
//                 <img
//                   style={{ display: sLink }}
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={secondLink}
//                   className="text-[16px] leading-[172%] test duration-1000 transition-transform text-white"
//                 >
//                   Web & Mobile Design{' '}
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex  items-center pb-5">
//                 <img
//                   style={{ display: tLink }}
//                   src="images/vlogoicon.png"
//                   alt="v logo icon"
//                   className="w-[24px] mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={thirdLink}
//                   className="text-[16px] leading-[172%] duration-1000 text-white"
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
//     </>
//   );
// };

// export default FourthSec;
