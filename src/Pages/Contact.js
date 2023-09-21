import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Nav></Nav>

            <section className='section mx-5 lg:mx-10'>
                <div className='my-title text-left'>
                    👋 Hey! Tell us all the things.
                </div>
                <div className='my-title text-left text-[32px] font-thin'>
                    Which type of assistance do you need?
                </div>

                <div className='
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans'>
                    <button className='my-btn'>UI/UX design</button>
                    <button className='my-btn'>Website from scratch</button>
                    <button className='my-btn'>Branding</button>
                    <button className='my-btn'>Website redesign</button>
                    <button className='my-btn'>App from scratch</button>
                    <button className='my-btn'>App redesign</button>
                    <button className='my-btn'>Not sure yet</button>
                    <button className='my-btn'>Let’s talk first</button>
                    <button className='my-btn'>Maintenance</button>

                </div>
            </section>

            <section className='section mx-5 lg:mx-10'>

                <div className='my-title text-left'>
                    Tell us about you...
                </div>

                <div>
                    <input className='my-paragraph bg-gray-200 w-full px-6 py-4 rounded-full focus:outline-none' type="text" placeholder='Your full name' />
                    <input className='my-paragraph bg-gray-200 w-full px-6 py-4 rounded-full mt-4 focus:outline-none' type="text" placeholder='Your email address' />
                    <textarea className='my-paragraph bg-gray-200 w-full px-6 py-4  rounded-3xl mt-4 h-[300px] focus:outline-none' type="text" placeholder='Tell us about your project....' />

                </div>

            </section>

            <section className='section mx-5 lg:mx-10'>

                <div className='my-title text-left text-[32px] font-thin'>
                    Which type of assistance do you need?
                </div>

                <div className='
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans'>
                    <button className='my-btn'>1k-2k</button>
                    <button className='my-btn'>3k-5k</button>
                    <button className='my-btn'>5k-10k</button>
                    <button className='my-btn'>10k-20k</button>
                    <button className='my-btn'>20k-50k</button>
                    <button className='my-btn'>&#62;50k</button>

                </div>

            </section>

            <section className='section mx-5 lg:mx-10'>
                <div className='my-title text-left'>
                    Add files (optional)
                </div>
                <div>
                    <button className='my-btn font-sans'>
                        Add attachment
                    </button>
                </div>

                <div className='font-sans mt-4'>
                    <p>Requirement.pdf (uploading 98%)</p>
                    <p className='mt-4'>Logo.png (upload complete)</p>
                </div>

                <div className='mt-4'>
                    <button className='my-btn font-sans bg-black text-white'>
                       Send request
                    </button>
                </div>

            </section>

            <Footer></Footer>
        </div>
    );
};

export default Contact;