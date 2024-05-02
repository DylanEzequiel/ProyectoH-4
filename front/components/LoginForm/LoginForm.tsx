"use client";
import axios from "axios";
import React, { useState } from "react";
import Input from "../Input/Input";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/ContextProvider";


function LoginPage() {
  const {userToken,setUserToken} = useUserContext()
  const [LoginImput, setLoginImput] = useState({
    email: "",
    password: "",
  });
  const route = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginImput({ ...LoginImput, [event.target.name]: event.target.value });
  };
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    alert("info enviada");

    axios
      .post(`${apiUrl}/users/login`, LoginImput)
      .then((res) => res.data)
      .then((data) => data.token)
      .then((userToken) => {
        console.log("token login: "+ userToken)
        sessionStorage.setItem("token",JSON.stringify(userToken))
        cookies.set("token", userToken, { secure: true, sameSite: "strict" })
        setUserToken(userToken);
      })
      .then(() => {
        route.push("/products");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center bg-terc m-auto my-16 w-72"
    >
      <Input
        value="email"
        type="email"
        LoginImput={LoginImput.email}
        handleChange={handleChange}
      ></Input>
      <Input
        value="password"
        type="password"
        LoginImput={LoginImput.password}
        handleChange={handleChange}
      ></Input>
      <button className="bg-text m-auto w-24 text-lg">Submit</button>
    </form>
  );
}

export default LoginPage;
