import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import '../style/NineSec.css';

const NineSec = () => {
  return (
    <div className="nineSec-main-div">

      <footer className="mt-40 w-[90%] pb-5 h-[147px] mx-auto flex justify-between flex-col px-6 rounded-tl-[40px] rounded-tr-[40px] bg-black">
        <div className=" w-[90%] h-[147px] footer mx-auto flex justify-between px-6 rounded-tl-[40px] rounded-tr-[40px] bg-black">
          <div className="w-[150px] fwid flex pt-10 justify-start">
            <div className=" border-r-[1px] border-rr flex justify-start items-center pr-5 h-[20px] border-gray-300">
              <img
                className="w-[15px] h-[28px] mr-3"
                src="images/footericon.png"
                alt="footericon"
              />
              <span className="text-white">Batin Studio</span>
            </div>
          </div>

          <div className="w-[400px] fwid linksk flex justify-start pt-10">
            <a href="/" className="text-white mx-2  font-sans ">
              Home
            </a>
            <a href="/" className="text-white mx-2  font-sans ">
              About
            </a>
            <a href="/" className="text-white mx-2  font-sans ">
              News
            </a>
            <a href="/" className="text-white mx-2  font-sans ">
              Contact
            </a>
          </div>


          <div className="social-service-div w-[400px] fwid flex justify-end pt-10">


          <span className="">
              <a
                target="_blank"
                href="https://www.instagram.com/batin_studio/"
                className=""
              >
                <img
                  src="images/insta.png"
                  className="w-4 h-4 mr-2"
                  alt="insta"
                />
                Instagram <PiArrowBendDoubleUpRightBold className="ms-[8px]"></PiArrowBendDoubleUpRightBold>
              </a>
            </span>

           <span>
           <a
              target="_blank"
              href="https://github.com/Batin-Studio"
              className=""
            >
              <img
                src="images/github.png"
                className="w-4 h-4 mr-2"
                alt="insta"
              />
              Github <PiArrowBendDoubleUpRightBold className="ms-[8px]"></PiArrowBendDoubleUpRightBold>
            </a>
           </span>

           <span>
           <a
              target="_blank"
              href="https://www.linkedin.com/company/batinstudio" // Corrected href attribute
              className=""
            >
              <img
                src="images/linkedin.png"
                className="w-4 h-4 mr-2"
                alt="LinkedIn"
              />
              LinkedIn <PiArrowBendDoubleUpRightBold className="ms-[8px]"></PiArrowBendDoubleUpRightBold>
            </a>

           </span>


            {/* <span className="bg-red-500 w-4/12 overflow-hidden ">
              <a
                target="_blank"
                href="https://www.instagram.com/batin_studio/"
                className="text-slate-300 font-sans flex  w-10/12 mx-10 hover:mx-6 duration-200 h-5 items-center justify-start "
              >
                <img
                  src="images/insta.png"
                  className="w-4 h-4 mr-2"
                  alt="insta"
                />
                Instagram <PiArrowBendDoubleUpRightBold className="ms-[6px]"></PiArrowBendDoubleUpRightBold>
              </a>
            </span>

           <span>
           <a
              target="_blank"
              href="https://github.com/Batin-Studio"
              className="text-slate-300 font-sans flex bg-green-400  mx-2 h-5 items-center justify-start "
            >
              <img
                src="images/github.png"
                className="w-4 h-4 mr-2"
                alt="insta"
              />
              Github <PiArrowBendDoubleUpRightBold className="ms-1"></PiArrowBendDoubleUpRightBold>
            </a>
           </span>

           <span>
           <a
              target="_blank"
              href="https://www.linkedin.com/company/batinstudio" // Corrected href attribute
              className="text-slate-300 font-sans flex bg-green-400  mx-2 h-5 items-center justify-start"
            >
              <img
                src="images/linkedin.png"
                className="w-4 h-4 mr-2"
                alt="LinkedIn"
              />
              LinkedIn <PiArrowBendDoubleUpRightBold className="ms-1"></PiArrowBendDoubleUpRightBold>
            </a>

           </span> */}

          </div>


        </div>
        <p className="mt-10 text-gray-400 text-xs text-[Inter]  text-center">
          © Batin Studio 2023 | All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NineSec;
