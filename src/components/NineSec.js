const NineSec = () => {
  return (
    <>

      <footer className="mt-40 w-[90%] pb-5 h-[147px] mx-auto flex justify-between flex-col px-6 rounded-tl-[40px] rounded-tr-[40px] bg-black">
        <div className=" w-[90%] h-[147px] footer mx-auto flex justify-between px-6 rounded-tl-[40px] rounded-tr-[40px] bg-black">
          <div className="w-[150px] fwid flex pt-10 justify-start">
            <div className=" border-r-[1px] border-rr flex justify-start items-center pr-5 h-[20px] border-gray-300">
              <img
                className="w-[15px] h-[20px] mr-3"
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
          <div className="w-[400px] fwid flex justify-end pt-10">
            <a
              href="/"
              className="text-slate-300 font-sans flex  mx-2 h-5 items-center justify-start "
            >
              <img
                src="images/insta.png"
                className="w-4 h-4 mr-2"
                alt="insta"
              />
              Instagram
            </a>
            <a
              href="/"
              className="text-slate-300 font-sans flex  mx-2 h-5 items-center justify-start "
            >
              <img
                src="images/github.png"
                className="w-4 h-4 mr-2"
                alt="insta"
              />
              Github
            </a>
            <a
              href="/"
              className="text-slate-300 font-sans flex  mx-2 h-5 items-center justify-start "
            >
              <img
                src="images/linkedin.png"
                className="w-4 h-4 mr-2"
                alt="insta"
              />
              Linkedin
            </a>
          </div>
        </div>
        <p className="mt-10 text-gray-400 text-xs   text-center">
          © Batin Studio 2023 | All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default NineSec;
