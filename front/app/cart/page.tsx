"use client"
import axios from 'axios'
import { headers } from 'next/headers'
import React, { useState } from 'react'
import { useUserContext } from '../context/ContextProvider'
import { useRouter } from 'next/navigation'

const apiURL=process.env.NEXT_PUBLIC_API_URL

function page() {
    const {userToken}=useUserContext()
    const cart = sessionStorage.getItem("cart")
    const router = useRouter()

    const DispatchFunction =()=>{
        
      if(cart && userToken){
            const list=JSON.parse(cart)
            console.log(list)

            axios.post(`${apiURL}/orders`,{"products":list},{headers: { "Authorization": userToken}})
        .then(res=>{
          sessionStorage.removeItem("cart")
          router.replace("/dashboard")
          alert("exito")})
        .catch(error=>{console.log(error)}) 
      }

      else{
        alert("Login First")
      }
    }

  return (
    <div className='flex flex-col'>
      {!userToken?<h1 className='m-auto text-text'> ¡There is no user registered!</h1>:null}
        <p className='m-auto p-10 text-text textlg'>{cart?JSON.parse(cart):"there is no products on the cart"}</p>
        <button className='bg-terc hover:bg-first m-auto w-24 h-10 text-text'  onClick={DispatchFunction}>Dispatch</button>
    </div>
  )
}

export default page