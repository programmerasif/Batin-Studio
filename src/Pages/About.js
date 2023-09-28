import Nav from "../components/Nav";
import contactUs from "../components/assets/images/contactus.png";
import frame365 from "../components/assets/images/chuttersnap-IfmqOuOkaOA-unsplash.svg";
import Frame361 from "../components/assets/images/Frame 361.svg";
import arrow from "../components/assets/images/Line 4.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Logo from "../components/assets/images/Rectangle 2.svg";
import Footer from "../components/Footer";
import Lets from "../components/Lets";
import useAbout from "../components/HooksFile/useAbout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/HooksFile/AuthContextProvider";
import Folower from "../components/ViderRoute/Folower";

const About = () => {
  const [aboutData, isLoading, refetch] = useAbout();
  const [successText, setSuccessText] = useState("")
  const { user, adminEmail } = useContext(AuthContext)
  const isAdmin = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  setTimeout(() => {
    setSuccessText("")
  }, 3000);

  const submitData = (e) => {
    e.preventDefault();
    const title = e.target.title.value || aboutData?.title;
    const firstPara = e.target.firstPara.value || aboutData?.firstPara;
    const secondPara = e.target.secondPara.value || aboutData?.secondPara;
    const data = {
      title: title,
      firstPara: firstPara,
      secondPara: secondPara
    }

    fetch(`http://localhost:5001/aboutData/${aboutData?._id}`, {
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
          refetch();
        }
      })
      .then((json) => console.log(json));

  }


  return (
    <div className="mx-4 md:mx-10 lg:mx-14">
      <Folower></Folower>
      <Nav></Nav>
      <section className="section mx-5 lg:mx-10">
        <div className="lg:flex">
          <div
            className="flex justify-between
          lg:flex-col
          lg:justify-start
          lg:w-[40%]"
          >
            <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">
              {aboutData?.title}
            </div>
            <div className="hidden sm:block">
              <img className="lg:w-[350px]" src={Logo} alt="" />

              {
                user?.email === adminEmail &&
                <button onClick={() => document.getElementById('aboutModal').showModal()} className="hidden lg:block update-button">Update Data</button>
              }

              <dialog id="aboutModal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-sky-400">
                  <h2 className="text-center font-mono text-2xl font-semibold italic  ">About</h2>

                  <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-2 text-xl'>
                    {successText && successText}</h2>

                  <form onSubmit={submitData} className=' font-mono ' >
                    <input className='w-full rounded-md mt-2 p-2' name='title' type="text" placeholder='title' />
                    <textarea className='w-full rounded-md mt-3 p-2 h-24' name='firstPara' type="text" placeholder='First Paragraph' />
                    <textarea className='w-full rounded-md mt-2 p-2 h-24' name='secondPara' type="text" placeholder='Second Paragraph' />

                    <input className='w-full mt-2 h-12 mb-10 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
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
          <div
            className="small-device-paragraph sm:md-device-paragraph
          lg:w-[60%]"
          >
            {aboutData?.firstPara}
            <br />
            <br />
            {aboutData?.secondPara}
          </div>
        </div>
      </section>


      <section>
        
      <div className='block lg:hidden w-11/12 mx-auto'>

<div className=' text-center '>
  <h2 className="mt-[36px] text-[50px] lg:text-[70px] leading-[70px] font-[400]">
    We believe in improving life's
  </h2>

  <p className="mt-10 font-sans text-lg leading-8 ">
  We give away 5% of our revenue to charity for helping people, planting trees, building a sustainable future, or most importantly to improve human lives, especially kids.
  </p>
</div>

<div className="mx-auto">
<Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    }}
    pagination={{
    clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide><img className='w-full' src="images/cards/chuttersnap.png" alt="Image description" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="images/cards/american-unsplash.png" alt="Image description" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="images/cards/noah-unsplash.png" alt="Image description" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="images/cards/larm-unsplash.png" alt="Image description" /></SwiperSlide>
</Swiper>
</div>

</div>

<div className="lg:w-[85%] wemakeWrap mx-auto flex justify-between ">					

<ul id="cards">

<li className="card" id="card_1">
  <div className="card__content ">

    <div>
      <h2 className="mt-[36px] text-[70px] leading-[70px] font-[400]">
        We believe in improving life's
      </h2>

      <p className="mt-10 font-sans text-xl leading-8 ">
      We give away 5% of our revenue to charity for helping people, planting trees, building a sustainable future, or most importantly to improve human lives, especially kids.
      </p>
    </div>
    
    <figure>
      <img src="images/cards/chuttersnap.png" alt="Image description" />
    </figure>
  </div>
</li>
<li className="card " id="card_2">
  <div className="card__content">
    <figure>
      <img src="images/cards/american-unsplash.png" alt="Image description" />
    </figure>
  </div>
</li>
<li className="card" id="card_3">
  <div className="card__content">
    <figure>
      <img src="images/cards/noah-unsplash.png" alt="Image description" />
    </figure>
  </div>
</li>
<li className="card" id="card_4">
  <div className="card__content">
    <figure>
      <img src="images/cards/larm-unsplash.png" alt="Image description" />
    </figure>
  </div>
</li>

</ul>
</div>

      </section>

      {/* <section className="section lg:flex lg:flex-row-reverse">
        <div className="lg:w-[50%]">
          <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">
            We believe in improving life's
          </div>

          <div className="small-device-paragraph sm:md-device-paragraph">
            We give away 5% of our revenue to charity for helping people,
            planting trees, building a sustainable future, or most importantly
            to improve human lives, especially kids.
          </div>
        </div>

        <div className="mt-6 lg:w-[50%]">
          <img className="mx-auto lg:mx-0 lg:w-[85%]" src={frame365} alt="" />
        </div>
      </section> */}

      {/* <section>
        <div className="lg:w-[85%] wemakeWrap mx-auto flex justify-between ">

          <ul id="cards">

            <li className="card" id="card_1">
              <div className="card__content ">

                <div>
                  <h2 className="mt-[36px] text-[70px] leading-[70px] font-[400]">
                    We believe in improving life's
                  </h2>

                  <p className="mt-10 font-sans text-xl leading-8 ">
                  We give away 5% of our revenue to charity for helping people, planting trees, building a sustainable future, or most importantly to improve human lives, especially kids.
                  </p>
                </div>

                <figure>
                  <img src="images/cards/chuttersnap.png" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="card " id="card_2">
              <div className="card__content">
                <figure>
                  <img src="images/cards/american-unsplash.png" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="card" id="card_3">
              <div className="card__content">
                <figure>
                  <img src="images/cards/noah-unsplash.png" alt="Image description" />
                </figure>
              </div>
            </li>
            <li className="card" id="card_4">
              <div className="card__content">
                <figure>
                  <img src="images/cards/larm-unsplash.png" alt="Image description" />
                </figure>
              </div>
            </li>

          </ul>
        </div>
      </section> */}

      <section className="section">
        <Lets></Lets>

        {/* Direct SVG :V */}
        {/* <img className="mx-auto" src={Frame361} alt="" /> */}
      </section>

      <Footer></Footer>
      {/** contact us button **/}
      <div className={`flex flex-row justify-content-end align-items-center cursor-pointer contact-us-btn`}>
        <img
          src="images/contactus.png"
          alt="CONTACT us"
          className="contact_png"
        />
        <img src='images/ChatsCircle.png' className='contact-us-chat-icon' />
      </div>
    </div>
  );
};

export default About;





// We are Batin Studio
// We are a digital product design and development agency. In our team, developers work alongside designers, strategists, and analysts. We don't do cookie-cutter solutions and we build products exactly as they were during the design phase, no shortcuts or simplifications.
// We're driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.