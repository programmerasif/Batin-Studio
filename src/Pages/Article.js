import React from "react";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import Picture from "../components/assets/images/shakhawat.svg";
import Clap from "../components/assets/images/clap.svg";
import Twitter from "../components/assets/images/twitter.svg";
import Facebook from "../components/assets/images/facebook.svg";
import Likedin from "../components/assets/images/linked.svg";
import Copy from "../components/assets/images/copy.svg";
import Banner from "../components/assets/images/banner.svg";
import Banner2 from "../components/assets/images/banner2.svg";
import Dot from "../components/assets/images/dot.svg";
import Lets from "../components/Lets";

const Article = () => {
  return (
    <div>
      <Nav></Nav>

      <section className="md:w-[700px] lg:w-[700px] mx-auto">
        <section className="section">
          <div>
            <p className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
              Why every professionals needs a website?
            </p>
          </div>
        </section>

        <section className="flex justify-between font-sans p-4">
          <div className="flex gap-2">
            <div>
              <img src={Picture} alt="" />
            </div>
            <div>
              <p>Shakhawat</p>
              <p className="text-gray-600">Founder</p>
            </div>
          </div>

          <div>
            <p>18 May, 2023</p>
            <p className="text-gray-600">6 min read</p>
          </div>
        </section>

        <section className="flex justify-between font-sans mt-10 p-4 border border-gray-300 rounded-full">
          <div className="flex gap-2">
            <div>
              <img src={Clap} alt="" />
            </div>
            <div>
              <p>320 Claps</p>
            </div>
          </div>

          <div className="flex">
            <p className="my-auto">Share :</p>
            <div className="flex">
              <a href="/twitter">
                <img src={Twitter} alt="" />
              </a>
              <a href="/twitter">
                <img src={Facebook} alt="" />
              </a>
              <a href="/twitter">
                <img src={Likedin} alt="" />
              </a>
              <a href="/twitter">
                <img src={Copy} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="">
            <img className="w-full" src={Banner} alt="" />
          </div>
        </section>

        <section className="font-sans text-lg mt-10 p-2">
          <div>
            <p className="small-device-paragraph text-left">
              In today's digital age, it is more important than ever for
              professionals to have a website. It can help you to increase your
              online presence, generate leads, build trust and credibility,
              increase sales, provide customer service, and reach a global
              audience. A website can help you to:
            </p>
            <p className="my-h-title">1. Increase your online presence</p>
            <p className="small-device-paragraph text-left">
              A
            website is your online home, and it is the first place that
            potential clients and customers will go to learn more about you and
            your business. A well-designed website can help you to stand out
            from the competition and make a positive first impression.
            </p>
            <p className="my-h-title">2. Generate leads</p>
            <p className="small-device-paragraph text-left">
              A well-designed
            website can be a powerful lead generation tool. By providing clear
            and concise information about your services, you can encourage
            visitors to contact you to learn more. You can also use your website
            to collect email addresses and other contact information from
            potential clients.
            </p>
            <p className="my-h-title">3. Build trust and credibility</p>
            <p className="small-device-paragraph text-left">
              A
            professional website can help to build trust and credibility with
            potential clients and customers. By providing accurate and
            up-to-date information about your business, you can show that you
            are a legitimate and reputable company.
            </p>
            <p className="my-h-title">4. Increase sales</p>
            <p className="small-device-paragraph text-left">
              A website can help
            you to increase sales by making it easy for potential clients and
            customers to purchase your products or services. By providing clear
            and concise information about your products or services, and by
            making it easy to place an order, you can increase the likelihood of
            a sale.
            </p>
            <p className="my-h-title">5. Provide customer service</p>
            <p className="small-device-paragraph text-left">
              A website
            can be a great way to provide customer service to your clients and
            customers. You can use your website to answer frequently asked
            questions, provide support documentation, and track customer
            feedback.
            </p>
            <p className="my-h-title">6. Reach a global audience</p>
            <p className="small-device-paragraph text-left">
              A website
            can help you to reach a global audience. By making your website
            available in multiple languages, you can reach people all over the
            world. If you are a professional who does not have a website, I
            encourage you to create one today. A website is an essential tool
            for any business in the digital age. It can help you to increase
            your online presence, generate leads, build trust and credibility,
            increase sales, provide customer service, and reach a global
            audience.
            </p>
          </div>
        </section>

        <section className="my-14">
          <div className="">
            <img className="mx-auto" src={Dot} alt="" />
          </div>
        </section>

        <section className="mt-10">
          <div className="">
            <img className="w-full" src={Banner2} alt="" />
          </div>
        </section>

        <section className="font-sans text-lg mt-10 p-2">
          <div>
            <p>
              But the question is how you can have one? Here are some additional
              tips for creating a professional website:
            </p>
            <p className="my-h-title">1. Choose a professional domain name</p>
            Your domain name is the address of your website on the internet. It
            is important to choose a domain name that is easy to remember and
            relevant to your business.
            <p className="my-h-title">
              2. Use a professional web hosting provider
            </p>
            A web hosting provider is a company that stores your website's files
            and makes them accessible to visitors. It is important to choose a
            web hosting provider that offers reliable and secure hosting
            services.
            <p className="my-h-title">3. Design a user-friendly website</p>
            Your website should be easy to navigate and use. Visitors should be
            able to find the information they need quickly and easily.
            <p className="my-h-title">4. Use high-quality content</p>
            Your website's content should be informative, engaging, and relevant
            to your target audience.
            <p className="my-h-title">5. Promote your website</p>
            Once you have created a website, it is important to promote it so
            that people can find it. You can promote your website through online
            and offline channels, such as social media, search engine
            optimization (SEO), and email marketing.
            <br />
            <br />
            By following these tips, you can create a professional website that
            will help you to achieve your business goals.
          </div>
        </section>

        <section className="flex justify-between font-sans mt-10 p-4 border border-gray-300 rounded-full">
          <div className="flex gap-2">
            <div>
              <img src={Clap} alt="" />
            </div>
            <div>
              <p>320 Claps</p>
            </div>
          </div>

          <div className="flex">
            <p className="my-auto">Share :</p>
            <div className="flex">
              <a href="/twitter">
                <img src={Twitter} alt="" />
              </a>
              <a href="/twitter">
                <img src={Facebook} alt="" />
              </a>
              <a href="/twitter">
                <img src={Likedin} alt="" />
              </a>
              <a href="/twitter">
                <img src={Copy} alt="" />
              </a>
            </div>
          </div>
        </section>

        <Lets></Lets>
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

export default Article;
