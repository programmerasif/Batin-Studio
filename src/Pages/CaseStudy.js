import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Arrow from "../components/assets/images/Arrow.png";
import Lets from "../components/Lets";
import "../style/CaseStudy.css"
import { AuthContext } from "../components/HooksFile/AuthContextProvider";
import Folower from "../components/ViderRoute/Folower";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";



const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, adminEmail } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const location = useLocation();
  const id = location.pathname.split("/")[2]
  console.log(id)

     const { data: SixSecScrollData, isLoading, refetch } = useQuery({
            queryKey: ['sixSecAllProjectSingleData', id],
            enabled : !!id,
            queryFn: async () => {
                const res = await fetch(`http://localhost:5001/sixSecAllProjectSingleData/${id}`);
                const data = await res.json();
                setData(data);
            },
        });


  const fourthSectionSubFun = (e) =>{
    e.preventDefault();


  }

  return (
    <div className="mx-5 lg:mx-10">
    <Folower></Folower>
      <Nav></Nav>

      {
        isLoading ? <div className="h-screen flex justify-center items-center "> <h2 className=" text-center text-3xl -mt-10">Loading...</h2> </div>  : 

        <section className="section">
        <section>
          <div className="md:flex">
            <div className="md:w-1/2 pr-4">
              <div className="font-sans text-gray-500">Case Study</div>
              <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">

                {data?.displayTitle}

              </div>

              <div
                className="
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans"
              >
                <button className="my-btn">UI/UX design</button>
                <button className="my-btn">Website from scratch</button>
                <button className="my-btn">Branding</button>
                <button className="my-btn">Website redesign</button>
                <button className="my-btn">App from scratch</button>
                <button className="my-btn">App redesign</button>
                <button className="my-btn">Not sure yet</button>
                <button className="my-btn">Let’s talk first</button>
                <button className="my-btn">Maintenance</button>
              </div>


              {
                user?.email === adminEmail &&
                <button onClick={() => document.getElementById('updateProject').showModal()}  className= " update-button" >Update</button>
              }
              <dialog id="updateProject" className="modal">
                <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
                 
                  <form onSubmit={fourthSectionSubFun} className=' font-mono text-sm' >
                    <input className='w-full rounded-md mt-2 p-2' name='title' type="text" placeholder='Title' />
                    <input className='w-full rounded-md mt-2 p-2' name='image' type="text" placeholder='photo Url' />
                    <textarea className='w-full rounded-md mt-3 p-2 h-24' name='firstParagraph' type="text" placeholder='First Paragraph' />
                    <textarea className='w-full rounded-md mt-3 p-2 h-24' name='secondParagraph' type="text" placeholder='Second Paragraph' />
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

            <div className="mt-10 md:w-1/2 md:mt-0">
              <div className="font-sans text-gray-500"> About the project </div>
              <div className="small-device-paragraph sm:md-device-paragraph">

                {data?.displayDiscreption}

                <div className="mt-10 flex justify-between items-center">
                  <a href={data?.siteLink} target="_blank" className="my-btnn">
                    <span className=" ">Website</span>

                    <img
                      className="rotate-180 scale-x-150 my-auto ml-2"
                      src={Arrow}
                      alt=""
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <img className="w-full rounded-3xl" src={data?.displayImage} alt="" />
          </div>

          <div className="md:flex md:justify-between ">
            <div className="md:w-[40%]">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading mt-10">
                {data?.SecondSecTitle}
              </h1>
            </div>

            <div className="md:w-[60%] md:mt-10">
              <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  {data?.secondSecFirstLi}
                </li>
                <li>
                  {data?.secondSecSecondLi}
                </li>
              </ul>
            </div>
          </div>

        </section>

        <section className="mt-24">
          <div className="">
            <img className="w-full rounded-3xl" src={data?.secondSecImage} alt="" />
          </div>


        </section>

        <section className="mt-24 md:flex md:flex-row-reverse">
          <div className="md:w-[60%] md:mt-16">
            <div className=" flex justify-between items-center">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
                {data?.thirdSecTitle}
              </h1>

            </div>
            <div className="">
              <ul className="small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  {data?.thirdSecFirstLi}
                </li>
                <li>
                  {data?.thirdSecSecondLi}
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-[40%] md:pr-8">
            <img className="mx-auto mt-10 rounded-3xl" src={data?.thirdSecImage} alt="" />
          </div>
        </section>

        <section className="mt-72  md:gap-6">

          <div className="media-section flex flex-col md:flex-row justify-between lg:px-10">

            <div className="left-side w-full md:w-6/12 md:px-3 lg:px-10 -mt-36">

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.forthSecFirstImage} alt="" />
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.forthSecSecondImage} alt="" />
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.forthSecThirdImage} alt="" />
                  </div>

            </div>

            <div className="right-side w-full md:w-6/12 md:px-3 lg:px-10">
                 <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.forthSecForthImage} alt="" />
                  </div>

                <div className=" mb-10 ">

                    <iframe className="h-[500px] w-full rounded-3xl mb-10" src={`${data?.forthSecVideoUrl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay  ></iframe>                 
                           
                </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.forthSecFifthImage} alt="" />
                  </div>

            </div>



          </div>


        </section>
        
        <section className="mt-24">
          <img className="w-full rounded-3xl" src={data?.fifthSecImage} alt="" />
        </section>

        <section className="mt-24 md:flex">
          <div className="md:w-[40%] md:pr-10">
            <h1 className="my-title text-left mt-10 font-thin">
             {data?.FifthSecTitle}
            </h1>
          </div>
          <div className="md:w-[60%] mt-10">
            <p className="font-sans">
            {data?.fifthSecDescription}
            </p>
          </div>

        </section>

        <section className="mt-72  md:gap-6">
          <div className="media-section flex flex-col md:flex-row justify-between lg:px-10">

            <div className="left-side  w-full md:w-6/12 md:px-3 lg:px-10 -mt-36">

                  <div className=" mb-10 ">
                    <iframe className="h-[500px] w-full rounded-3xl mb-10" src={data?.sixSecVideoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>                
                 
                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.sixSecFirstImage} alt="" />
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.sixSecSecondImage} alt="" />
                  </div>

            </div>

            <div className="right-side w-full md:w-6/12 md:px-3 lg:px-10">

                <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.sixSecThirdImage} alt="" />
                  </div>
                  
                <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.sixSecForthImage} alt="" />
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={data?.sixSecFifthImage} alt="" />
                  </div>

            </div>

          </div>


        </section>

        <section className="mt-24">
          <h1 className="my-title text-left">
            {data?.sevenSectionTitle}
          </h1>
        </section>
        
        <section className="mt-24">
          <img className="w-full rounded-3xl" src={data?.sevenSectionImage} alt="" />
        </section>



      </section>

      }
      

      <Lets></Lets>

      <Footer></Footer>
      {/** contact us button **/}

      <div className={`flex flex-row justify-content-end align-items-center cursor-pointer contact-us-btn `}>
        <img
          src="https://i.ibb.co/S0sQyrS/contactus.png"
          // src="images/contactus.png"
          alt="CONTACT us"
          className="contact_png"
        />
        <img src='https://i.ibb.co/TvnHdRH/white-Chats-Circle.png' className='contact-us-chat-icon ' />
        {/* <img src='images/whiteChatsCircle.png' className='contact-us-chat-icon ' /> */}
      </div>

      {/* https://i.ibb.co/S0sQyrS/contactus.png
https://i.ibb.co/TvnHdRH/white-Chats-Circle.png */}

    </div>
    
  );
};

export default CaseStudy;

