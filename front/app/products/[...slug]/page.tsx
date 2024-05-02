"use client"
import { GetProductById, getImageUrlByName } from '@/helpers/productsFunctions'
import { IProduct } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

async function page({params}:{params:{slug:string}}) {
  const product:IProduct | undefined = await GetProductById(params.slug[0])
  const url = await getImageUrlByName(product?.name)
  
  const AddCart=()=>{
    const id=Number(params.slug[0])
    const cart = sessionStorage.getItem("cart")
    if(cart){
      if(JSON.parse(cart).includes(id)){
        alert("ya tiene el prod")
      }
      else{
        const list:Number[]=JSON.parse(cart)
        list.push(id)
        sessionStorage.setItem("cart",JSON.stringify(list))
        alert("se agrego correctamente")
      }
    }
    else{
      sessionStorage.setItem("cart",JSON.stringify([id]))
      alert("added to the cart")
    }
  }

  return (
    <div className='md:m-10'>
      <Link href={("/products")} className='m-0 p-0 text-6xl text-text' >🠔</Link>
      
      <div className='flex md:mx-10'>
          <img className='float-start content-center w-2/5 md:w-3/12 object-fill' src={url} alt="aaaa" />
          <div className='flex flex-col'>
            <h2 className='m-5 text-text borde'>{product?.name}</h2>
            <b className='mx-5 text-text'>Price: {product?.price}</b>
            <p className='m-5 text-text'>{product?.description}</p>
            <b className='mx-5 text-text'>In stock: {product?.stock}</b>
            <button onClick={AddCart} className='block bg-terc hover:bg-first m-3 p-1 rounded-md w-24 text-text' >Add to Cart</button>
          </div>
       </div>
    </div>
  )
  
  
}

export default page