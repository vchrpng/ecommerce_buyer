import styled from 'styled-components'
import React from 'react';


const InputText = styled.input`
    width:100%;
    height:30px;
    background-color:white;
    border:1px solid black;
    margin-bottom:20px;
    padding-left:10px;
`

const RenderInputText = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <InputText
            {...input} placeholder={label} type={type}
        />
    )
}

export default RenderInputText