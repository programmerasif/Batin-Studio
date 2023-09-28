import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/homeSixSec.css';
import useSixSec from './HooksFile/useSixSec';
import useSixSecAllProjectData from './HooksFile/useSixSecAllProjectData';

const SixSec = () => {

  // const [SixSecScrollData, isLoading, refetch] = useSixSec();
  const [sixSecAllProjectData, isLoading, refetch] = useSixSecAllProjectData();
  
  return (
    <>
      <div className="mt-[120px] sixSecWrapper">
        <h2 className="mobile">Our Projects</h2>


        <div className='block lg:hidden'>

            {sixSecAllProjectData?.map((product, index) => (

                  <div key={product._id} className=" sixSecproduct-card flex flex-col-reverse px-5 mb-2 ">

                    <div className="">
                      <h2 className="text-[36px] font-[300]">{product.displayTitle}</h2>
                      <p className="font-sans">{product.displayDiscreption}</p>

                      <div className='flex justify-between items-center'>
                        
                      <div className="arothmatic  ">
                        <Link
                          to={`/CaseStudy/${product._id}`}
                          className="font-sans hover:cursor-wait flex items-center relative"
                        >
                          <span className="dig font-sans">DIG DEEPER</span>{" "}
                          <img
                            className="ml-4 h-[8px]"
                            src="images/right_arrow.png"
                            alt="right arrow"
                          />
                        </Link>
                      </div>
                      </div>
                    </div>
                    <div>
                    <img className=' mx-auto mb-6' src="images/linker.svg" alt={`Linker Image ${index}`} />
                    <img className='rounded-3xl' src={product.displayImage} alt={`Product Image ${index}`} />
                    </div>
                  </div>
                ))}

            </div>
      </div>
    </>
  );
};

export default SixSec;
