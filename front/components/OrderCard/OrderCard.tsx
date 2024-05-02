import { IOrder, IProduct } from '@/types'
import React from 'react'
import OrderProduct from '../OrderProduct'

function OrderCard({id,status,date,products}:IOrder) {
  return (
    <div className=' bg-scn p-7  mt-3 m-auto rounded-md shadow-text shadow-md bg-first w-2/5'>
        <h2 className='text-lg font-medium text-left text-text '>Order N°{id}</h2>
        
        <h3 className='text-lg font-medium text-left text-text' >date: {date}</h3>
        {products.map((product:IProduct)=><OrderProduct {...product} key={product.id}/>)}
        <h4 className=' bg-emerald-800 p-4 text-center m-auto w-2/4'>Status: {status}</h4>
    </div>
  )
}

export default OrderCard