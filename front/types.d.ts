export interface IProduct{
    id:number,
    name:string,
    description:string,
    price:number,
    stock:number,
    image:string,
    categoryId:number,
}

export interface ICategory{
  name:string
}

export interface IUserOrders{
  status:string,
  date:string,
  user:IUser,
  products:IProduct[]
}

export interface ICredential{
  id:number,
  password:string
}

export interface IUser{
  id:number,
  name:string,
  email:string,
  adress:string,
  phone:string,
  role:string,
  credential:ICredential
}

export interface IOrder{
  id:number,
  status:string,
  date:"string",
  products:IProduct[]
}

export interface IProductA{
  name:string,
  image:string
}

export interface IRegister{
  name:string,
  gmail:string,
  password:string,
  Address:string,
  Phone:number
}
export interface ILogin{
  gmail:string,
  password:string
}
