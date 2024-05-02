"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Input from '../Input/Input'

function RegisterPage() {
  const [RegisterImput,setRegisterImput]= useState({
    name:"",
    email:"",
    address:"",
    phone:"",
    password:""
  })
  const router=useRouter()
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setRegisterImput({
      ...RegisterImput,
      [event.target.name]:event.target.value})
    }
  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    axios.post("http://localhost:3001/users/register",RegisterImput)
    .then(res=>{res.data
      alert("registrado con exito")
      router.back()
    })
    
    .catch(error=>console.log(error.data))
  }
    console.log(RegisterImput)
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center bg-terc m-auto w-72' name='Register form' autoComplete='true'>
        <Input value="name" type="text" state={RegisterImput.name} handleChange={handleChange}
        ></Input>
        <Input value="email" type="email" state={RegisterImput.email} handleChange={handleChange}
        ></Input>
        <Input value="address" type="text" state={RegisterImput.address} handleChange={handleChange}
        ></Input>
        <Input value="phone" type="number" pattern="[0-9]*" inputMode="numeric" state={RegisterImput.phone} handleChange={handleChange}
        ></Input>
        <Input value="password" type="password" state={RegisterImput.password} handleChange={handleChange}
        ></Input>
       
        <button className='bg-text m-auto w-24 text-lg'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage