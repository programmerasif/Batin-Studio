import React, { useState } from 'react';

const NavFolower = ({linkFolower}) => {
  
  const [mousex, setMousex] = useState();
  const [mousey, setMouseY] = useState();
  const rect = document.body.getBoundingClientRect();
  window.addEventListener('mousemove', setMousePosition);
  function setMousePosition(e) {
    setMousex((e.clientX - rect.left) - 65);
    setMouseY((e.clientY - rect.top - 90));
  }

  return (
    <div   onMouseMove={setMousePosition} >
            <div
            style={{
              position: "absolute",
              width: "80px",
              height: "80px",
              backgroundColor : "black",
              mixBlendMode: "multiply",
              backgroundSize: "cover",
              pointerEvents: "none",
              zIndex: -1,
              display: `${linkFolower}`,
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

export default NavFolower;



