import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-500 text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-red-400 duration-500'>
        {props.children}
    </button>
  )
}

export default Button