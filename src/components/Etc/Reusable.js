import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ButtonStyled = styled.button`
    text-transform:uppercase;
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

export const ProceedPayment = styled.button`
    border-radius:4px;
    letter-spacing:1px;
    width:100%;
    color:white ; 
    background:#3682ac;
    font-size:12px;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    transition:.5s;
    h3 {
        margin:0;
    }
    &:hover{
        background-color:#24546F ;
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