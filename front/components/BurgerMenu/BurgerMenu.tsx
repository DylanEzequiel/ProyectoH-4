"use Client"
import { useUserContext } from '@/app/context/ContextProvider'
import { handleLogOut } from '@/helpers/logOut'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function BurgerMenu() {
   
  const {userToken }=useUserContext()

  return (
    <div className='select-none'>
        <div className='top-0 right-0 text-right z-50 fixed bg-slate-400 h-full transition-all duration-300' >
            <b className='m-3'> X</b>
            <Link className="block m-3 font-semibold text-xl hover:underline" href="/">Home</Link>
            <Link href="/products">
                <Image className='p-2' src="/assets/promotion-burg.jpeg" alt='promotion' height={200} width={200}></Image></Link>
            <Link className="block m-3 font-semibold text-xl hover:underline" href="/About">About</Link>
            <Link className="block m-3 font-semibold text-xl hover:underline" href="/products">Products</Link>
            <Link className="block m-3 font-semibold text-xl hover:underline" href="/cart">Cart</Link>
           {userToken && <b onClick={handleLogOut} className='m-3 text-rose-400 hover:text-rose-900 hover:underline'>LogOut</b>}
        </div>
        <div className='top-0 right-0 left-0 fixed bg-gray-600/50 backdrop-blur-sm w-full min-h-screen'></div>
    </div>
  ) 
}

export default BurgerMenu