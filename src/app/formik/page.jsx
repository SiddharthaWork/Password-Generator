"use client";
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name:Yup.string().min(5).max(20).required("Please enter your name boy"),
  password:Yup.string().min(5).max(20).required("Please enter your password"),
  confirmPassword:Yup.string().required().oneOf([Yup.ref("password")] ,"Password doesn't match")
});

const initialValues = {
  name: "",
  password: ""
}
const Formik = () => {
  
 const [pass, showShowPass] = useState(true); 
let initialValues = {
  name: "",
  password: ""
}
 const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }

  });
  // console.log(Formik);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='bg-white w-[30rem] h-[30rem] p-6 flex flex-col justify-center items-center'>
        <h1 className='text-center text-black font-bold text-2xl'>
          Login <br/> <p className='text-sm font-thin'>Enter your details</p>
        </h1>
        <div className='flex flex-col w-full h-full text-black mt-4 rounded-2xl'>
        <label htmlFor="" className='flex flex-col gap-2 text-xl font-bold px-6 py-2'>
        Name
        <input type="text" name="name" id="name" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className='h-[3rem] p-4 font-thin focus:outline-none border-2 rounded-lg text-base border-slate-600/20' placeholder='clonex'
        />
        {errors.name && touched.name ? (<div className='text-red-500'>{errors.name}</div>) : null} 
        
        </label>
        {/* <label htmlFor="" className='flex flex-col  border-2 border-white text-2xl p-6'> */}
        <label htmlFor="" className='flex flex-col gap-2 text-xl font-bold px-6 py-2'>
        Password
        <input type={pass ? "password" : "text"} name="password" id=""
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${pass ? "text-b{lack" : "text-red-500"} h-[3rem] p-4 text-base focus:outline-none border-2 rounded-lg border-slate-600/20`}  />
        {errors.password ?  <div className='text-red-500'>{errors.password}</div> : null}
        <div className='mt-10 cursor-pointer bg-sky-300 text-black'  onClick={() => showShowPass(!pass)}>Show Password</div>
        </label>
        <button type='submit' className='bg-black h-10 text-white'>Submit</button>
      </div>
      </form>
      

    </div>
  )
}

export default Formik