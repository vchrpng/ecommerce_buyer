import React from 'react'
import styled from 'styled-components'

const ErrorMessageStyle = styled.span`
    position: absolute;
    background: #9e2146;
    color: white;
    padding: 10px;
    border-radius: 4px;
    top: -35px;
    -webkit-transition: .3s;
    transition: .3s;

    &:after {
        content: ' ';
        position: absolute;
        left: 14px;
        top: 39px;
        width: 0;
        height: 0;
        border-top: 5px solid #9e2146;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
    }

`


const ErrorMessage = ({ children }) => {
    return (
        <ErrorMessageStyle>{children}</ErrorMessageStyle>
    )
}


export default ErrorMessage