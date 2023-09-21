import React, { useState } from 'react';
import '../style/seven.css'


// import Swiper styles


const SevenSec = () => {
  const block = '0px';
  const dnone = '-35px';
  const point = '';
  const pointOut = '-1500px';

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

  const handleNextClick = () => {
    if (currentIndex < eventsToTrigger.length) {
      const currentEvent = eventsToTrigger[currentIndex];
      currentEvent();
      setCurrentIndex(currentIndex + 1);
    }
    return;
  };

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
    <div className='seven-main-div -mt-36 md:mt-0'>

      <div className="mt-[150px] pt-[90px] md:pt-[0px] lg:py-[90px] ">
        <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
          Work Process
        </p>
        <h2
          className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
          style={{ textAlign: 'left', fontSize: '50px' }}
        >
          Wondering, <br /> how we work?
        </h2>

        <div className="w-[90%] wonderWrapper  mx-auto flex md:flex-col-reverse lg:flex-row justify-between items-center gap-5">

          <div className="left_fourth relative h-[300px] w-[50%] md:w-[80%] lg:w-[50%]  ">
            
            <div className="w-[95%] bg-whitee border-[1px]  transition-all duration-1000 top-0 -left-4 md:left-0  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto ">
              <img
                className=" w-5 h-4 "
                src="images/vlogoicon1.png"
                alt="breif icon"
              />
              <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
              <p className="font-sans">
                Send us a complete brief along with documents & requirements to
                estimate the project.
              </p>
            </div>

            <div className="w-[95%] bg-whitee border-[1px] transition-all  duration-1000 -ml-1 -mt-4 md:ml-6 md:-mt-3 lg:ml-3 lg:mt-3  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
              style={{ marginLeft: tImg }}
            >
              <img
                className="w-5 h-4"
                src="images/vlogoicon1.png"
                alt="breif icon"
              />
              <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
              <p className="font-sans">
                Send us a complete brief along with documents & requirements to
                estimate the project.
              </p>
            </div>

            <div className=" w-[95%]  bg-whitee border-[1px] transition-all duration-1000  mt-6 ml-6  md:mt-6 md:ml-12 lg:mt-6 lg:ml-6 p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
              style={{ marginLeft: sImg }}
            >
              <img
                className="w-5 h-4"
                src="images/vlogoicon1.png"
                alt="breif icon"
              />
              <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
              <p className="font-sans">
                Send us a complete brief along with documents & requirements to
                estimate the project.
              </p>
            </div>

            <div className="w-[95%]  border-[1px] top-3 transition-all duration-1000 bg-whitee mt-12 ml-14 md:ml-20 md:mt-12 lg:ml-9 lg:mt-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
              style={{ marginLeft: fImg }}
            >
              <img
                className="w-6 h-6"
                src="images/Notebook.png"
                alt="breif icon"
              />
              <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
              <p className="font-sans">
                Send us a complete brief along with documents & requirements to
                estimate the project.
              </p>
            </div>

            <div className="absolute -bottom-14 w-full flex justify-center items-center">
              <div className="w-[220px] mt-9 flex justify-between items-center">
                <div className="learro">
                  <button className="cursor-pointer w-[85px] p-5">
                    <img src="images/Arrow.png" alt="arrow" />
                  </button>
                </div>
                <p className="block">
                  <span>{currentIndex} /</span> <span> 4</span>
                </p>
                <div className="learro">
                  <button
                    onClick={handleNextClick}
                    className="cursor-pointor transition-all duration-1000 p-5 w-[85px]"
                  >
                    <img
                      src="images/Arrow2.png"
                      className=" duration-1000 transition-all"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="right_fourth  w-[45%] ">
            <h4 id="next" className="text-left font-sans desktop text-[16px]  leading-[20px] font-[400] ">
              Work Process
            </h4>
            <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
              Wondering, how we work?
            </h2>

            <ul className="list-none listing_link mt-[70px] cursor-pointer  md:-ms-5 lg:ms-0">
              <li  onMouseEnter={firstLink} className="flex items-center ">
                <img
                  // style={{ marginLeft: fLink }}
                  src="images/vlogoicon1.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span
                 style={{ marginLeft: fLink }}
                 
                  className="text-[16px] leading-[172%] py-4 bg-[#f7f7f7] "
                >
                  Send brief
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li onMouseEnter={secondLink} className="flex items-center">
                <img
                  // style={{ marginLeft : sLink }}
                  src="images/vlogoicon1.png"
                  alt="v logo icon"
                  className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span
                style={{ marginLeft : sLink }}
                  
                  className="text-[16px] leading-[172%] py-4 bg-[#f7f7f7] "
                >
                  Stay in touch
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={thirdLink} className="flex items-center">
                <img
                  // style={{ marginLeft : tLink }}
                  src="images/vlogoicon1.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span             
                style={{ marginLeft : tLink }}                    
                  className="text-[16px] leading-[172%] py-4 bg-[#f7f7f7] "
                >
                  Approve
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={fourthLink} className="flex     items-center">

                <img
                  // style={{ marginLeft : gLink }}
                  src="images/vlogoicon1.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />
                <span
                 style={{ marginLeft : gLink }}
                 
                  className="text-[16px] leading-[172%] py-4 bg-[#f7f7f7] "
                >
                  Get resultt
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
            </ul>
          </div>

        </div>

        <hr className="py-[20px] mt-[100px] invisible" />
      </div>

      <div className="mt-[100px] desktop w-full">
        <div className="container mx-auto">
          <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
            <p className="text-center font-sans text-[18px]">Our Speciality</p>
            <h2 className="text-[60px] font-[400] leading-8 mt-8">
              We make complicated things{' '}
            </h2>
            <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SevenSec;




































// import React, { useState } from 'react';


// // import Swiper styles


// const SevenSec = () => {
//   const block = 'block';
//   const dnone = 'none';
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

//   const [cardOne, setCardOne] = useState(false);
//   const [cardTwo, setCardTwo] = useState(false);
//   const [cardThree, setCardThere] = useState(false);
//   const [sliderCardFour, setCardFour] = useState(false);

//   const eventsToTrigger = [
//     () => firstLink(),
//     () => secondLink(),
//     () => thirdLink(),
//     () => fourthLink(),
//     // Add more events as needed
//   ];

//   // let sliderCardfunOne = (value) => {
//   //   if (value === 0) {
//   //     setCardOne(true);
//   //   } else if (value === 1) {
//   //     setCardOne(false);
//   //   }
//   // };

//   // let sliderCardfunTwo = (value) => {
//   //   if (value === 1) {
//   //     setCardTwo(true);
//   //   }

//   //   if (value === 2) {
//   //     setCardTwo(false);
//   //   }
//   // };
//   // let sliderCardfunThree = (value) => {
//   //   if (value === 2) {
//   //     setCardThere(true);
//   //   } else if (value === 3) {
//   //     setCardThere(false);
//   //   }
//   // };

//   // let sliderCardfunFour = () => {};

//   const handleNextClick = () => {
//     if (currentIndex < eventsToTrigger.length) {
//       const currentEvent = eventsToTrigger[currentIndex];
//       currentEvent();
//       setCurrentIndex(currentIndex + 1);
//     }
//     return;
//   };

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

//   // const handlePrevious = () => {
//   //   if (currentIndex > 0) {
//   //     setCurrentIndex(currentIndex - 1);
//   //   }
//   // };

//   // const mystyle = {
//   //   marginLeft: '-900px',
//   // };
//   // const mystyleprev = {
//   //   marginLeft: '',
//   // };

//   return (
//     <>
//       <div className="mt-[150px]  py-[90px] ">
//         <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
//           Work Process
//         </p>
//         <h2
//           className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
//           style={{ textAlign: 'left', fontSize: '50px' }}
//         >
//           Wondering, <br /> how we work?
//         </h2>

//         <div className="w-[90%] wonderWrapper mx-auto flex justify-between items-center gap-5">
//           <div className="left_fourth relative h-[300px]  w-[50%]">
//             <div className="w-[95%] bg-white border-[1px]  transition-all duration-1000 top-0 left-0  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto ">
//               <img
//                 className="w-5 h-5"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: tImg }}
//               className="w-[95%] bg-white border-[1px] transition-all  duration-1000  ml-3 mt-3  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-5 h-4"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: sImg }}
//               className=" w-[95%]  bg-white border-[1px] transition-all duration-1000  mt-6 ml-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-5 h-4"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: fImg }}
//               className="w-[95%]  border-[1px] top-3 transition-all duration-1000 bg-white  ml-9 mt-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-6 h-6"
//                 src="images/Notebook.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div className="absolute -bottom-10 w-full flex justify-center items-center">
//               <div className="w-[220px] mt-9 flex justify-between items-center">
//                 <div className="learro">
//                   <button className="cursor-pointer w-[85px] p-5">
//                     <img src="images/Arrow.png" alt="arrow" />
//                   </button>
//                 </div>
//                 <p className="block">
//                   <span>{currentIndex} /</span> <span> 4</span>
//                 </p>
//                 <div className="learro">
//                   <button
//                     onClick={handleNextClick}
//                     className="cursor-pointor transition-all duration-1000 p-5 w-[85px]"
//                   >
//                     <img
//                       src="images/Arrow2.png"
//                       className=" duration-1000 transition-all"
//                       alt="arrow"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="right_fourth w-[45%]">
//             <h4 id="next" className="text-left font-sans desktop text-[16px]  leading-[20px] font-[400] ">
//               Work Process
//             </h4>
//             <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
//               Wondering, how we work?
//             </h2>

//             <ul className="list-none listing_link mt-[70px] cursor-pointer">
//               <li className="flex items-center  transition-all  duration-1000  pb-5">
//                 <img
//                   style={{ display: fLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={firstLink}
//                   className="text-[16px] leading-[172%] duration-1000 "
//                 >
//                   Send brief
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex  transition-all  duration-1000 items-center pb-5">
//                 <img
//                   style={{ display: sLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={secondLink}
//                   className="text-[16px] leading-[172%] test duration-1000 transition-transform "
//                 >
//                   Stay in touch
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex  transition-all  duration-1000 items-center pb-5">
//                 <img
//                   style={{ display: tLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                   onMouseEnter={thirdLink}
//                   className="text-[16px] leading-[172%] duration-1000 "
//                 >
//                   Approve
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex  transition-all  duration-1000 items-center pb-5">
//                 <img
//                   style={{ display: gLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />
//                 <span
//                   onMouseEnter={fourthLink}
//                   className="text-[16px] leading-[172%] duration-1000 "
//                 >
//                   Get result
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
//             </ul>
//           </div>
//         </div>

//         <hr className="py-[20px] mt-[100px] invisible" />
//       </div>

//       <div className="mt-[100px] desktop w-full">
//         <div className="container mx-auto">
//           <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
//             <p className="text-center font-sans text-[18px]">Our Speciality</p>
//             <h2 className="text-[60px] font-[400] leading-8 mt-8">
//               We make complicated things{' '}
//             </h2>
//             <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SevenSec;
















// import React, { useState } from 'react';
// import '../style/seven.css'


// // import Swiper styles


// const SevenSec = () => {
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

//   const handleNextClick = () => {
//     if (currentIndex < eventsToTrigger.length) {
//       const currentEvent = eventsToTrigger[currentIndex];
//       currentEvent();
//       setCurrentIndex(currentIndex + 1);
//     }
//     return;
//   };

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
//     <div className='seven-main-div'>
//       <div className="mt-[150px]  py-[90px] ">
//         <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
//           Work Process
//         </p>
//         <h2
//           className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
//           style={{ textAlign: 'left', fontSize: '50px' }}
//         >
//           Wondering, <br /> how we work?
//         </h2>

//         <div className="w-[90%] wonderWrapper mx-auto flex justify-between items-center gap-5">

//           <div className="left_fourth relative h-[300px]  w-[50%]">
//             <div className="w-[95%] bg-white border-[1px]  transition-all duration-1000 top-0 left-0  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto ">
//               <img
//                 className="w-5 h-5"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: tImg }}
//               className="w-[95%] bg-white border-[1px] transition-all  duration-1000  ml-3 mt-3  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-5 h-4"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: sImg }}
//               className=" w-[95%]  bg-white border-[1px] transition-all duration-1000  mt-6 ml-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-5 h-4"
//                 src="images/vlogoicon1.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div
//               style={{ marginLeft: fImg }}
//               className="w-[95%]  border-[1px] top-3 transition-all duration-1000 bg-white  ml-9 mt-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
//             >
//               <img
//                 className="w-6 h-6"
//                 src="images/Notebook.png"
//                 alt="breif icon"
//               />
//               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
//               <p className="font-sans">
//                 Send us a complete brief along with documents & requirements to
//                 estimate the project.
//               </p>
//             </div>

//             <div className="absolute -bottom-10 w-full flex justify-center items-center">
//               <div className="w-[220px] mt-9 flex justify-between items-center">
//                 <div className="learro">
//                   <button className="cursor-pointer w-[85px] p-5">
//                     <img src="images/Arrow.png" alt="arrow" />
//                   </button>
//                 </div>
//                 <p className="block">
//                   <span>{currentIndex} /</span> <span> 4</span>
//                 </p>
//                 <div className="learro">
//                   <button
//                     onClick={handleNextClick}
//                     className="cursor-pointor transition-all duration-1000 p-5 w-[85px]"
//                   >
//                     <img
//                       src="images/Arrow2.png"
//                       className=" duration-1000 transition-all"
//                       alt="arrow"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div className="right_fourth w-[45%]">
//             <h4 id="next" className="text-left font-sans desktop text-[16px]  leading-[20px] font-[400] ">
//               Work Process
//             </h4>
//             <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
//               Wondering, how we work?
//             </h2>

//             <ul className="list-none listing_link mt-[70px] cursor-pointer">
//               <li className="flex items-center  pb-5">
//                 <img
//                   // style={{ marginLeft: fLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                  style={{ marginLeft: fLink }}
//                   onMouseEnter={firstLink}
//                   className="text-[16px] leading-[172%]  "
//                 >
//                   Send brief
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex     items-center pb-5">
//                 <img
//                   // style={{ marginLeft : sLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                 style={{ marginLeft : sLink }}
//                   onMouseEnter={secondLink}
//                   className="text-[16px] leading-[172%] test  transition-transform "
//                 >
//                   Stay in touch
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex     items-center pb-5">
//                 <img
//                   // style={{ marginLeft : tLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />{' '}
//                 <span
//                 style={{ marginLeft : tLink }}
//                   onMouseEnter={thirdLink}
//                   className="text-[16px] leading-[172%]   "
//                 >
//                   Approve
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
//               <li className="flex     items-center pb-5">
//                 <img
//                   // style={{ marginLeft : gLink }}
//                   src="images/vlogoicon1.png"
//                   alt="v logo icon"
//                   className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
//                 />
//                 <span
//                  style={{ marginLeft : gLink }}
//                   onMouseEnter={fourthLink}
//                   className="text-[16px] leading-[172%]  "
//                 >
//                   Get resultt
//                 </span>
//               </li>
//               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
//             </ul>
//           </div>
//         </div>

//         <hr className="py-[20px] mt-[100px] invisible" />
//       </div>

//       <div className="mt-[100px] desktop w-full">
//         <div className="container mx-auto">
//           <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
//             <p className="text-center font-sans text-[18px]">Our Speciality</p>
//             <h2 className="text-[60px] font-[400] leading-8 mt-8">
//               We make complicated things{' '}
//             </h2>
//             <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SevenSec;




































// // import React, { useState } from 'react';


// // // import Swiper styles


// // const SevenSec = () => {
// //   const block = 'block';
// //   const dnone = 'none';
// //   const point = '';
// //   const pointOut = '-900px';

// //   const [fLink, setFlink] = useState(block);
// //   const [sLink, setSlink] = useState(dnone);
// //   const [tLink, setTlink] = useState(dnone);
// //   const [gLink, setGlink] = useState(dnone);

// //   const [fImg, setFimg] = useState(point);
// //   const [sImg, setSimg] = useState(point);
// //   const [tImg, setTimg] = useState(point);

// //   const [gImg, setGimg] = useState(point);

// //   const [currentIndex, setCurrentIndex] = useState(1);

// //   const [cardOne, setCardOne] = useState(false);
// //   const [cardTwo, setCardTwo] = useState(false);
// //   const [cardThree, setCardThere] = useState(false);
// //   const [sliderCardFour, setCardFour] = useState(false);

// //   const eventsToTrigger = [
// //     () => firstLink(),
// //     () => secondLink(),
// //     () => thirdLink(),
// //     () => fourthLink(),
// //     // Add more events as needed
// //   ];

// //   // let sliderCardfunOne = (value) => {
// //   //   if (value === 0) {
// //   //     setCardOne(true);
// //   //   } else if (value === 1) {
// //   //     setCardOne(false);
// //   //   }
// //   // };

// //   // let sliderCardfunTwo = (value) => {
// //   //   if (value === 1) {
// //   //     setCardTwo(true);
// //   //   }

// //   //   if (value === 2) {
// //   //     setCardTwo(false);
// //   //   }
// //   // };
// //   // let sliderCardfunThree = (value) => {
// //   //   if (value === 2) {
// //   //     setCardThere(true);
// //   //   } else if (value === 3) {
// //   //     setCardThere(false);
// //   //   }
// //   // };

// //   // let sliderCardfunFour = () => {};

// //   const handleNextClick = () => {
// //     if (currentIndex < eventsToTrigger.length) {
// //       const currentEvent = eventsToTrigger[currentIndex];
// //       currentEvent();
// //       setCurrentIndex(currentIndex + 1);
// //     }
// //     return;
// //   };

// //   const firstLink = () => {
// //     setFlink(block);
// //     setSlink(dnone);
// //     setTlink(dnone);
// //     setGlink(dnone);
// //     setFimg(point);
// //     setSimg(point);
// //     setTimg(point);
// //     setGimg(point);
// //     setCurrentIndex(1);
// //   };
// //   const secondLink = () => {
// //     setFlink(dnone);
// //     setSlink(block);
// //     setTlink(dnone);
// //     setGlink(dnone);

// //     setFimg(pointOut);
// //     setSimg(point);
// //     setTimg(point);
// //     setGimg(point);
// //     setCurrentIndex(2);
// //   };
// //   const thirdLink = () => {
// //     setTlink(block);
// //     setSlink(dnone);
// //     setFlink(dnone);
// //     setGlink(dnone);
// //     setTimg(pointOut);
// //     setSimg(pointOut);
// //     setTimg(point);
// //     setGimg(point);
// //     setCurrentIndex(3);
// //   };

// //   const fourthLink = () => {
// //     setTlink(dnone);
// //     setSlink(dnone);
// //     setFlink(dnone);
// //     setGlink(block);
// //     setTimg(pointOut);
// //     setSimg(pointOut);
// //     setFimg(pointOut);
// //     setGimg(pointOut);
// //     setCurrentIndex(4);
// //   };

// //   // const handlePrevious = () => {
// //   //   if (currentIndex > 0) {
// //   //     setCurrentIndex(currentIndex - 1);
// //   //   }
// //   // };

// //   // const mystyle = {
// //   //   marginLeft: '-900px',
// //   // };
// //   // const mystyleprev = {
// //   //   marginLeft: '',
// //   // };

// //   return (
// //     <>
// //       <div className="mt-[150px]  py-[90px] ">
// //         <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
// //           Work Process
// //         </p>
// //         <h2
// //           className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
// //           style={{ textAlign: 'left', fontSize: '50px' }}
// //         >
// //           Wondering, <br /> how we work?
// //         </h2>

// //         <div className="w-[90%] wonderWrapper mx-auto flex justify-between items-center gap-5">
// //           <div className="left_fourth relative h-[300px]  w-[50%]">
// //             <div className="w-[95%] bg-white border-[1px]  transition-all duration-1000 top-0 left-0  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto ">
// //               <img
// //                 className="w-5 h-5"
// //                 src="images/vlogoicon1.png"
// //                 alt="breif icon"
// //               />
// //               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
// //               <p className="font-sans">
// //                 Send us a complete brief along with documents & requirements to
// //                 estimate the project.
// //               </p>
// //             </div>

// //             <div
// //               style={{ marginLeft: tImg }}
// //               className="w-[95%] bg-white border-[1px] transition-all  duration-1000  ml-3 mt-3  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
// //             >
// //               <img
// //                 className="w-5 h-4"
// //                 src="images/vlogoicon1.png"
// //                 alt="breif icon"
// //               />
// //               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
// //               <p className="font-sans">
// //                 Send us a complete brief along with documents & requirements to
// //                 estimate the project.
// //               </p>
// //             </div>

// //             <div
// //               style={{ marginLeft: sImg }}
// //               className=" w-[95%]  bg-white border-[1px] transition-all duration-1000  mt-6 ml-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
// //             >
// //               <img
// //                 className="w-5 h-4"
// //                 src="images/vlogoicon1.png"
// //                 alt="breif icon"
// //               />
// //               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
// //               <p className="font-sans">
// //                 Send us a complete brief along with documents & requirements to
// //                 estimate the project.
// //               </p>
// //             </div>

// //             <div
// //               style={{ marginLeft: fImg }}
// //               className="w-[95%]  border-[1px] top-3 transition-all duration-1000 bg-white  ml-9 mt-6  p-5 h-[248px] flex justify-center  flex-col rounded-2xl  absolute mx-auto "
// //             >
// //               <img
// //                 className="w-6 h-6"
// //                 src="images/Notebook.png"
// //                 alt="breif icon"
// //               />
// //               <h4 className="font-black mt-3 font-sans mb-4">Send brief</h4>
// //               <p className="font-sans">
// //                 Send us a complete brief along with documents & requirements to
// //                 estimate the project.
// //               </p>
// //             </div>

// //             <div className="absolute -bottom-10 w-full flex justify-center items-center">
// //               <div className="w-[220px] mt-9 flex justify-between items-center">
// //                 <div className="learro">
// //                   <button className="cursor-pointer w-[85px] p-5">
// //                     <img src="images/Arrow.png" alt="arrow" />
// //                   </button>
// //                 </div>
// //                 <p className="block">
// //                   <span>{currentIndex} /</span> <span> 4</span>
// //                 </p>
// //                 <div className="learro">
// //                   <button
// //                     onClick={handleNextClick}
// //                     className="cursor-pointor transition-all duration-1000 p-5 w-[85px]"
// //                   >
// //                     <img
// //                       src="images/Arrow2.png"
// //                       className=" duration-1000 transition-all"
// //                       alt="arrow"
// //                     />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="right_fourth w-[45%]">
// //             <h4 id="next" className="text-left font-sans desktop text-[16px]  leading-[20px] font-[400] ">
// //               Work Process
// //             </h4>
// //             <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
// //               Wondering, how we work?
// //             </h2>

// //             <ul className="list-none listing_link mt-[70px] cursor-pointer">
// //               <li className="flex items-center  transition-all  duration-1000  pb-5">
// //                 <img
// //                   style={{ display: fLink }}
// //                   src="images/vlogoicon1.png"
// //                   alt="v logo icon"
// //                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
// //                 />{' '}
// //                 <span
// //                   onMouseEnter={firstLink}
// //                   className="text-[16px] leading-[172%] duration-1000 "
// //                 >
// //                   Send brief
// //                 </span>
// //               </li>
// //               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
// //               <li className="flex  transition-all  duration-1000 items-center pb-5">
// //                 <img
// //                   style={{ display: sLink }}
// //                   src="images/vlogoicon1.png"
// //                   alt="v logo icon"
// //                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
// //                 />{' '}
// //                 <span
// //                   onMouseEnter={secondLink}
// //                   className="text-[16px] leading-[172%] test duration-1000 transition-transform "
// //                 >
// //                   Stay in touch
// //                 </span>
// //               </li>
// //               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
// //               <li className="flex  transition-all  duration-1000 items-center pb-5">
// //                 <img
// //                   style={{ display: tLink }}
// //                   src="images/vlogoicon1.png"
// //                   alt="v logo icon"
// //                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
// //                 />{' '}
// //                 <span
// //                   onMouseEnter={thirdLink}
// //                   className="text-[16px] leading-[172%] duration-1000 "
// //                 >
// //                   Approve
// //                 </span>
// //               </li>
// //               <hr className="h-[0px] bg-[#131519] border-[#131519] mb-5" />
// //               <li className="flex  transition-all  duration-1000 items-center pb-5">
// //                 <img
// //                   style={{ display: gLink }}
// //                   src="images/vlogoicon1.png"
// //                   alt="v logo icon"
// //                   className="w-[24px] transition-all duration-1000 mr-[10px] font-[400] vlogoicon h-[11.95px]"
// //                 />
// //                 <span
// //                   onMouseEnter={fourthLink}
// //                   className="text-[16px] leading-[172%] duration-1000 "
// //                 >
// //                   Get result
// //                 </span>
// //               </li>
// //               <hr className="h-[0px] bg-[#131519] border-[#131519]" />
// //             </ul>
// //           </div>
// //         </div>

// //         <hr className="py-[20px] mt-[100px] invisible" />
// //       </div>

// //       <div className="mt-[100px] desktop w-full">
// //         <div className="container mx-auto">
// //           <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
// //             <p className="text-center font-sans text-[18px]">Our Speciality</p>
// //             <h2 className="text-[60px] font-[400] leading-8 mt-8">
// //               We make complicated things{' '}
// //             </h2>
// //             <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SevenSec;
