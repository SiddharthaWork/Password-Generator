// This is the simple example of using useState in React
"use client";
import React, { useState } from 'react'

const State = () => {

    const [click, setClick] = useState(0);
    const clickme = (num) => {
        setClick(click + 1 * num);

    }


    return (
        <div className='w-full h-screen bg-black text-white space-y-10 gap-10 flex flex-col justify-center items-center'>
            <button
            onClick={() =>clickme(8)}
            className='bg-white text-black py-2 px-4 rounded-full'>
                Magic
            </button>
            Click Count is {click}
        </div>
    )
}

export default State

