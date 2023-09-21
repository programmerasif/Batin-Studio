import Nav from './Nav';
import React, { useState, useEffect } from 'react';
import VideoPlayer from './video';
import SliderText from './SlideText';
import ThirdSec from './ThirdSec';
import FourthSec from './FourthSec';
import Project from './FifthSec';
import SixSec from './SixSec';
import SevenSec from './Seven';
import EightSec from './EightSec';
import NineSec from './NineSec';

import Lets from '../components/Lets.js';
import CustomCursor from './CustomCursor';
import FourthSecT from './FourthSecT';



const Home = () => {
  const [customCursor, setCustomCursor] = useState('none');
  const [vidContainer, setVidContainer] = useState('80%');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const vheight = window.innerHeight;
      const thershold = vheight * 0.6;
      if (currentPosition > thershold) {
        setVidContainer('100%');
      } else {
        setVidContainer('80%');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor imagePath={'images/soundplay.svg'} visible={customCursor} />
      <div className="heroImg">
        <Nav />
        <div className="h-full heroimg1 flex justify-center items-center flex-col mt-[-100px]">
          <h3 className="text-[48px]  homeTitle1 font-[400] mb-0">
            Design or Development
          </h3>
          <h1 className=" homeTitle text-[96px] leading-[96px] font-[400] mt-0">
            We Always Go Unique.
          </h1>
        </div>
      </div>

      <div
        onMouseEnter={() => {
          setCustomCursor('block')
        }}
        onMouseLeave={() => {
          setCustomCursor('none')
        }}
        className="vidContainer relative mx-auto lg:mb-10 lg:-mt-16"
        style={{
          width: window.innerWidth <= 768 ? 'auto' : vidContainer,
          height: window.innerWidth <= 768 ? '240px' : null,
        }}
        // style={{
        //   width: vidContainer,
        //   // height: '540px',
        // }}
      >

        <VideoPlayer borderRadius={vidContainer} style={{ cursor: 'url(images/soundplay.png) auto' }} />
        
      </div>

      <div className="vidContainer1 relative mx-auto mb-10 -mt-16">
        <div className='flex justify-content-center items-center'>
          <img
            src="images/contactus.png"
            alt="CONTACT us"
            className="contact_png"
          />
          <img src='images/ChatsCircle.png' />
        </div>

        <VideoPlayer style={{ cursor: 'url(images/soundplay.png), auto' }} />
        
      </div>
      <SliderText />
      <ThirdSec />
      {/* <FourthSec /> */}
      <FourthSecT></FourthSecT>
      <span id='previous'></span>
      <Project />
      <SixSec/>
      <SevenSec />
      <EightSec />
      <Lets></Lets>
      <NineSec />
      {/* * contact us button * */}
      <div className={`flex flex-row justify-content-end align-items-center cursor-pointer contact-us-btn`}>
        <img
          src="images/contactus.png"
          alt="CONTACT us"
          className="contact_png"
        />
        <img src='images/ChatsCircle.png' className='contact-us-chat-icon' />
      </div>
    </>
  );
};

export default Home;















// import Nav from './Nav';
// import React, { useState, useEffect } from 'react';
// import VideoPlayer from './video';
// import SliderText from './SlideText';
// import ThirdSec from './ThirdSec';
// import FourthSec from './FourthSec';
// import Project from './FifthSec';
// import SixSec from './SixSec';
// import SevenSec from './Seven';
// import EightSec from './EightSec';
// import NineSec from './NineSec';

// import Lets from '../components/Lets.js';
// import CustomCursor from './CustomCursor';
// import FourthSecT from './FourthSecT';



// const Home = () => {
//   const [customCursor, setCustomCursor] = useState('none');
//   const [vidContainer, setVidContainer] = useState('80%');

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.scrollY;
//       const vheight = window.innerHeight;
//       const thershold = vheight * 0.6;
//       if (currentPosition > thershold) {
//         setVidContainer('100%');
//       } else {
//         setVidContainer('80%');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <CustomCursor imagePath={'images/soundplay.svg'} visible={customCursor} />
//       <div className="heroImg">
//         <Nav />
//         <div className="h-full heroimg1 flex justify-center items-center flex-col mt-[-100px]">
//           <h3 className="text-[48px]  homeTitle1 font-[400] mb-0">
//             Design or Development
//           </h3>
//           <h1 className=" homeTitle text-[96px] leading-[96px] font-[400] mt-0">
//             We Always Go Unique.
//           </h1>
//         </div>
//       </div>

//       <div
//         onMouseEnter={() => {
//           setCustomCursor('block')
//         }}
//         onMouseLeave={() => {
//           setCustomCursor('none')
//         }}
//         className="vidContainer relative mx-auto mb-10 -mt-16"
//         style={{
//           width: vidContainer,
//           height: '540px',
//         }}
//       >

//         <VideoPlayer borderRadius={vidContainer} style={{ cursor: 'url(images/soundplay.png) auto' }} />

//       </div>

//       <div className="vidContainer1 relative mx-auto mb-10 -mt-16">
//         <div className='flex justify-content-center items-center'>
//           <img
//             src="images/contactus.png"
//             alt="CONTACT us"
//             className="contact_png"
//           />
//           <img src='images/ChatsCircle.png' />
//         </div>

//         <VideoPlayer style={{ cursor: 'url(images/soundplay.png), auto' }} />
        
//       </div>
//       <SliderText />
//       <ThirdSec />
//       {/* <FourthSec /> */}
//       <FourthSecT></FourthSecT>
//       <span id='previous'></span>
//       <Project />
//       <SixSec/>
//       <SevenSec />
//       <EightSec />
//       <Lets></Lets>
//       <NineSec />
//       {/* * contact us button * */}
//       <div className={`flex flex-row justify-content-end align-items-center cursor-pointer contact-us-btn`}>
//         <img
//           src="images/contactus.png"
//           alt="CONTACT us"
//           className="contact_png"
//         />
//         <img src='images/ChatsCircle.png' className='contact-us-chat-icon' />
//       </div>
//     </>
//   );
// };

// export default Home;
