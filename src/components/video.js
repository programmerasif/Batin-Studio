import React, { useState, useEffect, useRef } from 'react';

const VideoPlayer = ({ borderRadius }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cursorStyle = {
    cursor: isHovered ? 'url(images/soundplay.png), auto' : 'default',
  };

  return (
    <div className="custom-cursor" style={{ width: '100%' }}>
      {isPlaying ? (
        <video
          autoPlay
          className={`vid ${borderRadius === '100%' ? 'rounded-[0]' : 'rounded-[36px]'}`}
          title="batin studio"
          webkit-playsinline={true}
          playsinline={true}
          ref={videoRef}
          loop
          muted={true}
          style={{
            width: '100%',
            height: '650px',
            objectFit: 'cover',
            display: 'block', 
          }}
          onClick={handleVideoClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <source src="video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundImage: 'url(./soundplay.png)',
            backgroundSize: 'cover',
            cursor: 'pointer',
            zIndex: '10',
            position: 'absolute',
            top: '50%',
            left: '6%',
            display: 'block',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {' '}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;



















// import React, { useState, useEffect, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import { Player } from 'video-react';

// const VideoPlayer = ({borderRadius}) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const videoRef = useRef(null);
//   const handleVideoClick = () => {
//     setIsPlaying(true);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const cursorStyle = {
//     cursor: isHovered ? 'url(images/soundplay.png), auto' : 'default',
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <div
//         className="custom-cursor"
//         style={{ width: '100%'}}
//       >
//         {isPlaying ? (

//           <video
//             autoPlay
//             className={`vid ${borderRadius=='100%'?"rounded-[0]":"rounded-[36px]"} cursor-none`}
//             title="batin studio"
//             webkit-playsinline={true}
//             playsinline={true}
//             ref={videoRef}
//             loop
//             muted={true}
//             style={{
//               width: '100%',
//               height: '650px',
//               objectFit: 'cover',
//             }}
//             onClick={handleVideoClick}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {/* <source src="video2/video2.mp4" type="video2/mp4" /> */}
//             <source src="video/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <div
//             style={{
//               width: '300px',
//               height: '300px',
//               backgroundImage: 'url(./soundplay.png)',
//               backgroundSize: 'cover',
//               cursor: 'pointer',
//               zIndex: '10',
//               position: 'absolute',
//               top: '50%',
//               left: '6%',
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {' '}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VideoPlayer;









// import React, { useState, useEffect, useRef } from 'react';
// import ReactPlayer from 'react-player';
// import { Player } from 'video-react';

// const VideoPlayer = ({borderRadius}) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const videoRef = useRef(null);
//   const handleVideoClick = () => {
//     setIsPlaying(true);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const cursorStyle = {
//     cursor: isHovered ? 'url(images/soundplay.png), auto' : 'default',
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <div
//         className="custom-cursor"
//         style={{ width: '100%'}}
//       >
//         {isPlaying ? (
//           //    <ReactPlayer
//           //    ref={videoRef}
//           //    url="video/video.mp4"
//           //    playing={true}
//           //    autoplay={true}
//           //    controls

//           //    width="100%"
//           //    height="100%"
//           //  />

//           <video
//             autoPlay
//             className={`vid ${borderRadius=='100%'?"rounded-[0]":"rounded-[36px]"} cursor-none`}
//             title="batin studio"
//             webkit-playsinline={true}
//             playsinline={true}
//             ref={videoRef}
//             loop
//             muted={true}
//             style={{
//               width: '100%',
//               height: '650px',
//               objectFit: 'cover',
//             }}
//             onClick={handleVideoClick}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <source src="video/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <div
//             style={{
//               width: '300px',
//               height: '300px',
//               backgroundImage: 'url(./soundplay.png)',
//               backgroundSize: 'cover',
//               cursor: 'pointer',
//               zIndex: '10',
//               position: 'absolute',
//               top: '50%',
//               left: '6%',
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {' '}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default VideoPlayer;
