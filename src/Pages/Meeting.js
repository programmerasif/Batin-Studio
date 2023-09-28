import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Meeting = () => {
    return (
        <div>

           <div className='mx-5 lg:mx-10'>
           <Nav></Nav>
           </div>

            <section className='section sm:w-[500px] mx-auto'>

                <div className='my-title'>
                    Do you also want to schedule a call?
                </div>
                <p className='font-sans'>
                    We recommend scheduling call to save time and less back and forth with emails.
                </p>
                <div className=' flex justify-center'>

                    <a href='https://calendly.com/batinstudio/meeting?month=2023-09' target='_blank' className='my-btn bg-black text-white font-sans cursor-pointer z-40'>
                        Schedule a call
                    </a>

                </div>

            </section>

            <div className="absolute bottom-0 right-0 left-0">
            <div className='mx-5 lg:mx-10'>
                <Footer></Footer>
           </div>

            </div>
            <div></div>
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

export default Meeting;