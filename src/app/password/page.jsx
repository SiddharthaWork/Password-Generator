"use client"
import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


const page = () => {
    const [length, setLength] = useState(8);
    const [num, setNum] = useState("false");
    const [char, setChar] = useState("false");
    const [password, setPassword] = useState("");
    const [copied,setCopied] = useState(false);

    const passwordRef= useRef(null);

    const copypassword = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 99);
        window.navigator.clipboard.writeText(password);
        setCopied(true);
    },[password]);



    const generatePassword = useCallback(() => {
        let pass = "";
        let numbers = "0123456789";
        let specialchar = "!@#$%^&*[]~{}()<>?/|";
        let str = "abcdefghijklmnopqrstuvwxyz";
        setCopied(false);

        if (num) {
            str += numbers
        }

        if (char) {
            str += specialchar;
        }

        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(random);
        }
        setPassword(pass);

    }, [length, num, char, setPassword]);


    useEffect(() => {

        generatePassword();
    },[
        length,
        num,
        char,
        generatePassword 
    ])



    return (
        <div className='w-full h-screen'>
            <Navbar />
            <div className='w-full h-full md:h-[94%] flex justify-center items-center bg-black md:px-0 px-8 '>
                <div className='relative md:px-0 px-8 py-6 flex flex-col space-y-4 hover:shadow-slate-400 hover:shadow-inner items-center p-4 w-full md:w-[40rem] md:h-[20rem] bg-transparent text-black border-2 border-white bg-gradient-to-tr  from-black/10 to-sky-600/10 rounded-2xl  '>
                    <h1 className='sm:text-2xl text-lg font-bold text-white'>Password Generator</h1>
                    <div className='relative'>

                        <input type="text"
                            value={password}
                            readOnly
                            className='md:w-[30rem] h-12 px-4 bg-white text-black rounded-2xl my-4 relative ring-2 ring-gradient-to-tr from-black/50 to-sky-600/10 outline-none'
                            placeholder='Password'
                            ref={passwordRef}
                        />

                        <button onClick={copypassword} className='absolute right-1 top-5 px-4 py-2 bg-gradient-to-tr  from-black to-sky-600 text-white rounded-full'>
                        {copied ? "Copied !" : "Copy"}
                        </button>
                    </div>

                    <input type="range" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} className="md:w-[30rem] w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <label className='text-white text-lg font-bold py-4'>Length: {length}</label>

                    <div className='flex justify-between md:gap-0 gap-4 md:w-[30rem] h-10'>
                        <h1 className='text-white'>Numbers</h1>
                        <input type="checkbox" defaultChecked={num} onChange={() => {
                            setNum((nums) => !nums)
                        }
                        } className='md:text-base text-sm w-5 h-5' />

                        <h1 className='text-white'>Characters</h1>
                        <input type="checkbox" defaultChecked={char} onChange={() => {
                            setChar((char) => !char)
                        }
                        } className='md:text-base text-sm w-5 h-5'/>

                    </div>

                    <button onClick={generatePassword} className='absolute -bottom-6 bg-white text-black hover:text-white py-2 px-4 rounded-full hover:bg-gradient-to-tr  from-black to-sky-600 transition-all duration-300 ease-in-out'>Generate Password</button>
                </div>



            </div>
        </div>
    )
}

export default page