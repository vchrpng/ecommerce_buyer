import styled from 'styled-components'
import React from 'react';


const InputText = styled.input`
    width:${(props) => props.width ? props.width : '100%'};
    height:${(props) => props.height ? props.height : '30px'};
    background-color:white;
    border:1px solid black;
    margin-bottom:20px;
    padding-left:17px;
    border-radius:0;
    font-size:12px;
    letter-spacing:1px;
`

const RenderInputText = ({ width , height , placeholder }) => {
    return (
        <InputText 
            width={width}
            height={height}
            placeholder={placeholder}
        />
    )
}

export default RenderInputText