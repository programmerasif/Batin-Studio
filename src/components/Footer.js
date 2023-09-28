import BatinLogo from '../components/assets/images/logo.svg';
import Insta from '../components/assets/images/insta.png';
import GitHub from '../components/assets/images/github.png';
import LinkedIn from '../components/assets/images/linkedin.png';

const Footer = () => {
  return (
    <div>
      <section className="mt-28 bottom-0">
        <div className="bg-black rounded-t-3xl">
          <div className="lg:flex lg:justify-between">
            <div className="sm:flex sm:justify-between sm:mx-10 lg:gap-16 lg:my-auto">
              <img
                className="mx-auto pt-10 sm:p-0 sm:mx-0"
                src={BatinLogo}
                alt=""
              />

              <div className="text-white text-center py-6">
                <a className="px-4 sm:px-2 sm:my-auto font-sans" href="/home">
                  Home
                </a>
                <a
                  className="px-4 sm:px-2 sm:my-auto font-sans"
                  href="/portfolio"
                >
                  Portfolio
                </a>
                <a className="px-4 sm:px-2 sm:my-auto font-sans" href="/about">
                  About
                </a>
                <a className="px-4 sm:px-2 sm:my-auto font-sans" href="/news">
                  News
                </a>
                <a
                  className="px-4 sm:px-2 sm:my-auto font-sans"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex justify-center sm:justify-evenly lg:mr-10 text-[#FFFFFF] shadow-inner shadow-[#13151966]">
              <a className="font-sans flex gap-2 px-2" href="/">
                <span className="hidden sm:block lg:my-auto">Instagram</span>
                <img className="my-auto" src={Insta} alt="" />
              </a>
              <a className="font-sans flex gap-2 px-2" href="/">
                <span className="hidden sm:block lg:my-auto">Github</span>
                <img className="my-auto" src={GitHub} alt="" />
              </a>
              <a className="font-sans flex gap-2 px-2" href="/">
                <span className="hidden sm:block lg:my-auto">LinkedIn</span>
                <img className="my-auto" src={LinkedIn} alt="" />
              </a>
            </div>
          </div>

          <p className="text-gray-400 py-6 text-center font-[Inter] text-[12px]">
            © Batin Studio 2023 | All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
