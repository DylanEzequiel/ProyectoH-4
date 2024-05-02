import cookies from "js-cookie"
export function handleLogOut ():void{
    cookies.remove("token")
    sessionStorage.removeItem("token")
    window.location.href="/"
  }