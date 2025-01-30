"use client";
import React from 'react'
import { useState } from 'react'
import { ProfileContext } from './ProfileContext'

const Profileprovider = ({children}) => {
    const [profile, setProfile] = useState({});
  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
    {children}
    Here is some changes that i donot want to do for know
    </ProfileContext.Provider>
  )
}

export default Profileprovider