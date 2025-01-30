"use client";
import React from 'react'
import { useState } from 'react'
import { ProfileContext } from './ProfileContext'

const Profileprovider = ({children}) => {
    const [profile, setProfile] = useState({});
  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
    {children}
    </ProfileContext.Provider>
  )
}

export default Profileprovider