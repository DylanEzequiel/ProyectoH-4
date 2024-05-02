"use client";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/ContextProvider";
import { IOrder, IProduct } from "@/types";
import { getProducts } from "./helper";
import { getImageUrlByName } from "@/helpers/productsFunctions";

const orders = () => {
  const {userToken} = useUserContext();
  const [data, setData] = useState<IOrder[]>([]);
    useEffect(() => {
      const ordersLoad=async ()=>{
        try {
          if(userToken){
          const ordersFetch:IOrder[]= await getProducts(userToken)
          console.log(ordersFetch)

          setData(ordersFetch)
          return ordersFetch
        }
        else{}
      } catch (error:any) {
        console.log(error.message)
      }
    }  
    ordersLoad()
  },[userToken]);
  console.log("this is data")
  console.log(data)
  if (!data) return (<p>No profile data</p>)
  return (
    <div>
      {data.map((order: IOrder) => {
        return(
            <div key={order.id} className='flex flex-col bg-first bg-scn shadow-md shadow-text m-6 mx-auto p-6 rounded-md w-3/4'>
              <h2 className='font-medium text-left text-lg text-text'>Order N°{order.id}</h2>
              <h3 className='font-medium text-left text-lg text-text' >date: {order.date}</h3>
            <div className="flex flex-row flex-wrap">

                {order.products.map((product:IProduct)=>{
                
                const url:string =  getImageUrlByName(product.name)
                
                return(
                <div key={product.id} className='m-2'>
                  <img className='float-start mr-2 rounded-md' src={url} alt={product.name} height={60} width={100} />
                    <div className='flex flex-col justify-around'>
                      <h3 className='mt-3 text-bg text-text'>{product.name} </h3>
                      <p className='text-text'><b>price:${product.price} </b></p>
                      <p className='mb-1 text-text'>stock:{product.stock} </p>
                  </div>
                </div>
              )}

              )}
            </div>
          
              <h4 className='bg-emerald-800 m-auto p-4 w-2/4 text-center'>Status: {order.status}</h4>
            </div>)
      })}
    </div>
  );
};

export default orders;
