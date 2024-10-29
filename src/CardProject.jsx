import { useEffect, useRef, useState } from 'react';
import './App.css'


export function CardProject({ projectName, description, sampleImage, techNames = [] }) {

    const techImgs = techNames.map((item, key) => {
        return <img src={'./' + item} alt="" className='w-10 h-10 object-contain mx-2'/>
    })


    return (
        <>
            <div  className="flex flex-col px-2 py-8 bg-white rounded-2xl w-1/3 items-center min-h-[40vh] mx-4 transform hover:scale-110 ease-in-out duration-700 hover:bg-slate-950 hover:text-white">
                <img src={'./' + sampleImage} alt="" className='w-full object-contain rounded-2xl p-2'/>
                <p className='text-3xl font-extrabold my-4 font-poiret'>{projectName}</p>
                <div className="flex md:flex-col lg:flex-row items-center ">
                    {techImgs}
                </div>
                <p className='text-lg px-2 font-quicksand text-center mt-2'>{description}</p>
            </div>
        </>
    )
}
