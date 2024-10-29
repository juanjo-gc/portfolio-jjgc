import { useEffect, useRef, useState } from 'react';
import './App.css'


export function CardTech({ techName, filename, progress }) {


    return (
        <>
            <div className="flex flex-col w-1/2 max-w-80 m-auto items-center p-4 rounded-xl py-8 ransform hover:scale-110 ease-in-out duration-500 hover:bg-indigo-800">
                <img src={'./' + filename} alt="" className='w-14 h-14' />
                <p className='text-white text-center font-quicksand text-lg mb-4'>{techName}</p>
                <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-yellow-600 text-xs font-medium text-yellow-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%`}}> {progress}%</div>
                </div>
            </div>
        </>
    )

}