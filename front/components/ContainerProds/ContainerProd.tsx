"use client"
import React, { Suspense, useEffect, useState } from "react";
import ProductCard from "../Product";
import { IProduct } from "@/types";
import { Container, Promotion } from "./ContainerProd.style";
import { GetProducts, getImageUrlByName } from "@/helpers/productsFunctions";
import ImageSkeleton from "../ImageSkeeleton/ImageSkeleton";
import Link from "next/link";

export const ContainerProds: React.FC =(): React.ReactElement => {
  const [productList,setProductList]=useState<IProduct[] | null>(null)
  useEffect(()=>{
    const fetch =async()=>{
      const fetch:IProduct[] = await GetProducts();
      setProductList(fetch)
    }  
    fetch()
    },[])
    return (
      <Container>
        <Promotion
          src="/assets/promotional-banner.jpeg"
          alt="promotion"
          height={250}
          width={250}
        ></Promotion>
        {productList?productList.map((product: IProduct) =>{
          const url =getImageUrlByName(product.name);
          
          return (
             
            <Suspense key={product.id}  fallback={<ImageSkeleton />}>
              
              <div className="block bg-terc shadow-md shadow-text m-4 w-3/12 md:w-2/3 min-w-40 max-w-40 h-64 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <img className="m-auto p-1 rounded-lg w-full h-3/4 object-center object-cover" src={url} alt={product.name} title={product.name} height={150} width={150}></img>
                  <p className="m-0 ml-1 p-0 text-black">{product.name}</p>
                  <h4 className="m-0 ml-1 p-0 text-white">
                    <i>$</i> {product.price}
                  </h4>
                </Link>
              </div>
            </Suspense>
          )
        }
        ):null }
      </Container>
    );
  };

export default ContainerProds;
