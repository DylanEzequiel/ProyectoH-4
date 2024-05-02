import { IProduct } from "@/types";
import {links} from "@/public/assets/links"


const apiUrl=process.env.NEXT_PUBLIC_API_URL

export async function GetProducts(){

  const res = await fetch("http://localhost:3001/products/")
  const productsList:IProduct[]= await res.json()
  
  if(productsList){return productsList}
  
  else{return []}
}

export function getImageUrlByName( name: string | undefined): string{
  
  const foundProduct = links.find(product => product.name === name);
  if (foundProduct) {
      return foundProduct.image;}
  return "nada"
  }

export async function GetProductById(Id:string):Promise<IProduct | undefined> {
  const products= await GetProducts()
  const product = await products.find(prod=>prod.id.toString() === Id)
  return product
}

export async function getOrders(token:string){
  console.log("ESTE ES EL TOKEN: "+ token)


  const ordersFetch = await fetch(`${apiUrl}/users/orders`, {
    method: "get",
    credentials:"omit",
    headers:{"Authorization":`${token}`
   },
  });
    const orders = await ordersFetch.json();
    return orders
}
