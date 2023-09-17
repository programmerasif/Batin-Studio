import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import searchIcon from '../components/assets/images/search_icon.svg';

const Blog = () => {
    return (
        <div>
            <Nav></Nav>

            <section className='section'>

                <div className='my-title'>
                    Our BLogs
                </div>

                <div className='flex bg-gray-200 justify-between  rounded-lg px-8'>
                    <input
                        className='bg-transparent font-sans w-full border-0 py-4 focus:outline-none text-xl text-gray-500'
                        type="text"
                        placeholder='Search blog' />
                    <button type='submit'><img src={searchIcon} alt="" /></button>
                </div>

                <div className='flex justify-between text-xl font-sans bg-gray-200 mt-2 rounded-3xl text-opacity-40'>
                    <button className='py-4 px-8 active:bg-black active:text-white text-gray-500 active:rounded-lg'>Newest</button>
                    <button className='py-4 px-8 active:bg-black active:text-white text-gray-500 active:rounded-lg'>Oldest</button>
                    <button className='py-4 px-8 active:bg-black active:text-white text-gray-500 active:rounded-lg'>Relevant</button>
                </div>

            </section>

            <section className='section'>
                <div className='h-[700px] border border-black'>

                </div>

                <div>

                </div>

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

export default Blog;