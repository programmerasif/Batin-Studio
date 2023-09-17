import Nav from "../components/Nav";
import contactUs from "../components/assets/images/contactus.png";
import frame365 from "../components/assets/images/chuttersnap-IfmqOuOkaOA-unsplash.svg";
import Frame361 from "../components/assets/images/Frame 361.svg";
import arrow from "../components/assets/images/Line 4.svg";

import Logo from "../components/assets/images/Rectangle 2.svg";
import Footer from "../components/Footer";
import Lets from "../components/Lets";

const About = () => {
  return (
    <>
      <Nav></Nav>

      <section className="section">
        <div className="lg:flex">
          <div
            className="flex justify-between
          lg:flex-col
          lg:justify-start
          lg:w-[40%]"
          >
            <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">
              We are Batin Studio
            </div>
            <div className="hidden sm:block">
              <img className="lg:w-[350px]" src={Logo} alt="" />
            </div>
          </div>
          <div
            className="small-device-paragraph sm:md-device-paragraph
          lg:w-[60%]"
          >
            We are a digital product design and development agency. In our team,
            developers work alongside designers, strategists and analysts. We
            don't do cookie-cutter solutions and we build products exactly as
            they were during the design phase, no short cuts or simplifications.
            <br />
            <br />
            We're driven by user-centered design that drives productivity and
            increases revenue. Our expertise and ingenuity are remarkable, yet
            we always strive to outdo and outperform our previous achievements.
          </div>
        </div>
      </section>

      <section className="section lg:flex lg:flex-row-reverse">
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
      </section>

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
    </>
  );
};

export default About;
