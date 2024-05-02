import styled from "styled-components";

const Prod=styled.div`
       display: block;
       width: 25%;
       max-width: 150px;
       height: 250px;
       margin: 15px;
       background-color: #5c5470;
       box-shadow: #dbd8e3 2px 0px 10px;
       cursor: pointer;
       @media screen and (max-width: 500px){
              width: 60%;
              min-width: 150px;
              padding:5px;
       }       
`
const P = styled.p`
       color:#000;
       margin: 0;
       margin-left: 3px;
       padding: 0;
`

const H4 =styled.h4`
       margin: 0;
       margin-left: 3px;
       padding: 0;
       color: #fff;
`

const Img = styled.img`
       object-fit: cover;
       object-position: center;
       height: 75%;
       max-width: 100%;
       border-radius: 5px;
`

export  {Prod, P, H4,Img} 