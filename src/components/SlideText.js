import React from 'react';
import { images } from './images';
function SliderText() {
  return (
    <div className=" flex textSlider items-center min-h-screen justify-center md:-mt-5 lg:-mt-16 ">
      {/* 1. */}
      <div className="w-[200%] h-[170px]   overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
          {/* 3 */}
          {images.map((i) => {
            return (
              <div className="flex justify-center items-center w-[200rem]">
                <h2 className="leading-[90px] text-[90px] font-[400]">
                  {i.te1}
                </h2>

                <img src={i.img} className="mx-[50px]" alt={i.img} />

                <h2 className="leading-[90px]  ml-[30px] text-[90px] font-[400]">
                  {i.te2}
                </h2>

                <img src={i.img} className="mx-[50px] w-[]" alt={i.img} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className="flex justify-center items-center w-[40rem]">
                <h2 className="leading-[90px] text-[90px] font-[400]">
                  {i.te1}
                </h2>

                <img src={i.img} className="mx-[50px] w-[]" alt={i.img} />

                <h2 className="leading-[90px] ml-[30px]  text-[90px] font-[400]">
                  {i.te2}
                </h2>

                <img src={i.img} className="mx-[50px] w-[]" alt={i.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SliderText;
