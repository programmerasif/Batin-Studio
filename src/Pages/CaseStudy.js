import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Arrow from "../components/assets/images/Arrow.png";
import Lets from "../components/Lets";
import firstImage from "../components/assets/images/case-study/image1.svg";
import secondImage from "../components/assets/images/case-study/image2.svg";
import thirdImage from "../components/assets/images/case-study/image3.svg";
import fourthImage from "../components/assets/images/case-study/image4.svg";
import fifthImage from "../components/assets/images/case-study/image5.svg";
import sixthImage from "../components/assets/images/case-study/image6.svg";
import seventhImage from "../components/assets/images/case-study/image7.svg";
import eightImage from "../components/assets/images/case-study/image8.svg";
import ninethImage from "../components/assets/images/case-study/image9.svg";

const CaseStudy = () => {
  return (
    <>
      <Nav></Nav>

      <section className="section">
        <section>
          <div className="md:flex">
            <div className="md:w-1/2 pr-4">
              <div className="font-sans text-gray-500">Case Study</div>
              <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">
                Spicyy - ecommerce food store
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
            </div>

            <div className="mt-10 md:w-1/2 md:mt-0">
              <div className="font-sans text-gray-500">About the project</div>
              <div className="small-device-paragraph sm:md-device-paragraph">
                Spicyy is a Local restaurant and also have food delivery
                services. They can make delicious food and deliver it directly
                to their customers with a phone call. Now, it’s time to step up.
                They need a webapp that can enhance the user experience beyond
                phone calls.
                <div className="mt-10">
                  <button className="my-btn flex gap-2">
                    Website
                    <img
                      className="rotate-180 scale-x-150 my-auto ml-2"
                      src={Arrow}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <img className="w-full" src={firstImage} alt="" />
          </div>

          <div className="md:flex md:justify-between ">
            <div className="md:w-[40%]">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading mt-10">
                Product Challenges
              </h1>
            </div>

            <div className="md:w-[60%] md:mt-10">
              <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  It’s hard to give the feel and taste of food through a website
                  that lives in a digital device.
                </li>
                <li>
                  Apart from cooking the food, from order to deliver to enjoy
                  the food is a difficult experience to design. Everything have
                  to go perfect and quick.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div>
            <img className="w-full" src={secondImage} alt="" />
          </div>
        </section>

        <section className="mt-24 md:flex md:flex-row-reverse">
          <div className="md:w-[60%] md:mt-16">
            <div className="">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
                Our Solutions
              </h1>
            </div>
            <div className="">
              <ul className="small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  Make the website and food vibrant and colorful so that
                  customers can visually feel it.
                </li>
                <li>
                  Make it easier to order a product with little to no effort and
                  design the delivery system for efficiency.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-[40%] md:pr-8">
            <img className="mx-auto mt-10" src={thirdImage} alt="" />
          </div>
        </section>

        <section className="mt-24 md:flex md:gap-6">
          <img className="mx-auto md:ml-auto md:w-[536px]" src={fourthImage} alt="" />
          <img className="mx-auto md:mr-auto md:w-[536px] md:mt-10" src={fifthImage} alt="" />
        </section>

        <section className="mt-24">
          <img className="w-full rounded-2xl" src={sixthImage} alt="" />
        </section>

        <section className="mt-24 md:flex">
          <div className="md:w-[40%] md:pr-10">
            <h1 className="my-title text-left mt-10 font-thin">
              What customers wants?
            </h1>
          </div>
          <div className="md:w-[60%] mt-10">
            <p className="font-sans">
              People want good quality and healthy foods at affordable cost that
              can deliver to them quickly, when they need or want.
            </p>
          </div>
        </section>

        <section className="mt-24 md:flex md:gap-6">
          <img className="mx-auto md:ml-auto md:w-[536px]" src={seventhImage} alt="" />
          <img className="mx-auto md:mr-auto md:w-[536px] mt-10 md:mt-20" src={eightImage} alt="" />
        </section>

        <section className="mt-24">
          <h1 className="my-title text-left">
            When you will build your Spicyy brand?
          </h1>
        </section>

        <section className="mt-24">
          <img className="w-full" src={ninethImage} alt="" />
        </section>
      </section>

      <Lets></Lets>

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
    </>
  );
};

export default CaseStudy;
