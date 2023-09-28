import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateSixSecData = ({data}) => {
    const {id} = useParams();
    const [updateData, setUpdateData] = useState([])
    const [successText, setSuccessText] = useState("")
    
       useEffect(()=>{
        fetch(`http://localhost:5001/getUpdateData/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
          setUpdateData(data)
        } )
       },[id])


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
        fetch(`http://localhost:5001//${updateData?._id}`, {
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
                }
            })
            .then((json) => console.log(json));
    }


    return (
        <div className='p-10'>

            <h2 className='text-red-400 text-center py-2 text-2xl'>update Your Data </h2>
            <h2 className='text-red-700 font-normal text-center h-5 mb-2 -mt-3 text-xl'>{successText && successText}</h2>

            <div className='child-div flex justify-between gap-5 items-center'>

                        <div className="modal-content w-5/12">
                            <img className='' src={updateData?.displayImage} alt="" />
                            <h3 className="font-bold text-2xl text-sky-400">{updateData?.displayTitle}</h3>
                            <p>{updateData?.displayDiscreption}</p>
                        </div>


                        <div className="update-form w-full">
                            <form onSubmit={submitData} className='flex flex-col text-black' >
                                <input name='title' className='my-3 border-2 rounded-md p-2' type="text" placeholder='title' />
                                <input name='image' className='my-3 border-2 rounded-md p-2' type="text" placeholder='Photo Url' />
                                <textarea name='description' className='my-3 border-2 rounded-md p-2 h-32' type="text" placeholder='description' />

                                <input className='text-lg bg-gray-400 mt-4 w-6/12  ms-auto text-black hover:bg-gray-600 hover:text-white hover:cursor-pointer duration-700' type="submit" value="SUBMIT" />
                            </form>
                        </div>

                    </div>
        </div>
    );
};

export default UpdateSixSecData;