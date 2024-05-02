import React from 'react'

function Input({value,type,state,handleChange}:any):React.ReactNode {
  return (
   <>
     <label className='inline-block hover:border-pink-950 shadow-sm m-3 w-25 font-semibold text-left text-text focus:outline-pink-950' htmlFor={value} >{value}</label>
          <input className='block border-2 border-white/50 focus:border-2 focus:border-fuchsia-800 bg-secn/60 m-3 p-1 rounded-sm w-60 font-semibold text-text outline-none'
          type={type} 
          autoComplete='true'
          name={value}
          id={value}
          value={state}
          onChange={handleChange} 
          ></input>
      
   </>
  )
}

export default Input