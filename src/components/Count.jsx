import React from 'react'

const Count = ({count, name, age}) => {
  return (
    <span className='bg-sky-300 text-black px-2 py-2 rounded'>{count} and {name} and {age}</span>

  )
}

export default Count