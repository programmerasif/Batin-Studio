import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navArrow from '../components/assets/images/nav/navarrow.svg';

const Nav = () => {
  const [navi, setNavi] = useState('none');

  const [isArrow, setIsArrow] = useState(false);

  const [showMenu, setShowMenu] = useState(false);



  const navFunc = () => {
    alert('clicked');
    setNavi('block');
  };
  return (
    <>
      <div className="navMain my-font flex justify-between max-w-[90%] relative z-50 h-[72px] rounded-full backdrop-blur-[34px] px-[25px] bg-transparent mx-auto mt-5">
        <Link to="/">
          <div className="nav_left_content  flex items-center justify-start h-full ">
            <img src="images/logoIcon.png" alt="logo" />
            <span className="ml-[7px] text-black font-bold text-xl">
              Batin Studio
            </span>
          </div>
        </Link>
        <div className="nav_right_content flex">
          <ul className={showMenu ? 'flex justify-end gap-10 w-[600px] h-full items-center opacity-0 duration-300' : 'flex justify-end gap-10 w-[600px] h-full items-center opacity-100 duration-300'}>
            <li className="desktop hover:border-b hover:border-black duration-300">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="desktop hover:border-b hover:border-black duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="desktop hover:border-b hover:border-black duration-300">
              <Link to="/">News</Link>
            </li>
            <li className="desktop hover:border-b hover:border-black duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
          <div onMouseEnter={() => setIsArrow(!isArrow)}
            onMouseLeave={() => setIsArrow(!isArrow)}
            onClick={() => setShowMenu(!showMenu)}
            className="ml-10 my-auto w-[100px] menuBtn border-[2px] rounded-full py-2 px-4 hover:bg-black hover:text-white duration-300">
            <button className=" flex justify-between items-center ">
              Menu
              {
                isArrow ?
                  <i class="uil uil-arrow-down text-xl"></i>
                  :
                  <i className="fa-solid mt-1 ml-2 fa-1x fa-bars my-auto"></i>
              }

            </button>
          </div>
        </div>

        {/* ======== Drop Down ====== */}



      </div>

      {
        showMenu ?
          <div className="navMain my-font flex justify-between w-[90%] absolute  backdrop-blur-[34px] px-[25px] bg-[#e9e9e963] mx-auto mt-5 top-0 left-[5%] h-[620px] rounded-3xl duration-300">
            <div className='flex mx-auto gap-40 pt-28 opacity-100 duration-300'>
              <ul className='flex flex-col gap-4 list-none'>
                <li className='nav-md-font'>
                  <Link>Get in touch</Link>
                </li>
                <li className='nav-sm-font pt-[32px]'>
                  <Link>Behance</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>LinkedIn</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>Instagram</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>Twitter</Link>
                </li>
                <li className='pt-[32px]'>
                  <Link>hello@batinstudio.com</Link>
                </li>
             
              </ul>
              <ul className='flex flex-col gap-[16px] list-none'>
                <li>
                  <Link className='nav-md-font'>Menu</Link>
                  </li>
                <li className='nav-lg-font pt-[16px]'>
                  <div className='h-[100px] w-[100px] bg-black rounded-full relative'>
                    <Link to="/portfolio" className='absolute top-[15px] relative'><span className='text-white duration-700'>Portf</span>olio
                      <img className='absolute top-[90%] w-full' src={navArrow} alt="" />
                    </Link>
                    

                  </div>
                  
                  
                </li>
                <li className='nav-lg-font'>
                  <Link to="/about">About</Link>
                </li>
                <li className='nav-lg-font'>
                  <Link to="/news">News</Link>
                </li>
                <li className='nav-lg-font'>
                  <Link to="/contact">Contact</Link>
                </li>

              </ul>
            </div>
          </div>

          :
          <div className="navMain my-font flex justify-between w-[90%] absolute  backdrop-blur-[34px] px-[25px] bg-[#e9e9e963] mx-auto mt-5 top-0 left-[5%] h-[72px] rounded-3xl duration-300">

            <div className='flex mx-auto gap-40 pt-28 opacity-0 duration-300'>
              <ul className='flex flex-col gap-4 list-none'>
                <li className='nav-md-font'>
                  <Link>Get in touch</Link>
                </li>
                <li className='nav-sm-font pt-[32px]'>
                  <Link>Behance</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>LinkedIn</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>Instagram</Link>
                </li>
                <li className='nav-sm-font'>
                  <Link>Twitter</Link>
                </li>
                <li className='pt-[32px]'>
                  <Link>hello@batinstudio.com</Link>
                </li>

              </ul>
              <ul className='flex flex-col gap-[16px] list-none'>
                <li>
                  <Link className='nav-md-font'>Menu</Link>
                </li>
                <li className='nav-lg-font pt-[16px]'>
                  <div className='h-[100px] w-[100px] bg-black rounded-full relative'>
                    <Link to="/portfolio" className='absolute top-[15px] relative'><span className='text-white duration-700'>Portf</span>olio
                      <img className='absolute top-[90%] w-full' src={navArrow} alt="" />
                    </Link>


                  </div>


                </li>
                <li className='nav-lg-font'>
                  <Link to="/about">About</Link>
                </li>
                <li className='nav-lg-font'>
                  <Link to="/news">News</Link>
                </li>
                <li className='nav-lg-font'>
                  <Link to="/contact">Contact</Link>
                </li>

              </ul>
            </div>
            
          </div>

      }




    </>
  );
};

export default Nav;
