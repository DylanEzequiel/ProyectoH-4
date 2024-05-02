import Link from 'next/link'
import React from 'react'

export function notFound():React.ReactElement {
  return (
    <div className='flex flex-col justify-center m-20'>
        <h1 className='m-auto text-red-700' >404 we coldn`t find this page</h1>
        <p className='m-auto p-6 text-text'>
          maybe do you want to return to home? 
        </p>
        <Link href="/" className='bg-terc hover:bg-violet-800 m-auto rounded-md w-24 h-8 font-semibold text-center text-lg'>Home</Link>
    </div>
  )
}

export default notFound