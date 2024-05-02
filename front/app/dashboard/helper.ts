
const apiUrl=process.env.NEXT_PUBLIC_API_URL

export const getProducts = async (userToken:string) => {
  console.log("hola")
  const ordersFetch = await fetch(`${apiUrl}/users/orders`, {method: "get",headers:{"Authorization":userToken}})

  const orders = await ordersFetch.json()
   return   orders
}