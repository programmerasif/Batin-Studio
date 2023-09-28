import React, { useEffect, useState } from 'react';

const TestingVdo = ({borderRadius, visible}) => {
    const [isPlay, setIsPlay] = useState(false)
    const [mousex, setMousex] = useState();
    const [mousey, setMouseY] = useState();
    const rect = document.body.getBoundingClientRect();
    window.addEventListener('mousemove', setMousePosition);
    const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const y = window.innerWidth;
      setDisplayValue(y);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function setMousePosition(e) {
    setMousex(e.clientX - rect.left);
    if(displayValue < 769){
        setMouseY((e.clientY - rect.top) - 310);
    }
    else{
        setMouseY((e.clientY - rect.top) -630 );
    }
  }
 

    return (
        <div>
            <div  className='h-screen   relative'>
               <div className="diveo-div w-full h-full  ">
               <div                
               >
                    {isPlay ? 
                        <div
                        style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(./soundplay.png)',
                        backgroundSize: 'cover',
                        cursor: 'pointer',
                        zIndex: 99999,
                        position: 'absolute',
                        display: 'block',
                        }}
                    >
                 <iframe 
                 className={`vid ${borderRadius === '100%' ? 'rounded-[0]' : 'rounded-[36px]'}`}
                src="https://www.youtube.com/embed/3J_EhJ4SkHE" width="100%" height="100%" title="A YouTube video" frameborder="0" allowfullscreen></iframe> 
                {/* <iframe
                className={`vid ${borderRadius === '100%' ? 'rounded-[0]' : 'rounded-[36px]'}`}
                src="https://www.youtube.com/embed/3J_EhJ4SkHE?autoplay=1&mute=1" width="100%" height="100%" title="A YouTube video" frameborder="0" allowfullscreen></iframe> */}

              </div>
      : 
      <video
          autoPlay
          className={`vid ${borderRadius === '100%' ? 'rounded-[0]' : 'rounded-[36px]'}`}
          title="batin studio"
          webkit-playsinline={true}
          playsinline={true}
          loop
          muted={true}
          style={{
            width: '100%',
            height: '650px',
            objectFit: 'cover',
            display: 'block', 
          }}
        >
          <source src="video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>      
      }
       </div>
               </div>
                  <button onClick={()=>setIsPlay(true)} className='h-screen absolute  z-40 w-full top-0 left-0'>  </button>
               </div>
                <div
                    className='bg-red-500 z-50'
                    style={{
                        position: "absolute",
                        width: "200px",
                        height: "200px",
                        backgroundImage: `url('images/soundplay.svg')`,
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
                    ></div>
        </div>
    );
};

export default TestingVdo;