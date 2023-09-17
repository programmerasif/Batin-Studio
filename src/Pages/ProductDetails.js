import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Arrow from "../components/assets/images/Arrow.png";
import Lets from "../components/Lets";
import firstImage from "../components/assets/images/Thumbnail 1.svg";
import secondImage from "../components/assets/images/image 8.svg";
import thirdImage from "../components/assets/images/Rectangle 67.svg";
import fourthImage from "../components/assets/images/case-study/image4.svg";
import fifthImage from "../components/assets/images/case-study/image5.svg";
import sixthImage from "../components/assets/images/case-study/image6.svg";
import seventhImage from "../components/assets/images/case-study/image7.svg";
import eightImage from "../components/assets/images/case-study/image8.svg";
import ninethImage from "../components/assets/images/case-study/image9.svg";
import arrowBand from "../components/assets/images/ArrowBendDoubleUpRight.svg"

const ProductDetails = () => {
    return (
        <>
            <Nav></Nav>

            <section className="section">
                <section>
                    <div className="md:flex">
                        <div className="md:w-1/2 pr-4">
                            <div className="font-sans text-gray-500">Case Study</div>
                            <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">
                                DopeCast - Podcast platform
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
                                DopeCast is an On-Demand-Podcast service platform concept for focused
                                listening. Our main goal of the platform is to design elegant, modern &
                                focused client-side Ul for mobile, desktop, watch & web with the most
                                enhanced user experience possible around the world. It's made for pure
                                podcast listening without any distractions.
                                <div className="mt-10">
                                    <p className="flex">
                                        Check out full case study on Behance
                                        <img
                                            className="my-auto ml-2"
                                            src={arrowBand}
                                            alt=""
                                        />
                                    </p>
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
                                Problem Statement
                            </h1>
                        </div>

                        <div className="md:w-[60%] md:mt-10">
                            <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left">
                                <li>
                                    The podcast industry is growing with a lot of engagement without a lot of applications that can offer an enjoyable experience for users.
                                </li>
                                <br />
                                <li>
                                    Most podcasts platforms are minimal variable products tasked with just playing podcasts without any added benefits/features.
                                </li>
                                <br />

                                <li>
                                    No or irrelevant features on most global podcast platforms which leads to low conversion rate when users engage the platform for the first time.
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
                    <div className="md:w-[60%] md:mt-16 md:pl-14">
                        <div className="">
                            <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
                                Our <br />Solutions
                            </h1>
                        </div>
                        <div className="">
                            <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left md:pl-8">
                                <li>
                                    Design, Development & Business dedicated to podcast.   
                                </li>
                                <br />
                                <li>
                                    Designing thoughtful experiences for the users.
                                </li>
                                <br />

                                <li>
                                    Better pricing plans for users.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-[40%] md:pr-8">
                        <img className="mx-auto mt-10" src={thirdImage} alt="" />
                    </div>
                </section>

                <section className="text-center pt-40">
                    <button className="my-btn border-gray-400 text-black font-sans">Check out full case study on Behance</button>
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

export default ProductDetails;
