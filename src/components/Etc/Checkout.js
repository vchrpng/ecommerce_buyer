import styled from 'styled-components'
import React from 'react'
import { Grid } from 'semantic-ui-react'


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
        border:2px solid black;
     }
`

export const WiderInput = styled.div`

     @media screen and (min-width:768px){
        display:flex;
        justify-content:space-between;
        > ${InputText} {
            width:48%;
        }
     }
   
`

export const GridCol = styled(Grid.Column)`
     margin:0 auto;
     max-width:40em;
     display:flex;
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