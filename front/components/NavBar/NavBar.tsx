"use client"
import React, { useState } from 'react'
import Search from '../svgs/Search'
import Image from 'next/image'
import style from "./style.module.css"
import CategoryCont from '../CategoryCont'
import Link from 'next/link'
import { ButtonSearch, CatCont, Nav, NavBody, NavContainer, Pags, SearchBar, UserCont } from './NavBar.style'
import BurgerMenu from '../BurgerMenu'
import { useUserContext } from '@/app/context/ContextProvider'
import { handleLogOut } from '@/helpers/logOut'


function NavBar() {
  const {userToken}=useUserContext()
  const [status,setStatus]=useState(false)
  const handleClick=()=>{
      setStatus(!status)
  }
  
  return (
  <NavBody >
      <NavContainer >
        <Image src="/assets/logo.jpeg" alt='logo'  height={0} width={0} className={style.img}priority={true}></Image>

        <Nav >
          <Pags>
            <Link className={style.link} href="/">Home</Link>
            <Link className={style.link} href="/products">products</Link>
            <Link className={style.link} href="/About">About</Link>
            <Link className={style.link} href="/cart">Cart</Link>
            {userToken && <Link href="/dashboard" className={style.link}>Orders</Link>}
          </Pags>
          <SearchBar   type='text' placeholder='search'/>
          <ButtonSearch >
            <Search />
          </ButtonSearch>                
        </Nav>

        <Pags>
          {userToken && <b onClick={handleLogOut} className='m-3 text-rose-400 hover:text-rose-900 hover:underline'>LogOut</b>}
          {!userToken &&  <Link className={style.link} href="/auth/register">Log Up</Link>}
          {!userToken && <Link className={style.link} href="/auth/login">Log In</Link>}
        </Pags>
        
        
        <UserCont onClick={handleClick} >    
         <Image src="/assets/admin-alt.png" alt='user' height={30} width={30} className={style.user}></Image>
         {status?<BurgerMenu></BurgerMenu>:null}
        </UserCont>
      </NavContainer>    
      <CatCont >
          <CategoryCont></CategoryCont>
      </CatCont>
  </NavBody>
  )
}

export default NavBar