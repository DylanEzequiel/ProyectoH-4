"use client"
import { useUserContext } from '@/app/context/ContextProvider'
import Link from 'next/link'
import React from 'react'

function Footer():React.ReactElement {
  const {userToken} = useUserContext()
    return (
    

<footer className="bg-first mx-auto mt-48 p-4 w-full max-w-screen-xl">

        <div className="flex justify-around">
              <div className='w-1/2 text-left'>
                  <h4 className="mb-6 font-semibold text-sm text-white uppercase">Gm-Route</h4>
                  
                  <p className="text-gray-400 text-sm sm:text-center">
                  Explore the world of electronics with Gm-route, your premier destination for all things tech! From cutting-edge gadgets and must-have accessories to the latest in home electronics, find everything you need to stay connected and entertained. With our curated selection of top brands and unbeatable prices, shopping for your favorite gadgets has never been easier. 
                  </p>
              </div>
              <div>
                  <h4 className="mb-6 font-semibold text-sm text-white uppercase">Follow me</h4>
                  <ul className="font-medium text-gray-400">
                      <li className="mb-4">
                          <Link href="https://github.com/DylanEzequiel" className="hover:underline">Github</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://www.instagram.com/bd_iddu/" className="hover:underline">Instagram</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="hover:underline">Gmail</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h4 className="mb-6 font-semibold text-sm text-white uppercase">Pages</h4>
                  <ul className="font-medium text-gray-400">
                      <li className="mb-4">
                          <Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="/About" className="hover:underline">About</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="/products" className="hover:underline">Products</Link>
                      </li>
                     {userToken && <li className="mb-4">
                          <Link href="/dashboard" className="hover:underline">Orders</Link>
                      </li>}
                   
                  </ul>
              </div>
          </div>
      
      
      <div className="sm:flex sm:justify-between sm:items-center">
          <p className="m-2 text-gray-500 text-sm sm:text-center dark:text-gray-400">© 2024 Gm-Route All Rights Reserved.
          </p>
      </div>
</footer>

  )
}

export default Footer