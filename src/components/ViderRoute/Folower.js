import React, { useState } from 'react';

const Folower = ({folowerVisible}) => {
  
  const [mousex, setMousex] = useState();
  const [mousey, setMouseY] = useState();
  const rect = document.body.getBoundingClientRect();
  window.addEventListener('mousemove', setMousePosition);
  function setMousePosition(e) {
    setMousex(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  }

  return (
    <div   onMouseMove={setMousePosition} >
            <div
            style={{
              position: "absolute",
              width: "11px",
              height: "11px",
              backgroundColor : "black",
              mixBlendMode: "multiply",
              backgroundSize: "cover",
              pointerEvents: "none",
              zIndex: 2,
              display: `${folowerVisible}`,
              transform: "translate(-50%, -50%)",
              left: `${mousex}px`,
              top: `${mousey}px`,
              borderRadius : "50%"
            }}

            class="custom-cursor"
          >
          </div>
    </div>
  );
};

export default Folower;









// import React, { useState } from 'react';
// import CursoreStyle from './CursoreStyle';

// const VideoRoute = () => {
//   const [visabled, setVesibled] = useState("none");
//   const videoRef = React.createRef();
//   const [isPlay, setIsPlay] = useState(false);
//   console.log(isPlay)

//   const toggleVideoPlay = () => {
//     const video = videoRef.current;

//     if (video.paused) {
//       video.play();
//       video.controls = true; // Show the video controller
//       setIsPlay(true);
//     } else {
//       video.pause();
//       video.controls = false; // Hide the video controller
//       setIsPlay(false);
//     }
//   };

//   return (
//     <>
//             <CursoreStyle
//             imagePath={'images/soundplay.svg'}
//             visible={visabled}
//             onClick={() => {
//             toggleVideoPlay();
            
//         }}
//         ></CursoreStyle>

//       <div className='h-screen w-full bg-gray-400  flex justify-center items-center'>
//         <div
//           onMouseEnter={() => setVesibled("block")}
//           onMouseLeave={() => setVesibled("none")}
//           className='h-[80vh] w-full bg-green-300'
//         >
//           <iframe
//             className='w-full h-full iframe'
//             src="https://www.youtube.com/embed/3J_EhJ4SkHE?si=3b59wrhq4xN8kMuq"
//             frameBorder="0"
//             ref={videoRef}
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoRoute;









// import React, { useState } from 'react';
// import CursoreStyle from './CursoreStyle';

// const VideoRoute = () => {

//     const [visabled, setVesibled] = useState("none");
//     const [isPlay, setIsPlaying] = useState(false);

//     console.log(isPlay)



//     return (
//         <>
//             <CursoreStyle imagePath={'images/soundplay.svg'} visible={visabled} onClick={()=>setIsPlaying(!isPlay)} ></CursoreStyle>
//                 <div className='h-screen w-full bg-gray-400  flex justify-center items-center'>

//                 <div 
//                 onMouseEnter={()=>setVesibled("block")}
//                 onMouseLeave={()=> setVesibled("none")}
//                  className='h-[80vh] w-full bg-green-300'>

//                     <iframe className='w-full h-full' src="https://www.youtube.com/embed/3J_EhJ4SkHE?si=3b59wrhq4xN8kMuq" frameborder="0"></iframe>


//                 </div>
                    
//                 </div>
//         </>
//     );


// };

// export default VideoRoute;