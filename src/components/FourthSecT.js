import React, { useContext, useState } from 'react';
import '../style/FourthSec.css';
import useHomePageFourthSect from './HooksFile/useHomePageFourthSect';
import { AuthContext } from './HooksFile/AuthContextProvider';

const FourthSecT = () => {
  const [homePageFourthSectionData, Hforthrefetch] = useHomePageFourthSect();
  const { user, adminEmail } = useContext(AuthContext);
  const [successText, setSuccessText] = useState("");
  
  setTimeout(() => {
    setSuccessText("")
  }, 3000);
  
  const block = '0px';
  const dnone = '-35px';
  const point = '';
  const pointOut = '-1200px';

  const [fLink, setFlink] = useState(block);
  const [sLink, setSlink] = useState(dnone);
  const [tLink, setTlink] = useState(dnone);
  const [gLink, setGlink] = useState(dnone);

  const [fImg, setFimg] = useState(point);
  const [sImg, setSimg] = useState(point);
  const [tImg, setTimg] = useState(point);
  const [gImg, setGimg] = useState(point);
  const [currentIndex, setCurrentIndex] = useState(1);


  const eventsToTrigger = [
    () => firstLink(),
    () => secondLink(),
    () => thirdLink(),
    () => fourthLink(),
    // Add more events as needed
  ];
  const firstLink = () => {
    setFlink(block);
    setSlink(dnone);
    setTlink(dnone);
    setGlink(dnone);
    setFimg(point);
    setSimg(point);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(1);
  };
  const secondLink = () => {
    setFlink(dnone);
    setSlink(block);
    setTlink(dnone);
    setGlink(dnone);

    setFimg(pointOut);
    setSimg(point);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(2);
  };
  const thirdLink = () => {
    setTlink(block);
    setSlink(dnone);
    setFlink(dnone);
    setGlink(dnone);
    setTimg(pointOut);
    setSimg(pointOut);
    setTimg(point);
    setGimg(point);
    setCurrentIndex(3);
  };
  const fourthLink = () => {
    setTlink(dnone);
    setSlink(dnone);
    setFlink(dnone);
    setGlink(block);
    setTimg(pointOut);
    setSimg(pointOut);
    setFimg(pointOut);
    setGimg(pointOut);
    setCurrentIndex(4);
  };

  // const image = [
  //   {
  //     title : "We make your brand stand out.",
  //     fristImage : "https://i.ibb.co/1zK3tVb/mobile-dev2.jpg",
  //     secondImage : "https://i.ibb.co/vxmk8zJ/branding2.jpg",
  //     thirdImage : "https://i.ibb.co/tXW4qpt/web-dev.jpg",
  //     fristLi : "Brand Identity Design",
  //     secondLi : "Web & Mobile Design",
  //     thirdLi : "Web & Mobile Development",
  //   }
  // ]

  const forthSectionFun = (e) => {
    e.preventDefault();
    const title = e.target.title.value || homePageFourthSectionData?.title;
    const fristImage = e.target.fristImage.value || homePageFourthSectionData?.fristImage;
    const secondImage = e.target.secondImage.value || homePageFourthSectionData?.secondImage;
    const thirdImage = e.target.thirdImage.value || homePageFourthSectionData?.thirdImage;
    const fristLi = e.target.fristLi.value || homePageFourthSectionData?.fristLi;
    const secondLi = e.target.secondLi.value || homePageFourthSectionData?.secondLi;
    const thirdLi = e.target.thirdLi.value || homePageFourthSectionData?.thirdLi;
    const data = {
      title: title,
      fristImage: fristImage,
      secondImage: secondImage,
      thirdImage: thirdImage,
      fristLi: fristLi,
      secondLi: secondLi,
      thirdLi: thirdLi,
    }
    fetch(`http://localhost:5001/homePageFourthSectionData/${homePageFourthSectionData?._id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          setSuccessText("Updated Your Data")
          e.target.reset();
          Hforthrefetch();
        }
      })
      .then((json) => console.log(json));
  }

  return (

    <div className='forth-main-div '>
      <div className="mt-[150px]  py-[90px] ">
        <p className="text-left font-sans mobile pl-5 text-[20px]  leading-[20px] font-[400] ">
        Our Services
        </p>
        <h2
          className="mt-[26px] mobile text-left  leading-[50px] pl-5 font-[400]"
          style={{ textAlign: 'left', fontSize: '50px' }}
        >
         {homePageFourthSectionData?.title}
        </h2>
        {/* <div className="w-[90%] wonderWrapper mx-auto flex md:flex-row justify-between items-center gap-5"> */}
        <div className="w-[90%] FourthSecT-animation-div  mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-5">

          <div className="left_fourth relative h-[300px] md:mt-20 lg:-mt-28 w-[50%] ">
            <div 
            className="w-[95%]  transition-all duration-1000 -top-1 left-2.5 md:-mt-20 lg:top-20 md:left-4 lg:left-0  -rotate-6 flex justify-center  absolute mx-auto ">
            {/* <div className=""> */}
              <img
                className=""
                src= {homePageFourthSectionData?.fristImage}
                alt="breif icon"
              />
            </div>

            <div
              className="w-[95%]  transition-all  duration-1000 mt-28  ml-0 md:mt-0   flex justify-center   rounded-2xl  absolute mx-auto "
              style={{ marginLeft: tImg }}
            >
              <img
                className=""
                src={homePageFourthSectionData?.secondImage}
                alt="breif icon"
              />
            </div>

            <div
              className=" w-[95%]   transition-all duration-1000 mt-36 md:mt-8 lg:mt-0 ml-0 -rotate-6   flex justify-center   rounded-2xl  absolute mx-auto "
              style={{ marginLeft: sImg }}
            >
              <img
                className=""
                src={homePageFourthSectionData?.thirdImage}
                alt="breif icon"
              />
              
            </div>
          </div>


          <div className="right_fourth w-[45%]">
            <h4 id="next" className="text-left font-sans desktop text-[20px]  leading-[20px] font-[400] ">
            Our Services

            </h4>
            <h2 className="mt-[26px] text-[70px] desktop  leading-[70px]  font-[400]">
            {homePageFourthSectionData?.title}
            </h2>

            <ul className="list-none listing_link mt-[70px] cursor-pointer">

              <li onMouseEnter={secondLink} className="flex items-center">
                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]  mr-[10px] font-[400] vlogoicon h-[11.95px] "
                />{' '}
                <span
                style={{ marginLeft : sLink }}
                  
                  className="text-[16px] leading-[172%] py-4 font-[Inter]"
                >
                 {homePageFourthSectionData?.fristLi}
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={thirdLink} className="flex items-center">
                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />{' '}
                <span             
                style={{ marginLeft : tLink }}                    
                  className="text-[16px] leading-[172%] py-4 font-[Inter]  "
                >
                  {homePageFourthSectionData?.secondLi}
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
              <li  onMouseEnter={fourthLink} className="flex     items-center">

                <img
                  src="images/vlogoicon.png"
                  alt="v logo icon"
                  className="w-[24px]   mr-[10px] font-[400] vlogoicon h-[11.95px]"
                />
                <span
                 style={{ marginLeft : gLink }}
                 
                  className="text-[16px] leading-[172%] py-4 font-[Inter] "
                >
                  {homePageFourthSectionData?.thirdLi}
                </span>
              </li>
              <hr className="h-[0px] bg-[#131519] border-[#131519]" />
            </ul>

            { user?.email === adminEmail && <button onClick={() => document.getElementById('home_forth_section').showModal()} className=" bg-gray-200 update-button">Update</button> }

          <dialog id="home_forth_section" className="modal">
                <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
                  <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
                  <form onSubmit={forthSectionFun} className=' font-mono text-sm text-black' >
                    <input className='w-full rounded-md mt-2 p-2' name='title' type="text" placeholder='Title' />
                    <input className='w-full rounded-md mt-2 p-2' name='fristImage' type="text" placeholder='Frist Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='secondImage' type="text" placeholder='Second Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='thirdImage' type="text" placeholder='Third Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='fristLi' type="text" placeholder='Frist Li ' />
                    <input className='w-full rounded-md mt-2 p-2' name='secondLi' type="text" placeholder='Second Li ' />
                    <input className='w-full rounded-md mt-2 p-2' name='thirdLi' type="text" placeholder='Third Li ' />
                    
                    <input className='w-full mt-2 h-12 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
                  </form>

                  <div className="modal-action absolute bottom-2 right-2 ">
                    <form method="dialog">
                      <button className="btn">X</button>
                    </form>
                  </div>
                </div>
              </dialog>

          </div>



        </div>

        <hr className="py-[20px] mt-[100px] invisible" />
      </div>


      {/* <div className="mt-[100px] desktop w-full">
        <div className="container mx-auto">
          <div className="w-[95%] bg-[#FFFFFF] mx-auto border-[1px] h-[346px] rounded-2xl flex justify-center items-center flex-col  p-8">
            <p className="text-center font-sans text-[18px]">Our Speciality</p>
            <h2 className="text-[60px] font-[400] leading-8 mt-8">
              We make complicated things{' '}
            </h2>
            <h2 className="text-[60px] font-[400] mt-0">easy to use.</h2>
          </div>
        </div>
      </div> */}

    </div>  

  );
};
export default FourthSecT;


