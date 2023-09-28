import React, { useEffect, useRef, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Folower from '../components/ViderRoute/Folower';

const Contact = () => {
    const [uiUxValue, setUiUxvalue] = useState('');
    const [websiteForm, setWebsiteForm] = useState("");
    const [branding, setBranding] = useState("");
    const [appForm, setAppForm] = useState('');
    const [appRedesign, setAppRedesign] = useState("");
    const [webRedesign, setWebsiteRedesign] = useState("");
    const [notSute, setNotsure] = useState('');
    const [latsTolk, setLatsTolk] = useState("");
    const [maintenance, setMaintenance] = useState("");
    const [assistance, setAssistance] = useState([]);
    const [amountValue, setAmountValue] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
          


    let assistanceData = []
    useEffect(() => {
        if (uiUxValue) {
            assistanceData.push(uiUxValue)
        }
        if (websiteForm) {
            assistanceData.push(websiteForm)
        }
        if (branding) {
            assistanceData.push(branding)
        }
        if (appForm) {
            assistanceData.push(appForm)
        }
        if (appRedesign) {
            assistanceData.push(appRedesign)
        }
        if (webRedesign) {
            assistanceData.push(webRedesign)
        }
        if (notSute) {
            assistanceData.push(notSute)
        }
        if (latsTolk) {
            assistanceData.push(latsTolk)
        }
        if (maintenance) {
            assistanceData.push(maintenance)
        }
        setAssistance(assistanceData)

    }, [uiUxValue, websiteForm, branding, appForm, appRedesign, webRedesign, notSute, latsTolk, maintenance])


    const valueFun = (value) => {
        setAmountValue(value)
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lcftljq', 'template_p1hj44u', form.current, '83hTjCHS_nEsO3Q97')
            .then((result) => {
                
                if (result.status === 200) {
                    setAmountValue("")
                    setUiUxvalue("")
                    setWebsiteForm("")
                    setBranding("")
                    setAppForm("")
                    setAppRedesign("")
                    setWebsiteRedesign("")
                    setNotsure("")
                    setLatsTolk("")
                    setMaintenance("")
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Send Your Message',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/schedule-meeting")

                    form.current.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div>
            <Folower></Folower>
            <div className='mx-5 lg:mx-10'>
            <Nav></Nav>

            </div>

            <section className='section mx-5 lg:mx-10'>
                <div className='my-title text-left'>
                    👋 Hey! Tell us all the things.
                </div>
                <div className='my-title text-left text-[32px] font-thin'>
                    Which type of assistance do you need?


                </div>

                    {/* aLL Buttons here */}
                <div className='
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans'>
                        
                        {
                            uiUxValue.length > 0 ? 
                            <button onClick={() => setUiUxvalue("")} className={`my-btn-active ${uiUxValue.length > 0 ? " bg-gray-800 text-white" : " "} `}>UI/UX design</button>
                            : 
                           <button onClick={() => setUiUxvalue(" UI/UX design")} className={`my-btn`}>UI/UX design</button>
                        }

                        {
                            websiteForm.length > 0 ? 
                            <button onClick={() => setWebsiteForm("")} className={`my-btn-active ${websiteForm.length > 0 ? " bg-gray-800 text-white" : " "} `}>Website from scratch</button>
                             : 
                            <button onClick={() => setWebsiteForm(" Website from scratch")} className={`my-btn `}>Website from scratch</button> 
                        }
                        {
                            branding.length > 0 ? 
                            <button onClick={() => setBranding("")} className={`my-btn-active ${branding.length > 0 ? " bg-gray-800 text-white" : " "} `}>Branding</button>
                            : 
                            <button onClick={() => setBranding(" Branding")} className={`my-btn  `}>Branding</button>

                        }
                        {
                            appForm.length > 0 ? 
                            <button onClick={() => setAppForm("")} className={`my-btn-active ${appForm.length > 0 ? " bg-gray-800 text-white" : " "} `}>App from scratch</button>
                            : 
                            <button onClick={() => setAppForm(" App from scratch")} className={`my-btn`}>App from scratch</button>
                        }
                        {
                            appRedesign.length > 0 ?  
                            <button onClick={() => setAppRedesign("")} className={`my-btn-active ${appRedesign.length > 0 ? " bg-gray-800 text-white" : " "} `}>App redesign</button> 
                            : 
                            <button onClick={() => setAppRedesign(" App redesign")} className={`my-btn`}>App redesign</button>
                        }
                        {
                            webRedesign.length > 0 ? 
                            <button onClick={() => setWebsiteRedesign("")} className={`my-btn-active ${webRedesign.length > 0 ? " bg-gray-800 text-white" : " "} `}>Website redesign</button>
                            : 
                            <button onClick={() => setWebsiteRedesign(" Website redesign")} className={`my-btn `}>Website redesign</button>
                        }
                        {
                            notSute.length > 0 ? 
                            <button onClick={() => setNotsure("")} className={`my-btn-active ${notSute.length > 0 ? " bg-gray-800 text-white" : " "} `}>Not sure yet</button>
                            : 
                            <button onClick={() => setNotsure(" Not sure yet")} className={`my-btn `}>Not sure yet</button>
                        }
                        {
                            latsTolk.length > 0 ? 
                            <button onClick={() => setLatsTolk("")} className={`my-btn-active ${latsTolk.length > 0 ? " bg-gray-800 text-white" : " "} `}>Let’s talk first</button>
                            : 
                            <button onClick={() => setLatsTolk(" Let’s talk first")} className={`my-btn  `}>Let’s talk first</button>
                        }
                        {
                            maintenance.length > 0 ? 
                            <button onClick={() => setMaintenance("")} className={`my-btn-active ${maintenance.length > 0 ? " bg-gray-800 text-white" : " "} `}>Maintenance</button>
                            : 
                            <button onClick={() => setMaintenance(" Maintenance")} className={`my-btn  `}>Maintenance</button>
                        }
                    
                    {/* <button onClick={() => setUiUxvalue(" UI/UX design")} className={`my-btn ${uiUxValue.length > 0 ? " bg-gray-800 text-white" : " "} `}>UI/UX design</button>                    */}
                    {/* <button onClick={() => setWebsiteForm(" Website from scratch")} className={`my-btn ${websiteForm.length > 0 ? " bg-gray-800 text-white" : " "} `}>Website from scratch</button> */}
                    {/* <button onClick={() => setBranding(" Branding")} className={`my-btn ${branding.length > 0 ? " bg-gray-800 text-white" : " "} `}>Branding</button> */}
                    {/* <button onClick={() => setAppForm(" App from scratch")} className={`my-btn ${appForm.length > 0 ? " bg-gray-800 text-white" : " "} `}>App from scratch</button> */}
                    {/* <button onClick={() => setAppRedesign(" App redesign")} className={`my-btn ${appRedesign.length > 0 ? " bg-gray-800 text-white" : " "} `}>App redesign</button> */}
                    {/* // <button onClick={() => setWebsiteRedesign(" Website redesign")} className={`my-btn ${webRedesign.length > 0 ? " bg-gray-800 text-white" : " "} `}>Website redesign</button> */}
                    {/* <button onClick={() => setNotsure(" Not sure yet")} className={`my-btn ${notSute.length > 0 ? " bg-gray-800 text-white" : " "} `}>Not sure yet</button> */}
                    {/* <button onClick={() => setLatsTolk(" Let’s talk first")} className={`my-btn ${latsTolk.length > 0 ? " bg-gray-800 text-white" : " "} `}>Let’s talk first</button> */}
                    {/* // <button onClick={() => setMaintenance(" Maintenance")} className={`my-btn ${maintenance.length > 0 ? " bg-gray-800 text-white" : " "} `}>Maintenance</button> */}

                </div>

            </section>
            <section className='section mx-5 lg:mx-10'>
                <div className='my-title text-left'>
                    Tell us about you...
                </div>
                <div>

                    {/* <form className='w-full  flex flex-col ' ref={form} onSubmit={sendEmail}> */}
                    <form className='w-full  flex flex-col ' ref={form} onSubmit={sendEmail}>

                        <input className='hidden' type="text" defaultValue={assistance} name="assistance" />
                        <input className='hidden' type="text" defaultValue={amountValue} name="amountValue" />

                        <input name="from_name" className='my-paragraph bg-gray-200 w-full px-6 py-4 rounded-full focus:outline-1 focus:bg-white' type="text" placeholder='Your full name' />
                        <input  name="from_email" className='my-paragraph bg-gray-200 w-full px-6 py-4 rounded-full mt-4 focus:outline-1 focus:bg-white' type="text" placeholder='Your email address' />
                        <textarea name="message" className='my-paragraph bg-gray-200 w-full px-6 py-4  rounded-3xl mt-4 h-[300px] focus:outline-1 focus:bg-white' type="text" placeholder='Tell us about your project....' />
                       


                        <div className='my-title text-left text-[32px] font-thin'>
                    Which type of assistance do you need?
                </div>

                <div className='
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans'>
                    <span onClick={() => valueFun("1k-2k")} className={`my-btn ${amountValue === "1k-2k" ? " bg-gray-800 text-white " : " "} `}>1k-2k</span>
                    <span onClick={() => valueFun("3k-5k")} className={`my-btn ${amountValue === "3k-5k" ? " bg-gray-800 text-white " : " "} `}>3k-5k</span>
                    <span onClick={() => valueFun("5k-10k")} className={`my-btn ${amountValue === "5k-10k" ? " bg-gray-800 text-white " : " "} `}>5k-10k</span>
                    <span onClick={() => valueFun("10k-20k")} className={`my-btn ${amountValue === "10k-20k" ? " bg-gray-800 text-white " : " "} `}>10k-20k</span>
                    <span onClick={() => valueFun("20k-50k")} className={`my-btn ${amountValue === "20k-50k" ? " bg-gray-800 text-white " : " "} `}>20k-50k</span>
                    <span onClick={() => valueFun("50k")} className={`my-btn ${amountValue === "50k" ? "bg-gray-800 text-white " : " "} `}>&#62;50k</span>

                </div>

                <div className='section'>


                   {/* <div>
                        <span className='my-btn font-sans bg-black text-white'>
                                Send request
                        </span>
                   </div> */}

            </div>

                <input className='my-btn font-sans  bg-black text-white w-5/12 md:w-3/12 lg:w-2/12 mt-4' type="submit" value="Send request" />



                    </form>
                </div>

            </section>

                   <div className='mx-5 lg:mx-10'>

                      <Footer></Footer>
                   </div>

        </div>
    );
};

export default Contact;

