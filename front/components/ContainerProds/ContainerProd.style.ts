import styled from "styled-components";


const Container= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-around;
    background-color: #352f44;
    @media screen and (max-width: 500px){
              justify-content: center;
       }  
`
const Promotion = styled.img`
       height: auto;
       width: 80%;
       margin: auto;
       padding: 10px;
`

export {Container, Promotion} 