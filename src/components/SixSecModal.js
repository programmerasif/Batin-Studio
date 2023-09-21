import React, { useState } from 'react';
import '../style/SixSecModal.css';
import useSixSec from './HooksFile/useSixSec';

const SixSecModal = ({ updateData, refetch }) => {
    // const [, , refetch] = useSixSec();

    const [successText, setSuccessText] = useState("")

    setTimeout(() => {
        setSuccessText("")
    }, 3000);


    const submitData = (e) => {
        e.preventDefault();
        const title = e.target.title.value || updateData?.title;
        const image = e.target.image.value || updateData?.image;
        const description = e.target.description.value || updateData?.description;
        const data = {
            title: title,
            image: image,
            description: description
        }
        fetch(`http://localhost:5000/sixSecModal/${updateData?._id}`, {
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

            <dialog id="SixSecModal" className="SixSecModal-style z-30">
                <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>

                <div className=" SixSecModal-content ">

                    <div className='child-div flex justify-between gap-5 items-center'>

                        <div className="modal-content w-6/12">
                            <img className='' src={updateData.image} alt="" />
                            <h3 className="font-bold text-2xl text-sky-400">{updateData.title}</h3>
                            <p>{updateData.description}</p>

                        </div>

                        <div className="update-form w-6/12">
                            <form onSubmit={submitData} className='flex flex-col text-black' >
                                <input name='title' className='my-3 p-2' type="text" placeholder='title' />
                                <input name='image' className='my-3 p-2' type="text" placeholder='Photo Url' />
                                <textarea name='description' className='my-3 p-2 h-32' type="text" placeholder='description' />

                                <input className='text-lg bg-gray-400 mt-4 w-6/12  ms-auto text-black hover:bg-gray-600 hover:text-white hover:cursor-pointer duration-700' type="submit" value="SUBMIT" />
                            </form>
                        </div>

                    </div>


                    <div className="modal-action absolute top-0 right-2">
                        <form method="dialog">
                            <button className="btn text-xl font-bold">X</button>
                        </form>
                    </div>
                </div>

            </dialog>


        </div>
    );
};

export default SixSecModal;