import React from 'react'
import { GoSidebarExpand } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDriveFolderUpload } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className='flex justify-between gap-x-[20rem] px-6 py-4 w-full h-full text-white'>
        <div className='flex space-x-2'>
        <GoSidebarExpand size={30}/>
        <IoIosNotificationsOutline size={30} />
        <h1 className='flex text-2xl'>ChatGPT
            <RiArrowDropDownLine size={30} className='-mr-1' />
        </h1>

        </div>



        <div className='flex space-x-2'>
        <button className='flex items-center gap-2 w-full h-10 px-2 py-2 rounded-3xl border border-white'>
        <MdDriveFolderUpload className='' />
        Share

        </button>

        <CgProfile size={50} className='pb-2'/>

        </div>
    </div>
  )
}

export default Navbar