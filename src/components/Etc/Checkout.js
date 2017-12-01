import styled from 'styled-components'
import React from 'react'


const InputText = styled.input`
    width:${(props) => props.width ? props.width : '100%'};
    height:${(props) => props.height ? props.height : '45px'};
    background-color:white;
    border:1px solid lightgray;
    margin-bottom:20px;
    padding-left:17px;
    border-radius:4px;
    font-size:12px;
    letter-spacing:1px;
    outline:none;
    transition:all .5s;
     &:focus {
        border:1px solid black;
     }
    `

export const RenderInputText = ({ width , height , placeholder , type }) => {
    return (
        <InputText
            type={type} 
            width={width}
            height={height}
            placeholder={placeholder}
        />
    )
}