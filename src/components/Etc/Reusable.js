import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ButtonStyled = styled.button`
    text-transformation:uppercase;
    border-radius:0;
    letter-spacing:1px;
    width:100%;
    color:white ; 
    background:#333 ;
    font-size:10px ;
    height: ${(props) => props.height ? props.height : '40px' };
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:.5s;
    &:hover{
        background-color:#555;
    }
    border:none;
    outline:none;
`



export const CustomLink = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
    
`