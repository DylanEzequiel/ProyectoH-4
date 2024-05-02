import React, { Suspense } from "react";
import { IProduct } from "@/types";
import { H4, Img, P, Prod } from "./Product.style";
import { getImageUrlByName } from "@/helpers/productsFunctions";
import Link from "next/link";
import ImageSkeleton from "../ImageSkeeleton/ImageSkeleton";
import Image from "next/image";

export const ProductCard: React.FC<IProduct> = async ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}): Promise<React.ReactElement> => {
  const url = await getImageUrlByName(name);
  return (
    
    <Suspense fallback={<ImageSkeleton />}>

      <div className="block bg-terc shadow-md shadow-text m-4 w-3/12 max-w-40 h-64 cursor-pointer">
        <Link href={`/products/${id}`}>
          <img className="m-auto p-1 rounded-lg w-full h-3/4 object-center object-cover" src={url} alt={name} title={name} height={150} width={150}></img>
          <p className="m-0 ml-1 p-0 text-black">{name}</p>
          <h4 className="m-0 ml-1 p-0 text-white">
            <i>$</i> {price}
          </h4>
        </Link>
      </div>
    </Suspense>
  );
};

export default ProductCard;
