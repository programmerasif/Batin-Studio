// CursoreStyle.js
import React, { useEffect, useState } from 'react';

const CursoreStyle = ({ imagePath, visible,setIsPlay, isPlay }) => {
  const [mousex, setMousex] = useState();
  const [mousey, setMouseY] = useState();
  const rect = document.body.getBoundingClientRect();
  window.addEventListener('mousemove', setMousePosition);
  function setMousePosition(e) {
    setMousex(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  }

  return (
    <div
      className='bg-red-500 z-50'
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        backgroundImage: `url('${imagePath}')`,
        mixBlendMode: "multiply",
        backgroundSize: "cover",
        pointerEvents: "none",
        zIndex: 9999,
        display: `${visible}`,
        transform: "translate(-50%, -50%)",
        left: `${mousex}px`,
        top: `${mousey}px`,
      }}
      onMouseMove={setMousePosition}
      class="custom-cursor"
      onClick={()=>setIsPlay(true)}
    ></div>
  );
};

export default CursoreStyle;











// import React, { useState } from 'react';

// const CursoreStyle = ({imagePath, visible, setIsPlaying, isPlay}) => {
//     const [mousex, setMousex] = useState();
//     const [mousey, setMouseY] = useState();
//     const rect = document.body.getBoundingClientRect();
//     window.addEventListener('mousemove', setMousePosition);
//     function setMousePosition(e) {
//         setMousex(e.clientX - rect.left);
//         setMouseY(e.clientY - rect.top);
//     }

//     return (
//         <div
//         className='bg-white'
//             style={{
//                 position: "absolute",
//                 width: "200px",
//                 height: "200px",
//                 backgroundImage: `url('${imagePath}')`,
//                 mixBlendMode: "multiply",
//                 backgroundSize: "cover",
//                 pointerEvents: "none",
//                 zIndex: 9999,
//                 display:`${visible}`,
//                 transform: "translate(-50%, -50%)",
//                 left:`${mousex}px`,
//                 top:`${mousey}px`,
//             }}
//             onMouseMove={setMousePosition} class="custom-cursor"  ></div>
//     );
// };

// export default CursoreStyle;