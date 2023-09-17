import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/homeSixSec.css';

const SixSec = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollNext = document.querySelector('#next');
    const scrollPrevious = document.querySelector('#previous');
    const projectCardScrollingHandler = (e) => {
      e.preventDefault();
      const scrolled = Math.ceil(scrollContainer.scrollLeft);
      const scrollablewidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const delta = e.deltaY || e.detail || -e.wheelDelta;
      const scrollAmount = 500;
      if (e.deltaY > 0) {
        if (scrollablewidth == scrolled) {
          scrollNext.scrollIntoView({ behavior: "smooth" });
        }
        else {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }
      else if (e.deltaY < 0) {
        if (scrolled == 0)
          scrollPrevious.scrollIntoView({ behavior: "smooth" });
        else
          scrollContainer.scrollLeft -= scrollAmount;
      }
    }
    scrollContainer.addEventListener('wheel', projectCardScrollingHandler, { passive: false });
    return () => {
      scrollContainer.removeEventListener('wheel', projectCardScrollingHandler);
    };
  }, []);
  return (
    <>
      <div className="mt-[120px] sixSecWrapper">
        <h2 className="mobile">Our Projects</h2>
        <div className="scroll-container">
          <div className="content mx-[2em]">
            {/**products**/}
            <div className="product-card">
              <div className='w-[40em]'>
                <h2 className="text-[56px] font-[400]">
                  DopeCast - Podcast <br /> Platform
                </h2>
                <p className="font-sans">
                  DopeCast is an On-Demand-Podcast service platform concept for
                  focused listening. Our main goal of the platform is to design
                  elegant, modern & focused client-side UI for mobile, desktop,
                  watch & web with the most enhanced user experience possible around
                  the world. It’s made for pure podcast listening without any
                  distractions.
                </p>
                <div className="arothmatic mt-[45px]">
                  <Link
                    to="/"
                    className="font-sans hover:cursor-wait flex items-center relative"
                  >
                    <span className="dig font-sans">DIG DEEPER</span>{' '}
                    <img
                      className="ml-4 h-[8px]"
                      src="images/right_arrow.png"
                      alt="right arrow"
                    />
                  </Link>
                </div>
              </div>
              <img src="images/card.svg" />
              <img src="images/linker.svg" />
            </div>
            <div className="product-card">
              <div className='w-[40em]'>
                <h2 className="text-[56px] font-[400]">
                  DopeCast - Podcast <br /> Platform
                </h2>
                <p className="font-sans">
                  DopeCast is an On-Demand-Podcast service platform concept for
                  focused listening. Our main goal of the platform is to design
                  elegant, modern & focused client-side UI for mobile, desktop,
                  watch & web with the most enhanced user experience possible around
                  the world. It’s made for pure podcast listening without any
                  distractions.
                </p>
                <div className="arothmatic mt-[45px]">
                  <Link
                    to="/"
                    className="font-sans hover:cursor-wait flex items-center relative"
                  >
                    <span className="dig font-sans">DIG DEEPER</span>{' '}
                    <img
                      className="ml-4 h-[8px]"
                      src="images/right_arrow.png"
                      alt="right arrow"
                    />
                  </Link>
                </div>
              </div>
              <img src="images/card.svg" />
              <img src="images/linker.svg" />
            </div>
            <div className="product-card">
              <div className='w-[40em]'>
                <h2 className="text-[56px] font-[400]">
                  DopeCast - Podcast <br /> Platform
                </h2>
                <p className="font-sans">
                  DopeCast is an On-Demand-Podcast service platform concept for
                  focused listening. Our main goal of the platform is to design
                  elegant, modern & focused client-side UI for mobile, desktop,
                  watch & web with the most enhanced user experience possible around
                  the world. It’s made for pure podcast listening without any
                  distractions.
                </p>
                <div className="arothmatic mt-[45px]">
                  <Link
                    to="/"
                    className="font-sans hover:cursor-wait flex items-center relative"
                  >
                    <span className="dig font-sans">DIG DEEPER</span>{' '}
                    <img
                      className="ml-4 h-[8px]"
                      src="images/right_arrow.png"
                      alt="right arrow"
                    />
                  </Link>
                </div>
              </div>
              <img src="images/card.svg" />
              <img src="images/linker.svg" />
            </div>
            <div className="product-card">
              <div className='w-[40em]'>
                <h2 className="text-[56px] font-[400]">
                  DopeCast - Podcast <br /> Platform
                </h2>
                <p className="font-sans">
                  DopeCast is an On-Demand-Podcast service platform concept for
                  focused listening. Our main goal of the platform is to design
                  elegant, modern & focused client-side UI for mobile, desktop,
                  watch & web with the most enhanced user experience possible around
                  the world. It’s made for pure podcast listening without any
                  distractions.
                </p>
                <div className="arothmatic mt-[45px]">
                  <Link
                    to="/"
                    className="font-sans hover:cursor-wait flex items-center relative"
                  >
                    <span className="dig font-sans">DIG DEEPER</span>{' '}
                    <img
                      className="ml-4 h-[8px]"
                      src="images/right_arrow.png"
                      alt="right arrow"
                    />
                  </Link>
                </div>
              </div>
              <img src="images/card.svg" />
              <img src="images/linker.svg" />
            </div>
            <div className='flex items-center'>
              <Link>
                <button className='font-sans w-[10em] px-6 py-3 mx-5 rounded-full border-2
                 border-black/20 hover:border-black/70 hover:bg-black/5'>
                  View all Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixSec;
