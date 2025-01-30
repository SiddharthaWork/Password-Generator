"use client"
import React, { useState } from 'react'


const page = () => {
    const [color, setcolor] = useState("black");
    const [valid, setvalid] = useState("");

    const colorchange = (color) => {
        if(color === "violet-500"){
            setvalid("This is invalid color");
            setcolor("black");
        }
        
        else{
            setvalid("");
            setcolor(color);
        }
    }

    return (
        <div className={`w-full h-screen bg-${color} py-20`}>
            <div className='w-full h-10'><h1 className='text-2xl bg-white text-black'>{valid}</h1></div>
            

            <div className='flex justify-center items-end w-full h-full gap-6'>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-red-600' onClick={() => colorchange("red-600")}>Red</button>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-black' onClick={() => colorchange("black")}>Black</button>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-blue-500' onClick={() => colorchange("blue-500")}>Blue</button>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-yellow-300' onClick={() => colorchange("yellow-300")}>Yellow</button>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-sky-600' onClick={() => colorchange("sky-600")}>Sky</button>
                <button className='w-[5rem] py-2 border-2 border-white rounded-xl bg-violet-500' 
                onClick={()=>colorchange("violet-500")}
                >Violet</button>
            </div>

        </div>
    )
}

export default page