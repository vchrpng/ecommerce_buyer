import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ButtonStyled = styled.button`
    text-transformation:uppercase;
    border-radius:${(props) => props.radius ? props.radius : '0'};
    letter-spacing:1px;
    width:100%;
    color:white ; 
    background:${(props) => props.color ? props.color  : '#333'} ;
    font-size:${(props) => props.fontSize ? props.fontSize : '10px' };
    height: ${(props) => props.height ? props.height : '40px' };
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:.5s;
    &:hover{
        background-color:${(props) => props.hoverColor ? props.hoverColor  : '#555'} ;
    }
    border:none;
    outline:none;
`



export const CustomLink = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
    &:hover{
        color:${(props) => props.color};
    }
`