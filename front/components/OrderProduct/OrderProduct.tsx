import { getImageUrlByName } from '@/helpers/productsFunctions'
import { IProduct } from '@/types'
import React from 'react'

export default async function OrderProduct({id,name,description,price,stock,image,categoryId}:IProduct):Promise<React.ReactElement> {
    const url:string = await  getImageUrlByName(name)
 return(
    <div className='m-16 rounded-md flex min-h-24 bg-terc shadow-text shadow-lg w-3/4'>
        <img className='mr-2 float-start rounded-md' src={url} alt={name} height={60} width={100} />
        <div className='flex flex-col justify-around'>
            <h3 className=' text-text text-bg mt-3 '>{name} </h3>
            <p className=' text-text '><b>price:${price} </b></p>
            <p className='mb-1 text-text '>stock:{stock} </p>
        </div>
    </div>
)
}
