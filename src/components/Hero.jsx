// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='relative w-full h-100% '>
//     <div className='flex flex-col justify-center mx-auto absolute top-[20rem] left-[35rem]'>
//         <h1 className='text-3xl font-bold tracking-wider text-center'>
//             What can I help you with?
//         </h1>
//         <div className='flex w-[40rem] h-10 bg-slate-500 mt-4 rounded-2xl'>
//           <div className='flex w-[39rem] mx-auto my-auto h-8 bg-white rounded-xl'></div>

//             </div>

//     </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import { useMemo } from 'react';
const Hero = ({number}) => {
  const numbers = useMemo(() =>{
    console.log("calculating number");
    return number * 2;
  },[number]);
  return (
    <div className='w-full h-screen'>
        <div>
          <h1 className='text-3xl font-bold tracking-wider text-center'>The Number{numbers}</h1>
        </div>


    </div>
  )
}

export default Hero