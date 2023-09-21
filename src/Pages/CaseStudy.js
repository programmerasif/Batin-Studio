import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Arrow from "../components/assets/images/Arrow.png";
import Lets from "../components/Lets";
import "../style/CaseStudy.css"
import firstImage from "../components/assets/images/case-study/image1.svg";
import secondImage from "../components/assets/images/case-study/image2.svg";
import thirdImage from "../components/assets/images/case-study/image3.svg";
import fourthImage from "../components/assets/images/case-study/image4.svg";
import fifthImage from "../components/assets/images/case-study/image5.svg";
import sixthImage from "../components/assets/images/case-study/image6.svg";
import seventhImage from "../components/assets/images/case-study/image7.svg";
import eightImage from "../components/assets/images/case-study/image8.svg";
import ninethImage from "../components/assets/images/case-study/image9.svg";
import useCaseStudyFirstSec from "../components/HooksForCaseStudy/useCaseStudyFirstSec";
import { AuthContext } from "../components/HooksFile/AuthContextProvider";
import useCaseStudySecondSec from "../components/HooksForCaseStudy/useCaseStudySecondSec";
import useCaseStudyForthSec from "../components/HooksForCaseStudy/useCaseStudyForthSec";
import useCaseStudyFifthSection from "../components/HooksForCaseStudy/useCaseStudyFifthSection";


// const firstSection = [
//   {
//     FsectionTitle: "Spicyy - ecommerce food store",
//     FsectionDescription: "Spicyy is a Local restaurant and also have food delivery services. They can make delicious food and deliver it directly to their customers with a phone call. Now, it’s time to step up. They need a webapp that can enhance the user experience beyond phone calls"
//   }
// ]

const CaseStudy = () => {

  const [caseStudyFirstSectionData, isLoading, refetch] = useCaseStudyFirstSec();
  const [caseStudySecondSectionData, secondRefetch] = useCaseStudySecondSec();
  const [caseStudyForthSectionData, forthRefetch] = useCaseStudyForthSec();
  const [caseStudyFifthSecData,  fifthRefetch] = useCaseStudyFifthSection();
  const [successText, setSuccessText] = useState("");
  const { user, adminEmail } = useContext(AuthContext)

  setTimeout(() => {
    setSuccessText("")
  }, 3000);

  const firstSectionSubmitFun = (e) => {
    e.preventDefault();
    const FsectionTitle = e.target.FsectionTitle.value || caseStudyFirstSectionData?.FsectionTitle;
    const FsectionDescription = e.target.FsectionDescription.value || caseStudyFirstSectionData?.FsectionDescription;
    const data = {
      FsectionTitle: FsectionTitle,
      FsectionDescription: FsectionDescription,
    }
    fetch(`http://localhost:5000/caseStudyFirstSection/${caseStudyFirstSectionData?._id}`, {
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

  const FContent = [
    {
      LOimage: "https://i.pinimg.com/236x/d7/6b/86/d76b861d24da776f096bc3ce5d1cf460--psd-templates-construction.jpg",
      LTimage: "https://i.pinimg.com/236x/b2/63/cf/b263cfaafaad8e8a2652d120febb3c23.jpg",
      LThrImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjC8I_t9qKhJtbMx7prREQLOtqg_cQu7llB8RAijCXNlsTZdOu7zaDGe7dWlKkmTXHe4k&usqp=CAU",
      Rvideo: "https://www.youtube.com/embed/CTcoCHKnkT8?si=PdCvaqM5k8Z2qSHt",
      ROimage : "https://i.pinimg.com/236x/a0/bd/90/a0bd900700760a762221759f84dede76.jpg",
      RTimage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjC8I_t9qKhJtbMx7prREQLOtqg_cQu7llB8RAijCXNlsTZdOu7zaDGe7dWlKkmTXHe4k&usqp=CAU"
    }
  ]

  const secondSectionSubFun = (e) => {
    e.preventDefault();
    const SsectionTitle = e.target.SsectionTitle.value || caseStudySecondSectionData?.SsectionTitle;
    const image = e.target.image.value || caseStudySecondSectionData?.image;
    const firstParagraph = e.target.firstParagraph.value || caseStudySecondSectionData?.firstParagraph;
    const secondParagraph = e.target.secondParagraph.value || caseStudySecondSectionData?.secondParagraph;
    const data = {
      SsectionTitle: SsectionTitle,
      image: image,
      firstParagraph: firstParagraph,
      secondParagraph: secondParagraph,
    }
    fetch(`http://localhost:5000/caseStudySecondSection/${caseStudySecondSectionData?._id}`, {
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
          secondRefetch();
        }
      })
      .then((json) => console.log(json));
  }


  const fifthSectionSubFun = (e) => {
    e.preventDefault();
    const LOimage = e.target.LOimage.value || caseStudyFifthSecData?.LOimage;
    const LTimage = e.target.LTimage.value || caseStudyFifthSecData?.LTimage;
    const LThrImage = e.target.LThrImage.value || caseStudyFifthSecData?.LThrImage;
    const Rvideo = e.target.Rvideo.value || caseStudyFifthSecData?.Rvideo;
    const ROimage = e.target.ROimage.value || caseStudyFifthSecData?.ROimage;
    const RTimage = e.target.RTimage.value || caseStudyFifthSecData?.RTimage;
    const data = {
      LOimage: LOimage,
      LTimage: LTimage,
      LThrImage: LThrImage,
      Rvideo: Rvideo,
      ROimage: ROimage,
      RTimage: RTimage,
    }
    fetch(`http://localhost:5000/caseStudyFifthSection/${caseStudyFifthSecData?._id}`, {
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
          fifthRefetch();
        }
      })
      .then((json) => console.log(json));
  }
  const fourthSectionSubFun = (e) => {
    e.preventDefault();
    const title = e.target.title.value || caseStudyForthSectionData?.title;
    const image = e.target.image.value || caseStudyForthSectionData?.image;
    const firstParagraph = e.target.firstParagraph.value || caseStudyForthSectionData?.firstParagraph;
    const secondParagraph = e.target.secondParagraph.value || caseStudyForthSectionData?.secondParagraph;
    const data = {
      title: title,
      image: image,
      firstParagraph: firstParagraph,
      secondParagraph: secondParagraph,
    }
    fetch(`http://localhost:5000/caseStudyForthSection/${caseStudyForthSectionData?._id}`, {
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
          forthRefetch();
        }
      })
      .then((json) => console.log(json));
  }


  return (
    <>
      <Nav></Nav>
      <section className="section mx-5 lg:mx-10">
        {/* First Section */}
        <section>
          <div className="md:flex">
            <div className="md:w-1/2 pr-4">
              <div className="font-sans text-gray-500">Case Study</div>
              <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">

                {caseStudyFirstSectionData?.FsectionTitle}

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
              <div className="font-sans text-gray-500"> About the project </div>
              <div className="small-device-paragraph sm:md-device-paragraph">

                {caseStudyFirstSectionData?.FsectionDescription}

                <div className="mt-10 flex justify-between items-center">
                  <button className="my-btnn">
                    <span className=" ">Website</span>

                    <img
                      className="rotate-180 scale-x-150 my-auto ml-2"
                      src={Arrow}
                      alt=""
                    />
                  </button>

                  {
                    user?.email === adminEmail &&
                    <button onClick={() => document.getElementById('first_section_1').showModal()} className="hidden lg:block pudate-button" >Update</button>
                  }
                  <dialog id="first_section_1" className="modal">

                    <div className="modal-box w-11/12 h-4/6 max-w-5xl bg-sky-300">
                      <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
                      <form onSubmit={firstSectionSubmitFun} className=' font-mono text-sm' >
                        <input className='w-full rounded-md mt-2 p-2' name='FsectionTitle' type="text" placeholder='Title' />
                        <textarea className='w-full rounded-md mt-3 p-2 h-24' name='FsectionDescription' type="text" placeholder='First Paragraph' />
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
          </div>
        </section>

        {/* second section */}
        <section className="mt-10">
          <div>
            <img className="w-full rounded-3xl" src={caseStudySecondSectionData?.image} alt="" />
          </div>

          <div className="md:flex md:justify-between ">
            <div className="md:w-[40%]">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading mt-10">
                {caseStudySecondSectionData?.SsectionTitle}
              </h1>

              {
                user?.email === adminEmail &&
                <button onClick={() => document.getElementById('second_section_2').showModal()} className="hidden lg:block pudate-button" >Update</button>
              }

              <dialog id="second_section_2" className="modal">

                <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
                  <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
                  <form onSubmit={secondSectionSubFun} className=' font-mono text-sm' >

                    <input className='w-full rounded-md mt-2 p-2' name='SsectionTitle' type="text" placeholder='Title' />
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

            <div className="md:w-[60%] md:mt-10">
              <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  {caseStudySecondSectionData?.firstParagraph}
                </li>
                <li>
                  {caseStudySecondSectionData?.secondParagraph}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* third Section */}
        <section className="mt-24">
          <div>
            <img className="w-full rounded-3xl" src={secondImage} alt="" />
          </div>
        </section>

        {/* Forth Section */}
        <section className="mt-24 md:flex md:flex-row-reverse">
          <div className="md:w-[60%] md:mt-16">
            <div className=" flex justify-between items-center">
              <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
                {caseStudyForthSectionData?.title}
              </h1>
              {
                user?.email === adminEmail &&
                <button onClick={() => document.getElementById('forth_section_4').showModal()}  className="hidden lg:block pudate-button" >Update</button>
              }
              <dialog id="forth_section_4" className="modal">
                <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
                  <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
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
            <div className="">
              <ul className="small-device-paragraph sm:md-device-paragraph text-left">
                <li>
                  {caseStudyForthSectionData?.firstParagraph}
                </li>
                <li>
                  {caseStudyForthSectionData?.secondParagraph}
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-[40%] md:pr-8">
            <img className="mx-auto mt-10 rounded-3xl" src={caseStudyForthSectionData?.image} alt="" />
          </div>
        </section>

        {/* Fifth Section */}
        <section className="mt-72  md:gap-6">

          <div className="media-section flex justify-between px-10">

            <div className="left-side  w-6/12 px-10 -mt-36">

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={caseStudyFifthSecData?.LOimage} alt="" />
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update LS-1 </button> }
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={caseStudyFifthSecData?.LTimage} alt="" />
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update LS-2</button> }
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={caseStudyFifthSecData?.LThrImage} alt="" />
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update LS-3 </button> }
                  </div>

            </div>

            <div className="right-side w-6/12 px-10">

                <div className=" mb-10 ">
                    <iframe className="h-[500px] w-full rounded-3xl mb-10" src={caseStudyFifthSecData?.Rvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update RS-V </button> }
                </div>

                <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={caseStudyFifthSecData?.ROimage} alt="" />
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update RS-1</button> }
                  </div>

                  <div className=" mb-10 "> 
                    <img className="w-full rounded-3xl" src={caseStudyFifthSecData?.RTimage} alt="" />
                    { user?.email === adminEmail && <button onClick={() => document.getElementById('fifth_section_5').showModal()} className=" pudate-button">Update RS-2</button> }
                  </div>

            </div>



          </div>

          <dialog id="fifth_section_5" className="modal">
                <div className="modal-box w-11/12 h-4/6 max-w-5xl bg-sky-300">
                  <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
                  <form onSubmit={fifthSectionSubFun} className=' font-mono text-sm' >

                    <input className='w-full rounded-md mt-2 p-2' name='LOimage' type="text" placeholder='Left Side First Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='LTimage' type="text" placeholder='Left Side Second Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='LThrImage' type="text" placeholder='Left Side Third Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='Rvideo' type="text" placeholder='Right Side Video Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='ROimage' type="text" placeholder='Right Side Frist Image Url' />
                    <input className='w-full rounded-md mt-2 p-2' name='RTimage' type="text" placeholder='Right Side Second Image Url' />

                    <input className='w-full mt-2 h-12 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
                  </form>

                  <div className="modal-action absolute bottom-2 right-2 ">
                    <form method="dialog">
                      <button className="btn">X</button>
                    </form>
                  </div>
                </div>
              </dialog>


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










































// import React, { useContext, useState } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import Arrow from "../components/assets/images/Arrow.png";
// import Lets from "../components/Lets";
// import "../style/CaseStudy.css"
// import firstImage from "../components/assets/images/case-study/image1.svg";
// import secondImage from "../components/assets/images/case-study/image2.svg";
// import thirdImage from "../components/assets/images/case-study/image3.svg";
// import fourthImage from "../components/assets/images/case-study/image4.svg";
// import fifthImage from "../components/assets/images/case-study/image5.svg";
// import sixthImage from "../components/assets/images/case-study/image6.svg";
// import seventhImage from "../components/assets/images/case-study/image7.svg";
// import eightImage from "../components/assets/images/case-study/image8.svg";
// import ninethImage from "../components/assets/images/case-study/image9.svg";
// import useCaseStudyFirstSec from "../components/HooksForCaseStudy/useCaseStudyFirstSec";
// import { AuthContext } from "../components/HooksFile/AuthContextProvider";
// import useCaseStudySecondSec from "../components/HooksForCaseStudy/useCaseStudySecondSec";
// import useCaseStudyForthSec from "../components/HooksForCaseStudy/useCaseStudyForthSec";


// // const firstSection = [
// //   {
// //     FsectionTitle: "Spicyy - ecommerce food store",
// //     FsectionDescription: "Spicyy is a Local restaurant and also have food delivery services. They can make delicious food and deliver it directly to their customers with a phone call. Now, it’s time to step up. They need a webapp that can enhance the user experience beyond phone calls"
// //   }
// // ]

// const CaseStudy = () => {

//   const [caseStudyFirstSectionData, isLoading, refetch] = useCaseStudyFirstSec();
//   const [caseStudySecondSectionData, secondRefetch] = useCaseStudySecondSec();
//   const [caseStudyForthSectionData, forthRefetch] = useCaseStudyForthSec();
//   const [successText, setSuccessText] = useState("");
//   const { user, adminEmail } = useContext(AuthContext)

//   setTimeout(() => {
//     setSuccessText("")
//   }, 3000);

//   const firstSectionSubmitFun = (e) => {
//     e.preventDefault();
//     const FsectionTitle = e.target.FsectionTitle.value || caseStudyFirstSectionData?.FsectionTitle;
//     const FsectionDescription = e.target.FsectionDescription.value || caseStudyFirstSectionData?.FsectionDescription;
//     const data = {
//       FsectionTitle: FsectionTitle,
//       FsectionDescription: FsectionDescription,
//     }
//     fetch(`http://localhost:5000/caseStudyFirstSection/${caseStudyFirstSectionData?._id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => {
//         console.log(response)
//         if (response.ok) {
//           setSuccessText("Updated Your Data")
//           e.target.reset();
//           refetch();
//         }
//       })
//       .then((json) => console.log(json));
//   }

//   const FContent = [
//     {
//       title: "Our Solutions",
//       image: "https://i.ibb.co/5cCdNTq/image3.jpg",
//       firstParagraph: "Make the website and food vibrant and colorful so that customers can visually feel it.",
//       secondParagraph: "Make it easier to order a product with little to no effort and design the delivery system for efficiency. "
//     }
//   ]

//   const secondSectionSubFun = (e) => {
//     e.preventDefault();
//     const SsectionTitle = e.target.SsectionTitle.value || caseStudySecondSectionData?.SsectionTitle;
//     const image = e.target.image.value || caseStudySecondSectionData?.image;
//     const firstParagraph = e.target.firstParagraph.value || caseStudySecondSectionData?.firstParagraph;
//     const secondParagraph = e.target.secondParagraph.value || caseStudySecondSectionData?.secondParagraph;
//     const data = {
//       SsectionTitle: SsectionTitle,
//       image: image,
//       firstParagraph: firstParagraph,
//       secondParagraph: secondParagraph,
//     }
//     fetch(`http://localhost:5000/caseStudySecondSection/${caseStudySecondSectionData?._id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => {
//         console.log(response)
//         if (response.ok) {
//           setSuccessText("Updated Your Data")
//           e.target.reset();
//           secondRefetch();
//         }
//       })
//       .then((json) => console.log(json));
//   }


//   const fourthSectionSubFun = (e) => {
//     e.preventDefault();
//     const title = e.target.title.value || caseStudyForthSectionData?.title;
//     const image = e.target.image.value || caseStudyForthSectionData?.image;
//     const firstParagraph = e.target.firstParagraph.value || caseStudyForthSectionData?.firstParagraph;
//     const secondParagraph = e.target.secondParagraph.value || caseStudyForthSectionData?.secondParagraph;
//     const data = {
//       title: title,
//       image: image,
//       firstParagraph: firstParagraph,
//       secondParagraph: secondParagraph,
//     }
//     fetch(`http://localhost:5000/caseStudyForthSection/${caseStudyForthSectionData?._id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => {
//         console.log(response)
//         if (response.ok) {
//           setSuccessText("Updated Your Data")
//           e.target.reset();
//           forthRefetch();
//         }
//       })
//       .then((json) => console.log(json));
//   }


//   return (
//     <>
//       <Nav></Nav>
//       <section className="section mx-5 lg:mx-10">
//         {/* First Section */}
//         <section>
//           <div className="md:flex">
//             <div className="md:w-1/2 pr-4">
//               <div className="font-sans text-gray-500">Case Study</div>
//               <div className="small-device-heading sm:md-device-heading lg:lg-device-heading">

//                 {caseStudyFirstSectionData?.FsectionTitle}

//               </div>

//               <div
//                 className="
//                     flex-wrap
//                     justify-start
//                     flex gap-2 text-xl font-sans"
//               >
//                 <button className="my-btn">UI/UX design</button>
//                 <button className="my-btn">Website from scratch</button>
//                 <button className="my-btn">Branding</button>
//                 <button className="my-btn">Website redesign</button>
//                 <button className="my-btn">App from scratch</button>
//                 <button className="my-btn">App redesign</button>
//                 <button className="my-btn">Not sure yet</button>
//                 <button className="my-btn">Let’s talk first</button>
//                 <button className="my-btn">Maintenance</button>
//               </div>

//             </div>

//             <div className="mt-10 md:w-1/2 md:mt-0">
//               <div className="font-sans text-gray-500"> About the project </div>
//               <div className="small-device-paragraph sm:md-device-paragraph">

//                 {caseStudyFirstSectionData?.FsectionDescription}

//                 <div className="mt-10 flex justify-between items-center">
//                   <button className="my-btnn">
//                     <span className=" ">Website</span>

//                     <img
//                       className="rotate-180 scale-x-150 my-auto ml-2"
//                       src={Arrow}
//                       alt=""
//                     />
//                   </button>

//                   {
//                     user?.email === adminEmail &&
//                     <button onClick={() => document.getElementById('first_section_1').showModal()} className="hidden lg:block pudate-button" >Update</button>
//                   }
//                   <dialog id="first_section_1" className="modal">

//                     <div className="modal-box w-11/12 h-4/6 max-w-5xl bg-sky-300">
//                       <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
//                       <form onSubmit={firstSectionSubmitFun} className=' font-mono text-sm' >
//                         <input className='w-full rounded-md mt-2 p-2' name='FsectionTitle' type="text" placeholder='Title' />
//                         <textarea className='w-full rounded-md mt-3 p-2 h-24' name='FsectionDescription' type="text" placeholder='First Paragraph' />
//                         <input className='w-full mt-2 h-12 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
//                       </form>

//                       <div className="modal-action absolute bottom-2 right-2 ">
//                         <form method="dialog">
//                           <button className="btn">X</button>
//                         </form>
//                       </div>

//                     </div>


//                   </dialog>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* second section */}
//         <section className="mt-10">
//           <div>
//             <img className="w-full rounded-3xl" src={caseStudySecondSectionData?.image} alt="" />
//           </div>

//           <div className="md:flex md:justify-between ">
//             <div className="md:w-[40%]">
//               <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading mt-10">
//                 {caseStudySecondSectionData?.SsectionTitle}
//               </h1>

//               {
//                 user?.email === adminEmail &&
//                 <button onClick={() => document.getElementById('second_section_2').showModal()} className="hidden lg:block pudate-button" >Update</button>
//               }

//               <dialog id="second_section_2" className="modal">

//                 <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
//                   <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
//                   <form onSubmit={secondSectionSubFun} className=' font-mono text-sm' >

//                     <input className='w-full rounded-md mt-2 p-2' name='SsectionTitle' type="text" placeholder='Title' />
//                     <input className='w-full rounded-md mt-2 p-2' name='image' type="text" placeholder='photo Url' />
//                     <textarea className='w-full rounded-md mt-3 p-2 h-24' name='firstParagraph' type="text" placeholder='First Paragraph' />
//                     <textarea className='w-full rounded-md mt-3 p-2 h-24' name='secondParagraph' type="text" placeholder='Second Paragraph' />

//                     <input className='w-full mt-2 h-12 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
//                   </form>

//                   <div className="modal-action absolute bottom-2 right-2 ">
//                     <form method="dialog">
//                       <button className="btn">X</button>
//                     </form>
//                   </div>

//                 </div>


//               </dialog>



//             </div>

//             <div className="md:w-[60%] md:mt-10">
//               <ul className="list-disc small-device-paragraph sm:md-device-paragraph text-left">
//                 <li>
//                   {caseStudySecondSectionData?.firstParagraph}
//                 </li>
//                 <li>
//                   {caseStudySecondSectionData?.secondParagraph}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* third Section */}
//         <section className="mt-24">
//           <div>
//             <img className="w-full" src={secondImage} alt="" />
//           </div>
//         </section>

//         {/* Forth Section */}
//         <section className="mt-24 md:flex md:flex-row-reverse">
//           <div className="md:w-[60%] md:mt-16">
//             <div className=" flex justify-between items-center">
//               <h1 className="small-device-heading sm:md-device-heading lg:lg-device-heading text-left">
//                 {caseStudyForthSectionData?.title}
//               </h1>
//               {
//                 user?.email === adminEmail &&
//                 <button onClick={() => document.getElementById('forth_section_4').showModal()}  className="hidden lg:block pudate-button" >Update</button>
//               }
//               <dialog id="forth_section_4" className="modal">
//                 <div className="modal-box w-11/12 h-5/6 max-w-5xl bg-sky-300">
//                   <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>
//                   <form onSubmit={fourthSectionSubFun} className=' font-mono text-sm' >
//                     <input className='w-full rounded-md mt-2 p-2' name='title' type="text" placeholder='Title' />
//                     <input className='w-full rounded-md mt-2 p-2' name='image' type="text" placeholder='photo Url' />
//                     <textarea className='w-full rounded-md mt-3 p-2 h-24' name='firstParagraph' type="text" placeholder='First Paragraph' />
//                     <textarea className='w-full rounded-md mt-3 p-2 h-24' name='secondParagraph' type="text" placeholder='Second Paragraph' />
//                     <input className='w-full mt-2 h-12 bg-gray-300 text-xl font-semibold rounded-md hover:text-red-500 hover:text-2xl duration-500 cursor-pointer' type="submit" value="submit" />
//                   </form>

//                   <div className="modal-action absolute bottom-2 right-2 ">
//                     <form method="dialog">
//                       <button className="btn">X</button>
//                     </form>
//                   </div>
//                 </div>
//               </dialog>

//             </div>
//             <div className="">
//               <ul className="small-device-paragraph sm:md-device-paragraph text-left">
//                 <li>
//                   {caseStudyForthSectionData?.firstParagraph}
//                 </li>
//                 <li>
//                   {caseStudyForthSectionData?.secondParagraph}
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="md:w-[40%] md:pr-8">
//             <img className="mx-auto mt-10" src={caseStudyForthSectionData?.image} alt="" />
//           </div>
//         </section>

//         <section className="mt-24 md:flex md:gap-6">
//           {/* <img className="mx-auto md:ml-auto md:w-[536px]" src={fourthImage} alt="" />
//           <img className="mx-auto md:mr-auto md:w-[536px] md:mt-10" src={fifthImage} alt="" /> */}
          
//         </section>

//         <section className="mt-24">
//           <img className="w-full rounded-2xl" src={sixthImage} alt="" />
//         </section>

//         <section className="mt-24 md:flex">
//           <div className="md:w-[40%] md:pr-10">
//             <h1 className="my-title text-left mt-10 font-thin">
//               What customers wants?
//             </h1>
//           </div>
//           <div className="md:w-[60%] mt-10">
//             <p className="font-sans">
//               People want good quality and healthy foods at affordable cost that
//               can deliver to them quickly, when they need or want.
//             </p>
//           </div>
//         </section>

//         <section className="mt-24 md:flex md:gap-6">
//           <img className="mx-auto md:ml-auto md:w-[536px]" src={seventhImage} alt="" />
//           <img className="mx-auto md:mr-auto md:w-[536px] mt-10 md:mt-20" src={eightImage} alt="" />
//         </section>

//         <section className="mt-24">
//           <h1 className="my-title text-left">
//             When you will build your Spicyy brand?
//           </h1>
//         </section>

//         <section className="mt-24">
//           <img className="w-full" src={ninethImage} alt="" />
//         </section>
//       </section>

//       <Lets></Lets>

//       <Footer></Footer>
//       {/** contact us button **/}
//       <div className={`flex flex-row justify-content-end align-items-center cursor-pointer contact-us-btn`}>
//         <img
//           src="images/contactus.png"
//           alt="CONTACT us"
//           className="contact_png"
//         />
//         <img src='images/ChatsCircle.png' className='contact-us-chat-icon' />
//       </div>
//     </>
//   );
// };

// export default CaseStudy;
