import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useThirdSec from './HooksFile/useThirdSec';
import { AuthContext } from './HooksFile/AuthContextProvider';

const ThirdSec = () => {
  // still wondering who are we?
  // We are a digital product design and development agency. In our team,developers work alongside designers, strategists and analysts. We don't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.
  // We're driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.

  const [thirdSecData, isLoading, refetch] = useThirdSec();
  const [thirdData, setThirdData] = useState([]);
  const [successText, setSuccessText] = useState("")
  const { user, adminEmail } = useContext(AuthContext)

  setTimeout(() => {
    setSuccessText("")
  }, 3000);

  useEffect(() => {
    if (thirdSecData) {
      setThirdData(thirdSecData[0])
    }
  }, [thirdSecData])

  const submitData = (e) => {
    e.preventDefault();
    const headline = e.target.headline.value || thirdData?.headline;
    const firstPara = e.target.firstPara.value || thirdData?.firstPara;
    const secondPara = e.target.secondPara.value || thirdData?.secondPara;
    const data = {
      headline: headline,
      firstPara: firstPara,
      secondPara: secondPara
    }
    fetch(`http://localhost:5000/ThirdSec/${thirdData?._id}`, {
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
    <div>

      <div className="w-[85%] stilwonder -mt-[130px] mx-auto flex justify-between ">

        <div className="s_left w-[50%]">

          <h2 className="text-[68px] leading-[60px] font-[400]">
            {thirdData?.headline}
          </h2>
        </div>

        <div className="s_right w-[50%]">
          <p className="leading-[46px] font-sans font-[400] text-[28px]">
            {thirdData?.firstPara}
            <div className="my-6"></div>
            {thirdData?.secondPara}
          </p>

          <div className=' flex items-center justify-between'>
            <div className="  arothmatic mt-[35px]">
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

              {/* <form onSubmit={submitData} >
              <input name='text' type="text" />
              <input type="submit" value="submit" />
            </form> */}
              {/* You can open the modal using document.getElementById('ID').showModal() method */}

            </div>
            {
              user?.email === adminEmail &&
              <button className=" hidden md:block pudate-button" onClick={() => document.getElementById('my_modal_4').showModal()}>Update Your Data</button>
            }


            <dialog id="my_modal_4" className="modal">

              <div className="modal-box w-11/12 h-4/6 max-w-5xl bg-sky-300">
                <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
                <form onSubmit={submitData} className=' font-mono ' >
                  <input className='w-full rounded-md mt-2 p-2' name='headline' type="text" placeholder='headline' />
                  <textarea className='w-full rounded-md mt-3 p-2 h-24' name='firstPara' type="text" placeholder='First Paragraph' />
                  <textarea className='w-full rounded-md mt-2 p-2 h-24' name='secondPara' type="text" placeholder='Second Paragraph' />
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

        </div>
      </div>

      <div className="mt-10"></div>
    </div>
  );
};

export default ThirdSec;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const ThirdSec = () => {


//   return (
//     <>
//       <div className="w-[85%] stilwonder -mt-[130px] mx-auto flex justify-between ">
//         <div className="s_left w-[50%]">
//           <h2 className="text-[68px] leading-[60px] font-[400]">
//             still wondering <br />
//             who are we?
//           </h2>
//         </div>
//         <div className="s_right w-[50%]">
//           <p className="leading-[46px] font-sans font-[400] text-[28px]">
//             We are a digital product design and development agency. In our team,
//             developers work alongside designers, strategists and analysts. We
//             don't do cookie-cutter solutions and we build products exactly as
//             they were during the design phase, no short cuts or simplifications.
//             <div className="my-6"></div>
//             We're driven by user-centered design that drives productivity and
//             increases revenue. Our expertise and ingenuity are remarkable, yet
//             we always strive to outdo and outperform our previous achievements.
//           </p>

//           <div className="arothmatic mt-[35px]">
//             <Link
//               to="/"
//               className="font-sans hover:cursor-wait flex items-center relative"
//             >
//               <span className="dig font-sans">DIG DEEPER</span>{' '}
//               <img
//                 className="ml-4 h-[8px]"
//                 src="images/right_arrow.png"
//                 alt="right arrow"
//               />
//             </Link>
//           </div>

//         </div>
//       </div>
//       <div className="mt-10"></div>
//     </>
//   );
// };

// export default ThirdSec;
