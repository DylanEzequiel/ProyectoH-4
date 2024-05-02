import styled from "styled-components";

const NavBody = styled.nav`
    background-color: #2a2438;
    position: sticky;
    top: 0;
`
const NavContainer = styled.div`
     display: flex;
`

const Nav=styled.div`
    margin: auto;
    width: 60%;
    display: flex;
    justify-content: center;
`
const Pags=styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`

const SearchBar = styled.input`
    margin: 5px;
  width: 80%;
  border-radius: 2px;
  border: none; 
  outline: none;
  &:focus{
    outline:4px solid #8478a0 ;
  }

`

const Link = styled.link`
  margin: 5px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  :hover{
    color: #5c5470;
  }
`

const ButtonSearch= styled.div`
    background-color: #fff;
    margin: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
`
const UserCont =styled.div`
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin: 5px;
  display: flex;
  @media screen and (min-width: 750px) {
    display: none;
  }
`

const CatCont = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 750px) {
    display: none;
  }
`
export {NavBody,NavContainer,Nav,SearchBar,Link,ButtonSearch,UserCont,CatCont,Pags}