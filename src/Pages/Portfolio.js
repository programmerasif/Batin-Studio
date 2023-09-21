import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import searchIcon from "../components/assets/images/search_icon.svg";
import Data from "../components/assets/projects.json";
import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
import Reload from "../components/assets/images/reload.svg";
import arrow from "../components/assets/images/Line 4.svg";
import Lets from "../components/Lets";
import CustomCursor from "../components/CustomCursor";
import { Link } from "react-router-dom";
import usePortfolio from "../components/HooksFile/usePortfolio";

const Portfolio = () => {
  const [customCursor, setCustomCursor] = useState('none');
  const [cursorImg, setCursorImg] = useState('images/portfolio-hover-img.svg');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(10);
  const [allDesign, setAllDesign] = useState([]);
  const [PortfolioData, isLoading, refetch] = usePortfolio(allDesign);
  const [all, setAll] = useState("")
  const [ulUxDesign, setulUxDesign] = useState("")
  const [Website, setWebsite] = useState("")
  const [apps, setApps] = useState("")
  const [branding, setBranding] = useState("");


  let updatedAllDesign = [];
  const clearAllFun = () =>{
    updatedAllDesign = []
      setAllDesign(updatedAllDesign)
      setulUxDesign("")
      setWebsite("")
      setApps("")
      setBranding("")
      setVisible(10)
  }
  useEffect(() => {
     if (ulUxDesign) {
      updatedAllDesign.push(ulUxDesign);
    }
    if (Website) {
      updatedAllDesign.push(Website);
    }
    if (apps) {
      updatedAllDesign.push(apps);
    }
    if (branding) {
      updatedAllDesign.push(branding);
    }
    setAllDesign(updatedAllDesign);
  }, [ ulUxDesign, Website, apps, branding]);


  const showMore = () => {
    setVisible((preValue) => preValue + 10);
  };

  return (
    <>
      <CustomCursor imagePath={cursorImg} visible={customCursor} />
      <Nav></Nav>

      <section className="lg:flex mx-5 lg:mx-14">
        <section
          className="
                lg:w-[25%]
                section"
        >
          <div className="my-title lg:text-left">Our Projects</div>
          <div
            className="
                    lg:flex-wrap
                    lg:justify-start
                    flex justify-center gap-6 text-xl font-sans"
          >

            <button onClick={()=> clearAllFun () } className={` my-btn
                        ${allDesign.length === 0? "bg-gray-900 text-white" : ""}
            `}>All</button>
            <button onClick={() => setulUxDesign("UI/UX Design")} className={` my-btn
                        ${ulUxDesign.length > 0? "bg-gray-900 text-white" : ""}
            `}>UI/UX Design</button>
            <button onClick={() => setWebsite("Website")} className={` my-btn
                        ${Website.length > 0? "bg-gray-900 text-white" : ""}
            `}>Website</button>
            <button onClick={() => setApps("Apps")} className={` my-btn hidden md:block
                        ${apps.length > 0? "bg-gray-900 text-white" : ""}
            `}>Apps</button>
            <button onClick={() => setBranding("Branding")} className={` my-btn hidden md:block
                        ${branding.length > 0? "bg-gray-900 text-white" : ""}
            `}>Branding</button>
            {/* <button onClick={() => setApps("Apps")} className="my-btn hidden md:block">Apps</button> */}
            {/* <button onClick={() => setBranding("Branding")} className="my-btn hidden md:block">Branding</button> */}

          </div>
        </section>

        <section className="mt-10 lg:w-[75%] lg:mt-32">
          <div
            onMouseOver={() => { setCustomCursor('block') }}
            onMouseLeave={() => { setCustomCursor('none') }}
            className="font-sans">
            {PortfolioData?.slice(0, visible).map((project) => {
              return (
                <div
                  className="border-y py-6 px-4 flex justify-between items-center group hover:bg-[#F1F1F1]">

                  <Link to={"/CaseStudy"}>
                    <div className="group-hover:ml-5">
                      <div className="text-2xl p-2">{project.company}</div>
                      <div className="hidden group-hover:block text-sm p-2">{project.time}</div>
                    </div>
                    <div className="my-auto lg:hidden group-hover:block">
                      <img src={rightArrow} />
                    </div>
                  </Link>

                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center font-sans">
            <button
              className="my-btn text-black flex gap-2 mx-auto"
              onClick={showMore}
            >
              <img className="my-auto" src={Reload} alt="" />
              Load more
            </button>
          </div>
        </section>
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

export default Portfolio;






























// import React, { useEffect, useState } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import searchIcon from "../components/assets/images/search_icon.svg";
// import Data from "../components/assets/projects.json";
// import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
// import Reload from "../components/assets/images/reload.svg";
// import arrow from "../components/assets/images/Line 4.svg";
// import Lets from "../components/Lets";
// import CustomCursor from "../components/CustomCursor";
// import { Link } from "react-router-dom";
// import usePortfolio from "../components/HooksFile/usePortfolio";

// const Portfolio = () => {
//   const [customCursor, setCustomCursor] = useState('none');
//   const [cursorImg, setCursorImg] = useState('images/portfolio-hover-img.svg');
//   const [data, setData] = useState([]);
//   const [visible, setVisible] = useState(10);
//   const [allDesign, setAllDesign] = useState([]);
//   const [PortfolioData, isLoading, refetch] = usePortfolio(allDesign);
//   const [all, setAll] = useState("")
//   const [ulUxDesign, setulUxDesign] = useState("")
//   const [Website, setWebsite] = useState("")
//   const [apps, setApps] = useState("")
//   const [branding, setBranding] = useState("");


//   let updatedAllDesign = [];
//   const clearAllFun = () =>{
//     updatedAllDesign = []
//       setAllDesign(updatedAllDesign)
//       setulUxDesign("")
//       setWebsite("")
//       setApps("")
//       setBranding("")
//       setVisible(10)
//   }
//   useEffect(() => {
//      if (ulUxDesign) {
//       updatedAllDesign.push(ulUxDesign);
//     }
//     if (Website) {
//       updatedAllDesign.push(Website);
//     }
//     if (apps) {
//       updatedAllDesign.push(apps);
//     }
//     if (branding) {
//       updatedAllDesign.push(branding);
//     }
//     setAllDesign(updatedAllDesign);
//   }, [ ulUxDesign, Website, apps, branding]);


//   const showMore = () => {
//     setVisible((preValue) => preValue + 10);
//   };

//   return (
//     <>
//       <CustomCursor imagePath={cursorImg} visible={customCursor} />
//       <Nav></Nav>

//       <section className="lg:flex">
//         <section
//           className="
//                 lg:w-[25%]
//                 section"
//         >
//           <div className="my-title lg:text-left">Our Projects</div>

//           <div className="mb-2">
//            {
//             allDesign?.length === 0 ? <span className="px-4 bg-gray-900 text-white rounded-lg  text-xl" >All</span> : 
//             <ul className="flex flex-wrap">
//               {
//               allDesign?.map((data, i) => (
//                   <li className="my-btn m-2 rounded-lg py-1 px-2 bg-gray-900 text-white" key={i}>{data}</li>
//               ))
//             }
//             </ul>

//            }
            
//           </div>


//           <div
//             className="
//                     lg:flex-wrap
//                     lg:justify-start
//                     flex justify-center gap-6 text-xl font-sans"
//           >

//             <button onClick={()=> clearAllFun () } className="my-btn">All</button>
//             <button onClick={() => setulUxDesign("UI/UX Design")} className="my-btn">UI/UX Design</button>
//             <button onClick={() => setWebsite("Website")} className="my-btn">Website</button>
//             <button onClick={() => setApps("Apps")} className="my-btn hidden md:block">Apps</button>
//             <button onClick={() => setBranding("Branding")} className="my-btn hidden md:block">Branding</button>

//           </div>
//         </section>

//         <section className="mt-10 lg:w-[75%] lg:mt-32">
//           <div
//             onMouseOver={() => { setCustomCursor('block') }}
//             onMouseLeave={() => { setCustomCursor('none') }}
//             className="font-sans">
//             {PortfolioData?.slice(0, visible).map((project) => {
//               return (
//                 <div
//                   className="border-y py-6 px-4 flex justify-between items-center group hover:bg-[#F1F1F1]">

//                   <Link to={"/product-detail"}>
//                     <div className="group-hover:ml-5">
//                       <div className="text-2xl p-2">{project.company}</div>
//                       <div className="hidden group-hover:block text-sm p-2">{project.time}</div>
//                     </div>
//                     <div className="my-auto lg:hidden group-hover:block">
//                       <img src={rightArrow} />
//                     </div>
//                   </Link>

//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-10 text-center font-sans">
//             <button
//               className="my-btn text-black flex gap-2 mx-auto"
//               onClick={showMore}
//             >
//               <img className="my-auto" src={Reload} alt="" />
//               Load more
//             </button>
//           </div>
//         </section>
//       </section>

//       <section className="section">
//         <Lets></Lets>

//         {/* Direct SVG :V */}
//         {/* <img className="mx-auto" src={Frame361} alt="" /> */}
//       </section>

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

// export default Portfolio;














// import React, { useEffect, useState } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import searchIcon from "../components/assets/images/search_icon.svg";
// import Data from "../components/assets/projects.json";
// import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
// import Reload from "../components/assets/images/reload.svg";
// import arrow from "../components/assets/images/Line 4.svg";
// import Lets from "../components/Lets";
// import CustomCursor from "../components/CustomCursor";
// import { Link } from "react-router-dom";
// import usePortfolio from "../components/HooksFile/usePortfolio";

// const Portfolio = () => {
//   const [customCursor, setCustomCursor] = useState('none');
//   const [cursorImg, setCursorImg] = useState('images/portfolio-hover-img.svg');
//   const [data, setData] = useState([]);
//   const [visible, setVisible] = useState(10);
//   const [PortfolioData, isLoading, refetch] = usePortfolio();
//   const [all, setAll] = useState("")
//   const [ulUxDesign, setulUxDesign] = useState("")
//   const [Website, setWebsite] = useState("")
//   const [apps, setApps] = useState("")
//   const [branding, setBranding] = useState("");
//   const [allDesign, setAllDesign] = useState([]);


//   let updatedAllDesign = [];
//   const clearAllFun = () =>{
//     updatedAllDesign = []
//       setAllDesign(updatedAllDesign)
//       setulUxDesign("")
//       setWebsite("")
//       setApps("")
//       setBranding("")
//   }
//   useEffect(() => {
//      if (ulUxDesign) {
//       updatedAllDesign.push(ulUxDesign);
//     }
//     if (Website) {
//       updatedAllDesign.push(Website);
//     }
//     if (apps) {
//       updatedAllDesign.push(apps);
//     }
//     if (branding) {
//       updatedAllDesign.push(branding);
//     }
//     setAllDesign(updatedAllDesign);
//   }, [ ulUxDesign, Website, apps, branding]);



//   console.log(allDesign)

//   const showMore = () => {
//     setVisible((preValue) => preValue + 10);
//   };

//   return (
//     <>
//       <CustomCursor imagePath={cursorImg} visible={customCursor} />
//       <Nav></Nav>

//       <section className="lg:flex">
//         <section
//           className="
//                 lg:w-[25%]
//                 section"
//         >
//           <div className="my-title lg:text-left">Our Projects</div>

//           <div className="mb-2">
//            {
//             allDesign?.length === 0 ? <span className="px-4 bg-gray-900 text-white rounded-lg  text-xl" >All</span> : 
//             <ul className="flex flex-wrap">
//               {
//               allDesign?.map((data, i) => (
//                   <li className="my-btn m-2 rounded-lg py-1 px-2 bg-gray-900 text-white" key={i}>{data}</li>
//               ))
//             }
//             </ul>

//            }
            
//           </div>


//           <div
//             className="
//                     lg:flex-wrap
//                     lg:justify-start
//                     flex justify-center gap-6 text-xl font-sans"
//           >

//             <button onClick={()=> clearAllFun () } className="my-btn">All</button>
//             <button onClick={() => setulUxDesign("UI/UX Design")} className="my-btn">UI/UX Design</button>
//             <button onClick={() => setWebsite("Website")} className="my-btn">Website</button>
//             <button onClick={() => setApps("Apps")} className="my-btn hidden md:block">Apps</button>
//             <button onClick={() => setBranding("Branding")} className="my-btn hidden md:block">Branding</button>

//           </div>
//         </section>

//         <section className="mt-10 lg:w-[75%] lg:mt-32">
//           <div
//             onMouseOver={() => { setCustomCursor('block') }}
//             onMouseLeave={() => { setCustomCursor('none') }}
//             className="font-sans">
//             {PortfolioData?.slice(0, visible).map((project) => {
//               return (
//                 <div
//                   className="border-y py-6 px-4 flex justify-between items-center group hover:bg-[#F1F1F1]">

//                   <Link to={"/product-detail"}>
//                     <div className="group-hover:ml-5">
//                       <div className="text-2xl p-2">{project.company}</div>
//                       <div className="hidden group-hover:block text-sm p-2">{project.time}</div>
//                     </div>
//                     <div className="my-auto lg:hidden group-hover:block">
//                       <img src={rightArrow} />
//                     </div>
//                   </Link>

//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-10 text-center font-sans">
//             <button
//               className="my-btn text-black flex gap-2 mx-auto"
//               onClick={showMore}
//             >
//               <img className="my-auto" src={Reload} alt="" />
//               Load more
//             </button>
//           </div>
//         </section>
//       </section>

//       <section className="section">
//         <Lets></Lets>

//         {/* Direct SVG :V */}
//         {/* <img className="mx-auto" src={Frame361} alt="" /> */}
//       </section>

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

// export default Portfolio;



















// import React, { useEffect, useState } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import searchIcon from "../components/assets/images/search_icon.svg";
// import Data from "../components/assets/projects.json";
// import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
// import Reload from "../components/assets/images/reload.svg";
// import arrow from "../components/assets/images/Line 4.svg";
// import Lets from "../components/Lets";
// import CustomCursor from "../components/CustomCursor";
// import { Link } from "react-router-dom";
// import usePortfolio from "../components/HooksFile/usePortfolio";

// const Portfolio = () => {
//   const [customCursor, setCustomCursor] = useState('none');
//   const [cursorImg, setCursorImg] = useState('images/portfolio-hover-img.svg');
//   const [data, setData] = useState([]);
//   const [visible, setVisible] = useState(10);
//   const [PortfolioData, isLoading, refetch] = usePortfolio();
//   const [all, setAll] = useState("")
//   const [ulUxDesign, setulUxDesign] = useState("")
//   const [Website, setWebsite] = useState("")
//   const [apps, setApps] = useState("")
//   const [branding, setBranding] = useState("");
//   // const [allDesign, setAllDesign] = useState([]);

//   const [allDesign, setAllDesign] = useState([]);

//   useEffect(() => {
//     const updatedAllDesign = [];
//     if (all === "All") {
//       updatedAllDesign.push("All"); // Push "All" if it's selected
//     }
//     if (ulUxDesign) {
//       updatedAllDesign.push(ulUxDesign);
//     }
//     if (Website) {
//       updatedAllDesign.push(Website);
//     }
//     if (apps) {
//       updatedAllDesign.push(apps);
//     }
//     if (branding) {
//       updatedAllDesign.push(branding);
//     }
//     setAllDesign(updatedAllDesign);
//   }, [all, ulUxDesign, Website, apps, branding]);

//   console.log(allDesign)

//   const showMore = () => {
//     setVisible((preValue) => preValue + 10);
//   };

//   return (
//     <>
//       <CustomCursor imagePath={cursorImg} visible={customCursor} />
//       <Nav></Nav>

//       <section className="lg:flex">
//         <section
//           className="
//                 lg:w-[25%]
//                 section"
//         >
//           <div className="my-title lg:text-left">Our Projects</div>

//           <div>
//             {
//               allDesign.map((data, i) => (
//                 <ul key={i}>
//                   <li>{data}</li>
//                 </ul>
//               ))
//             }

            
//           </div>


//           <div
//             className="
//                     lg:flex-wrap
//                     lg:justify-start
//                     flex justify-center gap-6 text-xl font-sans"
//           >

//             <button onClick={() => setAll("All")} className="my-btn">All</button>
//             <button onClick={() => setulUxDesign("UI/UX Design")} className="my-btn">UI/UX Design</button>
//             <button onClick={() => setWebsite("Website")} className="my-btn">Website</button>
//             <button onClick={() => setApps("Apps")} className="my-btn hidden md:block">Apps</button>
//             <button onClick={() => setBranding("Branding")} className="my-btn hidden md:block">Branding</button>

//           </div>
//         </section>

//         <section className="mt-10 lg:w-[75%] lg:mt-32">
//           <div
//             onMouseOver={() => { setCustomCursor('block') }}
//             onMouseLeave={() => { setCustomCursor('none') }}
//             className="font-sans">
//             {PortfolioData?.slice(0, visible).map((project) => {
//               return (
//                 <div
//                   className="border-y py-6 px-4 flex justify-between items-center group hover:bg-[#F1F1F1]">

//                   <Link to={"/product-detail"}>
//                     <div className="group-hover:ml-5">
//                       <div className="text-2xl p-2">{project.company}</div>
//                       <div className="hidden group-hover:block text-sm p-2">{project.time}</div>
//                     </div>
//                     <div className="my-auto lg:hidden group-hover:block">
//                       <img src={rightArrow} />
//                     </div>
//                   </Link>

//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-10 text-center font-sans">
//             <button
//               className="my-btn text-black flex gap-2 mx-auto"
//               onClick={showMore}
//             >
//               <img className="my-auto" src={Reload} alt="" />
//               Load more
//             </button>
//           </div>
//         </section>
//       </section>

//       <section className="section">
//         <Lets></Lets>

//         {/* Direct SVG :V */}
//         {/* <img className="mx-auto" src={Frame361} alt="" /> */}
//       </section>

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

// export default Portfolio;




















// import React, { useEffect, useState } from "react";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import searchIcon from "../components/assets/images/search_icon.svg";
// import Data from "../components/assets/projects.json";
// import rightArrow from "../components/assets/images/ArrowBendDoubleUpRight.svg";
// import Reload from "../components/assets/images/reload.svg";
// import arrow from "../components/assets/images/Line 4.svg";
// import Lets from "../components/Lets";
// import CustomCursor from "../components/CustomCursor";

// const Portfolio = () => {
//   const [customCursor, setCustomCursor] = useState('none');
//   const [cursorImg, setCursorImg] = useState('images/portfolio-hover-img.svg');
//   const [data, setData] = useState([]);
//   const [visible, setVisible] = useState(10);

//   useEffect(() => {
//     setData(Data);
//   }, []);

//   const showMore = () => {
//     setVisible((preValue) => preValue + 10);
//   };

//   return (
//     <>
//       <CustomCursor imagePath={cursorImg} visible={customCursor} />
//       <Nav></Nav>

//       <section className="lg:flex">
//         <section
//           className="
//                 lg:w-[25%]
//                 section"
//         >
//           <div className="my-title lg:text-left">Our Projects</div>

//           <div
//             className="
//                     lg:flex-wrap
//                     lg:justify-start
//                     flex justify-center gap-6 text-xl font-sans"
//           >
//             <button className="my-btn">All</button>
//             <button className="my-btn">UI/UX Design</button>
//             <button className="my-btn">Website</button>
//             <button className="my-btn hidden md:block">Apps</button>
//             <button className="my-btn hidden md:block">Branding</button>
//           </div>
//         </section>

//         <section className="mt-10 lg:w-[75%] lg:mt-32">
//           <div
//             onMouseOver={() => { setCustomCursor('block') }}
//             onMouseLeave={() => { setCustomCursor('none') }}
//             className="font-sans">
//             {data.slice(0, visible).map((project) => {
//               return (
//                 <div
//                   className="border-y py-6 px-4 flex justify-between items-center group hover:bg-[#F1F1F1]">

//                   <div className="group-hover:ml-5">
//                     <div className="text-2xl p-2">{project.company}</div>
//                     <div className="hidden group-hover:block text-sm p-2">{project.time}</div>
//                   </div>
//                   <div className="my-auto lg:hidden group-hover:block">
//                     <img src={rightArrow} />
//                   </div>


//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-10 text-center font-sans">
//             <button
//               className="my-btn text-black flex gap-2 mx-auto"
//               onClick={showMore}
//             >
//               <img className="my-auto" src={Reload} alt="" />
//               Load more
//             </button>
//           </div>
//         </section>
//       </section>

//       <section className="section">
//         <Lets></Lets>

//         {/* Direct SVG :V */}
//         {/* <img className="mx-auto" src={Frame361} alt="" /> */}
//       </section>

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

// export default Portfolio;
