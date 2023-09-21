import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/homeSixSec.css';
import useSixSec from './HooksFile/useSixSec';
import SixSecModal from './SixSecModal';
import { AuthContext } from './HooksFile/AuthContextProvider';

const SixSec = () => {

  const [SixSecScrollData, isLoading, refetch] = useSixSec();
  const [updateData, setUpdateData] = useState({})  
  const {user, adminEmail} = useContext(AuthContext)

  // useEffect(()=>{
  //   refetch();
  // },[SixSecScrollData, refetch])


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
 
  const isAdmin = true;

  const updateFunction = (id) =>{
    fetch(`http://localhost:5000/SixSecScrollData/${id}`)
    .then(res => res.json())
    .then(data => 
      setUpdateData(data)
      )
  }

  return (
    <>
      <div className="mt-[120px] sixSecWrapper">
        <h2 className="mobile">Our Projects</h2>

        <div className="scroll-container hidden lg:block ">
          <div className="content mx-[2em]  ">
            
                {SixSecScrollData?.map((product, index) => (
                  <div key={product._id} className="product-card">
                    <div className="w-[40em]">
                      <h2 className="text-[56px] font-[400]">{product.title}</h2>
                      <p className="font-sans">{product.description}</p>

                      <div className='flex justify-between items-center mt-10'>
                      <div className="arothmatic  ">
                        <Link
                          to={"/"}
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

                      {
                        user?.email === adminEmail && <button onClick={()=> updateFunction(product._id)} onMouseUp={() => document.getElementById('SixSecModal').showModal()}  className='pudate-button'> update </button>
                      }
                      </div>

                    </div>
                    <img className='h-screen rounded-3xl' src={product.image} alt={`Product Image ${index}`} />
                    <img src="images/linker.svg" alt={`Linker Image ${index}`} />
                  </div>
                ))}

          <div>             
            


      <div className="flex items-center">
        <Link to="/">
          <button className="font-sans w-[10em] px-6 py-3 mx-5 rounded-full border-2 border-black/20 hover:border-black/70 hover:bg-black/5">
            View all Project
          </button>
        </Link>
      </div>


    </div>

    {
      updateData && <SixSecModal updateData={updateData} refetch={refetch} ></SixSecModal>
    }



          </div>
        </div>



        <div className='block lg:hidden'>

            {SixSecScrollData?.map((product, index) => (

                  <div key={product._id} className=" sixSecproduct-card flex flex-col-reverse px-5 mb-2 ">

                    <div className="">
                      <h2 className="text-[36px] font-[300]">{product.title}</h2>
                      <p className="font-sans">{product.description}</p>

                      <div className='flex justify-between items-center'>
                        
                      <div className="arothmatic  ">
                        <Link
                          to={"/"}
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

                      {/* {
                        isAdmin && <button onClick={()=> updateFunction(product._id)} onMouseUp={() => document.getElementById('SixSecModal').showModal()}  className='border-2 py-1 px-2 hidden lg:block rounded-lg hover:bg-slate-900 hover:text-white duration-700'> update Product </button>
                      } */}

                      </div>

                    </div>


                    <div>
                    <img className=' mx-auto mb-6' src="images/linker.svg" alt={`Linker Image ${index}`} />
                    <img className='rounded-3xl' src={product.image} alt={`Product Image ${index}`} />
                    </div>

                  </div>


                ))}

            </div>
      </div>
    </>
  );
};

export default SixSec;








            // {/* <div className="product-card">
            //   <div className='w-[40em]'>
            //     <h2 className="text-[56px] font-[400]">
            //       DopeCast - Podcast <br /> Platform
            //     </h2>
            //     <p className="font-sans">
            //       DopeCast is an On-Demand-Podcast service platform concept for
            //       focused listening. Our main goal of the platform is to design
            //       elegant, modern & focused client-side UI for mobile, desktop,
            //       watch & web with the most enhanced user experience possible around
            //       the world. It’s made for pure podcast listening without any
            //       distractions.
            //     </p>
            //     <div className="arothmatic mt-[45px]">
            //       <Link
            //         to="/"
            //         className="font-sans hover:cursor-wait flex items-center relative"
            //       >
            //         <span className="dig font-sans">DIG DEEPER</span>{' '}
            //         <img
            //           className="ml-4 h-[8px]"
            //           src="images/right_arrow.png"
            //           alt="right arrow"
            //         />
            //       </Link>
            //     </div>
            //   </div>
            //   <img src="images/card.svg" />
            //   <img src="images/linker.svg" />
            // </div>

            // <div className="product-card">
            //   <div className='w-[40em]'>
            //     <h2 className="text-[56px] font-[400]">
            //       DopeCast - Podcast <br /> Platform
            //     </h2>
            //     <p className="font-sans">
            //       DopeCast is an On-Demand-Podcast service platform concept for
            //       focused listening. Our main goal of the platform is to design
            //       elegant, modern & focused client-side UI for mobile, desktop,
            //       watch & web with the most enhanced user experience possible around
            //       the world. It’s made for pure podcast listening without any
            //       distractions.
            //     </p>
            //     <div className="arothmatic mt-[45px]">
            //       <Link
            //         to="/"
            //         className="font-sans hover:cursor-wait flex items-center relative"
            //       >
            //         <span className="dig font-sans">DIG DEEPER</span>{' '}
            //         <img
            //           className="ml-4 h-[8px]"
            //           src="images/right_arrow.png"
            //           alt="right arrow"
            //         />
            //       </Link>
            //     </div>
            //   </div>
            //   <img src="images/card.svg" />
            //   <img src="images/linker.svg" />
            // </div>

            // <div className="product-card">
            //   <div className='w-[40em]'>
            //     <h2 className="text-[56px] font-[400]">
            //       DopeCast - Podcast <br /> Platform
            //     </h2>
            //     <p className="font-sans">
            //       DopeCast is an On-Demand-Podcast service platform concept for
            //       focused listening. Our main goal of the platform is to design
            //       elegant, modern & focused client-side UI for mobile, desktop,
            //       watch & web with the most enhanced user experience possible around
            //       the world. It’s made for pure podcast listening without any
            //       distractions.
            //     </p>
            //     <div className="arothmatic mt-[45px]">
            //       <Link
            //         to="/"
            //         className="font-sans hover:cursor-wait flex items-center relative"
            //       >
            //         <span className="dig font-sans">DIG DEEPER</span>{' '}
            //         <img
            //           className="ml-4 h-[8px]"
            //           src="images/right_arrow.png"
            //           alt="right arrow"
            //         />
            //       </Link>
            //     </div>
            //   </div>
            //   <img src="images/card.svg" />
            //   <img src="images/linker.svg" />
            // </div>

            // <div className="product-card">
            //   <div className='w-[40em]'>
            //     <h2 className="text-[56px] font-[400]">
            //       DopeCast - Podcast <br /> Platform
            //     </h2>
            //     <p className="font-sans">
            //       DopeCast is an On-Demand-Podcast service platform concept for
            //       focused listening. Our main goal of the platform is to design
            //       elegant, modern & focused client-side UI for mobile, desktop,
            //       watch & web with the most enhanced user experience possible around
            //       the world. It’s made for pure podcast listening without any
            //       distractions.
            //     </p>
            //     <div className="arothmatic mt-[45px]">
            //       <Link
            //         to="/"
            //         className="font-sans hover:cursor-wait flex items-center relative"
            //       >
            //         <span className="dig font-sans">DIG DEEPER</span>{' '}
            //         <img
            //           className="ml-4 h-[8px]"
            //           src="images/right_arrow.png"
            //           alt="right arrow"
            //         />
            //       </Link>
            //     </div>
            //   </div>
            //   <img src="images/card.svg" />
            //   <img src="images/linker.svg" />
            // </div>

            
            // <div className='flex items-center'>
            //   <Link>
            //     <button className='font-sans w-[10em] px-6 py-3 mx-5 rounded-full border-2
            //      border-black/20 hover:border-black/70 hover:bg-black/5'>
            //       View all Project
            //     </button>
            //   </Link>
            // </div> */}








// const products = [
//   {
//     title: "DopeCast - Podcast Platform 1",
//     description:
//       "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
//     image: "images/card.svg",
//   },
//   {
//     title: "DopeCast - Podcast Platform 2",
//     description:
//       "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
//     image: "images/card.svg",
//   },
//   {
//     title: "DopeCast - Podcast Platform 3",
//     description:
//       "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
//     image: "images/card.svg",
//   },
//   {
//     title: "DopeCast - Podcast Platform 4",
//     description:
//       "DopeCast is an On-Demand-Podcast service platform concept for focused listening. Our main goal of the platform is to design elegant, modern & focused client-side UI for mobile, desktop, watch & web with the most enhanced user experience possible around the world. It’s made for pure podcast listening without any distractions.",
//     image: "images/card.svg",
//   },
// ];











































// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../style/homeSixSec.css';

// const SixSec = () => {
//   useEffect(() => {
//     const scrollContainer = document.querySelector('.scroll-container');
//     const scrollNext = document.querySelector('#next');
//     const scrollPrevious = document.querySelector('#previous');
//     const projectCardScrollingHandler = (e) => {
//       e.preventDefault();
//       const scrolled = Math.ceil(scrollContainer.scrollLeft);
//       const scrollablewidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//       const delta = e.deltaY || e.detail || -e.wheelDelta;
//       const scrollAmount = 500;
//       if (e.deltaY > 0) {
//         if (scrollablewidth == scrolled) {
//           scrollNext.scrollIntoView({ behavior: "smooth" });
//         }
//         else {
//           scrollContainer.scrollLeft += scrollAmount;
//         }
//       }
//       else if (e.deltaY < 0) {
//         if (scrolled == 0)
//           scrollPrevious.scrollIntoView({ behavior: "smooth" });
//         else
//           scrollContainer.scrollLeft -= scrollAmount;
//       }
//     }
//     scrollContainer.addEventListener('wheel', projectCardScrollingHandler, { passive: false });
//     return () => {
//       scrollContainer.removeEventListener('wheel', projectCardScrollingHandler);
//     };
//   }, []);
//   return (
//     <>
//       <div className="mt-[120px] sixSecWrapper">
//         <h2 className="mobile">Our Projects</h2>
//         <div className="scroll-container">
//           <div className="content mx-[2em]">
//             {/**products**/}

//             <div className="product-card">
//               <div className='w-[40em]'>
//                 <h2 className="text-[56px] font-[400]">
//                   DopeCast - Podcast <br /> Platform
//                 </h2>
//                 <p className="font-sans">
//                   DopeCast is an On-Demand-Podcast service platform concept for
//                   focused listening. Our main goal of the platform is to design
//                   elegant, modern & focused client-side UI for mobile, desktop,
//                   watch & web with the most enhanced user experience possible around
//                   the world. It’s made for pure podcast listening without any
//                   distractions.
//                 </p>
//                 <div className="arothmatic mt-[45px]">
//                   <Link
//                     to="/"
//                     className="font-sans hover:cursor-wait flex items-center relative"
//                   >
//                     <span className="dig font-sans">DIG DEEPER</span>{' '}
//                     <img
//                       className="ml-4 h-[8px]"
//                       src="images/right_arrow.png"
//                       alt="right arrow"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <img src="images/card.svg" />
//               <img src="images/linker.svg" />
//             </div>

//             <div className="product-card">
//               <div className='w-[40em]'>
//                 <h2 className="text-[56px] font-[400]">
//                   DopeCast - Podcast <br /> Platform
//                 </h2>
//                 <p className="font-sans">
//                   DopeCast is an On-Demand-Podcast service platform concept for
//                   focused listening. Our main goal of the platform is to design
//                   elegant, modern & focused client-side UI for mobile, desktop,
//                   watch & web with the most enhanced user experience possible around
//                   the world. It’s made for pure podcast listening without any
//                   distractions.
//                 </p>
//                 <div className="arothmatic mt-[45px]">
//                   <Link
//                     to="/"
//                     className="font-sans hover:cursor-wait flex items-center relative"
//                   >
//                     <span className="dig font-sans">DIG DEEPER</span>{' '}
//                     <img
//                       className="ml-4 h-[8px]"
//                       src="images/right_arrow.png"
//                       alt="right arrow"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <img src="images/card.svg" />
//               <img src="images/linker.svg" />
//             </div>

//             <div className="product-card">
//               <div className='w-[40em]'>
//                 <h2 className="text-[56px] font-[400]">
//                   DopeCast - Podcast <br /> Platform
//                 </h2>
//                 <p className="font-sans">
//                   DopeCast is an On-Demand-Podcast service platform concept for
//                   focused listening. Our main goal of the platform is to design
//                   elegant, modern & focused client-side UI for mobile, desktop,
//                   watch & web with the most enhanced user experience possible around
//                   the world. It’s made for pure podcast listening without any
//                   distractions.
//                 </p>
//                 <div className="arothmatic mt-[45px]">
//                   <Link
//                     to="/"
//                     className="font-sans hover:cursor-wait flex items-center relative"
//                   >
//                     <span className="dig font-sans">DIG DEEPER</span>{' '}
//                     <img
//                       className="ml-4 h-[8px]"
//                       src="images/right_arrow.png"
//                       alt="right arrow"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <img src="images/card.svg" />
//               <img src="images/linker.svg" />
//             </div>

//             <div className="product-card">
//               <div className='w-[40em]'>
//                 <h2 className="text-[56px] font-[400]">
//                   DopeCast - Podcast <br /> Platform
//                 </h2>
//                 <p className="font-sans">
//                   DopeCast is an On-Demand-Podcast service platform concept for
//                   focused listening. Our main goal of the platform is to design
//                   elegant, modern & focused client-side UI for mobile, desktop,
//                   watch & web with the most enhanced user experience possible around
//                   the world. It’s made for pure podcast listening without any
//                   distractions.
//                 </p>
//                 <div className="arothmatic mt-[45px]">
//                   <Link
//                     to="/"
//                     className="font-sans hover:cursor-wait flex items-center relative"
//                   >
//                     <span className="dig font-sans">DIG DEEPER</span>{' '}
//                     <img
//                       className="ml-4 h-[8px]"
//                       src="images/right_arrow.png"
//                       alt="right arrow"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <img src="images/card.svg" />
//               <img src="images/linker.svg" />
//             </div>

            
//             <div className='flex items-center'>
//               <Link>
//                 <button className='font-sans w-[10em] px-6 py-3 mx-5 rounded-full border-2
//                  border-black/20 hover:border-black/70 hover:bg-black/5'>
//                   View all Project
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SixSec;




















