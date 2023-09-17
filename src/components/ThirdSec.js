import React from 'react';
import { Link } from 'react-router-dom';

const ThirdSec = () => {
  return (
    <>
      <div className="w-[85%] stilwonder -mt-[130px] mx-auto flex justify-between ">
        <div className="s_left w-[50%]">
          <h2 className="text-[68px] leading-[60px] font-[400]">
            still wondering <br />
            who are we?
          </h2>
        </div>
        <div className="s_right w-[50%]">
          <p className="leading-[46px] font-sans font-[400] text-[28px]">
            We are a digital product design and development agency. In our team,
            developers work alongside designers, strategists and analysts. We
            don't do cookie-cutter solutions and we build products exactly as
            they were during the design phase, no short cuts or simplifications.
            <div className="my-6"></div>
            We're driven by user-centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </p>

          <div className="arothmatic mt-[35px]">
            <Link
              to="/"
              className="font-sans hover:cursor-wait flex items-center relative"
            >
              <span className="dig font-sans">DIG DEEPER</span>{' '}
              <img
                className="ml-4 h-[8px]"
                src="images/right_arrow.png"
                alt="right arrow"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
    </>
  );
};

export default ThirdSec;
